//----------指定DOM------------
let btn = document.querySelector('#btn');
let ul = document.querySelector("#list")
let input = document.querySelector("#text")


//---------驗證輸入內容 examine函式----------
function examine() {
    let text = input.value;
    if (text.trim() === "" || Number(text)) {  //判斷輸入是否為空值、是否為文字
        alert('請輸入文字')
    } else {
        addList();         //不是空值，所以執行addList函式新增資料
    }
    input.value = "";  //將輸入欄位中的字清除
}

//---------新增資料 addList函式----------
function addList() {
    //創建<li>元素
    let li = document.createElement("li");
    let li_txt = document.createTextNode(text);
    li.appendChild(li_txt);
    li.addEventListener('click', checkedItem);
    
    //創建<span>元素
    let span = document.createElement("span");
    let span_txt = document.createTextNode("x");
    span.appendChild(span_txt);
    span.setAttribute("class", "delete");
    span.addEventListener('click', delItem);

    li.innerText = input.value;
    li.appendChild(span);
 
    document.querySelector("#list").appendChild(li);  //把每筆新增的資料加入網頁並更新網頁內容

}

//---------刪除資料 delItem函式----------
function delItem() {
    this.parentElement.remove();  //移除<span>元素的父元素<li>
}                                 //this用法，哪個物件呼叫了函式，this就會指向該物件


//---------done及undone的判斷 checkedItem函式----------
function checkedItem() {
    if (this.className.indexOf('checked') != -1) {
        this.classList.remove('checked') //如果classNmae中有checked，就移除checked屬性值
    } else {
        this.classList.add('checked')  //如果classNmae中沒有checked，就加上checked屬性值
    }
}


//---------載入後先執行 init函式----------
function init() {
    document.querySelector('#btn').addEventListener('click', examine);  //綁定<新增>按鈕click點擊事件，呼叫examine函式
    document.querySelectorAll('li').forEach(function (e) {
        e.addEventListener('click', checkedItem);          //綁定所有<li>元素click點擊事件，呼叫checkedItem函式
        e.children[0].addEventListener('click', delItem)  
    });
}

window.addEventListener('load', init); //網頁所有資源載入後才會觸發load事件








