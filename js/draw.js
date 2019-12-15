import {a, aa, aaa} from './aa.js';
import {Color, ColorGradient, colorGradient4} from './colors.js';

export function draw_1(ctx, pos) {
  ctx.font = '20px Arial';
  ctx.textAlign = 'center';
  ctx.save();

  let vs = ctx.data.sorted();
  let range = [vs[vs.length - 1][1], vs[0][1] + 10];
  let colorGradient = new ColorGradient(Color.fromHex('#aaccff'), Color.fromHex('#ff0066'), range);

  ctx.clearRect(0, 0, 1200, 200);
  ctx.translate(100, 80);
  for (let i = 0; i < a.length; i++) {
    let v = ctx.data.get(a[i]);
    ctx.fillStyle = colorGradient.getColor(v).rgb();
    ctx.fillRect(i * 38, 0, 36, 36);
    ctx.fillText(a[i], i * 38 + 18, -18);
  }
  if (pos.y > 80 && pos.y < 116 && pos.x > 100 && pos.x < 100 + 38 * 26) {
    let n = Math.floor((pos.x - 100) / 38);
    let v = ctx.data.get(a[n]);
    ctx.fillStyle = 'black';
    ctx.fillText(v, n * 38 + 18, 68);
  }
  ctx.restore();
}

export function draw_2(ctx, pos) {
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.font = '18px Arial';
  ctx.save();

  let vs = ctx.data.sorted();
  let range = [vs[vs.length - 1][1], vs[0][1] + 10];
  let colorGradient = new ColorGradient(Color.fromHex('#aaccff'), Color.fromHex('#ff0066'), range);

  ctx.clearRect(0, 0, 1200, 880);
  ctx.translate(100, 100);
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length; j++) {
      let key = a[i] + a[j];
      let value = ctx.data.get(key);
      ctx.fillStyle = colorGradient.getColor(value).rgb();
      ctx.fillRect(i * 26, j * 26, 24, 24);
    }
    ctx.fillStyle = '#000';
    ctx.fillText(a[i], 26 * i + 12, -12);
    ctx.fillText(a[i], -12, 26 * i + 12);
  }

  if (pos.y > 100 && pos.y < 100 + 26 * 26 && pos.x > 100 && pos.x < 100 + 26 * 26) {
    let m = Math.floor((pos.x - 100) / 26);
    let n = Math.floor((pos.y - 100) / 26);
    let key = a[m] + a[n];
    let value = ctx.data.get(key);

    ctx.font = '36px Arial';
    ctx.translate(0, 0);
    ctx.save();
    ctx.fillStyle = '#DDD';
    ctx.shadowBlur = 12;
    ctx.shadowColor = colorGradient.getColor(value).rgb();
    ctx.fillRect(750, 290, 100, 100);
    ctx.restore();
    ctx.fillStyle = 'black';
    ctx.fillText(key, 800, 320);
    ctx.fillText(value, 800, 360);

  }
  ctx.restore();
}

export function draw_3(ctx, pos) {
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.save();

  let vs = ctx.data.sorted();
  let range = [vs[vs.length - 1][1], vs[0][1] + 10];
  let colorGradient = new ColorGradient(Color.fromHex('#aaccff'), Color.fromHex('#ff0066'), range);

  ctx.clearRect(0, 0, 1200, 1600);
  ctx.translate(100, 100);

  let squareWidth = 6;
  let spacing = 2;

  for (let i = 0; i < aaa.length; i++) {
    let c = i % 100;
    let r = (i - c) / 100;
    let value = ctx.data.get(aaa[i]);
    ctx.fillStyle = colorGradient.getColor(value).rgb();
    ctx.fillRect(c * (squareWidth + spacing), r * (squareWidth + spacing), squareWidth, squareWidth);
  }

  ctx.restore();

  let bottom = Math.ceil(aaa.length / 100) * (squareWidth + spacing);
  let right = 100 * (squareWidth + spacing);
  if (pos.y > 100 && pos.y < 100 + bottom && pos.x > 100 && pos.x < 100 + right) {
    let rr = (pos.y - 100) % (spacing + squareWidth);
    let rc = (pos.x - 100) % (spacing + squareWidth);

    if (rr > squareWidth || rc > squareWidth) {
      return;
    }

    ctx.save();
    let r = (pos.y - 100 - rr) / (squareWidth + spacing);
    let c = (pos.x - 100 - rc) / (squareWidth + spacing);

    let n = r * 100 + c;
    let value = ctx.data.get(aaa[n]);

    ctx.font = '36px Arial';

    ctx.fillStyle = '#DDD';
    ctx.shadowBlur = 12;
    ctx.shadowColor = colorGradient.getColor(value).rgb();
    ctx.fillRect(960, pos.y - 50, 100, 100);

    ctx.fillStyle = 'black';
    ctx.fillText(aaa[n], 1010, pos.y-20);
    ctx.fillText(value, 1010, pos.y+24);
    ctx.restore();
  }

}

export function draw_4(ctx, pos) {
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.font = '18px Arial';
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

    ctx.translate(0, 0);
    ctx.font = '36px Arial';
    ctx.save();
    ctx.fillStyle = '#DDD';
    ctx.shadowBlur = 12;
    ctx.shadowColor = colorGradient4.getColor(value).rgb();
    ctx.fillRect(pos.x - 160, pos.y - 260, 120, 120);
    ctx.restore();
    ctx.fillStyle = 'black';
    ctx.fillText(key, pos.x - 100, pos.y - 220);
    ctx.fillText(value, pos.x - 100, pos.y - 170);

  }
  ctx.restore();
}