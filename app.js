// const val = document.getElementById('value');
// const increase = document.getElementById('increase');
// const reset = document.getElementById('reset');
// const decrease = document.getElementById('decrease');

// let count = 0;

// increase.addEventListener('click', function(){
//     count++;
//     val.textContent = count;
//     checkingIncrease(count);
    
// })

// reset.addEventListener('click', function(){
//     count = 0;
//     val.textContent = count;
//     val.style.color = "black";
// })

// decrease.addEventListener('click', function(){
//     count--;
//     val.textContent = count;
//     checkingDecrease(count);
// })


// function checkingDecrease(x){
//     if(x < 0){
//         val.style.color = "red";
//     }else if(x == 0){
//         val.style.color = "black";
//     }else{
//         val.style.color = "green";
//     }
// }

// function checkingIncrease(x){
//     if(x > 0){
//         val.style.color = "green";
//     }else if(x == 0){
//         val.style.color = "black";
//     }else{
//         val.style.color = "red";
//     }
// }

//initial Count

let count = 0;

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;{
            if(styles.contains('decrease')){
                count--
            }
            else if(styles.contains('increase')){
                count++;
            }else{
                count = 0;
            }
            if(count > 0){
                value.style.color = "green";
            }else if(count < 0){
                value.style.color = "red"
            }else{
                value.style.color = "black";
            }
            value.textContent = count;
        }
    })
})