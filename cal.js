function getHistory(){
	return document.getElementById("history-value").innerText;
}
function printHistory(num){
	document.getElementById("history-value").innerText=num;
}

function getOutput(){
	return document.getElementById("output").innerText;
}

}

function printOutput(num){
    if(num==""){
        num=0;
		document.getElementById("output").innerText=num;
	}
	else{
		document.getElementById("output").innerText=num;
	}	
}
printOutput("0");
var operator =document.getElementsByClassName("key--operator");
for(var i=0; i<operator.length;i++){
    operator[i].addEventListener('click',function(){
        if(this.id=="clear"){
            printOutput("");
        }
        else if(this.id=="backspace"){
            var output=getOutput().toString();
            if(output){
                output=output.substr(0,output.length-1);
                printOutput(output);
            }
        }
        else {
            var output=getOutput();
            var history=getHistory();
            if(output!=""){
                history=history+output;
                if(this.id=="="){
                    var result=eval(history);
                    printOutput(result);

                }
                else{
                    history=history+this.id;
                    printOutput("");
                }
            }
        }
    });
}

var number =document.getElementsByClassName("key--number");
for(var i=0; i<number.length;i++){
    number[i].addEventListener('click',function(){
        var output=getOutput();
        if(output!=NaN){
            output=output+this.id;
            printOutput(output);
        }
    });
}
