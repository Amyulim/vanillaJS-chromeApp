const images = [
  "https://res.cloudinary.com/ybmedia/image/upload/c_crop,h_1123,w_2000,x_0,y_194/c_fill,f_auto,h_900,q_auto,w_1600/v1/m/c/4/c468b5c8a6842d91b9c22cfc7189e63aae06a651/20-facts-might-know-grand-budapest-hotel.jpg",
  "https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fcom.ft.imagepublish.upp-prod-eu.s3.amazonaws.com%2F97bbf0c6-a52e-11e3-8988-00144feab7de?dpr=2&fit=scale-down&quality=medium&source=next&width=700",
  "https://d29mtkonxnc5fw.cloudfront.net/images/KgPexCW2nEbRXe3zrbBICQ_cover.jpg",
  "https://images-prod.anothermag.com/908/azure/another-prod/330/7/337837.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];
console.log(chosenImage);

//const bgImage = document.createElement("img");

//bgImage.src = `${chosenImage}`;
//document.body.appendChild(bgImage);
document.body.style.backgroundImage = `url(${chosenImage})`;
