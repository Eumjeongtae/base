import { category, data } from "./data.js";

let url = window.location.search;
let params = new URLSearchParams(url)
let id = params.get('id')
let product = params.get('product')

let milkData = data.milk
let iceData = data.ice
let yogurtData = data.yogurt
let allData = [...milkData, ...iceData, ...yogurtData]
let allDataCopy = [...allData]
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
//./product.php?id=ice
//./product.php?id=yogurt
//./product.php?id=milk
//./product.php?id=all-category
let productOn = () => {
  document.querySelectorAll('.product-second-sec li').forEach(v => {
    v.addEventListener('click', e => {
      productList(allData)

      let tab = e.currentTarget;
      document.querySelectorAll('.product-second-sec li').forEach(li => {
        li.classList.remove('active')
      })

      tab.classList.add("active")

      document.querySelectorAll('.product-list li').forEach(v => {
        v.classList.remove('active')
      })// 탭버튼 눌렀을때 active 활성화

      document.querySelectorAll(`.product-list li.${tab.getAttribute('data-name')}`).forEach(v => {
        v.classList.add('active')// 탭버튼의 data-name으로 상품 리스트 노출
      })

      if (tab.getAttribute('data-name') == 'all-category') {
        document.querySelectorAll('.product-list li').forEach(v => {
          v.classList.add('active')
        }) // 모든상품 노출
      }


    })

  })

  document.querySelectorAll(`.product-list li.${id}`).forEach(v => {
    v.classList.add('active') // url id?값으로 상품 노출
  })

  if (id == 'all-category') {
    document.querySelectorAll('.product-list li').forEach(v => {
      v.classList.add('active')
    })
  }
}

let categoryOn = () => {
  document.querySelector(`.product-second-sec li.${id}`).classList.add('active')
}// url id? 값으로 탭버튼 액티브 활성화

let productList = (dt)=>{
  document.querySelector('.product-list').innerHTML=''
  dt.forEach(v => {
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
}

let productSearch = () => {
  document.querySelector('#search-btn').addEventListener('click', e => {
    let searchTxt = document.querySelector('#searchText').value
    window.location.href = `product.php?id=all-category&product=${searchTxt}`
  })
}

let searchTxtFn = () => {
  allDataCopy = allDataCopy.filter(v=>{
    let {name,category,title} = v
    return name.includes(product) || category.includes(product) || title.includes(product)
  })

  productList(allDataCopy)
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
  // document.querySelector('.all-category').classList.add("active");

})








document.querySelector('.product-num').innerHTML = `전체상품 (${document.querySelectorAll('.product-list li').length})`

categoryOn()
swipePlay()
productSearch()

if(product){
  searchTxtFn()
}else{
  productList(allData)
}
productOn()





