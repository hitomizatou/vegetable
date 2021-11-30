'use strict';

// スライダー


$(function () {
  $('.slider').slick({
    fade: true,//切り替えをフェードで行う。初期値はfalse。
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    autoplaySpeed: 3000,//次のスライドに切り替わる待ち時間
    speed: 1000,//スライドの動きのスピード。初期値は300。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    slidesToShow: 1,//スライドを画面に3枚見せる
    slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
    arrows: false,//左右の矢印なし
    prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
    nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
    dots: true,//下部ドットナビゲーションの表示
    pauseOnFocus: false,//フォーカスで一時停止を無効
    pauseOnHover: false,//マウスホバーで一時停止を無効
    pauseOnDotsHover: false,//ドットナビゲーションをマウスホバーで一時停止を無効
  });

  //スマホ用：スライダーをタッチしても止めずにスライドをさせたい場合
  // $('.slider').on('touchmove', function(event, slick, currentSlide, nextSlide){
  //   $('.slider').slick('slickPlay');
  // });

});

// gnavの設定 クリックしたら、gnavが現れる

$(".openbtn").on("click", function () {
  $("#g-nav").addClass('panelactive');
  $(".closed-btn").addClass('active');
});

$(".closed-btn,#g-nav a").on("click", function () {
  $("#g-nav").removeClass('panelactive');
  $(".closed-btn").removeClass('active');
});


// スクロールしたら、ふわっと表示

$(function () {
  $(window).on('scroll', function () {
    $(".imageBox").each(function () {
      let scroll = $(window).scrollTop();
      let elemPos = $(this).offset().top;
      let windowHeight = $(window).height();

      if (scroll > elemPos - windowHeight + 300) {
        $(this).addClass("fadeUp");
      }
    });
  });
});


//* smooth scroller
//*-------------------------------------------------------*/

$(function () {
  $('a[href*="#"]').on('click', function () {
    var hash = this.hash;
    if (!hash || hash == '#') {
      return false;
    }
    var offset = $(hash).offset();
    if (!offset) {
      return true;
    }

    //メニュー除く
    var menu_height = 0;
    //        if ($('.header.fixed').length){
    //            var menu_height = $('.header.fixed').outerHeight();
    //        }

    $('body,html').animate({ scrollTop: (offset.top - menu_height) }, 800, 'swing');
    return false;
  });
});

