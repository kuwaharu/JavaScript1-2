let count = 0;
let flg = true;

while (flg) {
if (++count > 3) {
alert ('game over');
break;
}
if (flg = (prompt ('日本の首都は？') !== '東京')) {
alert ('不正解です！');
continue;
}
alert ('正解です！');
break;
}