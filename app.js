function mclear() {
    // console.log(a)
    // var clear = a;
    document.getElementById('input').value = ''
}

function getnumber(a) {
    let inputval=document.getElementById('input')
    inputval.value += a
    // console.log('input',inputval.value)
    // const operator=inputval.value[1
    
    // console.log('input',inputval.value)
    // const operator=inputval.value[1
}
    function getAnswer(){

        var getinput=document.getElementById('input')
         getinput=getinput.value
        var i = eval(getinput);
        console.log(i)
        document.getElementById('input').value=i


    }








// var i=0
// var interval;
// function start(){
//      interval=setInterval(counter,1000)
// }
    
// function counter(){
//     i++
//     console.log(i)
// }

// // console.log('interval',interval)
// // function stop(){
// //     clearInterval(interval)
// // }

// var interval;
// function hello(){
//     alert('hello')
// }
// function start(){
//  interval=setTimeout(hello,2000)
// }
// function stop(){
//     clearTimeout(interval)
// }
