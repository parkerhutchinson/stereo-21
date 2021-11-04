interface IDrawRectBorder {
  x:number
  y:number 
  w:number 
  h:number 
  radius:number
  width:number 
  style:CanvasGradient
  ctx:any
}
export const drawRectBorder = (config:IDrawRectBorder) => {
  const {x,y,w,h,radius,width,style,ctx} = config;
  const r = x + w;
  const b = y + h;
  ctx.beginPath();
  ctx.strokeStyle=style;
  ctx.lineWidth=width;
  ctx.moveTo(x+radius, y);
  ctx.lineTo(r-radius, y);
  ctx.quadraticCurveTo(r, y, r, y+radius);
  ctx.lineTo(r, y+h-radius);
  ctx.quadraticCurveTo(r, b, r-radius, b);
  ctx.lineTo(x+radius, b);
  ctx.quadraticCurveTo(x, b, x, b-radius);
  ctx.lineTo(x, y+radius);
  ctx.quadraticCurveTo(x, y, x+radius, y);
  ctx.stroke();
}

