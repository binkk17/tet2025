const meniu = document.querySelector(".menu");
console.log(meniu);

//neu nhu khong dung defer o phan header thi co the dung cu phap nhu sau

window.onload = function(){
    const meni = document.querySelector(".menu");
    console.log(meni);
    const tendangnhap = document.querySelector("#tendangnhap");
    tendangnhap.onblur = function(){
        console.log(tendangnhap.value);
        tendangnhap.classList.remove("maudam");
    }
    tendangnhap.onfocus = function(){
        console.log("Dang dien ten");
        tendangnhap.classList.add("maudam");
    }
    tendangnhap.onkeydown = function(event){
        console.log(event.key)
    }
}

// phan onfocus



// window.onload = function(){

// }