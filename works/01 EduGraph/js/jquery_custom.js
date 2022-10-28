    //navbar
 $(document).ready(function(){
        $("#Hamburger").click(function(){
        $(".navbar").toggle();
    }
    )}
);

$(window).on('resize load', function(){
     //megaMenu
    $(document).ready(function(){
        if (window.matchMedia('(max-width: 767px)').matches){
            $(".dropdown1").click(function(){
            $(".dropdown_content").toggle(300);
            });
            console.log(window.innerWidth);
        }
    });

    //Dropdown Menu
    $(document).ready(function(){
        if (window.matchMedia('(max-width: 767px)').matches){
            $("#studentWorks").click(function(){
            $(".dropdown2").toggle(300);
            });
        }
        
    });
});

//Print error message
function printErr(elemId, errMsg) {
    document.getElementById(elemId).innerHTML = errMsg;

   document.getElementById("nameErr")
}

//Form Validation
function validateForm() {
        var name = document.enquireForm.full_name.value;
        var course = document.enquireForm.form_course.value;
        var mob = document.enquireForm.mob_num.value;
        var email = document.enquireForm.e_mail.value;

        var nameErr = emailErr = mobileErr = countryErr = genderErr = true;

        // name validation
        if(name == "") {
            printErr("nameErr", "Please enter your name");
            document.getElementById("fullName").focus();
            return false;
        }else {
            var regex = /^[a-zA-Z\s]+$/;                
            if(regex.test(name) === false) {
                printErr("nameErr", "Please enter a valid name");    
                document.getElementById("fullName").focus();    
                return false;
            } else {
                printErr("nameErr", "");
                nameErr = false;
            }
        }

        // Course selection validation
        if (course == "Select"){
            printErr("courseErr", "Please select a preffered course");
            return false;
        }

        else{
            printErr("courseErr", "");
            countryErr = false;
        }

         // Mobile validation
        if(mob == "") {
            printErr("mobErr", "Please enter your mobile number");
            return false;
        } else {
            var regex = /^[6-9]\d{9}$/;
            if(regex.test(mobile) === false) {
                printErr("mobErr", "Please enter a valid mobile number");
                return false;
            } else{
                printErr("mobErr", "");
                mobileErr = false;
            }
        }

         // eMail validation
         if(email == "") {
            printErr("emailErr", "Please enter your email address");
            return false;
        } else {
            var regex =  /^\S+@\S+\.\S+$/;;
            if(regex.test(email) === false) {
                printErr("emailErr", "Please enter a valid email address");
                return false;
            } else{
                printErr("emailErr", "");
                emailErr = false;
            }
        }
}