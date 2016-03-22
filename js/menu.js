var liens = document.getElementsByClassName('liens'),
sections = document.getElementsByClassName('sectionsP');

function btnclick(btn) {
  btn.addEventListener('click', function() {
  switch (btn.id) {

    case 'btnPresentation':
      sections[0].style.display = 'none';
      sections[1].style.display = 'block';
      sections[2].style.display = 'none';
      sections[3].style.display = 'none';
      sections[4].style.display = 'none';
      break;
    case 'btnParcours':
      sections[0].style.display = 'none';
      sections[1].style.display = 'none';
      sections[2].style.display = 'block';
      sections[3].style.display = 'none';
      sections[4].style.display = 'none';
      break;
    case 'btnCompetences':
      sections[0].style.display = 'none';
      sections[1].style.display = 'none';
      sections[2].style.display = 'none';
      sections[3].style.display = 'block';
      sections[4].style.display = 'none';
      break;
    case 'btnPortfolio':
      sections[0].style.display = 'none';
      sections[1].style.display = 'none';
      sections[2].style.display = 'none';
      sections[3].style.display = 'none';
      sections[4].style.display = 'block';
      break;

  }
},false);
}

for (var i = 0; i < liens.length; i++) {
  btnclick(liens[i]);
}
