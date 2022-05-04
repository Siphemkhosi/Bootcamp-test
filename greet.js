console.log("in greet.js")


    function greet(name){
        if(typeof(name) === "string" && name !==""){
      return "Hello, " + name ;
    }else {
      return "enter valid name please";
      }
    }
      
      
      var message = greet("bob");
      console.log(message);
      var message = greet ("");
      console.log(message);
    var message = greet("bob");
    console.log(message);