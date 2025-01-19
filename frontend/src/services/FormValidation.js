/*name*//*phone*//*email*//*username*//*password*/
export default class FormValidation {
  constructor(a) {
    this.tp = null;
    this.re = [
      /* 0 name *//^[a-zA-Z]+$/,
      /* 1 phone *//^\d{10}$/,
      /* 2 email *//^[\w - \ .]+@([\w-]+\.)+[\w-]{2,4}$/,
      /* 3 password *//^[A-Za-z0-9_]{5,20}$/,/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
      /* 4 message *//^.{2,255}$/,
      /* 5 number *//-?\d+/,
    ];
    this.el = a;
    // console.log(a)
    if(!(this.el.type==='submit')){
      if(a.dataset.a) this.da = parseInt(this.el.dataset.a);
      if(a.dataset.b) this.db = parseInt(this.el.dataset.b);
      this.ec = this.el.parentElement.querySelector('label');
      this.r = this.el.parentElement.querySelector('.error-msg');
      this.el.addEventListener('focus',()=>this.input());
      this.el.addEventListener('input',()=>this.input());
      this.el.addEventListener('blur',()=>this.input());
    }
  }
  input() { 
    if(parseInt(this.da)===4&&!(parseInt(this.db)===0))this.tp=this.el.value.trim();
    // console.log(parseInt(this.el.dataset.url))
    if(this.el.value.trim() === '') {
      this.ec.classList.add('err');
      this.r.innerHTML = this.el.required?'Required':'';
      this.ec.innerHTML = this.el.dataset.name;
      this.ec.classList.remove('err');
      return false;
      // console.log(this.ec)
    } else if((parseInt(this.el.dataset.a)===4&&parseInt(this.el.dataset.b)===0)?!(this.el.value===this.tp):!this.re[this.da].test(this.el.value)) {
      this.ec.classList.add('err')
      this.ec.innerHTML = this.el.dataset.msg;
      if((parseInt(this.el.dataset.a)===4&&parseInt(this.el.dataset.b)===0)) {
        if(!(parseInt(this.el.dataset.url))) {
          if(this.el.value===this.tp) {
            this.ec.classList.remove('err');
          }
        } else {
          // console.log("************** hacked")
          // console.log(this.el.value)
          this.ec.classList.add('err');
          if(/^((http|https):\/\/)?([a-zA-Z]+(\.[a-zA-Z]+)*)(\/([a-zA-Z0-9_\-\.~]+(\/[a-zA-Z0-9_\-\.~]+)*)?)?$/.test(this.el.value)) {
            this.ec.classList.remove('err');
          }
        }
      } 
      // else if (parseInt(this.el.dataset.url)) 
      return false;
    } else {
      this.ec.classList.remove('err');
      this.r.innerHTML = '';
      this.ec.innerHTML = this.el.dataset.name;
      return true;
    }
  }
}