let count = 0;
const flg = prompt('日本の首都は？');

while (true) {
  if (++count > 3) {
    alert('game over');
    break;
  }
  if (flg !== "東京") {
    alert('不正解です！');
    continue;
  }
  alert('正解です！');
  break;
}