const items = [...document.querySelectorAll(".number")];
console.log(items);
function updateCount (ele){
     const value = parseInt(ele.dataset.value);
     const increment =  Math.ceil(value/1000);
     console.log(ele);
     console.log(value);
     console.log( ele.textContent );
     let initialValue=0;
  const intervalID = setInterval(()=>{
      
       if(initialValue>=value){
       
        ele.textContent= `${value}+`;
        clearInterval(intervalID);
        return;
       }
        ele.textContent = initialValue;
        initialValue += increment;

     },1);

}
items.forEach((item)=>{
            updateCount(item);
});