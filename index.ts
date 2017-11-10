$(':input[type="submit"]').prop('disabled', true);
$("#emailMandatory").hide();
$("#otherMediaChannel").hide();

$(".form-group").change(function() {
    let error=false;

    if($("#firstName").val()!=""){
        $("#firstNameMandatory").hide();
    }else{
        $("#firstNameMandatory").show();
        error=true;
    }

    if($("#lastName").val()!=""){
        $("#lastNameMandatory").hide();
    }else{
        $("#lastNameMandatory").show();
        error=true;
    }

    if($("#newsletter").is(':checked')){
        if($("#email").val()!=""){
            $("#emailMandatory").hide();
        }else{
            $("#emailMandatory").show();
            error=true;
        }
    }else{
        $("#emailMandatory").hide();
    }

    if($("#mediaChannelSelect").val()!="Other"){
        $("#otherMediaChannel").hide();
    }else{
        $("#otherMediaChannel").show();
        if($("#otherMediaChannel").val()=="") error=true;        
    }

    if(error===false){
        $(':input[type="submit"]').prop('disabled', false);
    }else{
        $(':input[type="submit"]').prop('disabled', true);
    }
});