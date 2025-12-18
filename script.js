var allbtn=document.querySelectorAll('button')

allbtn.forEach(function(elem){
    elem.addEventListener('click',function(){
if(elem.innerHTML== 'Add friend'){
    elem.innerHTML='Remove'
}
else{
elem.innerHTML='Add Friend'
}
    })
})  