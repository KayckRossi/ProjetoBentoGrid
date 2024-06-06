function flipCard(card) {
  card.classList.toggle('flipped');
  var imgElement = card.querySelector('.front img');
  if (card.classList.contains('flipped')) {
    // Se o cartão estiver virado, esconda a imagem.
    if (imgElement) {
      imgElement.style.visibility = 'hidden';
    }
  } else {
    // Se o cartão estiver virado para a frente, mostre a imagem.
    if (imgElement) {
      imgElement.style.visibility = 'visible';
    }
  }
}


// function redirectToHistory(company) {
//   window.location.href = 'historia.html?empresa=' + company;
// }

// window.onload = function() {
//   // Obtém o parâmetro "empresa" da URL
//   const urlParams = new URLSearchParams(window.location.search);
//   const company = urlParams.get('empresa');

//   // Verifica qual empresa foi passada como parâmetro e rola para a seção correspondente
//   if (company === 'xbox') {
//     document.getElementById('xbox').scrollIntoView();
//   } else if (company === 'playstation') {
//     document.getElementById('playstation').scrollIntoView();
//   } else if (company === 'nintendo') {
//     document.getElementById('nintendo').scrollIntoView();
//   }
// };