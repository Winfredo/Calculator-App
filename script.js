let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click' , (e) => {
      switch(e.target.innerText){
    // A function for the clear button
      case 'CE' :
          display.innerText = '';
        break;
        // a function for the back button
        case '←' :
          if (display.innerText){
            display.innerText = display.innerText.slice (0, -1);
          }   
          break;
          // A function for the equal button 
         case '=' :
          try{
            display.innerText = eval(display.innerText);
          } catch{
            display.innerText = "Error";
          }
         
        break;  
        default:
           display.innerText += e.target.innerText; 
      }
    });
 
    }
);