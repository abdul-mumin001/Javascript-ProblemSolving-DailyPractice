// const elements=document.getElementsByClassName("para")
// const element=document.getElementById("some-para")

// console.log(elements);
// console.log(elements);

// return only first element 
// const el =document.querySelector("#id1, #id2, #id3")
// console.log(el);
// return  all elements 
// const els =document.querySelectorAll("#id1, #id2, #id3")

// console.log(els);



// modify css by js 

const firstPara=document.getElementById("some-para")

firstPara.style.fontSize='50px';
firstPara.style.background="green"

const newstyles={
    "fontsize":'60px',
    "color":"white"
}
Object.assign(firstPara.style, newstyles)

const b=document.querySelector("body")
b.style.background="aqua"
