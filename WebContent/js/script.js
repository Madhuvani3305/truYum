function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}




function editformvalidation() {
    //title validation
    if(document.myform.title.value==""){
        alert("Name must be filled out");
    }
    //price validation
    if(!document.myform.price.value.match(/^\d+/))
        {
        alert("Please provide numerics for price ");
        }  
    // category validation
    if (document.myform.category.value== "-1") {
        alert("please provide your category");
         return false;
        }
       
       // checkbox validation 
    if (document.myform.freedelivery.checked == false) 
        {
            alert ('You didn\'t choose any of the checkboxes!');
            return false;
        } else {    
            return true;
        }

}