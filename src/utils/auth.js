/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const loginUrl = 'https://api.noroff.dev/api/v1/auction/auth/login';

alert('Connected');

function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  console.log(email, password);
  console.log('working');
  fetch(`${loginUrl}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: email, password: password }),
  })
    .then((response) => response.json())
    .then((data) => {
      // Do After Login..

      console.log(data);
    })
    .catch((e) => {
      console.log('Error is there', e);
    });
}