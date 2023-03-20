function calculateNetSalary(){
    let basicSalary = parseFloat(document.getElementById("basicSalary").value);
    let benefits = parseFloat(document.getElementById("benefits").value);
    let grossSalary = basicSalary + benefits;
    let tax = 0;
    //Calculate the tax
    if (grossSalary <= 24000) {
      tax = 0;
    } else if (grossSalary <= 40000) {
      tax = (grossSalary - 24000) * 0.1;
    } else if (grossSalary <= 80000) {
      tax = 1600 + (grossSalary - 40000) * 0.2;
    } else if (grossSalary <= 120000) {
      tax = 9600 + (grossSalary - 80000) * 0.25;
    } else if (grossSalary <= 160000) {
      tax = 21600 + (grossSalary - 120000) * 0.3;
    } else {
      tax = 38400 + (grossSalary - 160000) * 0.35;
    }
    //Calculate NHIF Deductions
 let nhifDeductions = 0;
 if (grossSalary <= 5999) {
   nhifDeductions = 150;
 } else if (grossSalary <= 7999) {
   nhifDeductions = 300;
 } else if (grossSalary <= 11999) {
   nhifDeductions = 400;
 } else if (grossSalary <= 14999) {
   nhifDeductions = 500;
 } else if (grossSalary <= 19999) {
   nhifDeductions = 600;
 } else if (grossSalary <= 24999) {
   nhifDeductions = 750;
 } else if (grossSalary <= 29999) {
   nhifDeductions = 850;
 } else if (grossSalary <= 34999) {
   nhifDeductions = 900;
 } else if (grossSalary <= 39999) {
   nhifDeductions = 950;
 } else if (grossSalary <= 49999) {
    nhifDeductions = 1000;
  } else if (grossSalary <= 59999) {
    nhifDeductions = 1100;
  } else if (grossSalary <= 69999) {
    nhifDeductions = 1200;
  } else if (grossSalary <= 79999) {
    nhifDeductions = 1300;
  } else if (grossSalary <= 89999) {
    nhifDeductions = 1400;
  } else if (grossSalary <= 99999) {
    nhifDeductions = 1500;
  } else {
    nhifDeductions = 1700;
  }
  //NSSF Deductions
  let nssfDeductions = Math.min(grossSalary * 0.06, 2160);
  //Net Salary
  let netSalary = grossSalary - tax - nhifDeductions - nssfDeductions;
  //Output
  document.getElementById("grossSalary").innerHTML = `Gross Salary: KES ${grossSalary.toFixed(2)}`;
  document.getElementById("tax").innerHTML = `Payee (Tax): KES ${tax.toFixed(2)}`;
  document.getElementById("nhifDeductions").innerHTML = `NHIF Deductions: KES ${nhifDeductions.toFixed(2)}`;
  document.getElementById("nssfDeductions").innerHTML = `NSSF Deductions: KES ${nssfDeductions.toFixed(2)}`;
  document.getElementById("netSalary").innerHTML = `Net Salary: KES ${netSalary.toFixed(2)}`;
}


