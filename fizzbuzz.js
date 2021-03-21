/*I need to make a program that grabs 
the number the user enters and returns
 numbers from 1, up until the number the
  user entered. Wherever the numbers are divisible
   by 3 it should say fizz, and when the number
    is divisible by 5 it should say buzz.
    
    * user enters number
    * javascript gets the number
    * javascript sends back to the user every number
    from 1 to the number the user sent
    * javascript takes each number in that chain
   divisible by 3 and replaces it with fizz 
   and does the same thing with every number
   divisible by 5, but replaces it with buzz 

    */

   let para = document.getElementById("fizzy");
   let input = document.getElementById("userinput").value;
   let button = document.getElementById("submit");
   document.getElementById("submit").addEventListener("click", count);
   

   
   


  function count() {
    let input = document.getElementById("userinput").value;
      
       for (i = 1; i <= input; i++) {
           
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("fizzbuzz");
        } else if (i % 5 === 0) {
            console.log("buzz");
        } else if (i % 3 === 0) {
            console.log("fizz");
        } else 
        console.log(i);
    }
    
       
       
}


/* 
function count() {
    let answer = prompt("please enter the number you want to fizzbuzz up to");
      
       for (i = 1; i <= answer; i++) {
           
            if (i % 3 === 0 && i % 5 === 0) {
               console.log("fizzbuzz");
           } else if (i % 5 === 0) {
               console.log("buzz");
            } else if (i % 3 === 0) {
                console.log("fizz");
           } else console.log(i);
    }
    
       
       
}

count();
 */ 
