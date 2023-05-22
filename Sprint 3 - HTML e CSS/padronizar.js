// Função para carregar o conteúdo do header em todas as páginas
function includeHeader() {
    fetch('header.html')
      .then(response => response.text())
      .then(content => {
        const headerElement = document.createElement('header'); // Cria um elemento <header>
        headerElement.innerHTML = content; // Define o conteúdo HTML dentro do elemento
        document.body.prepend(headerElement); // Insere o header no início do <body>
      });
  }

  // Função para carregar o conteúdo do footer em todas as páginas
  function includeFooter() {
    fetch('footer.html')
      .then(response => response.text())
      .then(content => {
        const footerElement = document.createElement('footer'); // Cria um elemento <footer>
        footerElement.innerHTML = content; // Define o conteúdo HTML dentro do elemento
        document.body.appendChild(footerElement); // Insere o footer no final do <body>
      });
  }