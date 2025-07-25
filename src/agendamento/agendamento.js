function confirmarAgendamento() {
  const cidade = document.getElementById('cidadeSelect').value;
  const data = document.getElementById('data').value;
  const hora = document.getElementById('hora').value;
  const comentario = document.getElementById('comentario').value;

  console.log({ cidade, data, hora, comentario });
  alert(`Agendamento confirmado para ${cidade} em ${data} às ${hora}`);
}