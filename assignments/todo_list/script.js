async function details(){
    let promise= await fetch('https://jsonplaceholder.typicode.com/todos')
    let user=await promise.json()
    console.log(user)
    return user

}
let data=details()
output=''
data.then(function(items){
    for (let i=0;i<items.length;i++){
        output+=`<p> <span key=${items[i].id}>${items[i].title} 
        , id=${items[i].id}
        ,completed=${items[i].completed}</span></p>`

    }
    console.log(output)
    let body=document.querySelector('#info')
    body.innerHTML=output
}
)
document.querySelector('#all').onclick=function(){ window.location.reload()}
document.querySelector('#comp').onclick=function(){
    output1=''
    data.then(function(items){
        for (let i=0;i<items.length;i++){
            if (items[i].completed==true){
            output1+=`<p> <span key=${items[i].id}>${items[i].title} 
            , id=${items[i].id}
            ,completed=${items[i].completed}</span></p>`}

        }
        let body=document.querySelector('#info')
        console.log(output1)
        body.innerHTML=output1
    }
    )
}

document.querySelector('#pend').onclick=function(){
    output1=''
    data.then(function(items){
        for (let i=0;i<items.length;i++){
            if (items[i].completed==false){
            output1+=`<p> <span key=${items[i].id}>${items[i].title} 
            , id=${items[i].id}
            ,completed=${items[i].completed}</span></p>`}

        }
        let body=document.querySelector('#info')
        console.log(output1)
        body.innerHTML=output1
    }
    )

}