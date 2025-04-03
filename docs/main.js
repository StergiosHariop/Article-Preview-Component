const buttons = document.querySelectorAll('button');
const footerInfo = document.getElementById('author');
const socialsMobile = document.getElementById('socials-mobile');
const socialsDesktop = document.getElementById('socials-desktop');
const mediaQuery = window.matchMedia('(min-width: 730px)');

let active = false;

buttons.forEach((button) => {
	button.addEventListener('click', () => {
		active = !active;

		if (mediaQuery.matches) {
			socialsDesktop.classList.toggle('invisible', !active);
		} else {
			socialsMobile.classList.toggle('invisible', !active);
			footerInfo.classList.toggle('invisible', active);
		}
	});
});

function handleResize(e) {
	if (!active) return;
	if (e.matches) {
		socialsDesktop.classList.remove('invisible');
		socialsMobile.classList.add('invisible');
		footerInfo.classList.remove('invisible');
	} else {
		socialsDesktop.classList.add('invisible');
		socialsMobile.classList.remove('invisible');
		footerInfo.classList.add('invisible');
	}
}

mediaQuery.addEventListener('change', handleResize);
