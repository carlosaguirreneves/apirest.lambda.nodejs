#!/bin/bash

echo "Iniciando a criação do pacote..."
rm -fR dist

mkdir dist
mkdir dist/layer #apenas layer

cp -R src/* dist
cp package.json dist/layer

cd dist/layer

echo "Instalando os módulos do projeto..."
npm install --production

cd ..
cd ..