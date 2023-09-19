import { category, data } from "./data.js";
let url = new URL(location.href)
let params = new URLSearchParams(url.search)
let id = params.get('id')
// id = icd ,milk ,yogurt
let milkData = data.milk
let iceData = data.ice
let yogurtData = data.yogurt
let allData = [...milkData, ...iceData, ...yogurtData]
let swipePlay = () => {
  window.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.product-second-sec', {

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      spaceBetween: 20,
      slidesPerView: 1,
      slidesPerGroup: 1,
      breakpoints: {
        500: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
        1000: {
          slidesPerView: 3,
          slidesPerGroup: 3,
        },
        1200: {
          slidesPerView: 4,
          slidesPerGroup: 4,
        },
        1400: {
          slidesPerView: 10,
          slidesPerGroup: 10,
        },
      }

    });
  })

}



console.log(category);

category.forEach(v => {
  let { category, img, name } = v
  document.querySelector('.product-second-sec ul').insertAdjacentHTML('beforeend', `
  <li class="swiper-slide ${category}" data-name='${category}' >
    <figure>
      <img src='${img}'>
      <figcaption>
        ${name}
      </figcaption>
    </fugure>
  </li>
  `)
  document.querySelector('.all-category').classList.add("active");

})

document.querySelectorAll('.product-second-sec li').forEach(v => {
  v.addEventListener('click', e => {
    document.querySelector('.product-second-sec li').classList.remove("active")
    e.currentTarget.classList.add("active")
  })
})

swipePlay()

