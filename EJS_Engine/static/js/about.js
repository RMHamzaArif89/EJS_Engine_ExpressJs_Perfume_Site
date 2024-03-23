con=document.querySelector('.container')

i=document.querySelector('i')
i.addEventListener('click',function (){
    con.classList.toggle('classadd')
  
    if(con.classList.contains('classadd')){
    
        i.style.color='white'
      
    }else{

        i.style.color='black'
        
    }
})