document.querySelectorAll('.toggle-button').forEach(function(button) {
    button.addEventListener('click', function() {
        var targetId = button.getAttribute('data-target'); // data-target属性からIDを取得
        var targetElement = document.getElementById(targetId);

        if (targetElement) {
            // 画面幅を取得
            var screenWidth = window.innerWidth;
            var offset = 0;

            // 画面幅に応じてオフセットを変更
            if (screenWidth >= 766) {
                offset = 50;  // 766px以上: 50pxオフセット
            } else {
                offset = -200; // 766px未満: 200pxオフセット
            }

            var targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
            var offsetPosition = targetPosition - offset; // オフセット分だけ下に移動

            window.scrollTo({
                top: offsetPosition,
                behavior: 'auto' // 一瞬で移動
            });
        }
    });
});
