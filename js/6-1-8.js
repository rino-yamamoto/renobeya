
	// 施工事例のスライド実装
	$('.slider').slick({
		arrows: false,//左右の矢印はなし
		autoplay: true,//自動的に動き出すか。初期値はfalse。
		autoplaySpeed: 3000,//自動的に動き出す待ち時間。初期値は3000ですが今回の見せ方では0
		speed: 1000,//スライドのスピード。初期値は300。
		infinite: true,//スライドをループさせるかどうか。初期値はtrue。
		pauseOnHover: false,//オンマウスでスライドを一時停止させるかどうか。初期値はtrue。
		pauseOnFocus: false,//フォーカスした際にスライドを一時停止させるかどうか。初期値はtrue。
		cssEase: 'ease-in-out ',//動き方。初期値はeaseですが、スムースな動きで見せたいのでlinear
		slidesToShow: 3,//スライドを画面に3枚見せる
		slidesToScroll: 1,//1回のスライドで動かす要素数
		centerMode: true,/* 前後のスライドを部分的に表示 */
		centerPadding: "162px"
	// 	responsive: [　　　　　　　　　　　　　　　　　　　　🌟また後で考えましょう
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

	// FAQのアコーディオン実装
	$(".js-menu").on("click", function () {
    	    $(this).next().slideToggle();
    	   });