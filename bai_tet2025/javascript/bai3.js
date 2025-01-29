var a,b;
a = prompt("Hay nhap so a");
b = prompt("Hay nhap so b");

// if(a>5){
//     console.log("So dat yeu cau")
// }
// else{
//     console.log("So nay chua dap ung yeu cau");
//     a = prompt("Hay nhap lai so a");
// }
// while(a<=5 || b<=5){
//     console.log("So chua dat yeu cau");
//     a= prompt("Hay nhap lai so a");
//     b= prompt("Hay nhap lai so b");
// }
// console.log("So da dat yeu cau");

var result = a>=5 && b>=5 ? "Yes":"No";
console.log(result);


for(var i=0;i<=9;i++){
    console.log(i);
}

var infor = {
    fullname: "Nguyen van a",
    age: 12,
    quequan: "VinhLoc",
}
for(key in infor){
    console.log(key);
}
for(key in infor){
    console.log(key, infor[key]);
}

var ten =[
    ten1 = "Ha van",
    ten2 = "Nguye",
    ten3 = "Havan",
]
for(key of ten){
    console.log(key);
}

// phan su dung let

if(true){
    let c=10;
    console.log(c);
}
// var c=11;
console.log(c);
// khai bao kieu const la kieu khai bao bien la hang so co dinh va khong the thay doi sau nay nua;
// dung wow.js de link den trang lay hieu ung tren animate.css