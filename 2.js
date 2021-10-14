        let X = undefined 
        console.log(X);
        if (typeof X === 'number') {
            console.log("число")
        } else if (typeof X === 'string') {
            console.log("строка");
        } else if (typeof X === 'boolean') {
            console.log("Логический");
                     
        }
        else {console.log("Тип x не определён");}