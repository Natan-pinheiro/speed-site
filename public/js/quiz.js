const contextoUltimaTentativa = document.getElementById('ultimaTentativa').getContext('2d');

var ultimaTentativa = new Chart(ultimaTentativa, {
  type: 'pie',
  data: {
    labels: ['Acertos', 'Erros'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
