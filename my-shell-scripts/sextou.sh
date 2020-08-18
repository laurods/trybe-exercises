#!/bin/bash

txt="Shell Script é demais"
echo $txt

host=`hostname`
echo "Este script está rodando no computador:"$host

#arquivo="`pwd`/sextou.sh"
#echo "O caminho do arquivo é:"$arquivo

#FILE="/home/it1/unix_tests/phrases2.txt"
#if[-e "$FILE"] then
#echo "O caminho $meuarquivo está habilitado"

#file="/home/it1/unix_tests/phrases2.txt"
#echo "digite um caminho"

#read file

#file="/home/it1/unix_tests/sextou.sh"
file=$1

if [ -r $file ]
then
   echo "File has read access"
else
   echo "File does not have read access"
fi

if [ -w $file ]
then
   echo "File has write permission"
else
   echo "File does not have write permission"
fi

if [ -x $file ]
then
   echo "File has execute permission"
else
   echo "File does not have execute permission"
fi

if [ -f $file ]
then
   echo "File is an ordinary file"
else
   echo "This is sepcial file"
fi

if [ -d $file ]
then
   echo "File is a directory"
else
   echo "This is not a directory"
fi

if [ -s $file ]
then
   echo "File size is not zero"
else
   echo "File size is zero"
fi

if [ -e $file ]
then
   echo "File exists"
else
   echo "File does not exist"
fi

#ls -g $file
ls | wc -l


#/home/lauro/Documentos/MeusProjetos/Trybe/Aula5/


Vou ter muito sucesso na programação
