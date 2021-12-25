var display = document.getElementById("display")

function Myfunc(btnvalue){
    display.value += btnvalue
}

function calculate(){
var a = display.value
var ans = eval(a)
display.value = ans
}
function clearall(){
    display.value = ""
}