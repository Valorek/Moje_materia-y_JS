f=document.getElementById("form");

w=document.getElementById("wypluwacz");
//spr numery
rexN=/^[0-9]+$/;
//spr tekst
rexT = /^[a-zA-Z]+$/;
//spr date 2023-10-08
rexD = /^\d{4}-\d{2}-\d{2}$/;
//spr kolor

// osoba = {
//     imie: "Piotrek",
//     nazwisko: "Mika",
//     wiek: 38,
//     zestawDane: function(){
//         return "Imie" + this.imie + "<br> nazwisko: " + this.nazwisko;
//     }

// }
// console.log(osoba.zestawDane)
// w.innerHTML=osoba.zestawDane();


// f.name.style.color="red";
// f.name.style.backgroundColor="blue";
// f.name.disable=true;

f.name.addEventListener("change", function(e){
    Valid(this);
 });
f.surname.addEventListener("change", function(e){
    Valid(this);
 });
f.dob.addEventListener("change", function(e){
    Valid(this);
 });
f.gender.addEventListener("change", function(e){
    Valid(this);
 });
f.surname.addEventListener("change", function(e){
    Valid(this);
 });
f.surname.addEventListener("change", function(e){
    Valid(this);
 });
f.surname.addEventListener("change", function(e){
    Valid(this);
 });

 f.btn.disabled=true;
 f.btn.style.color="red";
 f.btn.innerHTML="zablokowany";

 //imie
function Valid(){
 if(f.name.value.length>3){
    f.name.style.color="#fff";
    f.name.style.backgroundColor="green";
    f.btn.disabled=false;
    f.btn.style.color="white";
    f.btn.innerHTML="Wyślij";
}
else{
    f.name.style.color="#fff";
    f.name.style.backgroundColor="red";
    f.btn.disabled=true;
    f.btn.style.color="red";
    f.btn.innerHTML="zablokowany";

}

if(f.surname.value.length>3){
    f.surname.style.color="#fff";
    f.surname.style.backgroundColor="green";
    f.btn.disabled=false;
   }
   else{
       f.surname.style.color="#fff";
       f.surname.style.backgroundColor="red";
       f.btn.disabled=true;
       f.btn.style.color="red";
       f.btn.innerHTML="zablokowany";

   }


if(f.gender.value =='male' || 'famale'){
    f.gender.style.color="#fff";
    f.gender.style.backgroundColor="green";
    f.btn.disabled=false;

}
else{
    f.gender.style.color="#fff";
    f.gender.style.backgroundColor="red";
    f.btn.disabled=true;
    

}


   }
