let value = document.getElementById("valueInp");
let btnPlus = document.querySelector(".plus");
let body2 = document.querySelector(".bod");
let i = 0;
btnPlus.addEventListener("click", ()=>{
    let elemB = document.createElement('div');
    elemB.innerHTML = `
    <div class="thingToDo">${value.value}</div>
    <div class="blockBtn">
        <button class="but" onclick='del(this)'>del</button>
        <button class="but">edit</button>
    </div>`
    elemB.className = "createBlock";
    elemB.id = i++;
    document.body2.append(elemB);
});
function del(item){
    item.parentNode.parentNode.remove()
};