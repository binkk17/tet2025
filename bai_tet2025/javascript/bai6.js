const listItems = document.getElementsByClassName("test");
console.log(listItems);
console.log("Số lượng phần tử:", listItems.length);
console.log(listItems);
console.log([...listItems]);

[...listItems].forEach(item =>
    
    {
        console.log(item)
        item.classList.add("test-2");
        item.classList.remove("test");
    }
);

const active = document.querySelector(".box-1 .box-2 h2 .link");
active.classList.add("active");
console.log(active);

const allactive = document.querySelectorAll(".box-1 .box-2 h2 .link");
console.log(allactive);

const box = document.querySelector("#box");
console.log(box.innerHTML="Noi dung moi");