let elOpenBtn = document.getElementById('id-menu');
let elHeaderMenu = document.getElementById('nav');
let elIcon = document.getElementById('icon-id');

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


// dark light

document.getElementById('id-dark').addEventListener('click', function()
{
  document.body.classList.toggle('dark')
} )

document.getElementById('id-light').addEventListener('click', function()
{
  document.body.classList.remove('dark')
} )