let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>
{
	searchForm.classList.toggle('active');


	shoppingbasket.classList.remove('active');
	loginform.classList.remove('active');
	navbar.classList.remove('active');
   registrationform.classList.remove('active')
    farmerregistration.classList.remove('active')
}
let shoppingbasket = document.querySelector('.shopping-basket');

document.querySelector('#cart-btn').onclick = () =>
{
	shoppingbasket.classList.toggle('active');
	searchForm.classList.remove('active');

	loginform.classList.remove('active');
   registrationform.classList.remove('active')
    farmerregistration.classList.remove('active')
	navbar.classList.remove('active');
}
let loginform= document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>
{
	loginform.classList.toggle('active');
	searchForm.classList.remove('active');
	shoppingbasket.classList.remove('active');
   registrationform.classList.remove('active')
    farmerregistration.classList.remove('active')
	
	navbar.classList.remove('active');
}






//experiment---------------------------------------------------------//
function checkpassword() {

let password= document.getElementById("passsword").value;
let confirmpassword= document.getElementById("confirmpassword").value;
console.log(password,confirmpassword);
let message = document.getElementById("message").value;
if (password.length !=0) {
  if (password==confirmpassword){
    message.textcontext = "passwords match"
    message.style.backgroundColor = "#3ae374";

  }
  else{
     message.textcontext = "passwords don't match"
    message.style.backgroundColor = "#3ae374";

  }
 


}



}






let loginback= document.querySelector('.loggin');

document.querySelector('#loginnow').onclick = () =>
{
  loginform.classList.toggle('active');
  searchForm.classList.remove('active');
  shoppingbasket.classList.remove('active');
   registrationform.classList.remove('active')
    farmerregistration.classList.remove('active')
  
  navbar.classList.remove('active');
}



let loginnback= document.querySelector('.logggin');

document.querySelector('#loginnnow').onclick = () =>
{
  loginform.classList.toggle('active');
  searchForm.classList.remove('active');
  shoppingbasket.classList.remove('active');
   registrationform.classList.remove('active')
    farmerregistration.classList.remove('active')
  
  navbar.classList.remove('active');
}







let registrationform= document.querySelector('.registration-form');

document.querySelector('#registerbtn').onclick = () =>
{
    registrationform.classList.toggle('active')
  loginform.classList.remove('active');
  searchForm.classList.remove('active');
  shoppingbasket.classList.remove('active');
   farmerregistration.classList.remove('active')

  
  navbar.classList.remove('active');
}


let farmerregistration= document.querySelector('.registrationform');

document.querySelector('#register-btn').onclick = () =>
{
    registrationform.classList.remove('active')
  loginform.classList.remove('active');
  searchForm.classList.remove('active');
  shoppingbasket.classList.remove('active');
  farmerregistration.classList.toggle('active')

  
  navbar.classList.remove('active');
}





//experiment---------------------------------------------------------//




















let navbar= document.querySelector('.navbar');


document.querySelector('#menu-btn').onclick = () =>
{
	navbar.classList.toggle('active');

	loginform.classList.remove('active');
	searchForm.classList.remove('active');
	shoppingbasket.classList.remove('active');
}

window.onscroll =() =>
{
	searchForm.classList.remove('active');
	shoppingbasket.classList.remove('active');
	loginform.classList.remove('active');
	navbar.classList.remove('active');
}

 var swiper = new Swiper(".Product-slider", {
 	loop:true,
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        "@0.00": {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        "@0.75": {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        "@1.00": {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        "@1.50": {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      },
    });


 var swiper = new Swiper(".Review-slider", {
 	loop:true,
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        "@0.00": {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        "@0.75": {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        "@1.00": {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        "@1.50": {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      },
    });