let botao = document.querySelector('.menu__botao');

let menu = document.querySelector('.menu');

let link = menu.getElementsByClassName('menu__link');


for (var i = 0; i < link.length; i++) {
    console.log(link.length);
    link[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

botao.addEventListener("click", function(e){
    e.preventDefault();
    if (menu.clientHeight){
        menu.classList.remove("visivel");
        return
    }
    menu.classList.add("visivel");
});