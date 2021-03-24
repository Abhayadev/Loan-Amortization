
function loaddata()
{
    window.principal= parseFloat(document.querySelector('#principal').value);
    window.interest = parseFloat(document.querySelector("#interest").value/100.0);
    window.years= parseInt(document.querySelector("#years").value);
	window.months = years*12 ;	
    window.field = document.querySelector("#output");
}
function printdata()
{
	field.textContent = null
	field.innerHTML += amort_scheme(principal, interest, months);
}
function amort_scheme(principal, interest, months)
{
	var monthly_int = interest/12;
	
    var payment = principal* (monthly_int)*Math.pow((1+monthly_int), months)/(Math.pow((1+monthly_int), months)-1)
	  
    var result = "";
		
        result += "<table border='1'><tr><th>Payment No.</th><th>Payment Amount</th>" + 
        "<th>Principal Amount Paid</th><th>Interest Amount Paid</th><th> Loan Outstanding Balance</th>";
	for (var count = 0; count < months; ++count)
	{ 
		var interest = principal* monthly_int;
		var monthlyPrincipal = payment - interest;
		result += "<tr align=center>";
		result += "<td>" + (count + 1) + "</td>";
		result += "<td> $" + payment.toFixed(2) + "</td>";
        result += "<td> $" + monthlyPrincipal.toFixed(2) + "</td>"; 
		result += "<td> $" + interest.toFixed(2) + "</td>";		
		result += "<td> $" + principal.toFixed(2) + "</td>";	
		result += "</tr>";		
		principal= principal- monthlyPrincipal;		
	}
    result += "</table>";

    return result;

}

