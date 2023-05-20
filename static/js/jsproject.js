let div = document.querySelector('div');
let input = document.querySelector('textarea');


let main = () => {

    //鼠标事件
    // div.addEventListener('click', function (ement) {
    //     console.log(ement.type);
    // })

    // div.addEventListener('dblclick', function (ement) {
    //     console.log(ement.type);
    // })

    // div.addEventListener('contextmenu', function (ement) {
    //     console.log(ement.type);
    // })

    // div.addEventListener('mousedown', function (ement) {
    //     console.log(ement.type);
    //     console.log(ement.button);
    // })

    // div.addEventListener('mouseup', function (ement) {
    //     console.log(ement.type);
    //     console.log(ement.button);
    // })


    //键盘事件
    // input.addEventListener('keydown', function (ement) {
    //     console.log(ement.type, ement.code, ement.altKey, ement.ctrlKey, ement.shiftKey);
    // })

    // input.addEventListener('keyup', function (ement) {
    //     console.log(ement.type, ement.code, ement.altKey, ement.ctrlKey, ement.shiftKey);
    // })

    // input.addEventListener('keypress', function (ement) {
    //     console.log(ement.type, ement.code);
    // })


    //表单事件
    // div.addEventListener('focus', function (ement) {
    //     console.log(ement.type);
    // })

    // div.addEventListener('blur', function (ement) {
    //     console.log(ement.type);
    // })

    //窗口事件
    // window.addEventListener('resize', function (ement) {
    //     console.log(ement.type);
    // })

    // window.addEventListener('scroll', function (ement) {
    //     console.log(ement.type);
    // })

    // window.addEventListener('load', function (ement) {
    //     console.log(ement.type);
    // })
}



export {
    main
}










































// class Point {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;

//         this.init();
//         Point.cnt++;
//     }

//     init() {
//         this.sum = this.x + this.y;
//     }

//     toString() {
//         return `(${this.x} ${this.y})`;
//     }

//     static print_class_name() {
//         console.log("Point");
//         return -1;
//     }
// }

// Point.cnt = 0;
// class ColorPoint extends Point {
//     constructor(x, y, color) {
//         super(x, y);
//         this.color = color;
//         ColorPoint.cnt += 10;
//     }

//     toString() {
//         return `${this.color} ${super.toString()}`;
//     }

//     static print_class_name() {
//         console.log("ColorPoint");
//         return -2;
//     }
// }

// ColorPoint.cnt = 0;



// let main = () => {
//     let p = new Point(3, 4);

//     console.log(p.x);
//     console.log(p.y);
//     console.log(p.sum);
//     console.log(p.toString());
//     console.log(Point.print_class_name());

//     let p1 = new ColorPoint(1, 2, "red");
//     console.log(p1.color);
//     console.log(p1.toString());
//     console.log(ColorPoint.print_class_name());

//     console.log(Point.cnt);
//     for (let i = 0; i < 10; i++)
//         new Point(i, i + 1);
//     console.log(Point.cnt);
//     for (let i = 0; i < 10; i++)
//         new ColorPoint(i, i + 1);
//     console.log(Point.cnt);
//     console.log(ColorPoint.cnt);



// }

// export {
//     main
// }













































// let a = [1, 2, "a", "hhm"];

// let b = [
//     1,
//     "hhm",
//     ['a', 'b', 3],
//     function () {
//         console.log("Hello World!");
//     },
//     { name: "hhm", age: 20 }
// ]

// let c = [3, 4, 5, 6, 234, 64, 23, 1]

// let main = function () {
//     console.log(b);
//     console.log(b[1]);
//     console.log(b[2]);
//     console.log(b[4]);
//     console.log(b.length);
//     b.push(10);
//     console.log(b.length);
//     b.pop();
//     console.log(b.length);
//     b.splice(2, 2);
//     console.log(b.length);

//     c.sort();
//     console.log(c);

//     c.sort((a, b) => { return b - a; });
//     console.log(c);

//     c.sort((a, b) => { return a - b; });
//     console.log(c);

// }

// export {
//     main
// }




































// let preson = {
//     name: "hhm",
//     age: 20,
//     money: 0,
//     add_money: function (x) {
//         this.money += x;
//     }
// }

// function main() {
//     console.log(preson.name);
//     console.log(preson.money);
//     preson.add_money(10);
//     console.log(preson.money);
//     console.log(preson["money"]);
//     console.log(preson["add_money"])
//     console.log(preson["add_money"](10));
//     console.log(preson["money"]);
// }

// export {
//     main
// }