interwal=1000;
function PokaCzas(){
    c=document.getElementById("czas")
    czas=new Date();
    c.innerHTML=czas;
    
}
 setInterval(PokaCzas,interwal)
