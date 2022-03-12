let addBtn = document.querySelector('button')
addBtn.addEventListener('click',add)
let parent1 = document.querySelector('div.todos')
let idx = 0
let content=''
function add(e){
    content = document.querySelector('input').value
    let paragraph = document.createElement('p')
    paragraph.setAttribute('key',String(idx))
    paragraph.innerHTML=content
    parent1.appendChild(paragraph)
    idx+=1

    document.querySelector((`p[key="${idx-1}"]`)).addEventListener('click',function(e){
        parent1.removeChild(this)
    })

}