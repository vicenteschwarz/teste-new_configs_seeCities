//scripts/agendamento.js
const cidadeSelect = document.getElementById('cidadeSelect');
const data = document.getElementById('data');
const hora = document.getElementById('hora');
const comentario = document.getElementById('comentario');

const destinosDisponiveis = ['Rio de Janeiro', 'Buenos Aires', 'Paris'];
destinosDisponiveis.forEach(cidade => {
  const option = document.createElement('option');
  option.text = cidade;
  cidadeSelect.add(option);
});

function agendarVisita() {
  const agendamento = {
    cidade: cidadeSelect.value,
    data: data.value,
    hora: hora.value,
    comentario: comentario.value
  };
  console.log('Agendamento:', agendamento);
  alert('Agendamento realizado com sucesso!');
}