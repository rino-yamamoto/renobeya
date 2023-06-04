// what'sりの部屋のスライド(inner_wrap2)
$('.whatsRinobeya_slider').slick({
	fade:true,//切り替えをフェードで行う。初期値はfalse。
		autoplay: true,//自動的に動き出すか。初期値はfalse。
		autoplaySpeed: 3000,//次のスライドに切り替わる待ち時間
		speed:1000,//スライドの動きのスピード。初期値は300。
		infinite: true,//スライドをループさせるかどうか。初期値はtrue。
		slidesToShow: 1,
		slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
		arrows: false,//左右の矢印あり
		dots: false,//下部ドットナビゲーションの表示
        pauseOnFocus: false,//フォーカスで一時停止を無効
        pauseOnHover: false,//マウスホバーで一時停止を無効
        pauseOnDotsHover: false,//ドットナビゲーションをマウスホバーで一時停止を無効
    });
	//スマホ用：スライダーをタッチしても止めずにスライドをさせたい場合
	// $('.slider').on('touchmove', function(event, slick, currentSlide, nextSlide){
	// 	$('.slider').slick('slickPlay');
	// });


	// りの部屋でできる3つのこと のスライド実装(inner_wrap3)
	$(function () {
		$(".inner_wrap3_slider").slick({
			speed: 1200,//スライドのスピード。初期値は300。
			cssEase: 'ease',//動き方。初期値はeaseですが、スムースな動きで見せたいのでlinear
			arrows: true,
			nextArrow: '<div class="slick-next"><img src="../img/slider-arrow.png" alt="next"></div>',
			dots: true,
			dotsClass: "inner_wrap3_dots", //ここでclass名を変更する（デフォルトはslick-dots）
			responsive: [{
				breakpoint: 800,//切り替えたいデバイス幅を入れる
				settings: {
					arrows: false,
				}
			  }],
		});
	});


	// 施工事例のスライド実装(inner_wrap4)
	$('.works_slider_inner').slick({
		arrows: false,//左右の矢印はなし
		autoplay: true,//自動的に動き出すか。初期値はfalse。
		autoplaySpeed: 3000,//自動的に動き出す待ち時間。初期値は3000ですが今回の見せ方では0
		speed: 1000,//スライドのスピード。初期値は300。
		infinite: true,//スライドをループさせるかどうか。初期値はtrue。
		pauseOnHover: false,//オンマウスでスライドを一時停止させるかどうか。初期値はtrue。
		pauseOnFocus: false,//フォーカスした際にスライドを一時停止させるかどうか。初期値はtrue。
		cssEase: 'ease-in-out',//動き方。初期値はeaseですが、スムースな動きで見せたいのでlinear
		slidesToShow: 3,//スライドを画面に3枚見せる
		slidesToScroll: 1,//1回のスライドで動かす要素数
		centerMode: true,/* 前後のスライドを部分的に表示 */
		centerPadding: "290px",
		variableWidth: true,
		// centerPadding: "327px",
		responsive: [{
			breakpoint: 1025,//切り替えたいデバイス幅を入れる
			settings: {
				slidesToShow: 1,
			}
		  },{
			breakpoint: 1025,//切り替えたいデバイス幅を入れる
			settings: {
			}
		  }],
	});

	// lifestyle部分のスライダー(inner_wrap5)
	$('.lifeStyle_contents_right_inner').slick({
		arrows: false,//左右の矢印はなし
		autoplay: true,//自動的に動き出すか。初期値はfalse。
		autoplaySpeed: 3000,//自動的に動き出す待ち時間。初期値は3000ですが今回の見せ方では0
		speed: 1000,//スライドのスピード。初期値は300。
		infinite: true,//スライドをループさせるかどうか。初期値はtrue。
		pauseOnHover: false,//オンマウスでスライドを一時停止させるかどうか。初期値はtrue。
		pauseOnFocus: false,//フォーカスした際にスライドを一時停止させるかどうか。初期値はtrue。
		cssEase: 'ease-in-out',//動き方。初期値はeaseですが、スムースな動きで見せたいのでlinear
		slidesToShow: 1,//スライドを画面に4枚見せる
		slidesToScroll: 1,//1回のスライドで動かす要素数
		centerMode: true,/* 前後のスライドを部分的に表示 */
		responsive:[
			{
				breakpoint: 1025,//モニターの横幅が769px以下の見せ方
				settings: {
					centerPadding: "0",
					centerMode: false,/* 前後のスライドを部分的に表示 */
						}
					},

					]
		});


		// ハンバーガーメニュー
		$(".openbtn").click(function () {//ボタンがクリックされたら
			$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
			$("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
		});
		$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
			$(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
			$("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
		});
		
		
		// FAQのアコーディオン実装
		$("#js-menu,#js-menu2,#js-menu3,#js-menu4,#js-menu5,#js-menu6,#js-menu7,#js-menu8").on("click", function () {
			$(this).next().slideToggle();
			$(this).toggleClass('menu-border');			
		});
		
		// スクロールで窓の外の景色が変わる
		// window.onscroll = function(){  
		// 	var scrollTop = window.pageYOffset ;  //スクロール量を代入する
			
		// 	if (scrollTop < 730 ) {   //最上部に戻ってきた時
		// 		$(".sky1").css('opacity', '1')
		// 		$('.sky1').css('transition', '0.5s')
				
		//   $(".sky2").css('opacity', '0')
		//   $('.sky2').css('transition', '0.5s')
		  
		//   $(".sky3").css('opacity', '0')
		//   $('.sky3').css('transition', '0.5s')
		// }
		// if (scrollTop > 900 ) {   //１０pxスクロールした時
		// 	$(".sky1").css('opacity', '0')
		// 	$('.sky1').css('transition', '0.5s')
			
		// 	$(".sky2").css('opacity', '1')
		// 	$('.sky2').css('transition', '0.5s')
			
		// 	$(".sky3").css('opacity', '0')
		// 	$('.sky3').css('transition', '0.5s')
		// }
		// if (scrollTop > 1100 ) {   //20pxスクロールした時
		// 	$(".sky1").css('opacity', '0')
		// 	$('.sky1').css('transition', '0.5s')
			
		// 	$(".sky2").css('opacity', '0')
		// 	$('.sky2').css('transition', '0.5s')
			
		// 	$(".sky3").css('opacity', '1')
		// 	$('.sky3').css('transition', '0.5s')
		// }
		// };
		
		
		// 猫部分スクロール
		window.onscroll = function(){  
			var scrollTop = window.pageYOffset ;  //スクロール量を代入する
			
			if (scrollTop < 15 ) {   //TOPから15px以内の時
				$(".first_cat").css('opacity', '1')
				$('.first_cat').css('transition', '0.5s')
				$(".fadeInTrigger1").removeClass('fadeIn1');// 画面外に出たらfadeUpというクラス名を外す			
				
				$(".second_cat").css('opacity', '0')
				$('.second_cat').css('transition', '0.5s')
			}
			if (scrollTop > 15 ) {   //15pxスクロールした時
				$(".first_cat").css('opacity', '0')
			$('.first_cat').css('transition', '0.5s')
			
			$(".second_cat").css('opacity', '1')
			$('.second_cat').css('transition', '0.5s')
			
			// 猫が左に移動
			// 動きのきっかけとなるアニメーションの名前を定義
			function fadeAnime(){
			
			// ふわっ
			$('.fadeInTrigger1').each(function(){ //fadeUpTriggerというクラス名が
				var elemPos = $(this).offset().top-50;//要素より、50px上の
				var scroll = $(window).scrollTop();
				var windowHeight = $(window).height();
				if (scroll >= elemPos - windowHeight){
				$(this).addClass('fadeIn1');// 画面内に入ったらfadeUpというクラス名を追記
			}else{
				$(this).removeClass('fadeIn1');// 画面外に出たらfadeUpというクラス名を外す
			}
		});
	}
	
	// 画面をスクロールをしたら動かしたい場合の記述
	$(window).scroll(function (){
		fadeAnime();/* アニメーション用の関数を呼ぶ*/
	});// ここまで画面をスクロールをしたら動かしたい場合の記述
	
	// 画面が読み込まれたらすぐに動かしたい場合の記述
	$(window).on('load', function(){
		fadeAnime();/* アニメーション用の関数を呼ぶ*/
	});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述
	
}
		};
		
		
		  