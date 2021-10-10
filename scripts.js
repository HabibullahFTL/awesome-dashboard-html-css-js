// set active class 
let list = document.querySelectorAll('.navigation li');
function activeLink() {
    list.forEach((item)=>{
        item.classList.remove('hovered');
        this.classList.add("hovered")
    })
}

list.forEach((item)=>item.addEventListener('click',activeLink))

// making navigationbar active toggle
let toggler = document.querySelector('.menu-toggler');
let navigation = document.querySelector('.navigation');
let main = document.querySelector('main');

toggler.onclick = function() {
    navigation.classList.toggle('active');
    main.classList.toggle('active');
}