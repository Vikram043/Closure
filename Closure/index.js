function outerFunction() {
    const message = "Hello from closure!";
  
    return function innerFunction() {
      console.log(message);
    };
  }
  

  const storedFunction = outerFunction();
  

  storedFunction();
  