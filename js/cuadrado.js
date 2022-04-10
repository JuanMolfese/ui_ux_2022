"use strict";

let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let width = 800;
let height = 500;
let imageData = ctx.createImageData(width,height);

let r = 155;
let g = 100;
let b = 255;
let a = 255;



function drawRect(imageData, r, g, b, a){

    let coeficiente = 255 / width ;

    for (let x = 0; x < width; x++) {
    
        if(x <= width/2){
            r = coeficiente * x;
            g = coeficiente * x;
            b = 0;
            a = 255;
        }else{
            r = coeficiente * x;
            g = coeficiente * x;
            b = 0;
            a = 255;
        }


        for (let y = 0; y < height; y++){
            setPixel(imageData, x, y, r, g, b, a);
        }
    }

}

function setPixel(imageData, x, y, r, g, b, a){
    
    let index = (x + y * imageData.width) * 4;
    
    imageData.data[index + 0] = r;
    imageData.data[index + 1] = g;
    imageData.data[index + 2] = b;
    imageData.data[index + 3] = a;
}

drawRect(imageData, r, g, b, a);
ctx.putImageData(imageData, 0, 0);
