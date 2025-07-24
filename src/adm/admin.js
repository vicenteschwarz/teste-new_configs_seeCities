//scripts/admin.js
const userTable = document.getElementById('userTable');
const adminTable = document.getElementById('adminTable');

const usuarios = [
  { nome: 'João', perfil: 'USER' },
  { nome: 'Ana', perfil: 'USER' }
];
const adms = [
  { nome: 'Carlos', login: 'admin1' }
];

function renderTabelas() {
  userTable.innerHTML = '';
  adminTable.innerHTML = '';
  usuarios.forEach(user => {
    userTable.innerHTML += `
      <tr><td>${user.nome}</td><td>${user.perfil}</td><td><button>Editar</button></td></tr>`;
  });
  adms.forEach(adm => {
    adminTable.innerHTML += `
      <tr><td>${adm.nome}</td><td>${adm.login}</td><td><button>Editar</button></td></tr>`;
  });
}
renderTabelas();