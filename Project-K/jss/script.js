let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>
{
	searchForm.classList.toggle('active');


	shoppingbasket.classList.remove('active');
	loginform.classList.remove('active');
	navbar.classList.remove('active');
}
let shoppingbasket = document.querySelector('.shopping-basket');

document.querySelector('#cart-btn').onclick = () =>
{
	shoppingbasket.classList.toggle('active');
	searchForm.classList.remove('active');

	loginform.classList.remove('active');
	navbar.classList.remove('active');
}
let loginform= document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>
{
	loginform.classList.toggle('active');
	searchForm.classList.remove('active');
	shoppingbasket.classList.remove('active');
	
	navbar.classList.remove('active');
}
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