// const list={
//     value:1,
//     next:{
//         value:2,
//         next:{
//             value:3,
//             next:{
//                 value:5,
//                 next:null,
//             },
//         },
//     },
// };


// let current=list;
// console.log(list)
// while(current !== null){
//     console.log(current)
//     current.value +=1;
//     current=current.next;
// }
// console.log(list)




const list={
    value:1,
    next:{
        value:2,
        next:{
            value:3,
            next:{
                value:5,
                next:null,
            },
        },
    },
};


let current=list;
console.log(list)
while(current !== null){
   
    if(current % 2==0){
        current.value *=2;
    }else{
        current.value *=3;
    }
    
    current=current.next;
}
console.log(list)