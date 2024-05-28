const ultimaTentativa = document.getElementById('ultimaTentativa').getContext('2d');

new Chart(ultimaTentativa, {
  type: 'pie',
  data: {
    labels: ['Acertos', 'Erros'],
    datasets: [{
      label: '# de respostas',
      data: [7, 3],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,  
        display: false
      }
    }
  }
});