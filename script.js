  function form_validation(){
    var x = document.forms["myforms"]["uname"].value;
    var y = document.forms["myforms"]["pass"].value;
    var z = document.forms["myforms"]["cpass"].value;
    var m = document.forms["myforms"]["name"].value;
    var n = document.forms["myforms"]["gender"].value;
    var o = document.forms["myforms"]["con"].value;
    if (m=="") {
      alert("Name must be filled out");
    }
    if (x == "") {
       alert("Username must be filled out");
       return false;
     }
     if (x.indexOf(' ') >= 0) {
       alert("WhiteSpace Found");
     }
    if (y == "") {
      alert("Password must be filled out");
      return false;
    }
    if (y!=z) {
      alert("Password must be same");
    }
    if (y.length<8 || y.length>32) {
      alert("Password must be 8-32 charecters");
    }
    if (n=="") {
      alert("Gender must be select");
    }
    if (typeof o != 'number') {
      alert("Contact no is must be no.");
    }



  }
