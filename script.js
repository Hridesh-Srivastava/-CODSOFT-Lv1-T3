
function sin(){
    document.calcul.result.value = Math.sin(toRadians(document.calcul.result.value));
}

function cos(){
    document.calcul.result.value = Math.cos(toRadians(document.calcul.result.value));
}

function tan(){
    document.calcul.result.value = Math.tan(toRadians(document.calcul.result.value));
}

function BACKSPC(){
    var a = document.calcul.result.value;
    document.calcul.result.value = a.substr(0, a.length-1);
}

function square(){
    document.calcul.result.value = Math.pow(document.calcul.result.value, 2);
}

function sqrt2(){
    document.calcul.result.value = Math.pow(document.calcul.result.value, 1/2);
}

function sqrt3(){
    document.calcul.result.value = Math.pow(document.calcul.result.value, 1/3);
}

function number(value){
    document.calcul.result.value += value;
}

function remv(){
    document.calcul.result.value = "";
}

function log() {
    document.calcul.result.value += "Math.log10(";
}

function xor() {
    document.calcul.result.value += " ^ ";
}

function openBracket() {
    document.calcul.result.value += "(";
}

function closeBracket() {
    document.calcul.result.value += ")";
}

function pi() {
    document.calcul.result.value = Math.PI;
}
function e() {
    document.calcul.result.value = Math.E;
}

function factorial() {
    let num = parseInt(document.calcul.result.value);
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact *= i;
    }
    document.calcul.result.value = fact;
}

function equal() {
    let expression = document.calcul.result.value;
    expression = expression.replace(/\^/g, '**');

    let openParentheses = (expression.match(/\(/g) || []).length;
    let closeParentheses = (expression.match(/\)/g) || []).length;
    let unclosedParentheses = openParentheses - closeParentheses;

    for (let i = 0; i < unclosedParentheses; i++) {
        expression += ")";
    }

    try {
        document.calcul.result.value = eval(expression);
    } catch (e) {
        document.calcul.result.value = "Error";
    }
}

function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}
