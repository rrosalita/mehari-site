const container=document.querySelector('.container')
const links=document.querySelector('.links')
const nav=document.querySelector('.nav')
const copy=document.querySelector('.copy')


copy.textContent=new Date().getFullYear()
console.log(copy)


window.addEventListener('scroll',function(){
    const scrollHeight=window.pageYOffset
    const containerheight=nav.getBoundingClientRect().height
    if(scrollHeight > containerheight){
nav.classList.add('fix-nav')
    }else{
        nav.classList.remove('fix-nav')
    }
})


