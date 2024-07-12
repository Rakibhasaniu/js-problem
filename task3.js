function square(x) {
    return x * x;
}

function double(x) {
    return x * 2;
}

function addFive(x) {
    return x + 5;
}

function composedFunction(x) {
    return addFive(double(square(x)));
}


const result = composedFunction(3);  
console.log(result);  
