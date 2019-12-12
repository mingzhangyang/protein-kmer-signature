import {a} from './aa.js';
import {colorGradient1} from './colors.js';

export function draw_1(ctx, pos) {
  ctx.save();
  if (pos) {
    ctx.clearRect(0, 0, 1000, 200);
    ctx.translate(6, 80);
    ctx.textAlign = "center";
    for (let i = 0; i < a.length; i++) {
      let v = ctx.data.get(a[i]);
      ctx.fillStyle = colorGradient1.getColor(v).rgb();
      ctx.fillRect(i * 38, 0, 36, 36);
      ctx.font = "20px Arial";
      ctx.fillText(a[i], i * 38 + 18, -18);
    }
    if (pos.y > 80 && pos.y < 116) {
      let n = Math.floor((pos.x - 6) / 38);
      let v = ctx.data.get(a[n]);
      ctx.fillStyle = "black";
      ctx.fillText(v, n * 38 + 18, 68);
    }
  }
  ctx.restore();
}