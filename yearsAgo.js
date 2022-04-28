function yearsAgo(year){
    var currentYear = 2022;
  const yearsFrom = new Date (year);
    
    let numOfYears = currentYear - yearsFrom ;
    return numOfYears;
    console.log(numOfYears)
  } 