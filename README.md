# API Gateway e Lambda Function em NodeJS

Objetivo do nosso lambda é realizar uma consulta ao Github usando uma API listar alguns profiles públicos. Nós vamos usar um módulo Node chamado axios para realizar uma requisição Http usando método Post.

Abaixo segue o desenho da arquitetura do serviço.

![Alt text](docs/arquitetura.jpg?raw=true&style=centerme "Title")

Explicando um pouco sobre os serviços que estamos abordando na nossa arquitetura.

 - Amazon API Gateway: Serviço gerenciado pela AWS onde será criado os endpoints da nossa API Rest.
 - Amazon Lambda Function: é um serviço de computação que permite que você execute seu código sem provisionar ou gerenciar servidores. Usaremos esse serviço para executar nosso código Node.js.
 - Amazon Lambda Layers: uma camada é um pacote de archive (ZIP) que pode conter bibliotecas, um tempo de execução personalizado e outras dependências.
 - Amazon CloudWatch Logs: é um serviço de monitoramento e gerenciamento que fornece dados e insights práticos para recursos de aplicativos.

Nesse artigo possui mais detalhes sobre esse projeto:

 https://medium.com/@carlosaguirreneves/serverless-framework-api-gateway-e-lambda-function-em-nodejs-7969168f9ad4