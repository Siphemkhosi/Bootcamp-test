function regCheck(regNum,Loc){
    return regNum.includes(Loc);
  }
  console.log(regCheck('DC 55 YU GP', 'GP'));
  console.log(regCheck('5566 L', 'L'));
  console.log(regCheck('ERT 123 EC', 'EC'));
  console.log(regCheck('ERT 123 EC', 'GP'));
  