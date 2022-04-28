function transportFee(shiftPrices){
    switch(shiftPrices){
      case "morning":
    return "R20";
      case "afternoon":
    return "R10";
      default:
    return "free";}
    }
    console.log(transportFee('morning'));
    console.log(transportFee('afternoon'));
    console.log(transportFee('nightshift'));