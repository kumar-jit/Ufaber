
const MobileRegExp = new RegExp(/^[0]?[789]\d{9}$/);
const EmailRegExp = new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
const NameRegExp = new RegExp(/^[a-zA-Z ]{2,50}$/);

var MobileStatus = true,
    EmailStatus = true,
    NameStatus = true,
    Combobox = false;

$( document ).ready(function() {

    //Mobile No varification
$("#IdMobile").focusout(function (){
    var MobileNo = $(this).val();
    if(MobileRegExp.test(MobileNo)){
        $("#IdMobilediv").css("border-color", "rgba(0, 0, 0, 0.1)");;
        $("#IdMobileLabel").css("color","rgba(0, 0, 0, 0.5)");
        $("#IdMobileLabelErr").addClass("hideElement");
        MobileStatus =  true
    }
    else{
        $("#IdMobilediv").css("border-color", "red");;
        $("#IdMobileLabel").css("color","red");
        $("#IdMobileLabelErr").removeClass("hideElement");
        MobileStatus = false
    }
    buttonEnable()
})

    // Name varification 
$("#IdName").focusout(function (){
    var Name = $(this).val();
    if(NameRegExp.test(Name)){
        $("#IdName").css("border-color", "rgba(0, 0, 0, 0.1)");
        $("#IdNameLabel").removeClass("Error");
        $("#IdNameLabelErr").addClass("hideElement");
        NameStatus =  true
    }
    else{
        $("#IdName").css("border-color", "red");
        $("#IdNameLabel").addClass("Error");
        $("#IdNameLabelErr").removeClass("hideElement");
        
        NameStatus = false
    }
    buttonEnable()
})

// Email varification
$("#IdEmail").focusout(function (){
    var Email = $(this).val();
    if(EmailRegExp.test(Email)){
        $("#IdEmail").css("border-color", "rgba(0, 0, 0, 0.1)");
        $("#IdEmailLabel").removeClass("Error");
        $("#IdEmailLabelErr").addClass("hideElement");
        EmailStatus =  true
    }
    else{
        $("#IdEmail").css("border-color", "red");;
        $("#IdEmailLabel").addClass("Error");
        $("#IdEmailLabelErr").removeClass("hideElement");
        EmailStatus = false
    }
    buttonEnable()

    // $("#IdSubmit").onclick(
    //     alert("work")
    // )
})
// $('#cars option').each(function() {
//     if ($(this).isChecked())
//        alert('this option is selected');
//      else
//        alert('this is not');
// });
    $("#cars").change( function (e) {
        Combobox = true;
        buttonEnable();
    })

});


function buttonEnable(){
   
     if(MobileStatus && EmailStatus && NameStatus && Combobox){
         $("#IdSubmit").prop('disabled', false);
     } 
     else{
        $("#IdSubmit").prop('disabled', true);
     }
}

function submit(){
    window.location.href = "home.html";
}
