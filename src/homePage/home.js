document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('destinosContainer');
  const botoes = document.querySelectorAll('.continent-btn');

  const destinos = {
    'América do Sul': [
      { nome: 'Rio de Janeiro', pais: 'Brasil', imagem: '../img/rio.jpg', nota: 5.0, reviews: 143 },
      { nome: 'Buenos Aires', pais: 'Argentina', imagem: '../img/buenosaires.jpg', nota: 4.7, reviews: 98 }
    ],
    'Europa': [
      { nome: 'Paris', pais: 'França', imagem: '../img/paris.jpg', nota: 4.9, reviews: 120 }
    ]
  };

  function render(continente) {
    container.innerHTML = destinos[continente].map(d => `
      <div class="city-card">
        <img src="${d.imagem}" alt="${d.nome}">
        <div class="card-info">
          <h3>${d.nome}</h3>
          <p>${d.pais}</p>
          <span>${d.nota} (${d.reviews} reviews)</span>
          <button onclick="window.electronAPI.abrirAgendamento()">Agendar</button>
        </div>
      </div>`).join('');
  }

  botoes.forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelector('.continent-btn.active')?.classList.remove('active');
      btn.classList.add('active');
      render(btn.textContent);
    });
  });

  render('América do Sul');
});
