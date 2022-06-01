function compute()
{
    	//getting the elements and assigning to variables
    	let principal = document.getElementById("principal").value; 	// get principal
    	let rate = document.getElementById("rate").value;		// get rate
    	let years = document.getElementById("years").value;		// get years
    	let interest = principal * years * rate / 100;			// compute interest
    	let year = new Date().getFullYear() + parseInt(years); 		// compute date

	if(principal <= 0){ 			// if principal is 0 or less, display alert
        alert("Please enter a positive number");
        document.getElementById("principal").focus();
        return false;


}
       	//display result
   document.getElementById("result").innerHTML = `If you deposit <mark>${principal}</mark>, <br> at an interest rate of <mark>${rate}</mark> %<br> You will receive an amount of <mark>${interest}</mark> in the year <mark>${year}</mark> <br>`
}


//function that updates the slider value and displays to screen
function updateRate(){
	let rateval = document.getElementById("rate").value;
    	document.getElementById("rate_val").innerText = rateval + "%";
}      
