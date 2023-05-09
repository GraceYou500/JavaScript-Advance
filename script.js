console.log(b)
var b = function() {}

//1.
// a = 100;
// function demo (e) {
//     function e() {}
//     arguments[0] =2
//     // console.log(e) // 2
//     if(a) {
//         var b =123;
//         function c(){} // if里不允许声明function，这里为了练习。
//     }
//     var c;
//     a = 10;
//     var a;
//     // console.log(b) // undefined
//     f =123;
//     // console.log(c) // und fn
//     // console.log(a) // 10
// }
// var a;
// demo(1)
// console.log(a) // 100
// console.log(f) //123


// GO {
//     a: undefined
//     demo: function(){}
//     f: undefined => 123
// }

// AO {
//     e: undefined => 1 => function(){}
//     b: undefined
//     c: undefined => function() {}
//     a: undefined
 
// }

//2.
var str = false + 1; //数字相加没有引号就正常相加，false转成数字为0 
console.log(str) // 1
var demo = false == 1; 
console.log(demo);// false
if(typeof(a) &&-true + (+undefined) + "") { //a没有定义 typeof(a) => 字符串类型的"undefined"
   // true返回数字1，- true则为-1； 
   //+undefined是用+数学符号转换undefined为数字类型，转不了的一般为NaN
   //-1 + NaN还是NaN，非数加不了=> + "" => NaN+ “” => “NaN”
    console.log("基础扎实")
}
if(11 + "11" * 2 == 33) {
    // * 两边不管是什么东西，都要转换成数字，所以 “11”*2 = 22
    //乘，减，除 都是把运算符两侧转换成数字再运算
    console.log("基础扎实")
}
!!" " + !!"" - !!false || console.log("你是猪")
//!!=> 把后面的变成boolean值
// true + false - false => 1 + 0 - 0 => 1. 后面就不看了，不会打印出来。


typeof(null) //返回“object” 认为null是个对象类型

window.f || (window.f = "bar") // 不可以去掉括号，因为｜｜是运算符，优先级高于赋值符号“=”
//这题怎么分析都是bar，正确的是先读括号再读外面的，括号里已经赋值“bar”，再看第一个window.f，已经是bar了，就不往后面读了，仍然打印bar。
console.log("f...",window.f)

