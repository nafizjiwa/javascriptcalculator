let display = document.getElementById('inputBox');
//1
let buttons = document.querySelectorAll('button');
//2
let buttonsArray = Array.from(buttons);
//3
let string = '';

//4
buttonsArray.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
      if(e.target.innerHTML === "DEL"){
          string = string.substring(0, string.length-1);
          display.value = string;
      }else if(e.target.innerHTML === "AC"){
            string = "";
            display.value = string;
      }else if(e.target.innerHTML === "="){
            string = eval(string)
            display.value = string;
      }else {
        string += e.target.innerHTML;
        display.value = string;
      }    
    });
});


1//Store all nodelist buttons in buttons variable
2//Now convert nodelist --> array 
3// Then use forEach method to 
    //separate the buttons array 
    //into individual arrays
4//Add an eventlistener to each
    //button to hear when a button is 
    //clicked also pass what event 
    //happened with the click
