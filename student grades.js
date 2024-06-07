
const calculate = () => {  
    let databasemangment = document.querySelector("#chemistry").value; 
    let dsa = document.querySelector("#hindi").value; 
    let java = document.querySelector("#maths").value; 
    let c++ = document.querySelector("#phy").value; 
    let grades = ""; 
    let totalgrades = 
        parseFloat(databasemangment) + 
        parseFloat(dsa) + 
        parseFloat(java) + 
        parseFloat(c++); 
    let percentage = (totalgrades / 400) * 100; 
    if (percentage <= 100 && percentage >= 80) { 
        grades = "A"; 
    } else if (percentage <= 79 && percentage >= 60) { 
        grades = "B"; 
    } else if (percentage <= 59 && percentage >= 40) { 
        grades = "C"; 
    } else { 
        grades = "F"; 
    } 
    if (databasemangment == "" || dsa == ""
                || java == "" || c++ == "") { 
        document.querySelector("#showdata").innerHTML 
            = "Please enter all the fields"; 
    } else { 
        if (percentage >= 39.5) { 
        document.querySelector( 
            "#showdata"
        ).innerHTML = 
            ` Out of 400 your total is ${totalgrades} 
            and percentage is ${percentage}%. <br> 
            Your grade is ${grades}. You are Pass. `; 
        } else { 
        document.querySelector( 
            "#showdata"
        ).innerHTML = 
            ` Out of 400 your total is ${totalgrades} 
            and percentage is ${percentage}%. <br> 
            Your grade is ${grades}. You are Fail. `; 
        } 
    } 
    }; 
    
