import parse from "../parser.js";
import {sample} from "../../data/sample.js";
import {draw_3} from "../draw.js";

export default function setup_3() {
  let canvas = document.getElementById("3-mer-canvas");
  let ctx = canvas.getContext("2d");
  ctx.data = parse(sample, 3);
  draw_3(ctx, {y: 0});


  canvas.addEventListener("mousemove", evt => {
    let ctx = canvas.getContext("2d");
    let rect = canvas.getBoundingClientRect();
    let x = evt.clientX - rect.left;
    let y = evt.clientY - rect.top;
    draw_3(ctx, {x: x, y: y});
  });
}