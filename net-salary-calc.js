function netSalary(monthlyIncome, benefits){
  
  function taxRate (){
     //prompt the user to enter their monthly salary.
    let monthlyIncome = prompt('Enter monthly salary');
     //Conditions for setting the tax rate
    if(monthlyIncome = 24000){
      taxRate = 0.1;

    } else if(monthlyIncome => 24001 && monthlyIncome <= 32333){
      taxRate = 0.25;

    } else if(monthlyIncome > 32333 ){
     taxRate = 0.3;
    }
  } 
  
  const nssfRate = 0.6; 

  const grossSalary = monthlyIncome + benefits; //calculate gross salary

  const payee = monthlyIncome * taxRate; //Calculate payee.

  const nssfDeductions = monthlyIncome * nssfRate;// calculate the nssf deductions.

  const netSalary = grossSalary - payee - nssfDeductions; // calculate the net salary.

  //Create a result object to store the calculated values
  const result = {
    grossSalary: grossSalary,
    payee: payee,
    nssfDeductions: nssfDeductions,
    netSalary: netSalary,
  };

  return result;

}