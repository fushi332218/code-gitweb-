let input = document.querySelector(".input");
let run = document.querySelector("button");
let output = document.querySelector("pre");

function main() {
    run.addEventListener("click", function () {
        let d = [1, 2, 3, 4, 5];
        for (let vlaue of d) {
            console.log(vlaue);
        }


    });
}

export {
    main
}