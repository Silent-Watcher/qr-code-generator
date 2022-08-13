let $ = document;
const urlWrapper = $.querySelector('#input_section');
const urlInput = urlWrapper.lastElementChild;
const generateBtn = $.querySelector('#generate_button');
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
urlInput.addEventListener('input', function () {
  if (this.value.trim().length > 0) generateBtn.classList.remove('disabled');
  else generateBtn.classList.add('disabled');
});
let qrcode = new QRCode($.getElementById('qr_code'), {
  text: 'https://github.com/Silent-Watcher',
  width: 250,
  height: 250,
  colorDark: '#303030',
  colorLight: '#f5f5f5',
  correctLevel: QRCode.CorrectLevel.H,
});

generateBtn.addEventListener('click', () => {
  localStorage.setItem('url', urlInput.value);
  qrcode.makeCode(localStorage.getItem('url')); 
  generateBtn.classList.add('disabled');
  urlInput.value = '';
  urlInput.previousElementSibling.classList.remove('active');
});
