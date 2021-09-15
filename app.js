var input=document.querySelector("#i1");
var button=document.querySelector("#i2");
var output=document.querySelector("#i3");

var serverURL="https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text)
{
    return serverURL + "?" + "text=" + text
}

function clickHandler()
{
    var inputText=input.value;

    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
    var translatedText = json.contents.translated;
    output.innerText=translatedText;
     })
}

button.addEventListener("click",clickHandler);