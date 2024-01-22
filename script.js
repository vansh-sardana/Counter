val= document.getElementById('val');

function plus(){
    let temp= val.innerText;
    temp=parseInt(temp)+1;
    val.innerText= temp.toString();
}
function minus(){
    let temp= val.innerText;
    temp=parseInt(temp)-1;
    val.innerText= temp.toString();
}

