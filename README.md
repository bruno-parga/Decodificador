# Decodificador de Texto

Este projeto é um resultado de um Challenge proposto pela Alura. Ele permite que os usuários insiram um texto, o criptografem ou descriptografem, e visualizem o resultado.
A aplicação também inclui funcionalidades para copiar o texto criptografado/descriptografado para a área de transferência.

## Funcionalidades

- **Entrada de Texto**: Área onde o usuário pode digitar o texto que deseja criptografar ou descriptografar.
- **Criptografar/Descriptografar**: Botões para realizar as operações de criptografia e descriptografia.
- **Saída de Texto**: Área onde o resultado da criptografia ou descriptografia é exibido. Inclui uma mensagem padrão e uma imagem decorativa.
- **Copiar Texto**: Botão para copiar o texto exibido na área de saída para a área de transferência.

## As "chaves" de criptografia que utilizaremos são:

- A letra "e" é convertida para "enter"
- A letra "i" é convertida para "imes"
- A letra "a" é convertida para "ai"
- A letra "o" é convertida para "ober"
- A letra "u" é convertida para "ufat"

## Como Usar

1. **Digite o texto** que você deseja criptografar na área de entrada.
2. Clique no botão **"Encriptografar"** para criptografar o texto ou **"Descriptografar"** para descriptografar um texto criptografado.
3. O texto criptografado ou descriptografado será exibido na área de saída.
4. Clique no botão **"Copiar"** para copiar o texto exibido para a área de transferência.

## Estrutura do Projeto

A estrutura do projeto é a seguinte:

- `index.html`: Arquivo principal HTML contendo a estrutura da aplicação.
- `style.css`: Arquivo de estilos CSS para a aplicação.
- `app.js`: Arquivo JavaScript que contém a lógica para encriptação, descriptografia e cópia do texto.
- `img/`: Diretório que contém imagens utilizadas na aplicação.


## Responsividade

O layout da aplicação é projetado para ser responsivo e se ajustar a diferentes tamanhos de tela, incluindo dispositivos móveis e tablets.
