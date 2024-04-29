const wrapper = document.getElementById('wrapper');
let isMousedown= false;
let start =-1;
let isMouseOver = false;
let selected=[];

function colorCells(startIndex,endIndex){
    const grids= document.querySelectorAll(".grid");
    grids.forEach((data,index)=>{
        if(index>= startIndex && index<=endIndex)
        {
          data.style.backgroundColor="green";
        }
        else{
            data.style.backgroundColor="";  
        }
    })
}

wrapper.addEventListener('mousedown',(e)=>{  //on select or click
    const grid = [...e.target.parentNode.children]; //all children within wrapper class , since event is added to that
    start = grid.indexOf(e.target); //index where the mousedown event was captured , or the element where we clicked
    colorCells(start,start);
   
})

wrapper.addEventListener('mousemove',(e)=>{ //on mouse move
   const currentIndex = [...e.target.parentNode.children].indexOf(e.target);
   if(isMouseOver==true)  //if mouse has moved over it then consider it into selected . If we dont use mouseover then it selects all grid that lies between startIndex to the index it ended . But we only want the index where we have moved our mousee
   {
    const minIndex = Math.min(start, currentIndex);
    const maxIndex = Math.max(start, currentIndex);
    colorCells(minIndex, maxIndex);
   }
})

wrapper.addEventListener('mouseover',(e)=>{ //on mouse move
     if(e.target)
     {
        isMouseOver=true;
     }
     else{
        isMouseOver=false;
     }
 })