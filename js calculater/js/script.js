

var disply=document.getElementById("disply")


function appendToDisplay(input){
    disply.value +=input

}



function calculate(){

    try{
        disply.value=eval(disply.value)
    }catch(error){
        disply.value="Error"

    }
   

}

function cleardisplay(){
    disply.value =""

}