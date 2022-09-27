const mixedSignNumbers = [3, 15, 14, -2, -3, -8, -103, 4];


mixedSignNumbers.forEach(function(number){
    if (number < 0 && number % 2 === 0 || number > 0 && number % 2 === 0)  {console.log(number); }
     
    })