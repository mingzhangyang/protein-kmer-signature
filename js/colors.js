class Color {
  constructor(a = 0, b = 0, c = 0) {
    if (a < 0 || a > 255) {
      throw `invalid number ${a}. it should be in range from 0 to 255`;
    }
    if (b < 0 || b > 255) {
      throw `invalid number ${a}. it should be in range from 0 to 255`;
    }
    if (c < 0 || c > 255) {
      throw `invalid number ${a}. it should be in range from 0 to 255`;
    }
    this.data = [a, b, c];
  }

  static fromRgb(rgb) {
    if (rgb.slice(0, 3) !== 'rgb') {
      throw 'rgb should start with rgb';
    }
    let s = rgb.split('(')[1];
    s = s.split(')')[0];
    let arr = s.split(',').map(d => +d);
    if (arr.length !== 3) {
      throw 'bad rgb format';
    }
    return new Color(arr[0], arr[1], arr[2]);
  }

  static fromHex(hex) {
    if (hex[0] !== '#') {
      throw 'hex should starts with #';
    }
    if (hex.length !== 4 && hex.length !== 7) {
      console.log(hex.length);
      throw 'hex should be of length 4 or 7';
    }
    let a = 0;
    let b = 0;
    let c = 0;
    if (hex.length === 7) {
      a = parseInt(hex.slice(1, 3), 16);
      b = parseInt(hex.slice(3, 5), 16);
      c = parseInt(hex.slice(5, 7), 16);
    } else {
      a = parseInt(hex.slice(1, 2), 16);
      b = parseInt(hex.slice(2, 3), 16);
      c = parseInt(hex.slice(3, 4), 16);
    }
    return new Color(a, b, c);
  }

  rgb() {
    let a = Math.round(this.data[0]);
    let b = Math.round(this.data[1]);
    let c = Math.round(this.data[2]);
    return `rgb(${a},${b},${c})`;
  }

  hex() {
    let a = this.data[0].toString(16);
    let b = this.data[1].toString(16);
    let c = this.data[2].toString(16);
    if (a.length < 2) {
      a = `0${a}`;
    }
    if (b.length < 2) {
      b = `0${b}`;
    }
    if (c.length < 2) {
      c = `0${c}`;
    }
    return `#${a}${b}${c}`;
  }

  update(a, b, c) {
    this.data[0] = clip(this.data[0] + a);
    this.data[1] = clip(this.data[1] + b);
    this.data[2] = clip(this.data[2] + c);
  }
}

function clip(n) {
  if (n < 0) {
    return 0;
  }
  if (n > 255) {
    return 255;
  }
  return n;
}

class ColorGradient {
  constructor(startColor, stopColor, valueRange) {
    this.startColor = startColor;
    this.stopColor = stopColor;
    this.valueRange = valueRange;
    this.diff = [0, 0, 0];
    this.diff[0] = this.stopColor.data[0] - this.startColor.data[0];
    this.diff[1] = this.stopColor.data[1] - this.startColor.data[1];
    this.diff[2] = this.stopColor.data[2] - this.startColor.data[2];
  }

  getColor(v) {
    let percentage = v / (this.valueRange[1] - this.valueRange[0]);
    let res = new Color(this.startColor.data[0], this.startColor.data[1], this.startColor.data[2]);
    res.update(this.diff[0] * percentage, this.diff[1] * percentage, this.diff[2] * percentage);
    return res;
  }
}

const colorGradient1 = new ColorGradient(Color.fromHex('#33ccff'), Color.fromHex('#ff0066'), [0, 2000]);
const colorGradient2 = new ColorGradient(Color.fromHex('#33ccff'), Color.fromHex('#ff0066'), [0, 200]);
const colorGradient3 = new ColorGradient(Color.fromHex('#33ccff'), Color.fromHex('#ff0066'), [0, 500]);
const colorGradient4 = new ColorGradient(Color.fromHex('#33ccff'), Color.fromHex('#ff0066'), [0, 200]);

export {
  Color,
  ColorGradient,
  colorGradient1,
  colorGradient2,
  colorGradient3,
  colorGradient4,
}