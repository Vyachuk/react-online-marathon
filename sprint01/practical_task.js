/////////////    TASK 1 ////////////////
function getModifiedArray(array) {
   let arr = [...array];
   arr.splice(0,1,"Start");
   arr.splice(-1,1,"End");
   return arr;
}

/////////////    TASK 2  ////////////////
function combineArray(arr1, arr2) {
    let newArr = [];
    for(let arg of arr1){
        if(typeof arg == 'number'){
            newArr.push(arg);
        }
    }
    for(let arg of arr2){
        if(typeof arg == 'number'){
            newArr.push(arg);
        }
    }
    return newArr;
}

/////////////    TASK 3  ////////////////

function longestLogin(loginList) {
    let result = loginList.reduce( function(x,y,index) {
        if(x.length == y.length) return loginList[index];
        else if(x.length < y.length) return y;
        else return x;
    },loginList[0])
return result;
}

/////////////    TASK 4  ////////////////

function factorial(n) {
    return (n > 1) ? n * factorial(n - 1) : 1;
}

function processArray(arr, factorial) {
    let newArr = [];
    arr.map( arg => {
        newArr.push(factorial(arg));
    })
    return newArr;
}

/////////////    TASK 5.  ////////////////

function checkAdult(age){
    try {
        if(typeof(age) == 'undefined') throw new Error("Please, enter your age");
        if(age <= 0) throw new Error("Please, enter positive number");
        if(age > 0 && age < 18) throw new Error("Access denied - you are too young!");
        if(typeof(age) !== "number") throw new Error("Please, enter number");
        if(!Number.isInteger(age)) throw new Error("Please, enter Integer number");
        console.log('Access allowed');
    }
    catch(e) {
        console.log(e.name + " " + e.message)
    }
    finally{
        console.log('Age verification complete');
    }
}

/////////////    TASK 6.    ////////////////

const accountPatients = (count) => {
    let beds = count;
    
    const admit = () => {
        if(beds < 1){
            console.log('Can not admit a patient, no beds available');
        }
        else {
            beds--;
            console.log(`A patient was admitted, ${beds} beds are available`);
        }
    }
    
    const discharged = () => {
        if(beds == count){
            console.log('There are no patients to discharge');
        }
        else {
            beds++;
            console.log(`A patient was discharged, ${beds} beds are available`);
        }
    }
    return [admit, discharged];
}
