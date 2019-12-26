import parse from "../parser.js";
import {sample} from "../../data/sample.js";
import {draw_1} from "../draw.js";

export default function setup_1(str=sample) {
  let canvas = document.getElementById("1-mer-canvas");
  let ctx = canvas.getContext("2d");

  ctx.data = parse(str, 1);
  draw_1(ctx, {y: 0});


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
    draw_1(ctx, {x: x, y: y});
  });
}