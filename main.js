let sum = false;
let minus = false;
let times = false;
let divide = false;
let textOpera = document.getElementById('opera');
let button1 = document.getElementById('btn1');
let button2 = document.getElementById('btn2');
let button3 = document.getElementById('btn3');
let button4 = document.getElementById('btn4');
let button = document.getElementById('btn');
let value1 = document.getElementById('num1');
let value2 = document.getElementById('num2');
let result;

button.addEventListener('click', myFunct1);
button1.addEventListener('click', function(){
	sum = true;
	minus = false;
    times = false;
    divide = false;
    console.log(sum);
    textOpera.textContent = 'Plus';
})
button2.addEventListener('click', function(){
	sum = false;
	minus = true;
    times = false;
    divide = false;
    console.log(minus);
    textOpera.textContent = 'Minus';
})
button3.addEventListener('click', function(){
	sum = false;
	minus = false;
    times = true;
    divide = false;
    console.log(times);
    textOpera.textContent = 'Times';
})
button4.addEventListener('click', function(){
	sum = false;
	minus = false;
    times = false;
    divide = true;
    console.log(divide);
    textOpera.textContent = 'Divide';
})

function myFunct1(){
	if(sum){
		result = parseInt(value1.value) + parseInt(value2.value);
		document.getElementById('surat').innerText = result;
		console.log("active");
	} else if (minus){
		result = parseInt(value1.value) - parseInt(value2.value);
		document.getElementById('surat').innerText = result;
		console.log("active");

	} else if (times){
		result = parseInt(value1.value) * parseInt(value2.value);
		document.getElementById('surat').innerText = result;
		console.log("active");

	} else if (divide){
		result = parseInt(value1.value) / parseInt(value2.value);
		document.getElementById('surat').innerText = result;
		console.log("active");
	} else{
		alert('Pick a operation');
	}

}
