//scripts/home.js
const container = document.getElementById('destinosContainer');
const botoes = document.querySelectorAll('.continent-btn');

const destinosFakes = {
  'América do Sul': [
    { nome: 'Rio de Janeiro', pais: 'Brasil', imagem: 'img/rio.jpg', nota: 5.0, reviews: 143 },
    { nome: 'Buenos Aires', pais: 'Argentina', imagem: 'img/buenosaires.jpg', nota: 4.7, reviews: 98 },
  ],
  'Europa': [
    { nome: 'Paris', pais: 'França', imagem: 'img/paris.jpg', nota: 4.9, reviews: 200 },
  ]
};

function renderDestinos(continente) {
  container.innerHTML = '';
  destinosFakes[continente].forEach(dest => {
    container.innerHTML += `
      <div class="city-card">
        <img src="${dest.imagem}" alt="${dest.nome}">
        <div class="card-info">
          <h3>${dest.nome}</h3>
          <p>${dest.pais}</p>
          <span class="rating">${dest.nota} (${dest.reviews} reviews)</span>
          <button>Ver mais</button>
        </div>
      </div>`;
  });
}

botoes.forEach(btn => {
  btn.addEventListener('click', () => {
    botoes.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderDestinos(btn.textContent);
  });
});

// Inicializa com o primeiro continente
renderDestinos('América do Sul');