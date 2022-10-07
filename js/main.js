const titulos = document.querySelectorAll("dt")


// titulos.forEach((itemDt)=>{

//     itemDt.addEventListener("click",(e)=>{
//        const dd = itemDt.nextElementSibling      
//        dd.classList.toggle("ativo")

//     })
// })


titulos.forEach((itemTitulo)=>{
    itemTitulo.addEventListener("click",()=>{
    
      
        if(itemTitulo.classList.contains("ativo")){
            itemTitulo.classList.remove("ativo")
        }
        
        else{
            const itemTitulosAtivo = document.querySelectorAll(".ativo")
           
            itemTitulosAtivo.forEach((itemTituloAtivo)=>{
                itemTituloAtivo.classList.remove("ativo")
                
            })
            
             itemTitulo.classList.add("ativo") 

    
             }
            
            
    })
    })


