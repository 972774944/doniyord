const adminIcon = document.querySelector("#adminIcon") as HTMLDivElement;
const MagezinId = document.querySelector("#MagezinId") as HTMLDivElement;
const ShopBody = document.querySelector("#ShopBody") as HTMLDivElement;
const loginId = document.querySelector("#loginId") as HTMLDivElement;
const email = document.querySelector("#exampleInputEmail1") as HTMLInputElement;
const password = document.querySelector(
  "#exampleInputPassword1"
) as HTMLInputElement;
const Submit = document.querySelector("#Submit") as HTMLButtonElement;
const h2login = document.querySelector("#h2login") as HTMLElement;
h2login.style.color = "red";

const AdminPage = document.querySelector("#AdminPage") as HTMLDivElement;
const HeaderPage = document.querySelector("#HeaderPage") as HTMLElement;

adminIcon.addEventListener("click", () => {
  if (ShopBody) {
    ShopBody.classList.add("d-none");
    console.log("hello");
  }
  if (loginId) {
    loginId.classList.remove("d-none");
  }
  email.value = "";
  password.value = "";
  h2login.innerHTML = " ";
});

MagezinId.addEventListener("click", () => {
  if (ShopBody) {
    ShopBody.classList.remove("d-none");
  }
  if (loginId) {
    loginId.classList.add("d-none");
  }
});

Submit.addEventListener("click", (e) => {
  if (email.value == "qwe@mail.ru" && password.value == "123") {
    Submit.innerHTML = "togri";
    ShopBody.classList.add("d-none");
    h2login.innerHTML = " ";
    AdminPage.classList.remove("d-none");
    loginId.classList.add("d-none");
    HeaderPage.classList.add("d-none");
  } else {
    h2login.innerHTML = "Tekshirib qaytadan yozin ! parol";
    console.log("xato");
  }
});
