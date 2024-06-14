export const basket = [];
// @ts-ignore
export const basketModal = new bootstrap.Modal("#basketModal", {
  keyboard: false,
});
export const HeaderBasket = document.querySelector(
  "#HeaderBasket"
) as HTMLDListElement;
export const basketBody = document.querySelector(
  "#basketBody"
) as HTMLDListElement;

export const basketSave = document.querySelector(
  "#basketSave"
) as HTMLDListElement;
