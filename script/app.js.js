
// Getting Form Elements

var form = document.getElementById("form1");
var male = document.getElementById("male");
var female = document.getElementById("female");
var custom = document.getElementById("custom");
var usersname = document.getElementById("username");
var mobile = document.getElementById("mobile");
var surname = document.getElementById("surname");
var password = document.getElementById("password");
var day = document.getElementById("day");
var month = document.getElementById("month");
var year = document.getElementById("year");
var btn = document.getElementsByClassName("button")[0];
var input = document.querySelectorAll('input');






// Getting MOdel Elements
var user = document.getElementById('user');
var sur = document.getElementById('sur');
var mob = document.getElementById('mob');
var pass = document.getElementById('pass');
var dayM = document.getElementById('dayM');
var monthM = document.getElementById('monthM');
var yearM = document.getElementById('yearM');
var gen = document.getElementById('gen');
var model = document.getElementsByClassName('model')[0];
var cross = document.getElementsByClassName('cross')[0];
// Custom Gender Slider

var slider = document.getElementById("custom_gender_container");
custom.onclick = () => {
  slider.style.display = "block";
};
male.onclick = () => {
  slider.style.display = "none";
};
female.onclick = () => {
  slider.style.display = "none";
};

// ---------------------------------!

// MOdel POpup

// OR
function show() {
  user.innerHTML = usersname.value.trim();
  sur.innerHTML = surname.value.trim();
  mob.innerHTML = mobile.value.trim();
  pass.innerHTML = password.value.trim();
  dayM.innerHTML = day.value.trim();
  monthM.innerHTML = month.value.trim();
  yearM.innerHTML = year.value.trim();
  if (male.checked) {
    gen.innerHTML = 'Male';
  }
  else if (female.checked) {
    gen.innerHTML = 'Female';
  }
  else if (custom.checked) {
    gen.innerHTML = 'Custom';
  }
  else {
    gen.innerHTML = "";
  }
}
var clear = () => {
  var q = document.getElementsByClassName("q")[0];
  q.classList.remove('error');
  var w = document.getElementsByClassName("w")[0];
  w.classList.remove('error');
  var mbl = document.getElementsByClassName("mobile")[0];
  mbl.classList.remove('error');
  var pas = document.getElementsByClassName("password")[0];
  pas.classList.remove('error');
  var e = document.getElementsByClassName("e")[0];
  e.classList.remove('error');
  var e1 = document.getElementsByClassName("e")[1];
  e1.classList.remove('error');
  var ge = document.getElementsByClassName('ge')[0];
  ge.classList.remove('error');
  var ge1 = document.getElementsByClassName('ge')[1];
  ge1.classList.remove('error');
  var csG = document.getElementsByClassName('csG')[0];
  csG.classList.remove('error');
}

// VAlidation fo Form
function onSubmit() {
  var rValue = true;
  clear();
  show();
  var cs = document.getElementsByClassName('cs')[0];

  if (usersname.value.trim() == "") {
    var q = document.getElementsByClassName("q")[0];
    q.classList.add('error');
    rValue = false;
  }
  
//  else if (usersname.value.trim() > 1) {
//     var q = document.getElementsByClassName("q")[0];
//     q.classList.remove('error');
//     rValue = true;
//   }
  if (surname.value.trim() == "") {
    var w = document.getElementsByClassName("w")[0];
    w.classList.add('error');
    rValue = false;
  }
  if (mobile.value.trim() == "") {
    var mbl = document.getElementsByClassName("mobile")[0];
    mbl.classList.add('error');
    rValue = false;
  }
  if (password.value.trim() == "") {
    var pas = document.getElementsByClassName("password")[0];
    pas.classList.add('error');
    rValue = false;
  }
  if (year.value == 2023 || year.value > 2018) {
    var e = document.getElementsByClassName("e")[0];
    e.classList.add('error');
    var e1 = document.getElementsByClassName("e")[1];
    e1.classList.add('error');
    rValue = false;
  }
  if (male.value != "Male" || female.value != "Female" || custom.value != "Custom") {
    var ge = document.getElementsByClassName('ge')[0];
    ge.classList.add('error');
    var ge1 = document.getElementsByClassName('ge')[1];
    ge1.classList.add('error');
    rValue = false;
  }

  if (cs.value != 1 || cs.value != 2 || cs.value != 3) {
    var csG = document.getElementsByClassName('csG')[0];
    csG.classList.add('error');
    rValue = false;
  }
  else {
    user.innerHTML = usersname.value.trim();
    sur.innerHTML = surname.value.trim();
    mob.innerHTML = mobile.value.trim();
    pass.innerHTML = password.value.trim();
    dayM.innerHTML = day.value.trim();
    monthM.innerHTML = month.value.trim();
    yearM.innerHTML = year.value.trim();
  }

    btn.onclick = () => {
      model.style.transform = "translateY(0)";
    }


    cross.onclick = () => {
      model.style.transform = "translateY(-100%)"
    }

    return rValue;

  }
