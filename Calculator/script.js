document.body.style.background="white"

let in1=document.getElementById("in1");
let in2=document.getElementById("in2");
let in3=document.getElementById("in3")

let dial1=document.querySelector(".dial1")
let dial2=document.querySelector(".dial2")
let dial3=document.querySelector(".dial3")
let dial4=document.querySelector(".dial4")

function main()
{
  window.location.assign("./secondPage.html")
};

function main1()
{
  window.location.href="./LastPage.html"
};

dial1.addEventListener("click",function(e)
{
   e.preventDefault(); 
   let input1=+(in1.value);
   let input2=+(in2.value);
   in3.value=input1+input2;
})

dial2.addEventListener("click",function(e)
{
    e.preventDefault();
    let input1=+(in1.value)
    let input2=+(in2.value)
    in3.value=input1-input2;
})

dial3.addEventListener("click",function(e)
{
    e.preventDefault();
    let input1=+(in1.value)
    let input2=+(in2.value)
    in3.value=input1*input2
})

dial4.addEventListener("click",function(e)
{
    e.preventDefault();
    let input1=+(in1.value);
    let input2=+(in2.value);
    in3.value=input1/input2
})

