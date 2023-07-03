let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');
let submit=document.querySelector(".btn");

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

function foo() {
    alert("Successfully Login");
    return true;
 }
  function submit() {
    alert('Successfully registered');
  }

  function login(form){
    if((form.username.value == "test") && (form.password.value == "test")){
      self.location.href = "login_dashboard.html";
      }
      else{
        alert(" OOPs !! Incorrect email id and password");
        return false;
      }
  }