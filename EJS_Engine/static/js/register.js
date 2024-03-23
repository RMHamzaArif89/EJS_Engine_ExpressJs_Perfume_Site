


   


 
     function inpName(){
        name=document.getElementById('name').value
        labelName=document.querySelector('.lname')
        
        

        if(name.length==0){
          labelName.innerText='enter ur name'
          return false
        }
        if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
          
          labelName.innerText='Enter full name'
          labelName.style.color='red'
          return false
        
          
          
  
        }
    
            
            labelName.innerText='Name'
            labelName.style.color='white'
       
     }










     
     function phoneNum(){
        pNum=document.getElementById('pNum').value
        labelcell=document.querySelector('.lPhone')
        
        

        if(pNum.length==0){
          labelcell.innerText='enter ur Cell'
          return false
        }
        if(pNum.length!==11){
          labelcell.innerText='Enter ur valid num length'
          labelcell.style.color='red'
          return false
        }
        if(!pNum.match(/^[0-9]{11}$/)){
          
          labelcell.innerText='Enter valid num'
          labelcell.style.color='red'
          return false
        
          
          
  
        }
    
            
            labelcell.innerText='Cell'
            labelcell.style.color='white'
       
     }
















     function collegeName(){
        clgNam=document.getElementById('clgName').value
        clglabel=document.querySelector('.lclg')
        
        

        if(clgNam.length==0){
          clglabel.innerText='enter ur clg name'
          return false
        }
        if(!clgNam.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
          
          clglabel.innerText='Enter full college name'
          clglabel.style.color='red'
          return false
        
          
          
  
        }
    
            
            clglabel.innerText='College'
            clglabel.style.color='white'
            return true
       
     }
     
    














