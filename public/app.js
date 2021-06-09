let categories = document.querySelector('.categories');
let show = document.querySelector('.showCategories');
console.log(categories.classList.contains('categories'))
function showCat(){
    if(categories.classList.contains('showCategories')){
        categories.classList.remove('showCategories')
    
    }else{
        categories.classList.add('showCategories')
       
    }
    
}




let hide = document.querySelector('.mughees');
let addmission = document.querySelector('.addmission-form');
console.log(hide.classList.contains('mughees'))

function showForm(){
    if(hide.classList.contains('addmission-form')){
        hide.classList.remove('addmission-form')
        hide.classList.add('hid-form')
        console.log(hide.classList.contains('hid-form'))
    }else{
        hide.classList.add('addmission-form')
        hide.classList.remove('hid-form')
        // console.log(hide.classList.contains('addmission-form'))
        console.log(hide.classList.contains('hid-form'))
    }
    
}