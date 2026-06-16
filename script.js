
const menuBtn=document.querySelector("#menu-btn");
const navLinks=document.querySelector("#nav-links");
menuBtn.addEventListener("click",function(){
    navLinks.classList.toggle("active");
});

const form=document.querySelector("#Contact-form");
form.addEventListener("submit",function(event)
{
    event.preventDefault();
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value ;
    const message = document.querySelector("#message").value ;
    alert("Name : " + name + "\nEmail: "+ email + "\nMessage:" +message+ "\nForm submitted");
});
