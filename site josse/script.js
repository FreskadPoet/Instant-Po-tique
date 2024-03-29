// https://fonts.google.com/?classification=Handwriting    pour les polices
/*
from{
    transform: perspective(500px) translate3d(-35px, -40px, -150px) rotate3d(1, -1, 0, 35deg);
    opacity: 0;
}
to{
    transform: perspective(500px) translate3d(0, 0, 0);
    opacity: 1;
}

*/ 

function randint(max) {
    return Math.floor(Math.random() * max);
}


poeme = poemes[randint(poemes.length)];

document.addEventListener('DOMContentLoaded', () => {
    var poemeElement = document.getElementById("poeme");
    var poemeTitle = document.createElement("h1");
    poemeTitle.id = "title";
    poemeTitle.textContent = poeme[0];
    var poemeContent = document.createElement("p");
    poemeContent.id = "content";
    poemeContent.innerText = poeme[1];

    poemeElement.appendChild(poemeTitle);
    poemeElement.appendChild(poemeContent);

    var newDom = '';
    var animationDelay = 50;


    var words = poemeContent.innerHTML.split(" ");
    
    for(let i = 0; i < words.length; i++)
    {
        var w = words[i].split("<br>");
        for (let j = 0; j < w.length; j++) {
            newDom += '<span class="char">' + (w[j] == ' ' ? '&nbsp;' : w[j] + "&nbsp;")+ '</span>';
            if (w.length > 1 && j != w.length - 1) {
                newDom += "<br>"
            }
        }

    }

    poemeContent.innerHTML = newDom;
    var length = poemeContent.children.length;

    for(let i = 0; i < length; i++)
    {
        poemeContent.children[i].style['animation-delay'] = animationDelay * i + 'ms';
    }


});

