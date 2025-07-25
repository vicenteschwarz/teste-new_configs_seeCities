document.addEventListener('DOMContentLoaded', () => {
  const tabela = document.getElementById('userTable');
  const usuarios = [
    { nome: 'João', perfil: 'USER' },
    { nome: 'Maria', perfil: 'USER' },
    { nome: 'Carlos', perfil: 'ADM' }
  ];
  usuarios.forEach(u => {
    tabela.innerHTML += `<tr><td>${u.nome}</td><td>${u.perfil}</td></tr>`;
  });
});