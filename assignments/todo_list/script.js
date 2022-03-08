let btn = document.querySelector("button");
let idx = 0;
btn.addEventListener("click", function (e) {
    let todolist = document.querySelector('div.todos');
    let input = document.querySelector('input');
    let paragraph = document.createElement("p");
    paragraph.innerHTML = input.value;
    paragraph.setAttribute("key", idx);
    todolist.appendChild(paragraph)

    input.value = ""
    idx += 1;

    document.querySelector(`p[key="${idx-1}"]`).addEventListener("click", function(e){
        let todolist = document.querySelector('div.todos');
        todolist.removeChild(this);
    })
}); 