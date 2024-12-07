// scripts.js

// Alternar entre Tema Claro e Escuro
// Alternar entre temas claro e escuro
const toggleThemeButton = document.getElementById("toggle-theme");
const body = document.body;
const toggleIcon = toggleThemeButton.querySelector("i");

toggleThemeButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  
  // Alterar o ícone com base no tema
  if (body.classList.contains("dark-mode")) {
    toggleIcon.classList.remove("fa-moon");
    toggleIcon.classList.add("fa-sun");
  } else {
    toggleIcon.classList.remove("fa-sun");
    toggleIcon.classList.add("fa-moon");
  }
});


// Array de projetos
const projetos = [
  {
    nome: "Projeto 1 - Loja Virtual da Nike",
    descricao: "Este projeto é uma simulação de uma loja virtual da Nike, criada para demonstrar como montar um site de e-commerce funcional. A loja apresenta uma interface simples e intuitiva para navegação, com categorias de produtos, uma página de detalhes e uma experiência de checkout.",
    imagem: "Screenshot 2024-12-04 at 21-19-41 Nike Air Jordan.png",
    link: "https://kingnike1.github.io/card/index.html"
  },
  {
    nome: "Projeto 2 - Gerador de Senha",
    descricao: "Este gerador de senhas cria senhas fortes e seguras de maneira aleatória. O projeto utiliza JavaScript para gerar combinações únicas e seguras de letras, números e caracteres especiais, garantindo que as senhas sejam robustas e difíceis de adivinhar.",
    imagem: "gerador de senha.png",
    link: "#"
  },
  {
    nome: "Projeto 3 - Matrix Effect",
    descricao: "Este projeto recria o famoso efeito visual do filme 'Matrix', utilizando JavaScript e CSS para gerar a animação de caracteres caindo como chuva verde. É uma demonstração de como manipular o DOM e usar animações em JavaScript para criar efeitos dinâmicos na página.",
    imagem: "Screenshot 2024-12-06 at 23-14-01 Matrix Effect.png",
    link: "#"
  }
];

// Função para gerar os projetos dinamicamente
function gerarProjetos() {
  const projectList = document.querySelector('.project-list');
  projetos.forEach(projeto => {
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project', 'fade-in');

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
document.getElementById('form-contato').addEventListener('submit', function (e) {
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
window.onload = function() {
  gerarProjetos();

  // Iniciar animações AOS
  AOS.init({
    duration: 1000,  // Duração das animações
    offset: 200,     // Distância para começar a animação
  });

  // Aguardar carregamento dos projetos e aplicar animação fade-in
  setTimeout(() => {
    document.querySelectorAll('.project').forEach(project => {
      project.classList.add('visible');
    });
  }, 200);
};
