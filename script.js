class Perceptron {
  constructor(inputSize, learningRate = 0.01) {
    this.weights = new Array(inputSize + 1).fill(0); // +1 para o viés
    this.learningRate = learningRate;
    this.iterations = 0;
  }

  activate(z) {
    // Step activation function
    // Função de ativação de passo
    return z >= 0 ? 1 : 0;
  }

  predict(inputs) {
    // Calculates perceptron output
    // Calcula a saída do perceptron
    const z = inputs.reduce(
      (acc, val, idx) => acc + val * this.weights[idx + 1],
      this.weights[0]
    );
    return this.activate(z);
  }

  fit(X, y, epochs) {
    // Train the perceptron with the data
    // Treinar o perceptron com os dados
    let epoch = 0;
    while (epoch < epochs) {
      let globalError = 0;
      for (let i = 0; i < X.length; i++) {
        const inputs = X[i];
        const target = y[i];
        const prediction = this.predict(inputs);
        const error = target - prediction;
        if (error !== 0) globalError = 1;
        // Update weights and bias
        // Atualizar pesos e viés
        this.weights[0] += this.learningRate * error;
        for (let j = 0; j < inputs.length; j++) {
          this.weights[j + 1] += this.learningRate * error * inputs[j];
        }
      }
      if (globalError === 0) break; // Se não houver erro, o treinamento está completo
      epoch++;
    }
    this.iterations = epoch;
  }
}

document.getElementById("calculate-btn").addEventListener("click", () => {
  // Get values ​​from user
  // Obter valores do usuário
  const w1 = parseFloat(document.getElementById("w1").value);
  const w2 = parseFloat(document.getElementById("w2").value);
  const b = parseFloat(document.getElementById("b").value);

  // Example data: Logical AND
  // Dados de exemplo: AND lógico
  const X = [
    [0, 0],
    [0, 1],
    [1, 0],
    [1, 1],
  ];
  const y = [0, 0, 0, 1]; // Expected outputs for AND operation | // Saídas esperadas para a operação AND

  // Creates and configures the perceptron
  // Cria e configura o perceptron
  const perceptron = new Perceptron(2);
  perceptron.weights[0] = b; // viés
  perceptron.weights[1] = w1; // peso w1
  perceptron.weights[2] = w2; // peso w2

  perceptron.fit(X, y, 100); // 100 is the maximum number of epochs | // 100 é o número máximo de épocas

  // Display the result
  // Exibir o resultado
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `
        <h2>Resultado do Perceptron:</h2>
        <p><strong>Peso w1:</strong> ${w1}</p>
        <p><strong>Peso w2:</strong> ${w2}</p>
        <p><strong>Limiar b:</strong> ${b}</p>
        <p><strong>Iterações:</strong> ${perceptron.iterations}</p>
        <p><strong>Pesos Finais:</strong> ${perceptron.weights
          .slice(0, 3)
          .join(", ")}</p>
    `;
});
