// Инициализация и управление свайпером
let init = false;
let swiper;

function swiperCard() {
  if (window.innerWidth < 768) {
    if (!init) {
      init = true;
      swiper = new Swiper(".swiper", {
        // Optional parameters
        direction: "horizontal",
        loop: true,
        slidesPerView: "auto",
        spaceBetween: "16px",

        // If we need pagination
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    }
  } else if (init) {
    swiper.destroy();
    init = false;
  }
}

swiperCard();
window.addEventListener("resize", swiperCard);

// Открытие и закрытие карточек с брендами через кнопку
const brandsBtn = document.querySelector("#brands-btn");
const brandsItems = document.querySelectorAll(".brands__item");

brandsBtn.addEventListener("click", function () {
  if (brandsBtn.lastElementChild.textContent === "Скрыть") {
    let lastBrandsItemsArray;

    if (window.innerWidth > 1119) {
      lastBrandsItemsArray = Array.from(brandsItems).slice(-3);
    } else {
      lastBrandsItemsArray = Array.from(brandsItems).slice(-5);
    }

    for (let lastBrandItem of lastBrandsItemsArray) {
      lastBrandItem.style.display = "none";
    }

    brandsBtn.lastElementChild.textContent = "Показать все";
  } else {
    for (let brandItem of brandsItems) {
      brandItem.style.display = "block";
    }
    brandsBtn.lastElementChild.textContent = "Скрыть";
  }
});
