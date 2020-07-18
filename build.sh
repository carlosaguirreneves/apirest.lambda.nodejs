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

#module_path="node_modules"
#paths=`ls .`

#for path in $paths
#do
    #if [[ (-d $path) && ($path != $module_path) && (-d $module_path) ]]; then
        #echo "Copiando node_modules para lambda: $path"
        #cp package.json $path
        #cp -R $module_path $path
    #fi
#done

cd ..
cd ..