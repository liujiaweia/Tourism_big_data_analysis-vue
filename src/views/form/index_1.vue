<template>
  <!-- header -->
  <div>
    <header id="home">
      <!-- top-bar -->
      <div class="top-bar py-2 bg-li">
        <div class="container"></div>
      </div>
    </header>
    <!-- //top-bar -->

    <!-- header 2 -->
    <!-- navigation -->
    <div class="main-top">
      <div
        class="container d-lg-flex justify-content-between align-items-center"
      >
        <!-- logo -->
        <h1 class="logo-style-res float-left">
          <a class="navbar-brand" href="index.html">
            <img
              src="images/logo.png"
              alt=""
              class="img-fluid logo-img mt-1"
            />Tourism
          </a>
        </h1>
        <!-- //logo -->
        <!-- nav -->
        <div class="nav_w3ls mx-lg-auto">
          <nav>
            <label for="drop" class="toggle">Menu</label>
            <input type="checkbox" id="drop" />
            <ul class="menu mx-lg-auto">
              <li><a href="index.html" class="active">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li>
                <!-- First Tier Drop Down -->
                <label for="drop-2" class="toggle toogle-2"
                  >Pages
                  <span class="fa fa-angle-down" aria-hidden="true"></span>
                </label>
                <a href="#"
                  >Pages
                  <span class="fa fa-angle-down" aria-hidden="true"></span
                ></a>
                <input type="checkbox" id="drop-2" />
                <ul>
                  <li><a href="#chefs" class="drop-text">Our Chef's</a></li>
                  <li><a href="#blog" class="drop-text">Blog Posts</a></li>
                  <li><a href="#services" class="drop-text">Services</a></li>
                  <li><a href="#what" class="drop-text">Achievements</a></li>
                  <li><a href="#testi" class="drop-text">Reviews</a></li>
                  <li><a href="#subscribe" class="drop-text">Subscribe</a></li>
                </ul>
              </li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </nav>
        </div>
        <!-- //nav -->
        <!-- dwn -->

        <!-- //dwn -->
      </div>
    </div>
    <!-- //navigation -->
    <!-- //header 2 -->

    <!-- banner slider -->
    <div id="homepage-slider" class="st-slider">
      <input
        type="radio"
        class="cs_anchor radio"
        name="slider"
        id="play1"
        checked=""
      />
      <input type="radio" class="cs_anchor radio" name="slider" id="slide1" />
      <input type="radio" class="cs_anchor radio" name="slider" id="slide2" />
      <input type="radio" class="cs_anchor radio" name="slider" id="slide3" />
      <div class="images">
        <div class="images-inner">
          <div class="image-slide">
            <div class="banner-w3ls-1"></div>
          </div>
          <div class="image-slide">
            <div class="banner-w3ls-2"></div>
          </div>
          <div class="image-slide">
            <div class="banner-w3ls-3"></div>
          </div>
        </div>
      </div>
      <div class="labels">
        <div class="fake-radio">
          <label for="slide1" class="radio-btn"></label>
          <label for="slide2" class="radio-btn"></label>
          <label for="slide3" class="radio-btn"></label>
        </div>
      </div>
    </div>
    <!-- //banner slider -->

    <!-- banner bottom grids -->
    <section class="banner-bottom-w3layouts pb-5" id="services">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 about-in text-center">
            <div class="serv-cont-wthree">
              <div class="icon-wthrees">
                <span class="fa fa-camera-retro fa-2x"></span>
              </div>
              <h5 class="card-title mb-3 mt-4">当前月份旅游最多人数</h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet consectetur elit,Adipisicing elit
                tempor.
              </p>
            </div>
          </div>
          <div class="col-lg-4 about-in text-center my-lg-0 my-4">
            <div class="serv-cont-wthree">
              <div class="icon-wthrees">
                <span class="fa fa-camera-retro fa-2x"></span>
              </div>
              <h5 class="card-title mb-3 mt-4">当前月份最热门旅游景点</h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet consectetur elit,Adipisicing elit
                tempor.
              </p>
            </div>
          </div>
          <div class="col-lg-4 about-in text-center">
            <div class="serv-cont-wthree">
              <div class="icon-wthrees">
                <span class="fa fa-camera-retro fa-2x"></span>
              </div>
              <h5 class="card-title mb-3 mt-4">当前月份推荐景点</h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet consectetur elit,Adipisicing elit
                tempor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- //banner bottom grids -->

    <!-- about -->
    <section class="w3ls-bnrbtm py-5" id="about">
      <div class="container py-xl-5 py-lg-3">
        <div class="row pb-5">
          <div class="col-lg-6">
            <img
              class="img-fluid"
              src="../../../public/static/home/images/10.jpg"
              alt=""
            />
          </div>
          <div class="col-lg-6 pl-lg-5 abou-right-w3layuts mt-lg-0 mt-5">
            <h3 class="mb-4">大海 <br /></h3>
            <p>
              海纳百川，有容乃大；壁立千仞，无欲则刚。
            </p>
            <p>
              白首壮心驯大海，青春浩气走千山。
            </p>
            <p>
              陆地上最广阔的是海洋，比海洋还广阔的是天空，比天空更广阔的是人的胸怀。
            </p>
            <p>
              万川归之，不知何时止而不盈；尾闾卸之，不知何时而不虚。
            </p>
          </div>
        </div>
        <div
          class="row flex-row-reverse border-top pt-lg-5 pt-sm-4 pt-2 mt-lg-5 mt-sm-4 mt-2"
        >
          <div class="col-lg-6">
            <img
              class="img-fluid mt-5"
              src="../../../public/static/home/images/11.jpg"
              alt=""
            />
          </div>
          <div class="col-lg-6 abou-right-w3layuts mt-5">
            <h3 class="mb-4"><br />山川</h3>
            <p>
              所谓伊人，在水一方。
            </p>
            <p>
              水何澹澹，山岛竦峙。
            </p>
            <p>
              明月出天山，苍茫云海间。
            </p>
            <p>
              空山不见人，但闻人语响。
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="w3ls-bnrbtm py-5" id="about">
      <div class="container py-xl-5 py-lg-3">
        <div class="row pb-5">
          <div class="col-lg-6">
            <img
              class="img-fluid"
              src="../../../public/static/home/images/12.jpg"
              alt=""
            />
          </div>
          <div class="col-lg-6 pl-lg-5 abou-right-w3layuts mt-lg-0 mt-5">
            <h3 class="mb-4">古镇</h3>
            <p>
              古镇，一般指有着百年以上历史的，供集中居住的建筑群。中国历史悠久，广阔土地上有着很多文化底蕴深厚的古镇。其中有部分已经被联合国教科文组织列入世界文化遗产。中国十大古镇，分别是安昌、光福镇、朱家角、木渎、南浔、甪直、乌镇、同里、西塘、周庄。
            </p>
          </div>
        </div>
        <div
          class="row flex-row-reverse border-top pt-lg-5 pt-sm-4 pt-2 mt-lg-5 mt-sm-4 mt-2"
        >
          <div class="col-lg-6">
            <img
              class="img-fluid mt-5"
              src="../../../public/static/home/images/13.jpg"
              alt=""
            />
          </div>
          <div class="col-lg-6 abou-right-w3layuts mt-5">
            <h3 class="mb-4"><br />岛屿</h3>
            <p>
              岛屿是指四面环水并在高潮时高于水面的自然形成的陆地区域（根据《联合国海洋法公约》）。全球岛屿总数达5万个以上，总面积约为997万平方千米，大小几乎和中国面积相当，约占全球陆地总面积的1/15。从地理分布情况看，世界七大洲都有岛屿。
            </p>
          </div>
        </div>
      </div>
    </section>

    <div class="gallery py-5" id="gallery">
      <div class="container py-xl-5 py-lg-3">
        <h3 class="title-w3ls text-center text-bl mb-5">views</h3>
        <div class="row no-gutters">
          <div class="col-md-4 gallery-grid1">
            <a href="#gal1">
              <img
                src="../../../public/static/home/img/0.jpg"
                alt=" "
                class="img-fluid"
              />
            </a>
          </div>
          <div class="col-md-4 gallery-grid1">
            <a href="#gal2">
              <img
                src="../../../public/static/home/img/1.jpg"
                alt=" "
                class="img-fluid"
              />
            </a>
          </div>
          <div class="col-md-4 gallery-grid1">
            <a href="#gal3">
              <img
                src="../../../public/static/home/img/2.jpg"
                alt=" "
                class="img-fluid"
              />
            </a>
          </div>
        </div>
        <div class="row no-gutters">
          <div class="col-md-4 gallery-grid1">
            <a href="#gal4">
              <img
                src="../../../public/static/home/img/3.jpg"
                alt=" "
                class="img-fluid"
              />
            </a>
          </div>
          <div class="col-md-4 gallery-grid1">
            <a href="#gal5">
              <img
                src="../../../public/static/home/img/6.jpg"
                alt=" "
                class="img-fluid"
              />
            </a>
          </div>
          <div class="col-md-4 gallery-grid1">
            <a href="#gal6">
              <img
                src="../../../public/static/home/img/5.jpg"
                alt=" "
                class="img-fluid"
              />
            </a>
          </div>
        </div>
      </div>
      <!-- gallery popups -->
      <!-- popup-->
      <div id="gal1" class="pop-overlay animate">
        <div class="popup">
          <img
            src="../../../public/static/home/img/0.jpg"
            alt="Popup Image"
            class="img-fluid"
          />
          <p class="mt-4">
            三亚湾度假区紧挨三亚市区，绵延22公里。该湾湾长沙细，岸上绿树如带，构成三亚滨海旅游城市美丽动人的风景线。
          </p>
          <a class="close" href="#gallery">&times;</a>
        </div>
      </div>
      <!-- //popup -->
      <!-- popup-->
      <div id="gal2" class="pop-overlay animate">
        <div class="popup">
          <img
            src="../../../public/static/home/img/1.jpg"
            alt="Popup Image"
            class="img-fluid"
          />
          <p class="mt-4">
            长白山景区是国家AAAAA级旅游景区，主峰长白山多白色浮石与积雪而得名，素有“千年积雪万年松，直上人间第一峰”的美誉。景区是拥有“神山、圣水、奇林、仙果”等盛誉的旅游胜地，也是满族的发祥地。
          </p>
          <a class="close" href="#gallery">&times;</a>
        </div>
      </div>
      <!-- //popup -->
      <!-- popup-->
      <div id="gal3" class="pop-overlay animate">
        <div class="popup">
          <img
            src="../../../public/static/home/img/2.jpg"
            alt="Popup Image"
            class="img-fluid"
          />
          <p class="mt-4">
            热气球的唯一飞行动力是风。对于环球飞行的热气球来说，必须选择速度和方向都合适的高空气流，并随之运动，才能高效地完成飞行。
          </p>
          <a class="close" href="#gallery">&times;</a>
        </div>
      </div>
      <!-- //popup3 -->
      <!-- popup-->
      <div id="gal4" class="pop-overlay animate">
        <div class="popup">
          <img
            src="../../../public/static/home/img/3.jpg"
            alt="Popup Image"
            class="img-fluid"
          />
          <p class="mt-4">
            花鸟岛境内山秀水清，景致动人，具有海瀚、礁美、滩佳、石奇、洞幽、崖险等特点，有各种人文及自然景点9处，其中以国际灯塔、雾露峰、南湾秀色最为著名。
          </p>
          <a class="close" href="#gallery">&times;</a>
        </div>
      </div>
      <!-- //popup -->
      <!-- popup-->
      <div id="gal5" class="pop-overlay animate">
        <div class="popup">
          <img
            src="../../../public/static/home/img/6.jpg"
            alt="Popup Image"
            class="img-fluid"
          />
          <p class="mt-4">
            西塘古镇属浙江省嘉兴市嘉善县，地处江浙沪三省市交界处，地理位置优越，交通便捷。
          </p>
          <a class="close" href="#gallery">&times;</a>
        </div>
      </div>
      <!-- //popup -->
      <!-- popup-->
      <div id="gal6" class="pop-overlay animate">
        <div class="popup">
          <img
            src="../../../public/static/home/img/5.jpg"
            alt="Popup Image"
            class="img-fluid"
          />
          <p class="mt-4">
            呼伦贝尔大草原是我国现存最丰美的草原牧场，拥有最纯洁的蓝天、白云和最优质的牧草，是草原摄影的胜地。
            除了绝美的风景，草原上还能骑马、观看摔跤、赛马，品尝“全羊宴”，体验游牧民族独特风情。
          </p>
          <a class="close" href="#gallery">&times;</a>
        </div>
      </div>
      <!-- //popup -->
      <!-- //gallery popups -->
    </div>
  </div>
</template>

<script>
export default {
  methods: {}
};
</script>
<style scoped src="../../../public/static/home/css//bootstrap.css"></style>
<style>
/* @import url("../../../public/static/home/css//bootstrap.css"); */
@import url("../../../public/static/home/css/style.css");
@import url("../../../public/static/home/css/font-awesome.min.css");
</style>
