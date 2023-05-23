// let div = document.querySelector('div');
// let input = document.querySelector('textarea');
let $pre = $('pre');


let main = () => {


    // window.open("https://wwww.acwing.com");
    // location.reload();
    // location.href="https://www.acwing.com";

    // let ws = new WebSocket('ws://localhost:8080');

    // ws.send();
    // ws.onopen;
    // ws.onmessage;
    // ws.close();
    // ws.onclose;



    // console.log(Date.now());
    // console.log(Date.parse("2022-04-15T15:30:00.000+08:00"))

    // let date = new Date();

    // console.log(Date());
    // console.log(Date("2022-04-15T15:30:00.000+08:00"))
    // console.log(date.getMilliseconds());
    // console.log(date.getSeconds());
    // console.log(date.getMinutes());
    // console.log(date.getHours());
    // console.log(date.getDay());
    // console.log(date.getDate());
    // console.log(date.getMonth());
    // console.log(date.getFullYear());




    // let obj = {
    //     name: "byp",
    //     age: 18,
    // };

    // let str = JSON.stringify(obj);
    // console.log(str);
    // console.log(typeof str);

    // let new_obj = JSON.parse(str);
    // console.log(new_obj);
    // console.log(typeof new_obj['age']);



    // localStorage.setItem('name', 'hhm');
    // localStorage.setItem('age', 20);
    // console.log(localStorage);
    // console.log(localStorage.getItem('name'));
    // localStorage.removeItem('age');
    // console.log(localStorage.getItem('age'));
    // localStorage.clear();
    // console.log(localStorage);
    // localStorage.setItem('name', 'hhm');
    // localStorage.removeItem('name');



    // let set = new Set;

    // set.add(1);
    // set.add(2);
    // set.add(3);
    // set.add(4);

    // console.log(set.has(3));
    // console.log(set.size);

    // set.delete(2);


    // for (let value of set) {
    //     console.log(value);
    // }
    // console.log("--------------------------")
    // set.forEach(function (value) {
    //     console.log(value);
    // })





    // let map = new Map;

    // map.set("hhm", 1);
    // map.set("hhm1", 1);
    // map.set("hhm2", 2);
    // map.set("hhm3", 3);

    // console.log(map.get("hhm3"));
    // console.log(map.get("hhm4"));

    // console.log(map.size);
    // console.log(map.has("hhm"));

    // map.set(4, "hhm4");
    // map.set(5, "hhm5");
    // map.set(6, "hhm6");
    // map.set(7, "hhm7");

    // console.log(map.get(4));
    // console.log(map.size);
    // console.log(map.has(3));

    // map.set(8, 8);

    // map.delete(8);

    // for (let [key, value] of map) {
    //     console.log(key, value);
    // }
    // console.log("-----------------------");
    // map.forEach((key, value) => {
    //     console.log(key, value);
    // })

    // map.forEach(function (key, value) {
    //     console.log(key, value);
    // })



    // let id = undefined;
    // let $div = $('div');
    // $div.click(() => {
    //     let step = (timestamp) => {
    //         let div = document.querySelector('div');
    //         div.style.width = div.clientWidth + 1 + 'px';
    //         id = requestAnimationFrame(step);
    //     };

    //     id = requestAnimationFrame(step);
    // });

    // $pre.click(() => {
    //     console.log("stop");
    //     cancelAnimationFrame(id);
    // })



    // let $div = $('div');

    // let step = function () {
    //     $div.width($div.width() + 1);

    //     func_id = requestAnimationFrame(step);
    // };

    // let func_id = requestAnimationFrame(step);

    // $div.on("click", function () {
    //     console.log("click");
    //     cancelAnimationFrame(func_id);
    // })

    // $pre.on("click", function () {
    //     console.log("click");
    //     requestAnimationFrame(step);
    // })




    // let $div = $('div');

    // let cnt = 0;
    // $div.on("click", function () {
    //     let id = setInterval(() => {
    //         console.log("Hello World!")
    //         cnt++;

    //         if (cnt == 10) clearInterval(id);
    //     }, 200)
    // })

    // let $div = $('div');

    // let cnt = 0;
    // $div.on("click", function () {
    //     let id = setTimeout(() => {
    //         console.log("Hello World!")
    //     }, 20);
    //     cnt++;
    //     if (cnt > 20)
    //         clearTimeout(id);
    // })



    // let timeout_id = setTimeout(() => {
    //     console.log("Hello World!")
    // }, 200);

    // clearTimeout(timeout_id);


    // let interval_id = setInterval(() => {
    //     console.log("Hello World!")
    // }, 200);

    // clearInterval(interval_id);


    // let $div1 = $(".mydiv-1");

    // console.log($div1.parents("div"));


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