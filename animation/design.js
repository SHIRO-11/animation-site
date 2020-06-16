$(function () {
    var startPos = 0,
        winScrollTop = 0;

    $(window).on('scroll', function () {
        winScrollTop = $(this).scrollTop();
        if (winScrollTop >= startPos) {
            $('.site-header').addClass('hide');
        } else {
            $('.site-header').removeClass('hide');
        }
        startPos = winScrollTop;
    });

    //画像の枚数
    var count = $("#slide li").length;

    //現在表示されている画像
    var current = 1;

    //次に表示する画像
    var next = 2;

    //フェードイン・フェードアウトのインターバル
    var interval = 7000;

    //フェードイン・フェードアウトのスピード
    var duration = 2000;
    //タイマーの変数
    var timer;

    //1番目以外の写真は非表示
    $("#slide li:not(:first-child)").hide();

    timer = setInterval(slideTimer, interval);

    function slideTimer() {
        //現在の画像をフェードアウト
        $("#slide li:nth-child(" + current + ")").fadeOut(duration);
        //次の画像をフェードイン
        $("#slide li:nth-child(" + next + ")").fadeIn(duration);

        current = next;
        next++;

        if (next > count) {
            next = 1;
        }

        //targetクラスを削除
        $("#button li a").removeClass("target");

        //現在のボタンにtargetクラスを追加
        $("#button li:nth-child(" + current + ") a")
            .addClass("target");
    }

    $("#button li a").click(function () {
        next = $(this).html();

        //タイマーを停止して再スタート
        clearInterval(timer);
        timer = setInterval(slideTimer, interval);
        //初回の関数実行
        slideTimer();

        return false;
    })


// ページ遷移時のアニメーション処理
    $(window).on('load', function(){
      $('.trans-anime').removeClass('start');
    });

    $('a:not([href^="#"]):not([target])').on('click', function(e){
    e.preventDefault(); // ナビゲートをキャンセル
    url = $(this).attr('href'); // 遷移先のURLを取得
    if (url !== '') {
      $('.trans-anime').addClass('start');  // bodyに class="fadeout"を挿入
      setTimeout(function(){
        window.location = url;  // 0.8秒後に取得したURLに遷移
      }, 1000);
    }
    return false;
  });
});