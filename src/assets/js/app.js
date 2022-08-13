let $ = document;
const urlWrapper = $.querySelector('#input_section');
const urlInput = urlWrapper.lastElementChild;
// input label effect
urlInput.addEventListener('focus', function () {
  this.parentElement.classList.add('filled');
});
urlInput.addEventListener('blur', function () {
  this.parentElement.classList.remove('filled');
  if (this.value.trim() !== '')
    this.previousElementSibling.classList.add('active');
  else this.previousElementSibling.classList.remove('active');
});
//
let qrcode = new QRCode($.getElementById("qr_code"), {
	text: "https://github.com/Silent-Watcher",
	width: 250,
	height: 250,
	colorDark : "#303030",
	colorLight : "#f5f5f5",
	correctLevel : QRCode.CorrectLevel.H
});

