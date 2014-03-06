window.big=document.querySelector('.big');
window.thumbs=document.querySelectorAll('.small');

for (var i in thumbs) {
	if (thumbs[i].tagName == 'IMG') {
		thumbs[i].addEventListener('click', function(evt) {
			window.big.src = evt.srcElement.src;
		});
	}
}