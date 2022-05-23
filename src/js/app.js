import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

"use strict"

const form = document.querySelector('#form');

const checkValidity = (input) => {
	input.classList.remove('form__input_valid');
	input.classList.remove('form__input_invalid');
	input.nextElementSibling.textContent = '';
	if (input.checkValidity()) {
		input.classList.add('form__input_valid');
		input.nextElementSibling.textContent = 'Отлично!';
	} else {
		input.classList.add('form__input_invalid');
		input.nextElementSibling.textContent = input.validationMessage;
	}
}

const checkValidityAll = () => {
	const inputs = form.querySelectorAll('input');
	inputs.forEach((input) => {
		checkValidity(input);
	});
}

const onCheckValidity = (e) => {
	const target = e.target;
	if (!target.classList.contains('form__input')) {
		return;
	}
	checkValidity(target);
}

form.addEventListener('change', onCheckValidity);
form.addEventListener('keydown', onCheckValidity);
form.addEventListener('keyup', onCheckValidity);
checkValidityAll();

form.addEventListener('submit', (e) => {
	e.preventDefault();
	checkValidityAll();
});

// $(document).ready(function () {
// 	$('.questions__name').click(function (event) {
// 		if ($('.questions__spoiler').hasClass('one')) {
// 			$('.questions__name').not($(this)).removeClass('active');
// 			$('.questions__content').not($(this).next()).slideUp(300);
// 		}
// 		$(this).toggleClass('active').next().slideToggle(300);
// 	});
// });


// $(document).ready(function() {
// 	$('.footer__link').click(function(event) {
// 		if($('.footer__list').hasClass('one')){}
// 		$(this).toggleClass('active').next().slideToggle(300);
// 	});
// });

// const links = document.querySelectorAll('.footer__link');
// let index = 0;
// const activeLinks = n => {

// 	for (footer__link of links) {
// 		footer__link.classList.remove('active');
// 	}
// 	links[n].classList.add('active');
// }