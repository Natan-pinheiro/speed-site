const ultimaTentativa = document.getElementById('ultimaTentativa').getContext('2d');

new Chart(ultimaTentativa, {
  type: 'pie',
  data: {
    labels: ['Acertos', 'Erros'],
    datasets: [{
      label: '# de respostas',
      data: [7, 3],
      backgroundColor: [ 
      '#0000FF',
      '#FF0000'
      ],
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

const todasTentativas = document.getElementById('todasTentativas').getContext('2d');

new Chart(todasTentativas, {
    type: 'bar',
    data: {
      labels: ['1ª Tentativa', '2ª Tentativa'],
      datasets: [{
        label: 'Acertos',
        data: [7, 3],
        borderWidth: 1,
        backgroundColor: '#0000FF'
      },
      {
        label: 'Erros',
        data: [3, 7],
        borderWidth: 1,
        backgroundColor: '#FF0000'
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        }
      }
    }
  });

// const todasTentativas = document.getElementById('todasTentativas').getContext('2d');

// new Chart(todasTentativas, {
//   type: 'bar',
//   data: {
//     labels: ['1ª Tentativa', '2ª Tentativa'],
//     datasets: [{
//       label: 'Acertos',
//       data: [7, 3],
//       borderWidth: 1,
//       backgroundColor: '#0000FF'
//     },
//     {
//       label: 'Erros',
//       data: [3, 7],
//       borderWidth: 1,
//       backgroundColor: '#FF0000'
//     }]
//   },
//   options: {
//     scales: {
//       y: {
//         beginAtZero: true,
//       }
//     }
//   }
// });