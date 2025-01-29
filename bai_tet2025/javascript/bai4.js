alert("Hay nhap vao day ten cua ban");


var ten = prompt("Hay nhap ten ban vao day");


function hienThiTen(ten){
    console.log(ten);
}



function tinhTong(){
    let tent = arguments;
    return tent;
}

function tongMang(arr){
    var ton = 0;
    for(item of arr){
        ton+=item;
    }
    return ton;
}
var tong = [10,20,30];

var x = tinhTong(10,20,30,40);
    console.log(x);




var hamTraVe =  (...test) =>{
    console.log(test);
}

var test = hamTraVe(10,20,30,40);

document.addEventListener("DOMContentLoaded",function(){
    hienThiTen(ten);
    var ss = tongMang(tong);
    console.log("Tong la",ss);
})