const axios = require('/opt/node_modules/axios')

exports.handler = async (event, context) => {
    console.log(event)
    if (!event.body) {
        console.log('github.badrequest', 'Esperado um objeto event válido.', JSON.stringify(event))
        return {
            statusCode: 400,
            body: JSON.stringify({
                message: 'github.badrequest: Esperado um objeto event válido.'
            }),
        }
    }

    const promises = [];
    let profiles = JSON.parse(event.body).profiles

    for (let i = 0; i < profiles.length; i++) {
        console.log(`Obtendo profile ${profiles[i]}`)
        promises.push(getInfoByProfile(profiles[i]))
    }

    let promisesResult = await Promise.all(promises)

    let lambdaResult = []
    for (let i = 0; i < promisesResult.length; i++) {
        lambdaResult.push({
            id: promisesResult[i].id,
            login: promisesResult[i].login,
            avatarUrl: promisesResult[i].avatar_url,
            name: promisesResult[i].name,
            bio: promisesResult[i].bio
        })
    }

    const response = {
        statusCode: 200,
        body: JSON.stringify(lambdaResult),
    }

    return response;
};

const getInfoByProfile = async(profile) => {
    try {
      const response = await axios.get(`https://api.github.com/users/${profile}`);
      return response.data;
    } catch(error) {
        console.log(`getProfiles ${profile}:`, error)
    }
}