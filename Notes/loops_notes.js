//For Loops vs While Loops
    //For loops are while loops with incrememnting NodeIterator
        //example
            let i = 0;
            while (i < 5) {
                console.log('Loop iteration #' , i);
                i+=1;
            }

            for (let i = 0; i < 5; i++) {
                console.log('Loop iteration #', i);
            }
            //or - below is always a great way to increase the incremint
            for (let i = 0; i < 5; i += 1) {
                console.log('Loop iteration #', i);
            }
            //example to do the icremint by 2
            for (let i = 0; i < 10; i += 2) {
                console.log('Printing only even numbers between o and 9:', i);
            }
    
    //for Loop Syntax and Walk Through
    /*initialization -  let i = 0   (it is executed once)
    condition -         i < 5       (only continues until true)
    final expression -  i++         (skipped until after code is run)
    code to execute -   console.log('Loop iteration #',i);  */

//use loops and arrasy to setup a dynamic number of iterations

    const guestsArray = ['Jack', 'Aravind', 'Samira', 'Haley', 'Lydia', 'Adrian'];
    for (let i = 0; i < guestsArray.length; i++) {
        console.log('Welcome to the party' + guestsArray[i] + '!');
    }

//For...Of Loops - with arrays and other iterables (use above formula in addition to below)
    /*for (cons/let variableName of arrayName) {
        ...code to execute once per each item in the array ...
    }*/
    for (const guest of guestsArray) {
        console.log('Welcome to the party ' + guest + '!');
    }

    //another example below will times each array being times by 3
    const arr = [10, 20, 30, 40]
    for(let key of arr) {
        console.log(key * 3)
    }
//Two Upper Case String Method - change const to let and add guest = guest.toUpperCase(); before console.log line

//Break and Continue Loop
