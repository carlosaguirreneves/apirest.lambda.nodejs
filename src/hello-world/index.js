exports.handler = async (event, context) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello World from Lambda!'),
    }

    console.log('Hello World Result', JSON.stringify(response))

    return response;
};