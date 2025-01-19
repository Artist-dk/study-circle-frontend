
let tp;
const fn = ['post','main'];
window.onload = function() {
  // setdataa();
  setform();
}
let form = document.forms[0];
function submitform(e) {
  e.preventDefault();
  var dt = new FormData(form)
  var x = new XMLHttpRequest();
  dt = Array.from(dt.keys()).reduce((r, k) => {
    r[k] = dt.get(k);
    return r;
  }, {});
  dt = JSON.stringify(dt);
  setBack(x);
  // x.open(fn[0],`${fn[1]}.php`,true);
  x.onload = function() {
      document.body.innerHTML = this.responseText;
      // alert(this.responseText);
  }
  x.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  x.send('data='+dt);
}
function setBack(x) {x.open(`${fn[0]},${fn[1]}.php,${true}`)}
/*name*//*phone*//*email*//*username*//*password*/
class Validation {
  constructor(a) {
    this.re = [/^[a-zA-Z]+$/,/^\d{10}$/,/^[\w - \ .]+@([\w-]+\.)+[\w-]{2,4}$/,/^[A-Za-z0-9_]{5,20}$/,/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/];
    this.el = a;
    if(!(this.el.type==='submit')){
      if(a.dataset.a) this.da = parseInt(this.el.dataset.a);
      if(a.dataset.b) this.db = parseInt(this.el.dataset.b);
      this.ec = this.el.parentElement.querySelector('span');
      this.r = this.el.parentElement.querySelector('.error-msg');
      this.el.addEventListener('focus',()=>this.input());
      this.el.addEventListener('input',()=>this.input());
      this.el.addEventListener('blur',()=>this.input());
    }
  }
  input() { 
    if(parseInt(this.da)===4&&!(parseInt(this.db)===0))tp=this.el.value.trim();
    if(this.el.value.trim() === '') {
      this.ec.classList.add('err');
      this.r.innerHTML = this.el.required?'Required':'';
      this.ec.innerHTML = this.el.dataset.name;
      return false;
    } else if((parseInt(this.el.dataset.a)===4&&parseInt(this.el.dataset.b)===0)?!(this.el.value===tp):!this.re[this.da].test(this.el.value)) {
      this.ec.classList.add('err')
      this.ec.innerHTML = this.el.dataset.msg;
      if(parseInt(this.el.dataset.a)===4&&parseInt(this.el.dataset.b)===0) {
        if(this.el.value===tp) {
          this.ec.classList.remove('err');
        }
      }
      return false;
    } else {
      this.ec.classList.remove('err');
      this.r.innerHTML = '';
      this.ec.innerHTML = this.el.dataset.name;
      return true;
    }
  }
}
function setform() {
  // console.log('react');
  // console.log(document.forms)
  for(var i=0;i<document.forms.length;i++) {
    if(document.forms[i].dataset.validation) {
      document.forms[i].addEventListener("submit",submitform);
      var j=0;
      for(j=0;j<document.forms[i].elements.length;j++) {
        new Validation(document.forms[i].elements[j])
      }
    }
  }
}








// function setdataa() {
//   var form = document.forms[0];
//   form.elements["firstName"].value = 'digambar';
//   form.elements["middleName"].value = 'chandrakant';
//   form.elements["lastName"].value = 'kumbhar';
//   form.elements["phone"].value = '9970036430';
//   form.elements["email"].value = 'digambarckumbhar299@gmail.com';
//   form.elements["username"].value = 'sketcher';
//   form.elements["password"].value = 'Pass@1234';
//   form.elements["confirmPassword"].value = 'Pass@1234';
// }
// window.onload = setdatab();
// function setdatab() {
//   var form = document.forms[0];
//   form.elements["firstName"].value = 'sdfa3';
//   form.elements["middleName"].value = 'adfe3';
//   form.elements["lastName"].value = 'adf3';
//   form.elements["username"].value = 'sketcher';
//   form.elements["phone"].value = 'se33';
//   form.elements["email"].value = 'digambarckumbd'
//   form.elements["password"].value = 'Pass1234';
//   form.elements["confirmPassword"].value = 'Pass@1234';
// }


