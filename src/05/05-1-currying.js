const multiply = (a,b) => a*b;
const add = (a,b) => a+b;

const multiplyX = x => a => multiply(x,a);
const addX = x => a =>add(x,a)

const addFour = addX(4);
const multiplyTwo = multiplyX(2);
const multiplyThree = multiplyX(3);

const formula = x => addFour(multiplyThree(multiplyTwo(x)));

const formula2 = [multiplyTwo,multiplyThree,addFour].reduce(function(prevFunc,nextFunc){
    return function(value){
        return nextFunc(prevFunc(value));
    }
},function(k) { return k;})

function compose(...funcArr){
    return funcArr.reduce(function(prevFunc,nextFunc){
        return function(value){
            return nextFunc(prevFunc(...args));
        }
    },function(k){return k;})
}
const formulaWithCompose = compose(multiplyTwo,multiplyThree,addFour);


formulaWithCompose = compose(multiplyX(2),multiplyX(3),addX(4));
formulaWithCompose = addX(4)(multiplyX(3)(multiplyX(2)));