var name = document.getElementById("name");
var number = document.getElementById("phnm");
var mail = document.getElementById("mail");
var cusname = document.getElementById("cusname");
var cusphnm = document.getElementById("cusphnm");
var cusmail = document.getElementById("cusmail");
var cusdtl = document.getElementById("cusdtl");


cusdtl.addEventListener("change",details);
function details(){
  cusname.innerText=("Name : "+ name.value); 
  cusnumber.innerText=("Number : "+ phnm.value); 
  cusmail.innerText=("Mail : "+ mail.value); 

}
