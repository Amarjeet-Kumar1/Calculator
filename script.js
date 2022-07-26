var disp = document.getElementById('dis');

var inputBtn = document.getElementsByClassName('input-btn');

var operand1 = 0;
var operand2 = null;
var operator = null;

function isOperator(value){
	return value == '/' || value == '*' || value == '-' || value == '+'
}

for(var i=0; i< inputBtn.length;i++){
	inputBtn[i].addEventListener('click', clicked);
}


function clicked(){
	var value = this.getAttribute('data-value');
	var text = disp.textContent.trim();
	if(isOperator(value)){
		operator = value;
		operand1 = parseFloat(text);
		disp.textContent = "";
	} else if(value == '='){
		operand2 = parseFloat(disp.textContent);
		var result = eval(operand1 + " " + operator + " " + operand2);
		disp.textContent = result;
	} else if(value == 'AC'){
		disp.textContent = "";
		operand1 = 0;
		operand2 = null;
		operator = null;
	} else if(value == '+/-'){
		var inp = parseFloat(text);
		inp = -1 * inp;
		disp.textContent = inp;
	} else if(value == '.') {
		if(text.length && !text.includes('.')){
			disp.textContent = text + '.';
		}
	} else if(value == '%'){
		operand1 = parseFloat(text);
		operand1 /= 100;
		disp.textContent = operand1;
	} else{
		disp.textContent += value;
	}
}