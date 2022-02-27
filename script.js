const bgColor = document.querySelector(".bgColor");
const selector1 = document.querySelector("#selector1");
const selector2 = document.querySelector("#selector2");
const selector3 = document.querySelector("#selector3");
const displayContainer = document.querySelector(".display-container");
const mainContainer = document.querySelector(".main-container");
const calculatorContainer = document.querySelector(".calculator-container");

const btn = document.querySelectorAll(".btn");
const btnDel = document.querySelector(".btn-del");
const btnReset = document.querySelector(".btn-reset")
const btnEqual = document.querySelector(".btn-equal")

const toggleBground = document.querySelector(".toggle-bground");
const toggle = document.querySelector(".toggle");

selector1.addEventListener("click", function(){
	toggleBground.classList.add("toggle-bground");
	toggleBground.classList.remove("toggle-bground-theme2");
	toggleBground.classList.remove("toggle-bground-theme3");
	toggle.classList.add("toggle-theme1");
	toggle.classList.remove("toggle-theme2")
	toggle.classList.remove("toggle-theme3")
	bgColor.style.backgroundColor = " var(--clr-main-background-theme1)";
	displayContainer.style.backgroundColor = "var(--clr-screen-theme1)" ;
	displayContainer.style.color = "var(--clr-key-grayishYellow-theme1)";
	mainContainer.style.backgroundColor= "var(--clr-main-background-theme1)";
	mainContainer.style.color = "var(--clr-white-text)";

	calculatorContainer.style.backgroundColor = "var(--clr-keypad-background-theme1)";

	for(i = 0; i < btn.length; i++){
	btn[i].style.backgroundColor = "var(--clr-white-text)";
	btn[i].style.color =  'var(--clr-keypad-background-theme1)';
	btn[i].style.boxShadow = "-1px 2px 0 0 var(--clr-white-text)";
	btn[i].style.border = "2px solid var(--clr-white-text)";
	}
	btnDel.style.color = "var(--clr-white-text)";
	btnDel.style.backgroundColor = 'lightsteelblue';
	btnDel.style.border=  'var(--clr-keypad-background-theme1)';
	btnDel.style.boxShadow = '-1px 2px 0 0 var(--clr-keypad-background-theme1)';
	btnReset.style.color = "var(--clr-white-text)";
	btnReset.style.backgroundColor = 'lightsteelblue';
	btnReset.style.border=  'var(--clr-keypad-background-theme1)';
	btnReset.style.boxShadow = '-1px 2px 0 0 var(--clr-keypad-background-theme1)';
	btnEqual.style.color = "var(--clr-white-text)";
	btnEqual.style.backgroundColor = ' var(--clr-key-red-toggle-theme1)';
	btnEqual.style.border=  'var(--clr-key-red-shadow-theme1)';
	btnEqual.style.boxShadow = '-1px 2px 0 0 var(--clr-key-red-shadow-theme1)';

})
selector2.addEventListener("click", function(){
	toggleBground.classList.add("toggle-bground-theme2");
	toggleBground.classList.remove("toggle-bground");
	toggleBground.classList.remove("toggle-bground-theme3");
	toggle.classList.add("toggle-theme2");
	toggle.classList.remove("toggle-theme1")
	toggle.classList.remove("toggle-theme3")
	bgColor.style.backgroundColor = "var(--clr-main-background-theme2)";
	displayContainer.style.backgroundColor = "var(--clr-screen-theme2)" ;
	displayContainer.style.color = "black";
	mainContainer.style.backgroundColor= "var(--clr-main-background-theme2)";
	mainContainer.style.color = "black";

	calculatorContainer.style.backgroundColor = "var(--clr-keypad-background-theme2)";

	for(i = 0; i < btn.length; i++){
	btn[i].style.backgroundColor = "var(--clr-key-background-theme2)";
	btn[i].style.color =  'black';
	btn[i].style.boxShadow = "-1px 2px 0 0 var(--clr-key-shadow-theme2)";
	btn[i].style.border = "2px solid var(--clr-key-shadow-theme2)";
	}
	btnDel.style.color = "var(--clr-white-text)";
	btnDel.style.backgroundColor = ' var(--clr-key-cyan-background-theme2)';
	btnDel.style.border=  'var(--clr-key-cyan-background-theme2)';
	btnDel.style.boxShadow = '-1px 2px 0 0 var(--clr-key-cyan-shadow-theme2)';
	btnReset.style.color = "var(--clr-white-text)";
	btnReset.style.backgroundColor = ' var(--clr-key-cyan-background-theme2)';
	btnReset.style.border=  'var(--clr-key-cyan-background-theme2)';
	btnReset.style.boxShadow = '-1px 2px 0 0 var(--clr-key-cyan-background-theme2)';
	btnEqual.style.color = "var(--clr-white-text)";
	btnEqual.style.backgroundColor = ' var(--clr-orangekey-toggle-theme2)';
	btnEqual.style.border=  'var(--clr-orangekey-shadow-theme2)';
	btnEqual.style.boxShadow = '-1px 2px 0 0 var(--clr-orangekey-shadow-theme2)';
})

selector3.addEventListener("click", function(){
	toggleBground.classList.add("toggle-bground-theme3");
	toggleBground.classList.remove("toggle-bground");
	toggleBground.classList.remove("toggle-bground-theme2");
	toggle.classList.add("toggle-theme3");
	toggle.classList.remove("toggle-theme2")
	toggle.classList.remove("toggle-theme1")
	bgColor.style.backgroundColor = " var(--clr-main-background-theme3)";
	displayContainer.style.backgroundColor = "var(--clr-screen-theme3)" ;
	displayContainer.style.color = "var(--clr-lightYellow-text-theme3)";
	mainContainer.style.backgroundColor= "var(--clr-main-background-theme3)";
	mainContainer.style.color = "var(--clr-lightYellow-text-theme3)";
	calculatorContainer.style.backgroundColor = "var(--clr-screen-theme3)";
	for(i = 0; i < btn.length; i++){
	btn[i].style.backgroundColor = "var(--clr-key-voilet-theme3)";
	btn[i].style.color =  'var(--clr-key-voilet-theme3)';
	btn[i].style.boxShadow = "0 2px 0 0 var(--clr-key-shadow-theme3)";
	btn[i].style.border = "2px solid var(--clr-key-magenta-shadow-theme3)";
	}
	btnDel.style.color = "var(--clr-white-text)";
	btnDel.style.backgroundColor = 'var(--clr-key-background-theme3) ';
	btnDel.style.border=  'var(--clr-magenta-shadow-theme3)';
	btnDel.style.boxShadow = "0 2px 0 0 var(--clr-key-shadow-theme3)";
	btnReset.style.color = "var(--clr-white-text)";
	btnReset.style.backgroundColor =  'var(--clr-key-background-theme3)';
	btnReset.style.border=  'var(--clr-magenta-shadow-theme3)';
	btnReset.style.boxShadow = "0 2px 0 0 var(--clr-key-shadow-theme3)";
	btnEqual.style.color = "var( --clr-darkBlue-text-theme3)";
	btnEqual.style.backgroundColor = ' var(--clr-cyankey-background-theme3)';
	btnEqual.style.border=  'var(--clr-cyankey-shadow-theme3)';
	btnEqual.style.boxShadow = '-1px 2px 0 0 var(--clr-cyankey-shadow-theme2)';
})

class Calculator {
	constructor(previousOperandTextElement, currentOperandTextElement) {
		this.previousOperandTextElement = previousOperandTextElement
		this.currentOperandTextElement = currentOperandTextElement
		this.clear()
	}
	clear() {
		this.currentOperand = ""
		this.previousOperand = ""
		this.operation = undefined
	}
	delete() {
		this.currentOperand = this.currentOperand.toString().slice(0, -1)

	}
	appendNumber(number) {
		if (number === '.' && this.currentOperand.includes(".")) return
		this.currentOperand = this.currentOperand.toString() + number.toString()
	}
	chooseOperation(operation) {
		if (this.currentOperand === '') return
		if (this.previousOperand !== '') {
			this.compute()
		}	
		this.operation = operation
		this.previousOperand = this.currentOperand
		this.currentOperand = ''
	}
	compute() {
		let computation
		const prev = parseFloat(this.previousOperand);
		const current = parseFloat(this.currentOperand);
		if (isNaN(prev) || isNaN(current)) return
		switch(this.operation) {
			case '+': 
				computation = prev + current
				break
			case '-': 
				computation = prev - current
				break
			case 'x': 
				computation = prev * current
				break
			case '/': 
				computation = prev / current
				break
			default: 
				return

			}

			this.currentOperand = computation
			this.operation = undefined
			this.previousOperand = ""
	}

	getDisplayNumber(number) {
		const stringNumber = number.toString()
		const integerDigits = parseFloat(stringNumber.split(".")[0])
		const decimalDigits = stringNumber.split(".")[1]
		let integerDisplay
		if(isNaN(integerDigits)) {
			integerDisplay = ''
		} else {
			integerDisplay = integerDigits.toLocaleString('en', {maximumFractionDigits: 0})
		}
		if (decimalDigits != null) {
			return `${integerDisplay}.${decimalDigits}`
		} else {
			return integerDisplay
		}
	}
	updateDisplay() {
		this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand)
		if(this.operation != null) {
		this.previousOperandTextElement.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
	} else {
		this.previousOperandTextElement.innerText = ""
	}
 }
}

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const resetButton = document.querySelector("[data-reset]");
const previousOperandTextElement = document.querySelector("[data-previous-operand]");
const currentOperandTextElement = document.querySelector("[data-current-operand]");

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
	button.addEventListener('click', () => {
		calculator.appendNumber(button.innerText)
		calculator.updateDisplay();
	})
})
operationButtons.forEach(button => {
	button.addEventListener('click', () => {
		calculator.chooseOperation(button.innerText)
		calculator.updateDisplay();
	})
})

equalsButton.addEventListener("click", button => {
	calculator.compute()
	calculator.updateDisplay()
} )
resetButton.addEventListener("click", button => {
	calculator.clear()
	calculator.updateDisplay()
} )
deleteButton.addEventListener("click", button => {
	calculator.delete()
	calculator.updateDisplay()
} )