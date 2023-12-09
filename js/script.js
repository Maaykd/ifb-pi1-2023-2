document.addEventListener("DOMContentLoaded", function () {
  var balls = document.querySelector('.balls');
  var quant = document.querySelectorAll('.slides .image .slide-content');
  var atual = 0;
  var imagem = document.getElementById('atual');
  var next = document.getElementById('proximo');
  var voltar = document.getElementById('voltar');
  var rolar = true;

  for (let i = 0; i < quant.length; i++) {
    var div = document.createElement('div');
    div.id = i;
    balls.appendChild(div);
  }

  document.getElementById('0').classList.add('img-atual');

  var pos = document.querySelectorAll('.balls div');

  if (pos.length > quant.length) {
    for (let i = quant.length; i < pos.length; i++) {
      balls.removeChild(pos[i]);
    }
  }

  for (let i = 0; i < pos.length; i++) {
    pos[i].addEventListener('click', (function (index) {
      return function () {
        atual = index;
        rolar = false;
        slide();
      };
    })(i));
  }

  voltar.addEventListener('click', () => {
    atual--;
    rolar = false;
    slide();
  });

  proximo.addEventListener('click', () => {
    atual++;
    rolar = false;
    slide();
  });

  function slide() {
    if (atual >= quant.length) {
      atual = 0;
    } else if (atual < 0) {
      atual = quant.length - 1;
    }

    var imgAtualElement = document.querySelector('.img-atual');
    if (imgAtualElement) {
      imgAtualElement.classList.remove('img-atual');
    } else {
      console.error("Elemento '.img-atual' não encontrado.");
    }

    var novoImgAtualElement = document.getElementById(atual);
    if (novoImgAtualElement) {
      novoImgAtualElement.classList.add('img-atual');
    } else {
      console.error("Elemento", atual, "não encontrado.");
    }

    if (imagem) {
      imagem.style.marginLeft = -1440 * atual + 'px';
    } else {
      console.error("Elemento 'imagem' não encontrado.");
    }
  }

  setInterval(() => {
    if (rolar) {
      atual++;
      slide();
    } else {
      rolar = true;
    }
  }, 4000);
});



const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})
