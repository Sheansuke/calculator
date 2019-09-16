class calculator {

    //Operations
    private calTotalSum: number = 0; // Variable that stores the operations
    private lastOperation: string = ""; // Detect the last operation used

    //View
    private calScreenTotal: any; // DOM element that will show the total operation
    private calScreen: any; // DOM element that will show what has been pressed
    private calScreenConcat: string = ""; // DOM element that shows what has been done

    constructor(calScreen: any, calScreenTotal: any, calScreenConcat?: any) {
        this.calScreen = calScreen; // Element of the assigned DOM
        this.calScreenTotal = calScreenTotal;  // Element of the assigned DOM
        this.calScreenConcat = calScreenConcat; // Element of the assigned DOM
    }


    // Function that writes the numbers, receives the number you will write as an argument
    public calNum(num: number) {
        this.calScreen.value += num;

    }

    // Function that executes the special symbols, receives a string with the symbol to execute
    public specialSymbol(symbol) {
        switch (symbol) {
            case "ce":
                this.calScreen.value = "";
                this.calScreenTotal.value = "";
                this.calScreenConcat.value = "";
                this.calTotalSum = 0;
                this.lastOperation  = "";
                break;

            case "c":
                this.calScreen.value = "";
                break;

            case "<":
                let toArray = this.calScreen.value.split("");
                toArray.pop();
                this.calScreen.value = toArray.join("");
                break;
        }
    }

    // Function that executes the operations receives a string with the sign of the operation to execute
    public calOp(operation: string) {
        switch (operation) {

            // Addition operation
            case "+":
                this.calTotalSum? this.calTotalSum += Number(this.calScreen.value) : this.calTotalSum = Number(this.calScreen.value);
                this.lastOperation = operation;
                this.calScreenTotal.value = this.calTotalSum + this.lastOperation;
                this.calScreen.value ? this.calScreenConcat.value += this.calScreen.value + this.lastOperation : null;
                this.calScreen.value = "";
                break;

            // Subtraction operation
            case "-":
                this.calTotalSum? this.calTotalSum -= Number(this.calScreen.value) : this.calTotalSum = Number(this.calScreen.value);
                this.lastOperation = operation;
                this.calScreenTotal.value = this.calTotalSum + this.lastOperation;
                this.calScreen.value ? this.calScreenConcat.value += this.calScreen.value + this.lastOperation : null;
                this.calScreen.value = "";
                
                break;

            // Multiplication operation
            case "*":
                this.calScreen.value? this.calTotalSum *= Number(this.calScreen.value):null;
                this.calTotalSum? null : this.calTotalSum = Number(this.calScreen.value);
                this.lastOperation = operation;
                this.calScreenTotal.value = this.calTotalSum + this.lastOperation;
                this.calScreen.value ? this.calScreenConcat.value += this.calScreen.value + this.lastOperation : null;
                this.calScreen.value = "";
                break;

            // Division operation 
            case "/":
                this.calScreen.value? this.calTotalSum /= Number(this.calScreen.value):null;
                this.calTotalSum? null : this.calTotalSum = Number(this.calScreen.value);
                this.lastOperation = operation;
                this.calScreenTotal.value = this.calTotalSum + this.lastOperation;
                this.calScreen.value ? this.calScreenConcat.value += this.calScreen.value + this.lastOperation : null;
                this.calScreen.value = "";
                break;

            // Run last action
            case "=":
                return this.calOp(this.lastOperation);
                break;
        }

    }
}



let screen1 = document.getElementById("screen1");
let screen2 = document.getElementById("screen2");
let screen3 = document.getElementById("screen3");

let cal = new calculator(screen1, screen2, screen3);
