



var Email = document.getElementById("NameVal");
var Password = document.getElementById("Password");
var Confirm = document.getElementById("email");

var InfoUp = []

var data = localStorage.getItem("InfoUp")
if (data) {
    InfoUp = JSON.parse( localStorage.getItem("InfoUp"))
    
    displayProduct()
}
// [{name,site},{name,site},{name,site}] == "ALI"
function signUp() {

    var Alldata = {
        SignName : NameVal.value, 
        confirmMail : Confirm.value,
        pass : Password.value,
    }

    if(!Alldata.SignName) {
        document.getElementById("Nwarning").style.display ="block"  
    }

    if(!Alldata.pass) {
        document.getElementById("Urlwarning").style.display ="block" 
    }
    if(!Alldata.confirmMail) {
        document.getElementById("Fempty").style.display ="block" 
    }

    if(Alldata.SignName && Alldata.pass && Alldata.confirmMail){
        document.getElementById("Nwarning").style.display ="none" 
        document.getElementById("Urlwarning").style.display ="none" 
        InfoUp.push(Alldata)
        localStorage.setItem("InfoUp" , JSON.stringify(InfoUp));
        displayProduct();
        console.log(InfoUp)
    }

    let notExist = false;
    for(var i = 0; i < InfoUp.length; i++) {
        if(InfoUp[i].pass == Alldata.confirmMail  ) {
            document.getElementById("exist-name").style.display = "block"; 
            // window.open("https://www.codexworld.com/", "_self");
            notExist = true
        }else {
            InfoUp[i].pass !== Alldata.pass
            document.getElementById("Pwarning").style.display = "block";
        }   
        console.log(InfoUp)
    }

    if(!notExist){
        InfoUp.push(Alldata)
        localStorage.setItem("InfoUp" , JSON.stringify(InfoUp));
        displayProduct();
    }
    console.log(InfoUp)
}

function displayProduct() {
     
}
