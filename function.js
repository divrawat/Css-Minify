var inputbutton=document.getElementById("btnclass")
var outputbutton=document.getElementById("btnclass1")
var input = document.getElementById("cssinputarea")
var cleartxtbutton=document.getElementById("btnclass2")
var csstobeminified=document.getElementById('cssinputarea')
var minifiedcss=document.getElementById('cssoutputarea')
var a;
let output;




function Functionminify(){
    var inputValue = document.getElementById("cssinputarea").value
    inputbutton.innerHTML="Minified"

    inputbutton.style.fontWeight = "400";
    setTimeout(() => {
        inputbutton.innerHTML="Minify Css"
    }, 1500);
    setTimeout(() => {
        inputbutton.style.fontWeight = "550";
    }, 2000);
   

    // ADDING MINIFY TO OUTPUT BOX
    minifiedcss.value=inputValue.toLowerCase().replace(/\s+/g, "");

}

function cleartext(){
cleartxtbutton.innerHTML="Cleared"
csstobeminified.value="";
minifiedcss.value="";
setTimeout(() => {
    cleartxtbutton.innerHTML="Clear Text"
}, 1500);
   
}

function copyminify(){
    outputbutton.innerHTML="Copied"
    outputbutton.style.fontWeight = "400";
    setTimeout(() => {
        outputbutton.innerHTML="Copy Minified Css"
    }, 1500);
    setTimeout(() => {
        outputbutton.style.fontWeight = "550";
    }, 2000);
  minifiedcss.select();
  document.execCommand("copy");
}

