import parse from "../parser.js";
import {sample} from "../../data/sample.js";
import {draw_3} from "../draw.js";

export default function setup_3(str=sample) {
  let canvas = document.getElementById("3-mer-canvas");
  let ctx = canvas.getContext("2d");

  ctx.w = canvas.clientWidth;
  ctx.h = canvas.clientHeight;
  ctx.devicePixelRatio = window.devicePixelRatio;

  canvas.width = ctx.w * ctx.devicePixelRatio;
  canvas.height = ctx.h * ctx.devicePixelRatio;
  ctx.scale(ctx.devicePixelRatio, ctx.devicePixelRatio);

  ctx.data = parse(str, 3);
  draw_3(ctx, {y: 0});


  canvas.addEventListener("mousemove", evt => {
    update(canvas, evt);
  });

  canvas.addEventListener("mouseenter", evt => {
    update(canvas, evt);
  });

  canvas.addEventListener("mouseleave", evt => {
    update(canvas, evt);
  });
}

function update(canvas, evt) {
  let ctx = canvas.getContext("2d");
  let rect = canvas.getBoundingClientRect();
  let x = evt.clientX - rect.left;
  let y = evt.clientY - rect.top;
  requestAnimationFrame(() => {
    draw_3(ctx, {x: x, y: y});
  });
}