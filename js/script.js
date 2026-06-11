document.addEventListener("keydown", (event)=>{
    const childDiv = document.getElementById(event.key);
    const parentDiv = childDiv.parentNode;

    switch (parentDiv.className){
        case "row1":
            childDiv.style.backgroundColor="purple";
        break;
        case "row2":
         childDiv.style.backgroundColor="blue";
        break;
         case "row3":
            childDiv.style.backgroundColor="pink";
        break;
         case "row4":
            childDiv.style.backgroundColor="purple";
        break;
         case "row5":
            childDiv.style.backgroundColor="blue";
        break;
         case "row6":
            childDiv.style.backgroundColor="pink";
        break;
      

    }
})

document.addEventListener("keyup", (event)=>{   
    document.getElementById(event.key).style.removeProperty("background-color");
})