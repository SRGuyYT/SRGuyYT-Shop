// Dark mode toggle
document.getElementById('toggle-dark').addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
});

// Show modals
function showLogin() {
  closeForms();
  document.getElementById('login-form').style.display = 'block';
  document.getElementById('modal-bg').style.display = 'block';
}
function showSignup() {
  closeForms();
  document.getElementById('signup-form').style.display = 'block';
  document.getElementById('modal-bg').style.display = 'block';
}
function showReset() {
  closeForms();
  document.getElementById('reset-form').style.display = 'block';
  document.getElementById('modal-bg').style.display = 'block';
}
function closeForms() {
  document.getElementById('login-form').style.display = 'none';
  document.getElementById('signup-form').style.display = 'none';
  document.getElementById('reset-form').style.display = 'none';
  document.getElementById('modal-bg').style.display = 'none';
}
