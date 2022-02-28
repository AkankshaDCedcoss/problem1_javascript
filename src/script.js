function display(num)
{
var input=document.getElementById("screen");
input.value+=num;
}
function result()
{
    var input=document.getElementById("screen");
    input.value=eval(input.value);
}
function clearData()
{
    var input=document.getElementById("screen");
    input.value='';
}