let val = prompt('Введите число');
        console.log(val);
       let newVal = +val;
       console.log(newVal);

       if (isNaN(newVal)) {
           console.log(val + ' не число');
       } else {
           console.log("num");
           if (newVal % 2) {
               console.log("не четное");
           } else {
               console.log("четное");
           }
       }