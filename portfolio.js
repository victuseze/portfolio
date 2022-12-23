//AddING  Active Class To Link When Clicked
// const navUl = document.getElementById("nav-ul");
// const navLi = navUl.getElementsByClassName("nav-li");
// for (let i = 0; i < navLi.length; i++) {
//     navLi[i].addEventListener('click', function() {
//     const current = document.getElementsByClassName('active');
//     current[0].className = current[0].className.replace(' active', '');
//     this.className += ' active';
//   });
// }

const navUl = document.getElementById("nav-ul");
const navLi = navUl.getElementsByClassName("nav-li");
for (var i = 0; i < navLi.length; i++) {
    navLi[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

//Content slide-out on clicks
let links = document.querySelectorAll('.link')
let allContent = document.querySelectorAll('.content')

for(let i = 0; i < links.length; i += 1) {
  links[i].addEventListener('click', (e)=>{
    e.preventDefault();
    const filter = e.target.dataset.filter;
    console.log(filter);

    allContent.forEach((content)=>
    {
      if(filter === 'content'){
        content.style.display = 'block'
      }
      else if (content.classList.contains(filter)){
        content.style.display = 'block'
      }
      else{
        content.style.display = 'none'
      }
    })
  })
}

// Text Effect
// First, putting all text to be animated in an array

const dataText = ['Web Developer.', 'Blogger.', 'Content Developer.'];
document.addEventListener('DOMContentLoaded', typingEffect);

function typingEffect(){

function typeWriter(text, i, fnCallback){
  if (i < (text.length)){
    document.querySelector('.text-effect').innerHTML = text.substring(0, i+1) + "<span class='effect'></span>";

    //Settind delay before the next charcter of the datatext
    setTimeout(function(){
      typeWriter(text, i+1, fnCallback)
    }, 100)
  }
  else if(typeof fnCallback == 'function'){
    setTimeout(fnCallback, 700);
  }
}

// Function, to start typing
function startTextAnimation(i){
  if (typeof dataText[i] == 'undefined'){
    setTimeout(function(){
      startTextAnimation(0);
    }, 2000)
  }
  if (i < dataText[i].length){
    typeWriter(dataText[i], 0, function(){
      startTextAnimation(i + 1);
    });
  }
}
startTextAnimation(0);
}