
var siteName = document.getElementById("email");
var Siteurl = document.getElementById("Password");
var sites = [];
var data = localStorage.getItem("sites")
if (data) {
    sites = JSON.parse( localStorage.getItem("sites"))
    
    //Our Logic
    displayProduct()
}

function log() {

    var site = {
        name: document.getElementById("email").value,
        passlogin : document.getElementById("Password").value,
    }

    if(!site.name) {
        document.getElementById("Nwarning").style.display ="block"  
    }

    if(!site.passlogin) {
        document.getElementById("Urlwarning").style.display ="block" 
    }

    if(site.name && site.passlogin){
        document.getElementById("Nwarning").style.display ="none" 
        document.getElementById("Urlwarning").style.display ="none" 
        sites.push(site)
        localStorage.setItem("sites" , JSON.stringify(sites));
        displayProduct();
    }

    let notExist = false;
    for(var i = 0; i < sites.length; i++) {
        if(sites[i].passlogin !== site.passlogin){
            document.getElementById("Pwarning").style.display = "block"; 
            notExist = true
        } if(sites[i].passlogin == site.passlogin) {      
            document.getElementById("match").style.display = "block";
        }   
    }
    if(!notExist){
        sites.push(site)
        localStorage.setItem("sites" , JSON.stringify(sites));
        displayProduct();
    }
}

function displayProduct() {
    

}

