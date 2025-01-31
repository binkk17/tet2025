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

// vi du ve forEach()

var itemp = [1,2,3,4,5,6,7,8,9,10];
var b = itemp.splice();
tong = 0;
itemp.forEach(function(ite,index,array){
    console.log(ite," vi tri:",index, " mang: ",array)
    tong+=ite;
    b[index] = tong;
})



const giatriDiem = itemp.find(function(ite){
    return ite>2;
});

const giatriDiem2 = itemp.filter(function(ite){
    return ite>2;
})
console.log(giatriDiem);
console.log("no o day",giatriDiem2);


var till = itemp.reduce((total,it)=>{
    return total +it;
})
console.log("tong day",till);

console.log("mang cuoi: ",b);
document.addEventListener("DOMContentLoaded",function(){
    hienThiTen(ten);
    var ss = tongMang(tong);
    console.log("Tong la",ss);
})