let operator = ['+', '-', '', '/', '*', '.'];
let array = [];
let canOpenBracket = true;
let whitelistedKeys = {
    numKeys : ['1', '2', '3' ,'4' ,'5' ,'6' ,'7' ,'8' ,'9' ,'0'],
    opKeys : ['*', '+', '/', '-'],
    equalKeys : ['='],
    deleteKey : ['d'],
    clearKey : ['c'],
    decimalKey : ['.'],
    percentageKey : ['%']
}

function inputNumber(value){
    array.push(value);
    document.getElementById("textArea").innerText = array.join('');
}

function operatorInput(value){
    (!operator.includes(array[array.length - 1])) ? array.push(value) : '';
    document.getElementById("textArea").innerText = array.join('');
}

function decimal(){
    array.includes(".") != true ? (array.push('.'), document.getElementById("textArea").innerText = array.join('')):'';
}

function solve(){
    document.getElementById("textArea").innerText = eval(array.join(''));
    array = Array.from(String(eval(array.join(''))), Number);
    canOpenBracket = true;
}

function clearHolder(){
    while (array.length != 0) {
        array.pop();
    }
    document.getElementById("textArea").innerText = array.join('');
}

function delInput(){
    array.pop();
    document.getElementById("textArea").innerHTML = array.join('');
}

document.onkeydown = (x) => {
    if(whitelistedKeys.numKeys.includes(x.key))
    {
        array.push(x.key);
        document.getElementById("textArea").innerText = array.join('');
    }
    else if(whitelistedKeys.opKeys.includes(x.key))
    {
        if(whitelistedKeys.opKeys.includes(array[array.length - 1]) != true)
        {
            array.push(x.key);
            document.getElementById("textArea").innerText = array.join('');
        }
    }
    else if(whitelistedKeys.equalKeys.includes(x.key))
    {
        document.getElementById("textArea").innerText = eval(array.join(''));
        array = Array.from(String(eval(array.join(''))), Number);
        canOpenBracket = true;
    }
    else if(whitelistedKeys.deleteKey.includes(x.key))
    {
        array.pop();
        document.getElementById("textArea").innerHTML = array.join('');
    }
    else if(whitelistedKeys.clearKey.includes(x.key))
    {
        while (array.length != 0) {
            array.pop();
        }
        document.getElementById("textArea").innerText = array.join('');
    }
    else if(whitelistedKeys.decimalKey.includes(x.key))
    {
        array.includes(".") != true ? (array.push('.'), document.getElementById("textArea").innerText = array.join('')):'';
    }
    else if(whitelistedKeys.percentageKey.includes(x.key))
    {
        array.slice(-1) = dpm;
        if ((dpm == '1' || '2' || '3' || '4' || '5' || '6' || '7' || '8' || '9' || '0') == true){
        array.includes("%") != true ? (array.push('%'), document.getElementById("textArea").innerText = array.join('')):'';}
    }
}
