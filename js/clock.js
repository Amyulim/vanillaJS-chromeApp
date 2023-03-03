const clock = document.querySelector("h2#clock");

/*function sayHello() {
    console.log("hello");
}*/

//it shows hello every 5s
//setInterval(sayHello, 5000);

//it shows hello once after 5s
//setTimeout(sayHello, 5000);

function getClock(){
    //padStart(2,"0")--> text length is 2. 2 letter, and if one of them is empty, show 0
    //String() --> it makes number as string 
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`
    
}

//if I don't call getClock() function here first, it will show 00:00:00 first and shows the time
getClock();
setInterval(getClock,1000);