const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");
const hLinks = document.querySelectorAll("#hLink");
const moon = document.querySelector("#moon");
const body = document.querySelector("body");

hamburger.addEventListener("click", ()=>{
    menu.classList.toggle("hidden");
    hamburger.classList.toggle("bg-white");
});

hLinks.forEach(link=>{
    link.addEventListener("click", ()=>{
        menu.classList.toggle("hidden");
        hamburger.classList.toggle("bg-white");
    });
})

moon.addEventListener("click", ()=>{
    body.classList.toggle("dark")
})

function emailSend(e){

    e.preventDefault();
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "atiofackst@gmail.com",
        Password : "DDCD40CEB9FDDB65D0649292E6F405B74666",
        //ReplyTo: document.getElementById("email").value,
        To : "atiofackst@gmail.com", //document.getElementById("email").value,
        From : "atiofackst@gmail.com",
        //ReplyFrom : document.getElementById("email").value,
        Subject : document.getElementById("email").value +" name:"+ document.getElementById("surname").value,
        Body : document.getElementById("textBody").value
    }).then(
      message => alert(message)
    );
}

