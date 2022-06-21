var message = ""

// correct answer
var answer = 3

// Count the number of attempts
var counter = 1

// If the button is pressed then use this function "play"
function play(){

    do{
        var input1 = prompt("Guess the number from 1 to 10.")
    
        input1 = parseInt(input1)
    
        if(input1 != answer){
            alert("Sorry! You Guessed It Wrong!")
        }
        else{
            flag = true
            break
        }
    
        // Only 3 attempts are allowed
        if(counter == 3){
            break
        }
        counter++
    }
    while(answer != input1)
    
    if(flag){
        prompt("Congratulations! You Guessed Right..." + answer + " is the correct answer.")
    }
    else{
        prompt("Sorry! Better Try it Again")
    }
    

}