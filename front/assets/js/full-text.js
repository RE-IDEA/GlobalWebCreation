document.querySelectorAll('.toggle-button').forEach(function(button) {
    button.addEventListener('click', function() {
        var parent = button.closest('.toggle-container');
        var shortText = parent.querySelector('.short-text');
        var fullText = parent.querySelector('.full-text');

        if (fullText.style.display === "none") {
            // 全文を表示
            fullText.style.display = "block";
            shortText.style.display = "none";
            button.textContent = "閉じる"; // ボタンのテキストを変更
        } else {
            // 短縮されたテキストに戻す
            fullText.style.display = "none";
            shortText.style.display = "block";
            button.textContent = "もっと見る"; // ボタンのテキストを変更
        }
    });
});
