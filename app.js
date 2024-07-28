
let startButton = document.querySelector("#startbutton");
startButton.addEventListener("click", function(){
    let range = document.querySelector("#range");
    let label = document.querySelector("label");

    console.log(range.value);
    if(!(range.value >=0)){
        label.innerText="Please enter a value greater than zero";
    }
    else{

   
    let maxNumber = range.value;
    let random = Math.floor(Math.random() * maxNumber) + 1;
    console.log(random);
    startButton.classList.add("startbuttongo");
    let hint = document.querySelector(".hint");
    let guess = document.querySelector(".guess");
    let submit = document.querySelector(".submit")
    hint.classList.remove("beforestart");
    guess.classList.remove("beforestart");
    submit.classList.remove("beforestart");

   
        submit.addEventListener("click",function(event){
            let guessed = guess.value;
            console.log(guessed);
            
                
            if(guessed == random){
                hint.innerText=`You won!!! Value is ${guessed}`;
                let img = document.querySelector("img");
                img.setAttribute("src","https://png.pngtree.com/png-vector/20220521/ourmid/pngtree-comic-speech-bubbles-with-text-you-win-png-image_4667123.png");
                let arr = ["#d9a2ff", "#fbb5ff", "#ffe4f0", "#a2ceff", "#ff9595"];
                let body = document.querySelector("body");
                let index = 0;
        
                setInterval(function() {
                    body.style.backgroundColor = arr[index];
                    index = (index + 1) % arr.length;
                }, 500);
                
            }
            else if(guessed > random){
                hint.innerText=`Value is lower than ${guessed}`;
            }
            
            else{
                hint.innerText=`Value is greater than ${guessed}`;
            }
            
     

        
        })
    }
})
