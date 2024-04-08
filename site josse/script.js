function randint(max) { // function to generate a random number between 0 and max
    return Math.floor(Math.random() * max);
}

poeme = poemes[randint(poemes.length)];  // select a random poem

document.addEventListener("DOMContentLoaded", () => {
    var poemeElement = document.getElementById("poeme");  // create the poem tags
    var poemeTitle = document.createElement("h1");
    poemeTitle.id = "title";
    poemeTitle.textContent = poeme[0];
    var poemeContent = document.createElement("p");
    poemeContent.id = "content";
    poemeContent.innerText = poeme[1];

    poemeElement.appendChild(poemeTitle);  // add the poem to the html
    poemeElement.appendChild(poemeContent);

    var newDom = ""; // all the lines after are for the poem content (excluding the title) animation
    var animationDelay = 50;

    var words = poemeContent.innerHTML.split(" ");

    for (let i = 0; i < words.length; i++) {
        var w = words[i].split("<br>");
        for (let j = 0; j < w.length; j++) {
            newDom += '<span class="char">' + (w[j] == " " ? "&nbsp;" : w[j] + "&nbsp;") + "</span>";
            if (w.length > 1 && j != w.length - 1) {
                newDom += "<br>";
            }
        }
    }

    poemeContent.innerHTML = newDom;
    var length = poemeContent.children.length;

    for (let i = 0; i < length; i++) {
        poemeContent.children[i].style["animation-delay"] = animationDelay * i + "ms";
    }
});
