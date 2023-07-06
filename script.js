const body= document.querySelector("body")

const textUl= document.createElement("ul");
const textLi= document.createElement("li");
textLi.innerText= "Banana"
textLi.id= "banana1"

const textLi2= document.createElement("li");
textLi2.innerText= "Morango"
textLi2.id="morango2"

const textLi3= document.createElement("li");
textLi3.innerText= "Goiaba"
textLi3.id="goiaba3"

const textLi4= document.createElement("li");
textLi4.innerText= "Pêssego"
textLi4.id="pessego4"

const linkFoto= document.createElement("img")
linkFoto.src="WhatsApp Image 2023-07-05 at 20.20.31.jpeg"

body.appendChild(linkFoto)
body.appendChild(textUl)
textUl.appendChild(textLi)
textUl.appendChild(textLi2)
textUl.appendChild(textLi3)
textUl.appendChild(textLi4)
