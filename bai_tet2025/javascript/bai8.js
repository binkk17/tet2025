const input  = document.querySelector("input");
const button = document.querySelector("#gui");
const xoa = document.querySelector("#xoa");
const resultd = document.querySelector("#resuilt");
const cleare = document.querySelector("#clea")
const tang = document.querySelector("#tang");
const trave = document.querySelector("#giatri");
button.addEventListener("click",()=>{
    const nam = input.name;
    const valu = input.value;
    if(valu){
        console.log(nam,valu);
        localStorage.setItem(nam,valu);

        const email =localStorage.getItem("email");
        resultd.innerHTML = email;

    }
})
xoa.addEventListener("click", ()=>{
    localStorage.removeItem("email");
})
cleare.addEventListener("click",()=>{
    localStorage.clear();
})
let so = 0;

tang.addEventListener("click",()=>{
    localStorage.setItem(`key${so}`, `value${so}`);
    so++;
})

trave.addEventListener("click",()=>{
    // localStorage.key("2");
    resultd.innerHTML = localStorage.key(2);
})

function tinhtong(){
    const tong = (a,b)=>{
        return a+b;
    }
    const hieu = (a,b)=>{
        return a-b;
    }
    const tich = (a,b)=>{
        return a*b;
    }
    const thuong = (a,b)=>{
        return a/b;
    }

    return{
        tong: tong,
        hieu: hieu,
        tich: tich,
        thuong: thuong,
    }
}

const tt = tinhtong();
console.log(tt.hieu(20,10));
