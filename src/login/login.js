//scripts/login.js 

document.addEventListener('DOMContentLoaded', () => {
  const user = document.getElementById('user');
  const senha = document.getElementById('senha');
  const perfil = document.getElementById('perfil');
  const botao = document.getElementById('botao-acesso');
  const msg = document.getElementById('msg');

  botao.addEventListener('click', () => {
    if (user.value === 'admin' && senha.value === '123' && perfil.value === 'ADM') {
      window.electronAPI.abrirAdmin();
    } else if (user.value === 'usuario' && senha.value === '123' && perfil.value === 'USER') {
      window.electronAPI.abrirHome();
    } else {
      msg.textContent = 'Credenciais inválidas';
      msg.style.color = 'red';
    }
  });
});
