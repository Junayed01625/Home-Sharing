  function form_validation(){
    var x = document.forms["myforms"]["uname"].value;
    var y = document.forms["myforms"]["password"].value;
    var z = document.forms["myforms"]["conpassword"].value;
    var m = document.forms["myforms"]["name"].value;
    var n = document.forms["myforms"]["phone"].value;
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
      alert("Phone no. must be needed");
    }

  }
