do{
    var n = prompt("Số cặp hình bạn muốn từ 1 đến 20:");
}while (n < 1 || n > 20)
var list_items = document.getElementsByClassName('list-item');
var html_items = "";
var ran_id = random(n);
//console.log(ran_id);

//tao item
for (let i = 0; i < (n * 2); i++) {
    var val = ran_id[i];
    html_items +=
        '<div class="item" id="id_' + (i + 1) + '">' +
        '<img class="item-img" value="' + val + '" onclick="openImage(' + val + ',' + (i + 1) + ')" src="/picachu/lat-hinh/seach.PNG">' +
        '</div>';
}
list_items[0].innerHTML = html_items;


var val_1 = 0;
var val_2 = 0;
var pos_1 = 0;
var pos_2 = 0;
var num_click = 0;
var check = false;

// open image và sử lý khi click
function openImage(val, pos) {
    document.getElementById("id_" + pos).getElementsByTagName("img")[0].src = "/picachu/lat-hinh/" + val + ".jpg";
    if (num_click == 0) {
        val_1 = val;
        pos_1 = pos;
    }
    if (num_click == 1) {
        val_2 = val;
        pos_2 = pos;
    }
    if (val_1 == val_2) {
        check = true;
        //console.log(check);
    } else {
        check = false;
        //console.log(check);
    }

    //console.log(val_1 + " - " + val_2);

    if (num_click > 0) {
        if (!check) {
            console.log(document.getElementById("id_" + pos_1));
            console.log(document.getElementById("id_" + pos_2));
            setTimeout(function () {
                document.getElementById("id_" + pos_1).getElementsByTagName("img")[0].src = "/picachu/lat-hinh/seach.PNG";
                document.getElementById("id_" + pos_2).getElementsByTagName("img")[0].src = "/picachu/lat-hinh/seach.PNG";
                val_1 = 0;
                val_2 = 0;
                pos_1 = 0;
                pos_2 = 0;
                num_click = 0;
            }, 200);
        } else {
            setTimeout(function () {
                document.getElementById("id_" + pos_1).innerHTML = "";
                document.getElementById("id_" + pos_2).innerHTML = "";
                val_1 = 0;
                val_2 = 0;
                pos_1 = 0;
                pos_2 = 0;
                num_click = 0;
            }, 200);
        }
    } else num_click++;


    //console.log('check win:' + checkWin());
    setTimeout(function () {
        if (checkWin(check)) {
            if (confirm('Chúc mừng win rồi thời gian: '+document.getElementById('seconds').innerText+':'+document.getElementById('tens').innerText+'ms. Bạn muốn chơi lai ko?')) {
                location.reload();
            }
        }
    }, 200)
}

//check win
function checkWin() {
    if (document.getElementsByTagName('img').length == 0) {
        return true;
    } else return false;
}

//ham ramdom id
function random(x) {
    let ran = [];
    for (let i = 0; i < 2; i++) {
        for (let j = 1; j <= x; j++) {
            ran.push(j);
        }
        ran = ran.sort(() => Math.random() - 0.5);
    }
    ran = ran.sort(() => Math.random() - 0.5);
    //console.log('random:' + ran);
    return ran;
}

//time
window.onload = function () {
    var second = 0;
    var ten = 0;
    var appendTens = document.getElementById('tens');
    var appendSeconds = document.getElementById('seconds');
    var btn_start = document.getElementById('start');
    var interval;
    interval = setInterval(start, 10);
    function start() {
        ten++;
        if (ten <= 9) {
            appendTens.innerHTML = "0" + ten;
        }
        if (ten > 9) {
            appendTens.innerHTML = ten;
        }
        if (ten > 99) {
            second++;
            appendSeconds.innerHTML = "0" + second;
            ten = 0;
            appendTens.innerHTML = "0" + 0;
        }
        if (second > 9) {
            appendSeconds.innerHTML = second;
        }
    }
}
