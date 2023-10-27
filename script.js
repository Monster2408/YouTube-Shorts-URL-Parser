window.onload = function() {
    setTimeout(function() {
        // idがdescriptionのdiv要素を取得
        var description = document.getElementById('description');
        // descriptionの中のspan要素をlistに代入
        var list = description.getElementsByTagName('span');
        // listの中の要素を順番に取り出す
        for (var i = 0, len = list.length; i < len; i++) {
            // spanの中のテキストを取得
            var text = list[i].firstChild.nodeValue;
            // spanの中のテキストにurlが含まれていたらa要素を作成
            // ただしurlの終わりは半角スペースか改行か全角スペースとする
            // また，urlはhttp://もしくはhttps://から始まるものとする
            // 他にもurlが複数含まれていた場合も考慮する
            text = text.replace(/(https?:\/\/[\w\/:%#\$&\?\(\)~\.=\+\-]+)/g, '<a href="$1">$1</a>');
            // spanの中身を置き換える
            list[i].innerHTML = text;
        }
    }, 5000);
}