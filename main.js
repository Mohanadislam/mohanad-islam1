var b=document.getElementById("btn")
var c=document.getElementById("con")
b.addEventListener("click",function(){
    var u= document.getElementById("user").value
var pss=document.getElementById("pass").value
var correctusername="admin"
var correctusername="123456"
if(u===correctusername&& pss=== correctusernamepassword)
{
c.innerHTML="Correct"
c.style.color="green"
window.location="product.html"
}

else{
    c.innerHTML="uncorrect"
c.style.color="red"
}
})
