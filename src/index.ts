import { modalBody, productModal, Buying } from "./modal";
import {
  HeaderBasket,
  basket,
  basketModal,
  basketBody,
  basketSave,
} from "./basket";

const CategoryBody = document.querySelector("#CategoryBody") as HTMLDivElement;
const ProductsBody = document.querySelector("#ProductsBody") as HTMLDivElement;

type Category = {
  id: number;
  image: string;
  name: string;
  categoryId: number;
  status: string;
};

type Product = {
  id: number;
  img: string;
  name: string;
};

let basketProduct: Product | null;

const RenderProducts = () => {
  // @ts-ignore
  axios
    .get("https://46d4deb0e08aaad2.mokky.dev/test")
    .then((res: any) => {
      const products = res.data;
      console.log(products);
      products.map((item: Product) => {
        const col = document.createElement("div");
        col.className = "col-12 d-flex align-items-center gap-3 mb-3";
        col.innerHTML += `
          <img
            src="${item.img}"
            width="100"
            height="80"
            class="object-fit-cover rounded"
          />
          <div class="" style="flex: 1">
            <p class="fw-bold mb-1">${item.name}</p>
          </div>
        `;

        const btn = document.createElement("button");
        btn.className = `btn`;
        btn.innerHTML = `<i class="fa-solid fa-heart"></i>`;
        btn.addEventListener("click", () => {
          basketProduct = item;
          productModal.show();
          if (modalBody) {
            modalBody.className = "p-3";
            modalBody.innerHTML = `
              <div>
                <div class="d-flex justify-content-center">
                  <img class="rounded w-100" src="${item.img}">
                </div>
                <div class="d-flex justify-content-start mt-3">
                  <div class="ps-4">
                    <h5><span>Name: </span>${item.name}</h5>
                  </div>
                </div>
              </div>
            `;
          }
        });
        col.appendChild(btn);
        ProductsBody.appendChild(col);
      });
    })
    .catch((error: any) => {
      console.log("Xatolik yuz berdi:", error);
    });
};

const renderBasket = () => {
  const iconRed = document.querySelector(".iconRed");
  iconRed?.classList.remove("d-none");

  if (!basketBody) {
    console.error("basketBody topilmadi");
    return;
  }
  basketBody.innerHTML = "";
  basket.map((item: Product) => {
    const div = document.createElement("div");
    div.className = "col-3";
    div.innerHTML = `
      <div class="">
        <div class="text-center"> 
          <img class="ModalImg rounded object-fit-cover" src="${item.img}" alt="">
        </div>
        <div class="mt-2">
          <p class="fw-bold">Name :<span class="ms-2 fs-5">${item.name}</span></p>
        </div>
      </div>
    `;
    const buttondelet = document.createElement("button");
    buttondelet.className = `btn`;
    buttondelet.style.marginTop = "-40px";
    buttondelet.style.marginLeft = "-10px";
    buttondelet.innerHTML = `<i class="fa-solid fa-trash text-danger"></i> `;
    buttondelet.addEventListener("click", deletePRdoductbasket);
    div.appendChild(buttondelet);
    basketBody.appendChild(div);
  });

  if (iconRed) {
    iconRed.innerHTML = `${basket.length}`;
  }
};

window.onload = () => {
  RenderProducts();
};

Buying?.addEventListener("click", () => {
  productModal.hide();
  if (basketProduct) {
    //@ts-ignore
    basket.push(basketProduct);
    renderBasket();
  }
});

HeaderBasket?.addEventListener("click", () => {
  if (!basketBody) {
    console.error("basketBody topilmadi");
    return;
  }
  basketModal.show();
});

basketSave?.addEventListener("click", () => {
  basketModal.hide();
});
async function deletePRdoductbasket() {
  try {
    // @ts-ignore
    basket.splice(basketProduct);
    renderBasket();
  } catch (error) {
    console.log(error);
  }
}
