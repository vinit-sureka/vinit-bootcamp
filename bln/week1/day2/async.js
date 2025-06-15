setTimeout(() => {
    console.log('timer is done')
},1);

// for(let i =0 ; i < 2000; i++){
// console.log('vinit')}


let i = 0;
function loopChunk(){
    for(let j = 0 ;j < 10 && i <200 ;j++,i++) 
        console.log('vinit',i,"i",j,"j")

    if(i < 200)
        setTimeout(loopChunk,0)
}

loopChunk()


// const fetchData = callback => {
//     setTimeout(() => {
//         callback('done');
//     },1500)
// }

// setTimeout(() => {
//     console.log('timer is done');
//     fetchData(text => { console.log(text)})
// },2000)

// console.log('hello')
// console.log('hii')