
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

//equal to
document.getElementById("equaling").addEventListener('click',()=>{
    document.getElementById("equaling").classList.add("equalTo");

setTimeout(()=>{
    document.getElementById("equaling").classList.remove("equalTo");
},100);
});

//nums
document.querySelectorAll(".num").forEach((button) => { //select kr lega saari num ki classes isliye for sabke liye All kia
    button.addEventListener('click', () => { //forEach() lagaya taki har ek selected class btn pe lage
        button.classList.add("numbers");
        setTimeout(() => {
            button.classList.remove("numbers");
        }, 100);
    });
});

//symbols
document.querySelectorAll(".symbols").forEach((button)=>{
    button.addEventListener('click',()=>{
        button.classList.add('newSymbol');
        setTimeout(()=>{
            button.classList.remove('newSymbol');
        },100);
    });
});


//backspace
document.getElementById("clear").addEventListener('click',()=>{
    document.getElementById("clear").classList.add("clean");
    setTimeout(()=>{
        document.getElementById("clear").classList.remove("clean");
    },100);
});

//clear
document.getElementById("backS").addEventListener('click',()=>{
    document.getElementById("backS").classList.add("backSpace");
    setTimeout(()=>{
        document.getElementById("backS").classList.remove("backSpace");
    },100);
});