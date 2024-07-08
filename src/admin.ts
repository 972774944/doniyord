import { Marka, shartnoma } from "./type";
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

let tests: any;
async function render() {
  try {
    // @ts-ignore
    let response = await axios.get(
      "https://46d4deb0e08aaad2.mokky.dev/Markalar"
    );
    console.log(response);
    tests = response.data;
    tableView.style.height = "100vh";
    tableView.innerHTML = headres;
    response.data.map((item: Marka) => {
      const div = document.createElement("div");
      div.className = "products-row ";
      div.innerHTML += `
      <div class="product-cell ">
                            <img src="${item.img}" class="w-25 h-25"
                                alt="product">
                        </div>
                        <div class="product-cell category"><span class="cell-label">Name:</span>${item.name}</div>
                        
                       </div>
                    </div>
      `;
      const divtrash = document.createElement("div");
      divtrash.className = "product-cell sales ";
      const divEdit = document.createElement("div");
      divtrash.className = "product-cell sales ";

      //   edit
      const btnEdit = document.createElement("button");
      btnEdit.className = "btn p-1";
      btnEdit.innerHTML = `<i class="fa-solid fa-pen-to-square text-white"></i> `;
      divEdit.appendChild(btnEdit);
      div.addEventListener("click", Testrender);
      div.appendChild(btnEdit);
      tableView.appendChild(div);
      btnEdit.addEventListener("click", () => openEditModal(item));
      //   trash
      const btnTrash = document.createElement("button");
      btnTrash.className = "btn p-1";
      btnTrash.innerHTML = `<i class="fa-solid fa-trash text-danger"></i> `;
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

    //@ts-ignore
    await axios.post("https://46d4deb0e08aaad2.mokky.dev/Markalar", {
      name: nameInput.value,
      img: Inputphoto.value,
    });
    nameInput.value = " ";
    Inputphoto.value = " ";
    render();

    mySidebarUcer.hide();
  } catch (error) {
    console.log(error);
  }
}
addNewUcerBtn.className = "btn btn-outline-success";
addNewUcerBtn.addEventListener("click", postNewUcer);
// search

async function SearchChange() {
  try {
    let serachInputNew = document.querySelector(
      ".search-bar"
    ) as HTMLInputElement;
    //@ts-ignore
    const respons = await axios.get(
      `https://46d4deb0e08aaad2.mokky.dev/Markalar/?name=*${serachInputNew.value}`
    );
    tableView.style.height = "86vh";
    tableView.innerHTML = headres;

    respons.data.map((item: Marka) => {
      const div = document.createElement("div");
      div.className = " products-row";

      div.innerHTML += `
       <div class="product-cell ">
                            <img src="${item.img}" class="w-25 h-25"
                                alt="product">
                        </div>
                        <div class="product-cell category"><span class="cell-label">Name:</span>${item.name}</div>
                        
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
    await axios.delete(`https://46d4deb0e08aaad2.mokky.dev/Shartnomalar/${id}`);
    Testrender();
  } catch (error) {
    console.log(error);
  }
}

async function deletePRdoductT(id: number) {
  try {
    // @ts-ignore
    await axios.delete(`https://46d4deb0e08aaad2.mokky.dev/Markalar/${id}`);
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
    let respon = await axios.get(
      `https://46d4deb0e08aaad2.mokky.dev/Shartnomalar`
    );
    //?testId=${tests.id}
    console.log(respon);
    const res = respon.data;
    tableView.style.height = "100vh";
    tableView.innerHTML = Testheadres;
    res.map((item: shartnoma) => {
      const div = document.createElement("div");
      div.className = "products-row";
      div.innerHTML += `
      <div class="product-cell image">
                            <p>${item.XaridorIsm}</p>
                            
                        </div>
                        <div class="product-cell status-cell">
                            <span class="cell-label">Status:</span>
                            <span class="status disabled">${item.BuyurtmaSana}</span>
                        </div>
                        <div class="product-cell sales"><span class="cell-label">Sales:</span>${item.MoshinaRang}</div>
                       </div>
                    </div>
      `;
      const divtrash = document.createElement("div");
      divtrash.className = "product-cell sales";
      //   edit
      const btnEdit = document.createElement("button");
      btnEdit.className = "btn p-1";
      btnEdit.addEventListener("click", () => openEditModalShartnoma(item));
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
function openEditModal(item: Marka) {
  //@ts-ignore
  const editModal = new bootstrap.Modal(document.getElementById("editModal")!);
  const editNameInput = document.getElementById("editName") as HTMLInputElement;
  const editImgInput = document.getElementById("editImg") as HTMLInputElement;

  editNameInput.value = item.name;
  editImgInput.value = item.img;

  editModal.show();

  const saveChangesBtn = document.getElementById("saveChanges")!;
  saveChangesBtn.addEventListener("click", async () => {
    try {
      //@ts-ignore
      await axios.patch(
        `https://46d4deb0e08aaad2.mokky.dev/Markalar/${item.id}`,
        {
          name: editNameInput.value,
          img: editImgInput.value,
        }
      );

      editModal.hide();
      render();
    } catch (error) {
      console.log(error);
    }
  });
}
function openEditModalShartnoma(item: shartnoma) {
  //@ts-ignore
  const ShartnomaEdit = new bootstrap.Modal(
    document.getElementById("ShartnomaEdit")!
  );
  ShartnomaEdit.show();
  const editIsmiShartnoma = document.getElementById(
    "editIsmiShartnoma"
  ) as HTMLInputElement;
  const editDatagShartnoma = document.getElementById(
    "editDatagShartnoma"
  ) as HTMLInputElement;
  const editColorShartnoma = document.getElementById(
    "editColorShartnoma"
  ) as HTMLInputElement;

  editIsmiShartnoma.value = item.XaridorIsm;
  editDatagShartnoma.value = item.BuyurtmaSana;
  editColorShartnoma.value = item.MoshinaRang;

  const saveShartnomaBtn = document.getElementById("saveShartnoma")!;
  saveShartnomaBtn.addEventListener("click", async () => {
    try {
      //@ts-ignore
      await axios.patch(
        `https://46d4deb0e08aaad2.mokky.dev/Shartnomalar/${item.id}`,
        {
          XaridorIsm: editIsmiShartnoma.value,
          BuyurtmaSana: editDatagShartnoma.value,
          MoshinaRang: editColorShartnoma.value,
        }
      );

      ShartnomaEdit.hide();
      Testrender();
    } catch (error) {
      console.log(error);
    }
  });
}
