//scripts/login.js 

const userInput = document.getElementById('user');
const senhaInput = document.getElementById('senha');
const perfilInput = document.getElementById('perfil');
const msg = document.getElementById('msg');
const botao = document.getElementById('botao-acesso');

botao.addEventListener('click', async () => {
  const login = userInput.value;
  const senha = senhaInput.value;
  const perfil = perfilInput.value;

  // Validação fake temporária (substituir pela API do Electron depois)
  if (login === 'admin' && senha === '123' && perfil === 'ADM') {
    localStorage.setItem('usuarioLogado', JSON.stringify({ nome: login, perfil }));
    window.location.href = 'admin.html';
  } else if (login === 'usuario' && senha === '123' && perfil === 'USER') {
    localStorage.setItem('usuarioLogado', JSON.stringify({ nome: login, perfil }));
    window.location.href = 'home.html';
  } else {
    msg.textContent = 'Credenciais inválidas';
    msg.style.color = 'red';
  }
});