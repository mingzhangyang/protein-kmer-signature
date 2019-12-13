import {a, aa} from './aa.js';
import {colorGradient1, colorGradient2, colorGradient3, colorGradient4} from './colors.js';

export function draw_1(ctx, pos) {
  ctx.font = "20px Arial";
  ctx.textAlign = "center";
  ctx.save();

  ctx.clearRect(0, 0, 1000, 200);
  ctx.translate(6, 80);
  for (let i = 0; i < a.length; i++) {
    let v = ctx.data.get(a[i]);
    ctx.fillStyle = colorGradient1.getColor(v).rgb();
    ctx.fillRect(i * 38, 0, 36, 36);
    ctx.fillText(a[i], i * 38 + 18, -18);
  }
  if (pos.y > 80 && pos.y < 116) {
    let n = Math.floor((pos.x - 6) / 38);
    let v = ctx.data.get(a[n]);
    ctx.fillStyle = "black";
    ctx.fillText(v, n * 38 + 18, 68);
  }
  ctx.restore();
}

export function draw_2(ctx, pos) {
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = "18px Arial";
  ctx.save();

  ctx.clearRect(0, 0, 1000, 880);
  ctx.translate(100, 100);
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length; j++) {
      let key = a[i] + a[j];
      let value = ctx.data.get(key);
      ctx.fillStyle = colorGradient2.getColor(value).rgb();
      ctx.fillRect(i * 26, j * 26, 24, 24);
    }
    ctx.fillStyle = "#000";
    ctx.fillText(a[i], 26 * i + 12, -12);
    ctx.fillText(a[i], -12, 26 * i + 12);
  }

  if (pos.y > 100 && pos.y < 100 + 26 * 26 && pos.x > 100 && pos.x < 100 + 26 * 26) {
    let m = Math.floor((pos.x - 100) / 26);
    let n = Math.floor((pos.y - 100) / 26);
    let key = a[m] + a[n];
    let value = ctx.data.get(key);

    ctx.font = "36px Arial";
    ctx.translate(0, 0);
    ctx.save();
    ctx.fillStyle = "#DDD";
    ctx.shadowBlur = 12;
    ctx.shadowColor = colorGradient2.getColor(value).rgb();
    ctx.fillRect(750, 290, 100, 100);
    ctx.restore();
    ctx.fillStyle = "black";
    ctx.fillText(key, 800, 320);
    ctx.fillText(value, 800, 360);

  }
  ctx.restore();
}

export function draw_3(ctx, pos) {
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = "18px Arial";
  ctx.save();

  ctx.clearRect(0, 0, 1000, 1600);
  ctx.translate(100, 100);
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < aa.length; j++) {
      let key = a[i] + aa[j];
      let value = ctx.data.get(key);
      ctx.fillStyle = colorGradient3.getColor(value).rgb();
      ctx.fillRect(i * 26, j * 2, 24, 2);
    }
    ctx.fillStyle = "#000";
    ctx.fillText(a[i], 26 * i + 12, -12);
  }

  if (pos.y > 100 && pos.y < 100 + 26 * 26 * 2 && pos.x > 100 && pos.x < 100 + 26 * 26) {
    let m = Math.floor((pos.x - 100) / 26);
    let n = Math.floor((pos.y - 100) / 2);
    let key = a[m] + aa[n];
    let value = ctx.data.get(key);

    ctx.font = "36px Arial";
    ctx.translate(0, 0);
    ctx.save();
    ctx.fillStyle = "#DDD";
    ctx.shadowBlur = 12;
    ctx.shadowColor = colorGradient3.getColor(value).rgb();
    ctx.fillRect(750, pos.y - 150, 100, 100);
    ctx.restore();
    ctx.fillStyle = "black";
    ctx.fillText(key, 800, pos.y - 120);
    ctx.fillText(value, 800, pos.y - 72);

  }
  ctx.restore();
}

export function draw_4(ctx, pos) {
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = "18px Arial";
  ctx.save();

  ctx.clearRect(0, 0, 1600, 1600);
  ctx.translate(100, 100);
  for (let i = 0; i < aa.length; i++) {
    for (let j = 0; j < aa.length; j++) {
      let key = aa[i] + aa[j];
      let value = ctx.data.get(key);
      ctx.fillStyle = colorGradient4.getColor(value).rgb();
      ctx.fillRect(i * 2, j * 2, 22, 2);
    }
  }

  if (pos.y > 100 && pos.y < 100 + 26 * 26 * 2 && pos.x > 100 && pos.x < 100 + 26 * 26 * 2) {
    let m = Math.floor((pos.x - 100) / 2);
    let n = Math.floor((pos.y - 100) / 2);
    let key = aa[m] + aa[n];
    let value = ctx.data.get(key);

    ctx.font = "36px Arial";
    ctx.translate(0, 0);
    ctx.save();
    ctx.fillStyle = "#DDD";
    ctx.shadowBlur = 12;
    ctx.shadowColor = colorGradient4.getColor(value).rgb();
    ctx.fillRect(pos.x - 160, pos.y - 260, 120, 120);
    ctx.restore();
    ctx.fillStyle = "black";
    ctx.fillText(key, pos.x - 100, pos.y - 220);
    ctx.fillText(value, pos.x - 100, pos.y - 170);

  }
  ctx.restore();
}