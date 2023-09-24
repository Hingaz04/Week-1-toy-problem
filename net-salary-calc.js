function netSalary(monthlyIncome, benefits){
  
  function taxRate (){

    let monthlyIncome = prompt('Enter monthly salary');

    if(monthlyIncome = 24000){
      taxRate = 0.1;

    } else if(monthlyIncome => 24001 && monthlyIncome <= 32333){
      taxRate = 0.25;

    } else if(monthlyIncome > 32333 ){
     taxRate = 0.3;
    }
  } 
  
  const nssfRate = 0.6; 

  const grossSalary = monthlyIncome + benefits;

  const payee = monthlyIncome * taxRate;

  const nssfDeductions = monthlyIncome * nssfRate;

  const netSalary = grossSalary - payee - nssfDeductions;


  const result = {
    grossSalary: grossSalary,
    payee: payee,
    nhifDeductions: nhifDeductions,
    nssfDeductions: nssfDeductions,
    netSalary: netSalary,
  };

  return result;

}