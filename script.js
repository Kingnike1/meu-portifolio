// scripts.js

// Array de projetos
const projetos = [
    {
      nome: "Projeto 1",
      descricao: "Descrição do projeto 1",
      imagem: "https://via.placeholder.com/250",
      link: "#"
    },
    {
      nome: "Projeto 2",
      descricao: "Descrição do projeto 2",
      imagem: "https://via.placeholder.com/250",
      link: "#"
    },
    {
      nome: "Projeto 3",
      descricao: "Descrição do projeto 3",
      imagem: "https://via.placeholder.com/250",
      link: "#"
    }
  ];
  
  // Função para gerar os projetos dinamicamente
  function gerarProjetos() {
    const projectList = document.querySelector('.project-list');
    projetos.forEach(projeto => {
      const projectDiv = document.createElement('div');
      projectDiv.classList.add('project');
      
      projectDiv.innerHTML = `
        <img src="${projeto.imagem}" alt="${projeto.nome}">
        <h3>${projeto.nome}</h3>
        <p>${projeto.descricao}</p>
        <a href="${projeto.link}">Ver mais</a>
      `;
      
      projectList.appendChild(projectDiv);
    });
  }
  
  // Enviar feedback do formulário
  document.getElementById('form-contato').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;
    
    if (nome && email && mensagem) {
      document.getElementById('feedback').textContent = "Mensagem enviada com sucesso!";
      document.getElementById('feedback').style.color = "green";
    } else {
      document.getElementById('feedback').textContent = "Por favor, preencha todos os campos.";
      document.getElementById('feedback').style.color = "red";
    }
  });
  
  // Gerar os projetos ao carregar a página
  window.onload = gerarProjetos;
  