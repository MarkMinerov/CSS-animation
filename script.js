document.querySelector(".viewer").onclick = function (event) {
    let div = document.createElement("div");

    if (event.target.classList.contains("orange")) div.classList.add("orange");
    else if (event.target.classList.contains("red")) div.classList.add("red");

    else if (event.target.classList.contains("purple")) {
        div.classList.add("purple");
        div.style.animation = "mover-purple 1s";
    }

    else if (event.target.classList.contains("green")) div.classList.add("green");
    else if (event.target.classList.contains("yellow")) div.classList.add("yellow");

    if (event.target.classList.contains("yellow") || event.target.classList.contains("green")) div.style.animation = "mover 1s reverse";

    div.classList.add("block");
    document.body.appendChild(div);
    setTimeout(() => document.body.removeChild(div), 1000);
};

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

window.onload = function () {
    (function createBlock() {
        let block       =  document.createElement("div"),
            position    =  Math.floor(getRandomArbitrary(0, window.innerWidth)),
            scale       =  getRandomArbitrary(0, 2).toFixed(1),
            color       =  Math.floor(getRandomArbitrary(1, 5));

        //SET COLOR
        switch (color) {
            case 1: {       //ORANGE
                block.style.background = "#f49542";
                break;
            }

            case 2: {       //RED
                block.style.background = "#f44441";
                break;
            }

            case 3: {
                block.style.background = "#a042d6";
                break;
            }

            case 4: {
                block.style.background = "#42d655";
                break;
            }

            case 5: {
                block.style.background = "#e8ea4f";
                break;
            }
        }
        block.classList.add("spawner-block"); //ADD CLASS TO SET WIDTH AND HEIGHT
        block.style.transform = `scale(${scale})`;  //ADD SCALE
        block.style.left = position + 'px';


        document.body.appendChild(block);
        setTimeout(() => document.body.removeChild(block), 10000);
      setTimeout(createBlock, 500);
    })();
};