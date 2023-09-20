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
    const swiper = new Swiper('.product-second-sec div', {

      navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
      },
      spaceBetween: 20,
      slidesPerView: 3,
      slidesPerGroup: 1,
      breakpoints: {

        1000: {
          slidesPerView: 6,
          slidesPerGroup: 1,
        },
        1400: {
          slidesPerView: 10,
          slidesPerGroup: 10,
        },
      }

    });
  })

}




category.forEach(v => {
  let { category, img, name } = v
  document.querySelector('.product-second-sec div ul').insertAdjacentHTML('beforeend', `
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

    let tab = e.currentTarget;
    console.log(tab.getAttribute('data-name'));
    document.querySelectorAll('.product-second-sec li').forEach(li => {
      li.classList.remove('active')
    })

    document.querySelectorAll('.product-list li').forEach(v => {
      v.style.display = 'none'; // active로 바꾸기
    })

    document.querySelectorAll(`.product-list li.${tab.getAttribute('data-name')}`).forEach(v => {
      v.style.display = 'block';
    })

    tab.classList.add("active")

  })
})
document.querySelector('.product-second-sec li.all-category').addEventListener('click', e => {
  document.querySelectorAll('.product-list li').forEach(v => {
    v.style.display = 'block';
  })
})




allData.forEach(v => {
  document.querySelector('.product-list').insertAdjacentHTML('beforeend', `
  <li class=${v.category}>
    <figure>
      <img src=${v.img}>
      <button type="button">더보기</button>
      <span>${v.name}</span>
    </figure>
    <p>
      ${v.name}
    </p>
  </li>

  `)
})


document.querySelector('.product-num').innerHTML = `전체상품 (${document.querySelectorAll('.product-list li').length})`

swipePlay()

