var clickbold=0;

window.addEventListener("load",function(){
    var editor= document.getElementById("text");
    editor.focus();

    boldbutton.addEventListener("click",function(){
        document.execCommand("Bold");
        editor.focus();
    },false);
    italicbutton.addEventListener("click",function(){
        document.execCommand("Italic");
        editor.focus();
    },false);
    underlinebutton.addEventListener("click",function(){
        document.execCommand("Underline");
        editor.focus();
    },false);
    unorderedlist.addEventListener("click",function(){
        document.execCommand("InsertUnorderedList");
        editor.focus();
    },false);
    font_color.addEventListener("change",function(event){
        document.execCommand("ForeColor",false,event.target.value);
        editor.focus();
    },false);
    fontchanger.addEventListener("change",function(event){
        document.execCommand("FontName",false,event.target.value);
        editor.focus();
    },false)
    fontSizeChanger.addEventListener("change",function(event){
        document.execCommand("fontSize",false,event.target.value);
        editor.focus();
    },false);
    image_adder.addEventListener("click",function(){
        var src = prompt('Please specify the link of the image.');
        if(src){
        document.execCommand("insertimage",false,src);}
        editor.focus();
    },false);
    
},false);


var fonts= document.querySelectorAll("select#fontchanger > option");
    for(var i=0;i < fonts.length;i++)
        fonts[i].style.fontFamily = fonts[i].value

localStorage.setItem("User","Pretext");

document.getElementById("text").innerHTML=localStorage["User"];
localStorage["User"]=document.getElementById("text").innerHTML;
// document.getElementById("text").innerHTML =
//   localStorage["text"] || "This text is automatically saved every second :) "; // default text

// setInterval(function() {

//   localStorage["text"] = document.getElementById("text").innerHTML; // content div
// }, 10);

