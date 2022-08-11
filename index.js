const inputText = document.getElementById("enter-answer");
const button = document.getElementById("btn");
const question=  document.getElementById("question");
const playbutton = document.getElementById("plbtn");
const hurryup =  document.getElementById("hurry");
const winLoss=   document.getElementById("win-loss");


var words = [  "data",  "five" ,  "race" ,"lace" ,  "best" ,"hide" ,  "code",  "stay",  "html" , "huge" ];

    counter=-1;
     playbutton.addEventListener("click", playFunction);
           
     function playFunction() {if(counter<=9){
      counter= counter+1;
      array = words[counter].split('');
      
      function shuffle(arr) {
         let currentIndex = array.length,  randomIndex;
       
         
         while (currentIndex != 0) {
       
           
           randomIndex = Math.floor(Math.random() * currentIndex);
           currentIndex--;
       
           
           [array[currentIndex], array[randomIndex]] = [
             array[randomIndex], array[currentIndex]];
         }
       
         return arr;
       }
       question.innerHTML = "Guess the word" + " " + shuffle(array);
       hurryup.innerHTML =  "Hurry up !  Time is running out!";
       playbutton.innerHTML= 'NEXT'
       hurryup.style.color= "red";


      
      }
       else{
         question.innerHTML = "GAME OVER"
         playbutton.style.display= "none";
         hurryup.innerHTML =  "";
         button.innerHTML= "";
         inputText.innerHTML="";
         button.style.display="none";
         inputText.style.display="none";
      }
     

     
     }
         
        
     


 button.addEventListener("click", Function);
   counterSecond = -1;
 
 function Function() {
   counterSecond = counterSecond +1;
       if(inputText.value==words[counterSecond]){
         hurryup.innerHTML= "YOU WON";
         question.innerHTML= "";
         hurryup.style.color= "green";
       }
       else{
         hurryup.innerHTML= "YOU LOSS";
         question.innerHTML= "";
         hurryup.style.color= "red";
       }
 }
        
        

     
       
       