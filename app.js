var Input = document.getElementById("Input")
var result = document.getElementById("resultround")
var Rndmresult = document.getElementById("random_result")
var strinput = document.getElementById("strinput")
var ConverResult = document.getElementById("ConverResult")


function roundNumber(){    
    var roundResult= Math.round(Input.value);
    result.innerHTML = Input.value + " Round Off Number " +roundResult

}
function RandomNumber(){
    var randum_number = Math.random();
    var random2 = Math.ceil(randum_number * 2)
    Rndmresult.innerHTML= random2
}

function cnvrttoNumber(){

    var Cvrt = parseFloat(strinput.value)
    var strtype = typeof(strinput.value)
    var Type = typeof(Cvrt)
    ConverResult.innerHTML= strinput.value +" Before Convet Type ==> " + "'"+strtype+"'" + " After Convert " + Cvrt.toFixed(1) +"  Type  ==>  "+"'"+ Type+"'" 
    
}