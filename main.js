const usernameInput = document.querySelector(".login");
const passwordInput = document.querySelector(".parol");
const loginButton = document.querySelector(".submit");
const loginForm = document.querySelector(".hero");
const profilePage = document.querySelector(".profile");
const webName = document.querySelector("#coin");
const webEnergy = document.querySelector("#energy");
const usernamedom = document.getElementById("name");
const chikish = document.getElementById("chikish__button")
const style = document.querySelector("#profile__style")
profilePage.style.display = "none";
style.style.display = "none"

const accounts = [
  { login: "678912", password: "123456", name: "Mahmud", surname: "Nazarov", energy: 3430, coin: 993 },
  { login: "123456", password: "9876543210", name: "Islom", surname: "Nazarov", energy: 7689, coin: 824 },
  { login: "678912", password: "123456", name: "Fotima", surname: "Nazarova", energy: 5467, coin: 654 },
  { login: "678912", password: "123456", name: "Zuhra", surname: "Nazarova", energy: 9780, coin: 452 },
  { login: "67891", password: "12345", name: "Ahmad", surname: "Ikromov", energy: 120, coin: 456 },
];

function toggleButtonState() {
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();
  const isValid = accounts.some(
    (account) => account.login === username && account.password === password
  );
}

function saveToLocalStorage(account) {
  localStorage.setItem("loggedInUser", JSON.stringify(account));
}

function loadFromLocalStorage() {
  const savedUser = localStorage.getItem("loggedInUser");
  return savedUser ? JSON.parse(savedUser) : null;
}

function displayProfile(account) {
  loginForm.style.display = "none";
  style.style.display = "block";
  profilePage.style.display = "inline";
  usernamedom.textContent = `${account.name} ${account.surname}`;
  webEnergy.textContent = `${account.energy}`;
  webName.textContent = `${ account.coin}`
}

loginButton.addEventListener("click", () => {
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();
  const account = accounts.find(
    (acc) => acc.login === username && acc.password === password
  );

  if (account) {
    saveToLocalStorage(account);
    displayProfile(account);
  }
});

usernameInput.addEventListener("input", toggleButtonState);
passwordInput.addEventListener("input", toggleButtonState);

window.addEventListener("DOMContentLoaded", () => {
  const savedUser = loadFromLocalStorage();
  if (savedUser) {
    displayProfile(savedUser);
  }
});
document.getElementById("chikish__button").addEventListener("click", function() {
  profilePage.style.display = "none"
  loginForm.style.display = "inline"
  });
  document.getElementById("login-button").addEventListener("click", function() {
    document.getElementById("password").value = "";
    document.getElementById("username").value = "";
});
