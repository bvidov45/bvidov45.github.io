const menuBar = document.querySelector('#menuBar');
const dropdown = document.querySelector('#dropdown');

menuBar.addEventListener('click', function() {
	if (dropdown.style.display === 'block') {
		dropdown.style.display = 'none';
	} else {
		dropdown.style.display = 'block';
	}
});
