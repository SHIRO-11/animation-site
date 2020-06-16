$(function () {

    $(window).on('scroll', function () {
        $('.fade-in-out').each(function () {
            // スクロール位置を取得
            $scrollTop = $(window).scrollTop();
            $scrollBtm = $scrollTop + $(window).height();

            // 対象要素の位置を取得
            $targetTop = $(this).offset().top;
            $targetBtm = $(this).offset().top + $(this).height();

            // 画面内にある場合
            if ($scrollBtm > $targetTop + 150 && $scrollTop + 30 < $targetBtm) {
                $(this).addClass('fade-in');
                $(this).removeClass('fade-out');
            } else if ($scrollBtm > $targetTop && $targetBtm < $scrollTop) {
                $(this).addClass('fade-out');
                $(this).removeClass('fade-in');
            } else if ($scrollBtm < $targetTop) {
                $(this).addClass('fade-out');
                $(this).removeClass('fade-in');
            }
        });
    });

    $("#alert-btn").on('click', function () {
        //背景とアラートボックスをフェードインする
        $('#alert-bg').fadeIn(1000);
    });

    $('#alert-comp').on('click', function () {
        $('#alert-bg').fadeOut(500);
    });


    $('.roatation-btn-1').hover(function () {
        $('.roatation-btn-1').toggleClass('roatation-y-1080');
    });

    $('.roatation-btn-2').hover(function () {
        $('.roatation-btn-2').toggleClass('roatation-x-2160');
    });

    $('.roatation-btn-3').hover(function () {
        $('.roatation-btn-3').toggleClass('roatation-z-3000');
    });

    $('.roatation-btn-4').hover(function () {
        $('.roatation-btn-4').toggleClass('roatation-big-small');
    });

    $('.trans-btn-1').on('click', function () {
        $('.trans-btn-1').toggleClass('trans-btn-1-change');
    })

    $('.trans-btn-2').on('click', function () {
        $('.trans-btn-2').toggleClass('trans-btn-2-change');
    })
});