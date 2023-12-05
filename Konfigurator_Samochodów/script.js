w=document.getElementById("wypluwacz")
c=document.getElementById("cena")
f=document.getElementById("wybor")


const wzorzec=document.createElement("img")
wzorzec.src="dodge-charger-1901806_1280.jpg"
wzorzec.width="400"
src=document.getElementById("wypluwacz")

function zmiana(){
    if(document.forms.wybor.basic.checked){
    wzorzec.src="dodge-charger-1901806_1280.jpg"
    src.appendChild(wzorzec)
    c.innerHTML=basic.value
    
    }
    else{
    if(document.forms.wybor.zielony.checked){
    wzorzec.src="zielony.jpg"
    src.appendChild(wzorzec)
    c.innerHTML=zielony.value
   
    }
    else{
    if(document.forms.wybor.fioletowy.checked)
    {
    wzorzec.src="fioletowy.jpg"
    src.appendChild(wzorzec)
    c.innerHTML=fioletowy.value
   
    }
    else{
    if(document.forms.wybor.niebieski.checked)
    {
    wzorzec.src="niebieski.jpg"
    src.appendChild(wzorzec)
    c.innerHTML=niebieski.value
    }
    }
    }
    }

}

function price(){
checkboxy=document.querySelectorAll('input[type="checkbox"]')
suma =0
checkboxy.forEach(function(checkbox){
    if(checkbox.checked){
        suma+=parseInt(checkbox.value,10)
    }


})
c.innerHTML=suma+" PLN"
}
