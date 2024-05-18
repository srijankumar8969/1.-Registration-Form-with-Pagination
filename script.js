document.querySelectorAll(".first")[0].addEventListener("click",()=>{
    document.getElementById("form1").style.display="none";
    document.getElementById("form2").style.display="block";
    document.querySelector("#t1").classList.remove("but");
    document.querySelector("#t2").classList.add("but");
    document.querySelectorAll(".container")[0].style.height="450px";
})

document.querySelectorAll(".bfirst")[0].addEventListener("click",()=>{
    document.getElementById("form1").style.display="block";
    document.getElementById("form2").style.display="none";
    document.querySelector("#t1").classList.add("but");
    document.querySelector("#t2").classList.remove("but");
    document.querySelectorAll(".container")[0].style.height="400px";

})

