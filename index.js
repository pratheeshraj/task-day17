
let container =document.createElement("section");
container.classList.add("container");
let divTag = document.createElement("div");
divTag.classList.add("div");
let hTag = document.createElement("h1");
hTag.classList.add("h1");
 divTag.append(hTag);
 container.append(divTag);
 document.body.append(container);

//  for animation

let main = document.createElement("div");
main.classList.add("main");


document.body.append(main);

//  Javascript code for countdown 10 to 1 and display independence day
 let n=10;
 setTimeout(() => {
     hTag.innerHTML=n;
     n--;
     setTimeout(() => {
        hTag.innerHTML=n;
        n--;
        setTimeout(() => {
            hTag.innerHTML=n;
            n--;
            setTimeout(() => {
                hTag.innerHTML=n;
                n--; 
                setTimeout(() => {
                    hTag.innerHTML=n;
                    n--;
                    setTimeout(() => {
                        hTag.innerHTML=n;
                        n--;
                        setTimeout(() => {
                            hTag.innerHTML=n;
                            n--;
                            setTimeout(() => {
                                hTag.innerHTML=n;
                                n--;
                                setTimeout(() => {
                                    hTag.innerHTML=n;
                                    n--;
                                    setTimeout(() => {
                                        hTag.innerHTML=n;
                                        n--;
                                        setTimeout(() => {
                                            hTag.innerHTML="Happy Independence Day";
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000); 
     }, 1000);
 }, 1000);