const pw = document.querySelector("#pw");
const confPw = document.querySelector("#conf-pw");
const errorMsg = document.querySelector(".pw-error");


pw.addEventListener("input", ()=>
checkPw());

confPw.addEventListener("input",()=>
checkPw());


function checkPw()
{
    if(pw.value === confPw.value)
    {   
        if(pw.value !== "")
        {
            confPw.style.border = "2px solid green";
            pw.style.border = "2px solid green";
        }
        else{
            confPw.style.border = "1px solid rgb(204, 202, 202)";
            pw.style.border = "1px solid rgb(204, 202, 202)";
        }
            errorMsg.textContent = "";
    }
    else
    {
        confPw.style.border = "2px solid red";
        pw.style.border = "1px solid rgb(204, 202, 202)";
        errorMsg.textContent = "Passwords do not match";
    }
}   

