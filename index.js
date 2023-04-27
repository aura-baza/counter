window.addEventListener("DOMContentLoaded", ()=>{
    const decrease=document.querySelector(".decrease");
    const reset=document.querySelector(".reset");
    const increase=document.querySelector(".increase");
    const resultado=document.querySelector(".container__show__number");

    let numero=0;
   
    increase.addEventListener("click", ()=>{
       numero++;
       resultado.textContent=numero;
       resultado.style.color="green";
       if (numero<0) {
        resultado.style.color="red";
       }
       if (numero===0) {
        resultado.style.color="black";
       }
    });
    decrease.addEventListener("click", ()=>{
        numero--;
        resultado.textContent=numero;
        if (numero<0) {
            resultado.style.color="red";
           }
        if (numero===0) {
        resultado.style.color="black";  
        }
            
    });
    reset.addEventListener("click", ()=>{
        resultado.style.color="black";
        resultado.textContent="0";
        numero=0;
    });

});