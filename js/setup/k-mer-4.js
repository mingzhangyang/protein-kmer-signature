import parse from "../parser.js";
import {sample} from "../../data/sample.js";
import {draw_4} from "../draw.js";

export default function setup_4(str=sample) {
  let canvas = document.getElementById("4-mer-canvas");
  let ctx = canvas.getContext("2d");
  ctx.data = parse(str, 4);
  draw_4(ctx, {y: 0});

  canvas.addEventListener("mousemove", evt => {
    let ctx = canvas.getContext("2d");
    let rect = canvas.getBoundingClientRect();
    let x = evt.clientX - rect.left;
    let y = evt.clientY - rect.top;
    requestAnimationFrame(() => {
      draw_4(ctx, {x: x, y: y});
    });
  });
}