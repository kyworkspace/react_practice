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
//배열을 전달하지 않고 원하는 만큼 전달해 조립

