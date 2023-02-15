let health=document.getElementById("hp1")
let heal=document.getElementById("hp2")
hlth=1500
damage=5000

let x=Math.floor(Math.random() * 401)
z=Math.floor(Math.random() * 101  )

function fight(){
    damage=damage-x
    heal.innerText=damage
   
    

       
        hlth-=z
        health.innerText=hlth

    if (damage<=0){
    
        document.getElementById("button1").disabled = true;
       
        document.getElementById("button2").disabled = true;
        
        document.getElementById("hp2").innerText=("0")
       
        
        document.getElementById("win1").innerText=("Game over YOU WIN!!!")
        }
        if (hlth<=0){
    
            document.getElementById("button1").disabled = true;
            document.getElementById("button1").innerText=("----")
            document.getElementById("button2").disabled = true;
            document.getElementById("button2").innerText=("----")
            
            document.getElementById("hp1").innerText=("0")
           
            
            document.getElementById("win2").innerText=("Game over died!!!")
            }
}
let y=Math.floor(Math.random() * 301)
let count=0

function help(){
    
    hlth=hlth+y
    health.innerText=hlth
    count+=1
   console.log(count)
   if (count>6){
    
    
        
       
        document.getElementById("button2").disabled = true;
        
        console.log(count)
        document.getElementById("button2").innerText=("----");
       
        alert("no heal left!!!");
        
    
   }
}

function surrender(){
    document.getElementById("button1").disabled = true;
            document.getElementById("button1").innerText=("----")
            document.getElementById("button2").disabled = true;
            document.getElementById("button2").innerText=("----")
            
            
           
            
            document.getElementById("win2").innerText=("Game over you gave up")
}


    
    
    
   

