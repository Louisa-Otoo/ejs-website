
document.addEventListener('DOMContentLoaded', () => {

  const signBtn = document.querySelector('.sign-in-btn');
  signBtn.addEventListener('click', () => {
  // Redirect to the menu page on button click
  window.location.href = '/menu';
  });
});


const getRandomUsername = () => {
  // Generate a random username, for example, a combination of "user" and a random number
  return `user${Math.floor(Math.random() * 1000)}`;
};

const getRandomPassword = () => {
  // Generate a random password, for example, a combination of "password" and a random number
  return `password${Math.floor(Math.random() * 1000)}`;
};


const users = [];

for (let i = 0; i < 10; i++) {
    const username = getRandomUsername();
    const password = getRandomPassword();
    users.push({ username, password });
}