var inputbutton=document.getElementById("btnclass")
var outputbutton=document.getElementById("btnclass1")
var cleartxtbutton=document.getElementById("btnclass2")
var csstobeminified=document.getElementById('cssinputarea')
var minifiedcss=document.getElementById('cssoutputarea')
var a;
let output;




function Functionminify(){
    inputbutton.innerHTML="Minified"

    inputbutton.style.fontWeight = "400";
    setTimeout(() => {
        inputbutton.innerHTML="Minify Css"
    }, 1500);
    setTimeout(() => {
        inputbutton.style.fontWeight = "550";
    }, 2000);
   

output=csstobeminified.value
a = output.trim();

 minifiedcss.value=a; //STRING

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

