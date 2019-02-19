const menuBtn = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBrand = document.querySelector('.menu-brand');
const navItems = document.querySelectorAll('.nav-item');

//Set Initial state of menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
	if (!showMenu) {
		menuBtn.classList.add('close');
		menu.classList.add('show');
		menuNav.classList.add('show');
		menuBrand.classList.add('show');
		//loop the node list
		navItems.forEach(item => item.classList.add('show'));

		//Set Menu State
		showMenu = true;
	} else {
		menuBtn.classList.remove('close');
		menu.classList.remove('show');
		menuNav.classList.remove('show');
		menuBrand.classList.remove('show');
		//loop the node list
		navItems.forEach(item => item.classList.remove('show'));

		//Set Menu State
		showMenu = false;
	}
}
