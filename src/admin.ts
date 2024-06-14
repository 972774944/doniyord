import { test, savol } from "./type";
import { mySidebarUcer } from "./saidebar";
import { headres, Testheadres } from "./elemenst";

const OneSidebar = document.querySelector("#OneSidebar") as HTMLLIElement;
const TwoSidebar = document.querySelector("#TwoSidebar") as HTMLLIElement;
const BtnSidebar = document.querySelector("#BtnSidebar") as HTMLButtonElement;
const SidebarCLose = document.querySelector("#SidebarCLose") as HTMLDivElement;
const tableView = document.querySelector(".tableView") as HTMLDivElement;
const Addbtn = document.querySelector("#Addbtn") as HTMLButtonElement;
const addNewUcerBtn = document.querySelector(
  "#addNewUcerBtn"
) as HTMLButtonElement;
const SerachNOne = document.querySelector("#SerachNOne") as HTMLDivElement;
const addbtnNone = document.querySelector("#addbtnNone") as HTMLDivElement;

const HousePage = document.querySelector("#HousePage") as HTMLButtonElement;
let serachInput = document.querySelector(".search-bar") as HTMLInputElement;
TwoSidebar.addEventListener("click", () => {
  OneSidebar.classList.remove("active");
  TwoSidebar.classList.add("active");
  SerachNOne.classList.add("d-none");

  Testrender();
});
OneSidebar.addEventListener("click", () => {
  OneSidebar.classList.add("active");
  TwoSidebar.classList.remove("active");
  SerachNOne.classList.remove("d-none");

  render();
});
let sidebarOpen = false;

BtnSidebar.addEventListener("click", () => {
  if (sidebarOpen) {
    SidebarCLose.style.marginLeft = "-200px";
  } else {
    SidebarCLose.style.marginLeft = "0";
  }

  sidebarOpen = !sidebarOpen;
});
let FilteRender: number;
async function render() {
  try {
    // @ts-ignore
    let response = await axios.get("https://46d4deb0e08aaad2.mokky.dev/test");
    console.log(response);
    tableView.style.height = "100vh";
    tableView.innerHTML = headres;
    response.data.map((item: test) => {
      FilteRender = item.savolId;
      const div = document.createElement("div");
      div.className = "products-row";
      div.innerHTML += `
      <div class="product-cell image">
                            <img src="${item.img}"
                                alt="product">
                        </div>
                        <div class="product-cell category"><span class="cell-label">Category:</span>${item.name}</div>
                        <div class="product-cell status-cell">
                            <span class="cell-label">Status:</span>
                            <span class="status disabled">${item.status}</span>
                        </div>
                        <div class="product-cell sales"><span class="cell-label">Sales:</span>${item.science}</div>
                       </div>
                    </div>
      `;
      const divtrash = document.createElement("div");
      divtrash.className = "product-cell sales";
      //   edit
      const btnEdit = document.createElement("button");
      btnEdit.className = "btn p-1";
      btnEdit.innerHTML = `<i class="fa-solid fa-pen-to-square text-white"></i> `;
      //   trash
      const btnTrash = document.createElement("button");
      btnTrash.className = "btn p-1";
      btnTrash.innerHTML = `<i class="fa-solid fa-trash text-danger"></i> `;
      divtrash.appendChild(btnEdit);
      divtrash.appendChild(btnTrash);
      div.addEventListener("click", Testrender);
      div.appendChild(divtrash);
      tableView.appendChild(div);
      btnTrash.addEventListener("click", () => deletePRdoductT(item.id));
    });
  } catch (error) {
    console.log(error);
  }
}
render();

// addProduct
Addbtn.addEventListener("click", () => {
  mySidebarUcer.show();
});

async function postNewUcer() {
  try {
    let nameInput = document.getElementById("ucerName") as HTMLInputElement;
    let Inputphoto = document.getElementById("ucerPhoto") as HTMLInputElement;
    let scienceInput = document.getElementById(
      "scienceInput"
    ) as HTMLInputElement;
    const optio = document.querySelector("#optio") as HTMLSelectElement;

    if (optio.value == "Inactive") {
      return;
    } else {
      //@ts-ignore
      await axios.post("https://46d4deb0e08aaad2.mokky.dev/test", {
        name: nameInput.value,
        img: Inputphoto.value,
        science: scienceInput.value,
        status: optio.value,
      });
      nameInput.value = " ";
      Inputphoto.value = " ";
      scienceInput.value = " ";
      render();

      mySidebarUcer.hide();
    }
  } catch (error) {
    console.log(error);
  }
}
addNewUcerBtn.className = "btn btn-outline-success";
addNewUcerBtn.addEventListener("click", postNewUcer);

// home
const HeaderPage = document.querySelector("#HeaderPage") as HTMLElement;
const ShopBody = document.querySelector("#ShopBody") as HTMLDivElement;
const AdminPage = document.querySelector("#AdminPage") as HTMLDivElement;

HousePage.addEventListener("click", () => {
  HeaderPage.classList.remove("d-none");
  ShopBody.classList.remove("d-none");
  AdminPage.classList.add("d-none");
});

// search

async function SearchChange() {
  try {
    let serachInputNew = document.querySelector(
      ".search-bar"
    ) as HTMLInputElement;
    //@ts-ignore
    const respons = await axios.get(
      `https://46d4deb0e08aaad2.mokky.dev/test/?name=*${serachInputNew.value}`
    );
    tableView.style.height = "86vh";
    tableView.innerHTML = headres;

    respons.data.map((item: test) => {
      const div = document.createElement("div");
      div.className = " products-row";

      div.innerHTML += `
      <div class="product-cell image">
                            <img src="${item.img}"
                                alt="product">
                        </div>
                        <div class="product-cell category"><span class="cell-label">Category:</span>${item.name}</div>
                        <div class="product-cell status-cell">
                            <span class="cell-label">Status:</span>
                            <span class="status disabled">${item.status}</span>
                        </div>
                        <div class="product-cell sales"><span class="cell-label">Sales:</span>${item.science}</div>
                       </div>
                    </div>
      `;
      const divtrash = document.createElement("div");
      divtrash.className = "product-cell sales";
      //   edit
      const btnEdit = document.createElement("button");
      btnEdit.className = "btn p-1";
      btnEdit.innerHTML = `<i class="fa-solid fa-pen-to-square text-white"></i> `;
      //   trash
      const btnTrash = document.createElement("button");
      btnTrash.className = "btn p-1";
      btnTrash.innerHTML = `<i class="fa-solid fa-trash text-danger"></i> `;
      divtrash.appendChild(btnEdit);
      divtrash.appendChild(btnTrash);
      div.appendChild(divtrash);
      tableView.appendChild(div);
      btnTrash.addEventListener("click", () => {
        console.log("hello");
      });
    });
  } catch (error) {
    console.log(error);
  }
}
serachInput.addEventListener("change", SearchChange);

async function deletePRdoduct(id: number) {
  try {
    // @ts-ignore
    await axios.delete(`https://46d4deb0e08aaad2.mokky.dev/savol/${id}`);
    Testrender();
  } catch (error) {
    console.log(error);
  }
}

async function deletePRdoductT(id: number) {
  try {
    // @ts-ignore
    await axios.delete(`https://46d4deb0e08aaad2.mokky.dev/test/${id}`);
    render();
    OneSidebar.classList.add("active");
    TwoSidebar.classList.remove("active");
  } catch (error) {
    console.log(error);
  }
}

const Testrender = async () => {
  OneSidebar.classList.remove("active");
  TwoSidebar.classList.add("active");
  try {
    // @ts-ignore
    let respon = await axios.get("https://46d4deb0e08aaad2.mokky.dev/savol");
    console.log(respon);
    const res = respon.data;
    tableView.style.height = "100vh";
    tableView.innerHTML = Testheadres;
    res.map((item: savol) => {
      const div = document.createElement("div");
      div.className = "products-row";
      div.innerHTML += `
      <div class="product-cell image">
                            <p>${item.text}</p>
                        </div>
                        <div class="product-cell category"><span class="cell-label">Category:</span>${item.a},${item.b},${item.c},${item.d}</div>
                        <div class="product-cell status-cell">
                            <span class="cell-label">Status:</span>
                            <span class="status disabled">${item.status}</span>
                        </div>
                        <div class="product-cell sales"><span class="cell-label">Sales:</span>${item.trueAnswer}</div>
                       </div>
                    </div>
      `;
      const divtrash = document.createElement("div");
      divtrash.className = "product-cell sales";
      //   edit
      const btnEdit = document.createElement("button");
      btnEdit.className = "btn p-1";
      btnEdit.innerHTML = `<i class="fa-solid fa-pen-to-square text-white"></i> `;
      //   trash
      const btnTrash = document.createElement("button");
      btnTrash.className = "btn p-1";
      btnTrash.innerHTML = `<i class="fa-solid fa-trash text-danger"></i> `;
      divtrash.appendChild(btnEdit);
      divtrash.appendChild(btnTrash);
      div.appendChild(divtrash);
      tableView.appendChild(div);
      btnTrash.addEventListener("click", () => deletePRdoduct(item.id));
    });
  } catch (error) {
    console.log(error);
    console.log("filet natori");
  }
};
