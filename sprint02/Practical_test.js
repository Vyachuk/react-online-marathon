// TASK 1

const filterNums = (arr, number = 0, condition) => {
    if(condition === 'less') return arr.filter(num => num < number)
    else return arr.filter(num => num > number)
};

// TASK 2

const howMuchSec = (sec=0, min=0, h=0, day=0, week=0, month=0, year=0) => {
    let resultArr = [sec, min*60, h*3600, day*86400, week*604800, month*2592000, year*31104000]
    return resultArr.reduce((acc, item) => {return acc + item},0)
}

//TASK 3

const maxInterv = (...rest) => {
    let result = 0;
    for(let i=0; i<rest.length-1;i++){
        let newRes = Math.abs(rest[i+1] - rest[i]);
        newRes > result ? result = newRes : null
    }
    return result;
}

//TASK 4

const sumOfLen = (...rest) => {
    return rest.join('').length;
}

//TASK 5
const combineFunctions = (...args) => x => args.reduce((y,f) => f(y),x)

//TASK 6

const getLanguages = (arr, condition = student => student) => {
    let result = arr.filter(condition)
    return result.reduce((acc,cur,ind,array)=> {
        return acc.concat(array[ind].languages)
    },[])
 };
