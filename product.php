<?php include "header.php" ?>
<script type="module" src="./js/product.js"></script>
<main class="product-main">
  <section class="product-first-sec">
    <h3>빙그레의 브랜드 / 제품 / 맛을 검색해 보세요.</h3>
    <div class="product-search">
      <i class="fa-solid fa-magnifying-glass"></i>
      <input id="search-btn" type="text" placeholder="검색어를 입력해 주세요">
      <button type="button">SEARCH</button>
    </div>
  </section>

  <section class="product-second-sec">
    <div>
      <ul class="swiper-wrapper">
      </ul>
      <div class="button-prev"><i class="fa-solid fa-angle-left"></i></div>
      <div class="button-next"><i class="fa-solid fa-angle-right"></i></div>
    </div>

  </section>

  <section class="product-third-sec">
    <h4 class="product-num">전체상품</h4>
    <ul class="product-list">
      
    </ul>
  </section>

</main>

<?php include "footer.php" ?>