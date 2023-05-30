
	// 施工事例のスライド実装(inner_wrap4)
	$('.slider').slick({
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
		// centerPadding: "162px",
		centerPadding: "288px",
		responsive: [{
			breakpoint: 1025,//切り替えたいデバイス幅を入れる
			settings: {
			  slidesToShow: 1,
			}
		  }],
	});

	// lifestyle部分のスライダー
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
		// centerPadding: "100px"
		// 	responsive: [
			// 		{
				// 		breakpoint: 769,//モニターの横幅が769px以下の見せ方
				// 		settings: {
					// 			slidesToShow: 2,//スライドを画面に2枚見せる
					// 		}
					// 	},
	// 	{
		// 		breakpoint: 426,//モニターの横幅が426px以下の見せ方
		// 		settings: {
			// 			slidesToShow: 1.5,//スライドを画面に1.5枚見せる
			// 		}
			// 	}
			// ]
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
		$("#js-menu").on("click", function () {
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
		
		
		// りの部屋でできる3つのこと のスライド実装
		$(function () {
			$(".inner_wrap3_slider").slick({
				speed: 1200,//スライドのスピード。初期値は300。
				cssEase: 'ease',//動き方。初期値はeaseですが、スムースな動きで見せたいのでlinear
				arrows: true,
				nextArrow: '<div class="slick-next"><img src="../img/slider-arrow.png" alt="next"></div>',
				dots: true,
				dotsClass: "inner_wrap3_dots" //ここでclass名を変更する（デフォルトはslick-dots）
			});
		});
		  