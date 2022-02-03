let elOpenBtn = document.getElementById('id-menu');
let elHeaderMenu = document.getElementById('nav');
let elIcon = document.getElementById('icon-id');

let elopen = document.getElementById('id-menu2');
let elHeaderMenuList = document.getElementById('list');

let count = 0;
elOpenBtn.addEventListener('click', function () {
  elHeaderMenu.classList.toggle('show');
  if (count == 0) {
    count++;
  }

  else {
    count = 0;
  }
})




let counts = 0;
elopen.addEventListener('click', function () {
  elHeaderMenuList.classList.toggle('opens');
  if (counts == 0) {
    counts++;
  }

  else {
    counts = 0;
  }
})


// dark light

document.getElementById('id-dark').addEventListener('click', function()
{
  document.body.classList.toggle('dark')
} )

document.getElementById('id-light').addEventListener('click', function()
{
  document.body.classList.remove('dark')
} )