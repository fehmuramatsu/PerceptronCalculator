# Calculadora de Perceptron

Este projeto é uma calculadora de perceptron desenvolvida como parte da disciplina de Inteligência Artificial. Utilizando HTML, CSS e JavaScript, a aplicação permite simular o funcionamento de um perceptron, ajudando na compreensão dos conceitos fundamentais em redes neurais.

## Descrição do Projeto

A calculadora permite que os usuários insiram pesos e um limiar para calcular a saída do perceptron com base em uma função de ativação simples. O modelo implementado é capaz de aprender a função lógica AND, mostrando como os pesos são ajustados durante o treinamento.

## Funcionalidades

- **Entrada de Pesos e Limiar**: Os usuários podem definir os pesos `w1` e `w2` e o limiar `b` para treinar o perceptron.
- **Cálculo da Saída**: O resultado da saída do perceptron é exibido ao clicar no botão de calcular, incluindo o número de iterações e os pesos finais.
- **Interface Atraente**: A interface é estilizada com CSS, proporcionando uma experiência visual agradável e intuitiva.

## Lógica do Perceptron

- **Inicialização**: O perceptron é inicializado com pesos e um viés (limiar), todos configuráveis pelo usuário.
- **Função de Ativação**: Utiliza uma função de ativação de passo para determinar a saída.
- **Treinamento**: O método `fit` ajusta os pesos com base nos dados de entrada e nas saídas esperadas para a operação AND. O treinamento continua até que os erros sejam eliminados ou o número máximo de épocas seja atingido.

## Tecnologias Utilizadas

- **HTML**: Estruturação da página.
- **CSS**: Estilização da interface, com um design moderno e responsivo.
- **JavaScript**: Implementação da lógica do perceptron e manipulação de eventos.
