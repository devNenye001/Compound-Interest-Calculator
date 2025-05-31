// COMPOUND INTEREST CALCULATOR 

function calculate(){

    //Declaring all the variables
    const totalAmount = document.getElementById("total-amount");
    const principalInput = document.getElementById("principal");
    const rateInput = document.getElementById("rate");
    const yearsInput = document.getElementById("years");

    //typecasting the values gotten from the input box
    let principal = Number(principalInput.value);
    let rate = Number(rateInput.value / 100);
    let years = Number(yearsInput.value);

    //SOME CHECKS ON THE USER INPUT
    if(principal < 0 || isNaN(principal)){
        principal = 0; 
        principalInput.value;
    }

     if(rate < 0 || isNaN(rate)){
        rate = 0; 
        rateInput.value;
    }

     if(years < 0 || isNaN(years)){
        years = 0; 
        yearsInput.value;
    }


    //Interest Rate Formula
    const result = principal * Math.pow((1 + rate / 1), 1 * years)

    //Display it on the HTML document
    totalAmount.textContent = result.toLocaleString((undefined), {style: "currency", currency: "NGN"});

    //To style the result
    totalAmount.style.color = "green";
    totalAmount.style.fontSize = "35px";
}