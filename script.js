//nav responsiveness here

function navResponse(){
    const navBox = document.getElementById('nav_holder');
    if(navBox.style.display === 'none' || navBox.style.display === ''){
        navBox.style.display  = 'block';
    } else{
        navBox.style.display = 'none';
    }
}

//nav links responsiveness

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', ()=>{
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  })
})

//image transformation

const captures = document.querySelectorAll('.capture1');

captures.forEach(capture => {
  capture.addEventListener('click', function(){
    this.classList.toggle('clicked');
  });
});

//about profile read popup

const profileRead = document.getElementById('profile_read');
const fullProfile = document.getElementById('full_profile');
const content = document.getElementById('content');
profileRead.addEventListener('click', ()=> {
   if(fullProfile.style.display === 'block'){
    fullProfile.style.display = 'none';
   } else{
  fullProfile.style.display = 'block';
  fullProfile.style.top = content.offsetTop + 'px';
  fullProfile.style.left  = '400px';
}});


//Aother code goes here

