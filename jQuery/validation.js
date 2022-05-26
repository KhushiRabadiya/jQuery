$(document).ready(function(){
  //first name
  let fnameError = true;
  $('#fname').keyup(function(){
    validateform1();
  });
  function validateform1() {
    let fn = $('#fname').val();
    var nameReg = /^[A-Za-z]*$/;
      
      if (fn == "" ) {
        $('#fname1').html("*Please fill first name");
        fnameError = false;
      }
      else if(!nameReg.test(fn)){
          $('#fname1').html("*Digits & Space not allowed");
          fnameError = false;
        }
        else{
          $('#fname1').html("");
        }
      }
  
  //last name
  let lnameError = true;
  $('#lname').keyup(function(){
    validateform2();
  });
  function validateform2() {
      let ln = $('#lname').val();
      var nameReg = /^[A-Za-z]*$/;
      if (ln == "" ) {
        $('#lname1').html("*Please fill last name");
        lnameError = false;
      }
      else if(!nameReg.test(ln)){
          $('#lname1').html("*Digits & Space not allowed");
          lnameError = false;
        }
        else{
          $('#lname1').html("");
        }
      }
  
  //Address
  //street1
  let streetError = true;
  $('#street1').keyup(function(){
    validateform3();
  });
  function validateform3(){
    var st1 = $('#street1').value;
    var x= /^[a-z," ",0-9]+$/;
    if (st1 == "" ) {
      $('#str1').html("*Please fill street 1");
      streetError = false;
    }
    else if(!x.test(st1)){
        $('#str1').html("*Special characters are not allowed");
        streetError = false;
      }
      else{
        $('#str1').html("");
      }
  }
  
  
    //Street2
    let street2Error = true;
    $('#street2').keyup(function(){
      validateform4();
    });
    function validateform4(){
      var st2 = $('#street1').value;
      var x= /^[a-z," ",0-9]+$/;
      if (st2 == "" ) {
        $('#str2').html("*Please fill street 2");
        streetError = false;
      }
      else if(!x.test(st2)){
          $('#str2').html("*Special characters are not allowed");
          streetError = false;
        }
        else{
          $('#str2').html("");
        }
    }
    
  
  //city
  let cityError = true;
  $('#city').keyup(function(){
    validateform5();
  });
  function validateform5(){
    let c = $("#city").val();
    var nameReg = /^[A-Za-z]*$/;
    if (c == "" ) {
     $('#cy').html("*Please fill City");
     cityError = false;
    }
    else{
      if(!nameReg.test(c)){
        $('#cy').html("*Digits & Space not allowed");
        cityError = false;
      }
      else{
        $('#cy').html("");
      }
    }
  }
  
  
  //State
  let stateError = true;
  $('#state').keyup(function(){
    validateform6();
  });
  function validateform6(){
    var st = $("#state").val();
    var nameReg = /^[A-Za-z]*$/;
    if (st == "" ) {
      $('#pr').html("*Please fill State name");
      stateError = false;
    }
    else{
      if(!nameReg.test(st)){
        $('#pr').html("*Digits & Space not allowed");
        stateError = false;
      }
      else{
        $('#pr').html("");
      }
    }
  }
  
  
  //zip code
  let codeError = true;
  $('#code').keyup(function(){
    validateform7();
  });
  function validateform7(){
    var zc = $("#code").val();
    if (zc == "" ) {
      $('#zi').html("*Please fill Zip code");
      codeError = false;
    }
    else{
      if(isNaN(zc)){
        $('#zi').html("*Only digits are allowed");
        codeError = false;
      }
      else if(zc.length != 6){
        $('#zi').html("Only 6 digits are allowed");
        codeError = false;
      }
      else{
        $('#zi').html("");
      }
    }
  }
  
  // Mobile no
  let mnoError = true;
  $('#mno').keyup(function(){
    validateform8();
  });
  function validateform8(){
    var mn = $("#mno").val();
    var mnoReg = /^[6-9]\d{9}$/;
    if (mn == "" ) {
      $('#pn').html("*Please fill Mobile number");
      mnoError = false;
    }
    else{
      if(!mnoReg.test(mn)){
        $('#pn').html("*Invalid Mobile number");
        mnoError = false;
      }
      else{
        $('#pn').html("");
      }
    }
  }
  
    //E-mail
    let mailError = true;
  $('#mail').keyup(function(){
    validateform9();
  });
    function validateform9(){
      var ml = $("#mail").val();
      var mlReg = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;  
      if (ml == "" ) {
        $('#ml1').html("*Please fill Email address");
        mailError = false;
      }
      else if(!mlReg.test(ml)){
          $('#ml1').html("*Invalid email");
          mailError = false;
        }
        else{
          $('#ml1').html("");
        }   
      }
    
    //Select
    let dropdError = true;
    $('#sel').keyup(function(){
    validateform10();
    });
      function validateform10(){
        var  select = $('#sel').val();
          if (select == 0) {
            $('#sel1').html("Select required");
            dropdError = false;
          }
          else {
            $('#sel1').html("");
          }
        }
        
      //Text area
      //textarea1
      let text1Error = true;
  $('#area1').keyup(function(){
    validateform11();
  });
    function validateform11(){
      var txt1 = $("#area1").val();
      if (txt1 == "" ) {
        $('#feedback').html("*Please feedback us");
        text1Error = false;
      }
      else{
        if(!isNaN(txt1)){
         $('#feedback').html("*please enter character, digits are not allowed");
         text1Error = false;
        }
        else if(txt1.length <= 10){
          $('#feedback').html("*Please fill in more than 10 letters");
          text1Error = false;
        }
        else{
         $('#feedback').html("");
        }
      }
    }
  
    
  //textarea2
  let text2Error = true;
  $('#area2').keyup(function(){
    validateform12();
  });
  function validateform12(){
      var txt2 = $("#area2").val();
      if (txt2 == "" ) {
        $('#imp').html("*Please give suggestion");
        text2Error = false;
      }
      else{
        if(!isNaN(txt2)){
          $('#imp').html("*Only digits are not allowed");
          text2Error = false;
        }
        else if(txt2.length <= 10){
          $('#imp').html("*Please fill in more than 10 letters");
          text2Error = false;
        }
        else{
          $('#imp').html("");
        }
      }
    }
  
  //Check box
  let checkError = true;
  $('#container').keyup(function(){
    validateform13();
  })
  function validateform13(){
    if($('#container').is(':checked') == false){
      $("#box").html("Please select the checkbox");
      checkError = false;
    }else{
      $("#box").html("");
      
    }
  }
  
    //Radio button
    let genderError = true;
  $('.gender').keyup(function(){
    validateform14();
  });
  function validateform14(){
    var ml = $('.gender');
    var genValue = false;
    for(var i=0; i<ml.length;i++){
      if(ml[i].checked == true){
        genValue = true;    
        }
    }
    if(!genValue){
      $('#g1').html("*Please Choose the gender");
      genderError = false;
    }
    else{
      $('#g1').html("");
    } 
  }
  
  
  $('#submit').click(function(){
    validateform1();
    validateform2();
    validateform3();
    validateform4();
    validateform5();
    validateform6();
    validateform7();
    validateform8();
    validateform9();
    validateform10();
    validateform11();
    validateform12();
    validateform13();
    validateform14();
    if((fnameError == true) &&
    (lnameError == true) && 
    (streetError == true) && 
    (street2Error == true)  && 
    (cityError == true)  && 
    (stateError == true) &&
    (codeError == true) &&
    (mnoError == true)  &&
    (mailError == true) && 
    (dropdError == true) &&
    (text1Error == true) &&
    (text2Error == true) &&
    (checkError == true) &&
    (genderError == true) 
    ){
      return true;
    }
    else{
      return false;
    }
  });
  })