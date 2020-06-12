const icon = document.querySelector('#icon');
const navbar = document.querySelector('.nav');

icon.addEventListener('click', function() {
	if (navbar.style.display === 'flex') {
		navbar.style.display = 'none';
		this.classList.add('fa-bars');
		this.classList.remove('fa-close');
	} else {
		navbar.style.display = 'flex';
		this.classList.add('fa-close');
		this.classList.remove('fa-bars');
	}
})
