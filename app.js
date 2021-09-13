var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var Output = document.querySelector("#output");


console.log(Output); 

btnTranslate.addEventListener("click",function clickEventHandler()
{
    Output.innerText="njakjjija" + txtInput.value;
})
