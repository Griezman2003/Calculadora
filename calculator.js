class Calculator {
    constructor(operands1Element, operands2Element){
        this.operands1Element = operands1Element;
        this.operands2Element = operands2Element;
        this.clear();
    }

    clear(){
        this.operand1 = 0;
        this.operand2 = 0;
        this.operator = '';
        this.updateUI();
    }

    updateUI(){
        this.operands1Element.innerHTML = this.operand1 + this.operator;
        this.operands2Element.innerHTML = this.operand2;
    }

    appendNumber(number){
        if(number=== "." && this.operand2.includes('.')) return;

        this.operand2 = this.operand2 === 0 ? number
        : this.operand2.toString() + number;
        this.updateUI();
    }


    delete(){
        if(this.operand2===0) return;
        this.operand2 = +this.operand2.toString().slice(0,-1);
        this.updateUI();
    }

    operation(operator){
        if(this.operator){
            this.calculo();
        }
        this.operator = operator;
        this.operand1 = +this.operand2 === 0 ? this.operand1:this.operand2;
        this.operand2 = 0;
        this.updateUI();
        }

        calculo(){
            switch(this.operator){
                case "+":
                    this.operand1= +this.operand1 + +this.operand2;
                    break;
                    case "-":
                        this.operand1= +this.operand1 - +this.operand2;
                        break;
                        case "*":
                            this.operand1= +this.operand1 * +this.operand2;
                            break;
                            case "/":
                                this.operand1= +this.operand1 / +this.operand2;
                                break;
            }
            this.operator = "";
            this.operand2 = 0;
            this.updateUI();
        }

}
const operands1Element = document.querySelector("[data-operands-1]");
const operands2Element = document.querySelector("[data-operands-2]");
const clearbotton = document.querySelector("[data-clear]");
const numberButtons = document.querySelectorAll("[data-number]");
const deleteButtons = document.querySelector("[data-delete]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButtons = document.querySelector("[data-equals]");


const calculator = new Calculator(operands1Element, operands2Element);

clearbotton.addEventListener("click", ()=>
{
    calculator.clear();
})

numberButtons.forEach(button =>{
    button.addEventListener('click', ()=>{
        calculator.appendNumber(button.innerHTML);
})
});

deleteButtons.addEventListener("click", ()=>{
    calculator.delete();
});


operationButtons.forEach( button =>{
 button.addEventListener("click", ()=>{
    calculator.operation(button.innerHTML);
 })
})

equalsButtons.addEventListener("click", ()=>{
    calculator.calculo();
});
