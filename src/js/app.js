// import * as flsFunctions from "./modules/functions.js";

// flsFunctions.isWebp();

"use strict"

// ================== Replace header button
document.addEventListener('DOMContentLoaded', () => {
	const headerLink = document.querySelector('.header__link');
	const menuList = document.querySelector('.menu__list');
	const headerContainer = document.querySelector('.header__container');
	if (headerLink) {
		function replaceBtn() {
			if (document.documentElement.offsetWidth <= 993) {
				menuList.append(headerLink);
			} else {
				headerContainer.append(headerLink);
			}
		}
		window.addEventListener('resize', replaceBtn);
		replaceBtn();
	}
});
//========================================================================================================================================================

// ============== Header
const header = document.querySelector('.header');
const intro = document.querySelector('.intro');
const headerHeight = header.offsetHeight;
const introHeight = intro.offsetHeight;
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
	let scrollDistance = window.scrollY;
	if (scrollDistance >= introHeight + headerHeight) {
		header.classList.add('fixed');
		intro.style.marginTop = `${headerHeight}px`;
	} else {
		header.classList.remove('fixed');
		intro.style.marginTop = null;
	}
	lastScrollTop = scrollDistance;
});

// Menu
const iconMenu = document.querySelector('.menu__icon');
const menu = document.querySelector('.menu__body');
if (iconMenu) {
	iconMenu.addEventListener('click', function (e) {
		iconMenu.classList.toggle('active');
		document.body.classList.toggle('lock');
		menu.classList.toggle('active');
	});
}
//========================================================================================================================================================

const form = document.querySelector('.consult-form');

const checkValidity = (input) => {
	input.classList.remove('consult-form__input_valid');
	input.classList.remove('consult-form__input_invalid');
	input.nextElementSibling.textContent = '';
	if (input.checkValidity()) {
		input.classList.add('consult-form__input_valid');
		input.nextElementSibling.textContent = 'Отлично!';
	} else {
		input.classList.add('consult-form__input_invalid');
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
	if (!target.classList.contains('consult-form__input')) {
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
//========================================================================================================================================================

document.addEventListener('DOMContentLoaded', () => {
	const accordions = document.querySelectorAll('.spoiler__item');
	if (accordions) {
		accordions.forEach(el => {
			el.addEventListener('click', (e) => {
				const self = e.currentTarget;
				const content = self.querySelector('.spoiler__content');

				self.classList.toggle('open');

				if (self.classList.contains('open')) {
					content.style.maxHeight = content.scrollHeight + 'px';
				} else {
					content.style.maxHeight = null;
				}
			});
		});
	}
});

// Footer list
const wrapperList = document.querySelectorAll('.footer__wrapper-list');
if (wrapperList.length > 0) {
	wrapperList.forEach(el => {
		el.addEventListener('click', (e) => {
			const self = e.currentTarget;
			self.classList.toggle('_active');
		})
	})
}
