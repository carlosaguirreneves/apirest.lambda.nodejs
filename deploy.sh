
source ./build.sh

echo "Fazendo deploy da aplicação na AWS..."
serverless deploy --stage development