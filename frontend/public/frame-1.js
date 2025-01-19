var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;
const doc = document;
// open tab box
function aaaaaa(_aaaaaa, $aaaaaa) {
  var aaaaaaa,aaaaaab,aaaaaac,aaaaaad,aaaaaae,aaaaaaf,aaaaaag,aaaaaah,aaaaaai,aaaaaaj;
  aaaaaac = $aaaaaa.length;
  aaaaaad = $aaaaaa.slice(6,aaaaaac);
  aaaaaae = $aaaaaa.slice(0,3);
  switch (aaaaaae) {
    case 'aaa':
      aaaaaaf = 'aaaaaa'+aaaaaad;
      aaaaaag = 'aaaaab'+aaaaaad;
      aaaaaah = document.getElementsByClassName(aaaaaaf);
      for(aaaaaai=0;aaaaaai<aaaaaah.length;aaaaaai++){
        aaaaaah[aaaaaai].className = aaaaaah[aaaaaai].className.replace('active','var');
      }
      aaaaaaj = document.getElementsByClassName(aaaaaag);
      for(aaaaaai=0;aaaaaai<aaaaaaj.length;aaaaaai++){
        aaaaaaj[aaaaaai].className = aaaaaaj[aaaaaai].className.replace('var','hidden');
      }
      aaaaaac = document.getElementById($aaaaaa);
      _aaaaaa.currentTarget.className = _aaaaaa.currentTarget.className.replace('var','active');
      aaaaaac.className = aaaaaac.className.replace('hidden','var');
      break;
    case 'aab':
      aaaaaaf = 'aabBRF'+aaaaaad;
      aaaaaag = 'aabWRF'+aaaaaad;
      aaaaaah = document.getElementsByClassName(aaaaaaf);
      for(aaaaaai=0;aaaaaai<aaaaaah.length;aaaaaai++){
        aaaaaah[aaaaaai].className = aaaaaah[aaaaaai].className.replace('active','var');
      }
      aaaaaaj = document.getElementsByClassName(aaaaaag);
      for(aaaaaai=0;aaaaaai<aaaaaaj.length;aaaaaai++){
        aaaaaaj[aaaaaai].className = aaaaaaj[aaaaaai].className.replace('var','hidden');
      }
      aaaaaac = document.getElementById($aaaaaa);
      _aaaaaa.currentTarget.className = _aaaaaa.currentTarget.className.replace('var','active');
      aaaaaac.className = aaaaaac.className.replace('hidden','var');
      break;
  }
}

// open nav window
// function aaaaab(act, taken_id) {
//   var a_jsvar, 
//       b_jsvar, 
//       taken_win_class,  
//       required_win_class, 
//       taken_btn_class, 
//       required_btn_class;
//   a = 0; b = 15; c = 16; d = 22;
//   taken_win_class = document.getElementById(taken_id).className;
//   required_win_class = taken_win_class.slice(a, b);
//   a_jsvar = document.getElementsByClassName(required_win_class);
//   for (i = 0; i < a_jsvar.length; i++) {
//     a_jsvar[i].className = a_jsvar[i].className.replace('varjsid','hidden');
//   }
//   taken_btn_class = act.currentTarget.className;
//   required_btn_class = taken_btn_class.slice(0, 7);
//   b_jsvar = document.getElementsByClassName(required_btn_class);
//   for (i = 0; i < b_jsvar.length; i++) {
//     b_jsvar[i].className = b_jsvar[i].className.replace('active','varjsid');
//   }
//   document.getElementById('header').style.display = 'flex';
//   document.getElementById('body_a').style.display = 'block';
//   if(taken_win_class.slice(c, d) === 'hidden') {
//     document.getElementById(taken_id).className = document.getElementById(taken_id).className.replace('hidden','varjsid');  
//     act.currentTarget.className = act.currentTarget.className.replace('varjsid','active');
//     if(act.currentTarget.className.match('icon-list-a')){
//       document.getElementById('body_a').className = document.getElementById('body_a').className.replace('body-a', 'body-b');
//       document.getElementById('sidenav').style.position = 'fixed';
//     } else if (act.currentTarget.className.match('icon-search-a')) {
//         document.getElementById(taken_id).className = document.getElementById(taken_id).className.replace('hidden', 'var');
//     }
//     if(window.innerWidth <= 640) {
//       document.getElementById('header').style.display = 'none';
//     }
//   } else {
//     document.getElementById(taken_id).className = document.getElementById(taken_id).className.replace('varjsid','hidden');  
//     act.currentTarget.className = act.currentTarget.className.replace('active','varjsid');
//     document.getElementById('body_a').className = document.getElementById('body_a').className.replace('body-b', 'body-a');
//     if(window.innerWidth <= 640) {
//       document.getElementById('header').style.display = 'flex';
//       document.getElementById('sidenav').style.position = 'sticky';
//     }
//   }
//   if(taken_id === 'search') {
//     if(document.getElementById('search').className.match('varjsid')) {
//       document.getElementById('title').className = document.getElementById('title').className.replace('varjsid','hidden');
//       document.getElementById('sidetitle').className = document.getElementById('sidetitle').className.replace('hidden','varjsid');
//     } else {
//       document.getElementById('title').className = document.getElementById('title').className.replace('hidden','varjsid');
//       document.getElementById('sidetitle').className = document.getElementById('sidetitle').className.replace('varjsid','hidden');
//     }
//   }
//   if(document.getElementById('search').className.match('hidden')) {
//     document.getElementById('title').className = document.getElementById('title').className.replace('hidden','varjsid');
//     document.getElementById('sidetitle').className = document.getElementById('sidetitle').className.replace('varjsid','hidden');
//   }
// }



function aaaaab(_aaaaab, $aaaaab) {
  var aaaaaba, 
      aaaaabb, 
      aaaaabc,  
      aaaaabd, 
      aaaaabe, 
      aaaaabf;
  a = 0; b = 15; c = 16; d = 22;
  aaaaabc = document.getElementById($aaaaab).className;
  aaaaabd = aaaaabc.slice(a, b);
  
    document.getElementById('body_a').className = document.getElementById('body_a').className.replace('body-b', 'body-a');
  aaaaaba = document.getElementsByClassName(aaaaabd);
  for (i = 0; i < aaaaaba.length; i++) {
    aaaaaba[i].className = aaaaaba[i].className.replace('varjsid','hidden');
  }
  aaaaabe = _aaaaab.currentTarget.className;
  aaaaabf = aaaaabe.slice(0, 7);
  aaaaabb = document.getElementsByClassName(aaaaabf);
  for (i = 0; i < aaaaabb.length; i++) {
    aaaaabb[i].className = aaaaabb[i].className.replace('active','varjsid');
  }
  document.getElementById('header').style.display = 'flex';
  document.getElementById('body_a').style.display = 'block';
  if(aaaaabc.slice(c, d) === 'hidden') {
    document.getElementById($aaaaab).className = document.getElementById($aaaaab).className.replace('hidden','varjsid');  
    _aaaaab.currentTarget.className = _aaaaab.currentTarget.className.replace('varjsid','active');
    if(_aaaaab.currentTarget.className.match('icon-list-a')){
      document.getElementById('body_a').className = document.getElementById('body_a').className.replace('body-a', 'body-b');
      document.getElementById('sidenav').style.position = 'fixed';
    } else if (_aaaaab.currentTarget.className.match('icon-search-a')) {
        document.getElementById($aaaaab).className = document.getElementById($aaaaab).className.replace('hidden', 'var');
    }
    if(window.innerWidth <= 640) {
      document.getElementById('header').style.display = 'none';
    }
  } else {
    document.getElementById($aaaaab).className = document.getElementById($aaaaab).className.replace('varjsid','hidden');  
    _aaaaab.currentTarget.className = _aaaaab.currentTarget.className.replace('active','varjsid');
    document.getElementById('body_a').className = document.getElementById('body_a').className.replace('body-b', 'body-a');
    if(window.innerWidth <= 640) {
      document.getElementById('header').style.display = 'flex';
      document.getElementById('sidenav').style.position = 'sticky';
    }
  }
  if($aaaaab === 'search') {
    if(document.getElementById('search').className.match('varjsid')) {
      document.getElementById('title').className = document.getElementById('title').className.replace('varjsid','hidden');
      document.getElementById('sidetitle').className = document.getElementById('sidetitle').className.replace('hidden','varjsid');
    } else {
      document.getElementById('title').className = document.getElementById('title').className.replace('hidden','varjsid');
      document.getElementById('sidetitle').className = document.getElementById('sidetitle').className.replace('varjsid','hidden');
    }
  }
  if(document.getElementById('search').className.match('hidden')) {
    document.getElementById('title').className = document.getElementById('title').className.replace('hidden','varjsid');
    document.getElementById('sidetitle').className = document.getElementById('sidetitle').className.replace('varjsid','hidden');
  }
}




// calculator
function aaaaac(_aaaaac) {
  var aaaaaca, aaaaacb,aaaaacc,aaaaacd,aaaaace,aaaaacf,aaaaacg;
  b = document.getElementById('valueFromCalDis');
  c = document.getElementById('valueToCalDis');
  if(_aaaaac === 'del'){
    b.value = b.value.replace(b.value.charAt(b.value.length-1), '');
  }else if (_aaaaac=== 'clear'){
    b.value = '';
    c.value = '';
  }else if (_aaaaac==='='){
    c.value = eval(b.value);
  } else {
    b.value += _aaaaac;
  }
}

// code COUNTER
function aaaaad($aaaaad) {
  var aaaaada, aaaaadb,aaaaadc,aaaaadd,aaaaade,aaaaadf,aaaaadg,aaaaadh,aaaaadi,aaaaadj,aaaaadk;
  aaaaada = $aaaaad.length;
  if(aaaaada > 6){aaaaadb = $aaaaad.slice(6, aaaaada);}else{aaaaadb='';}
  aaaaada = $aaaaad.slice(0, 3);
  switch (aaaaada) {
    case 'zaa':
      aaaaade = document.getElementById('zaaaaa' + aaaaadb).value;
      aaaaadc = document.getElementById('zaaaab' + aaaaadb).value;
      aaaaadc=aaaaadc-1; 
      aaaaadf = 'display-a-aaaaaa' + aaaaadb;
      aaaaadd = 'refcode-a-aaaaaa' + aaaaadb;
      aaaaadh = 'display-b-aaaaaa' + aaaaadb;
      aaaaadj = 'refcode-b-aaaaaa' + aaaaadb;
      aaaaadg = 'ref-aaaaaa' + aaaaadb;
      if(aaaaade<0||aaaaadc<0){
        window.alert('Given details are invalid...');
      }else{
        f=document.getElementsByClassName(aaaaadg);
        for(aaaaadi=0;aaaaadi<f.length;aaaaadi++){
          f[aaaaadi].innerHTML=aaaaade;
        }
        aaaaadk=aaaaag(aaaaade,aaaaadc,aaaaadd);
        document.getElementById(aaaaadf).innerHTML=aaaaadk;
        aaaaadk=aaaaag(aaaaade,aaaaadc,aaaaadj);
        console.log(aaaaade+" "+aaaaadh);
        document.getElementById(aaaaadh).innerHTML=aaaaadk;
      }
      break;
    default:
      window.alert("Unknown id");
  }
}
// resize windows
function aaaaae(a,b,c) {
  switch(a) {
    case 'height':
      
      break;
      
    case 'width':
      break;
  }
}

function aaaaaf(aaaaafa, aaaaafb) {
  var aaaaafc = document.getElementById(aaaaafa);
  var aaaaafd = document.getElementById(aaaaafb);
  var aaaaafe = aaaaafd.contentDocument;
  aaaaafe.body.innerHTML = aaaaafc.value;
}


// make_code

function aaaaag(cs_first_value, cs_second_value, cs_ref_disp_id) {
  // when cs_second_value is 0 then cs_first_value should be '' (none)
  var i, j, k, b, c, d, e,
      cs_var_a,
      cs_var_b,
      cs_var_c,
      cs_var_d,
      cs_var_e,
      cs_var_f,
      cs_var_g,
      cs_var_h,
      cs_taken_code,
      cs_code,
      cs_no_tab,
      cs_id,
      cs_taken_code_length,
      cs_code_length,
      cs_count_id_a,
      cs_count_id_b,
      cs_id_list,
      cs_raw_code,
      cs_limit_a,
      cs_limit_b,
      cs_limit_c,
      cs_raw_code;

  cs_var_a = 97;
  cs_var_b = 97;
  cs_var_c = 97;
  cs_var_d = 97;
  cs_var_e = 97;
  cs_var_f = 97;
  cs_code = [];
  cs_id_list = [];
  if(cs_second_value === 0){
    cs_code = document.getElementById(cs_ref_disp_id).textContent;
  } else {
    cs_raw_code = document.getElementById(cs_ref_disp_id).textContent;
    cs_code_length = cs_raw_code.length;
    cs_limit_a = eval(cs_second_value);
    cs_count_id_a = 1;
    for (i = 0; i < cs_limit_a; i++) {
      cs_count_id_b = cs_count_id_a + 1;
      cs_limit_b = cs_second_value;
      cs_raw_code = (cs_raw_code.replace('/id' + cs_count_id_a + '/,', '/id' + cs_count_id_b + '/,'));
      cs_var_g = cs_limit_a - 1;
      if(i < cs_var_g) {
        cs_code.push(cs_raw_code + '//');
      } else {
        cs_code.push(cs_raw_code);
      }
      cs_count_id_a += 1; 
    }
    cs_count_id_a = 1;
    
    for (i = 0; i < cs_second_value; i++) {
      cs_id = ('&#'+cs_var_f +';'+'&#'+cs_var_e+';'+'&#'+cs_var_d+';'+ '&#'+cs_var_c+';'+'&#'+cs_var_b+';'+'&#'+cs_var_a+';'+ cs_first_value);
      //replace(cs_taken_code, cs_id_list[i]);
      cs_id_list.push(cs_id);
      cs_var_a += 1;
      if(cs_var_a === 123) {
        cs_var_b += 1;
        cs_var_a = 97;
        if(cs_var_b === 123) {
          cs_var_c += 1;
          cs_var_b = 97;
          if(cs_var_c === 123) {
            if (d == 17577) {
              window.alert('Sorry we can produce only 17577 id for your code.');
            }
          }
        }
      }
    } 
  }
  document.getElementById('raw-code').innerHTML = cs_code;
  if (cs_second_value <= 200) {
    cs_code = document.getElementById('raw-code').textContent;
    document.getElementById('raw-code').innerHTML = '';
    cs_code_length = cs_code.length; 
    for (i = 0; i < cs_code_length; i++ ) {
      cs_code = cs_code.replace('//,','');
    }
    for (i = 0; i < cs_code_length; i++ ) {
      cs_code = cs_code.replace('/csot/,','&#60;');
    }
    for (i = 0; i < cs_code_length; i++ ) {
      cs_code = cs_code.replace('/csct/,','&#62;');
    }
    for (i = 0; i < cs_code_length; i++ ) {
      cs_code = cs_code.replace('/ot/,','<');
    }
    for (i = 0; i < cs_code_length; i++ ) {
      cs_code = cs_code.replace('/ct/,','>');
    }
    for (i = 0; i < cs_code_length; i++ ) {
      cs_code = cs_code.replace('/spc/,','&nbsp;');
    }
    for (i = 0; i < cs_code_length; i++ ) {
      cs_code = cs_code.replace('/refc/,', cs_first_value);
    }
    j = 2;
    if(cs_second_value != 0) {
      for (i = 0; i < cs_code_length; i++ ) {
        cs_var_b = cs_id[i];
        cs_code = cs_code.replace('/id' + j + '/,',cs_id_list[i]);
        j += 1;
      }
    }
  }
  return cs_code;
}

// aaaaah
function spread() {
  var a, b, c, d;
  a = document.getElementById('spread_items_container');
  if(a.className.match('hidden')){
    a.className = a.className.replace('hidden', 'var');
  } else {
    a.className = a.className.replace('var', 'hidden');
  }
}

// aaaaai
function open_box(taken_id) {
  var a,b,c,d,e,f;
  a = document.getElementById(taken_id);
  if(a.className.match('hidden')) {
    a.className = a.className.replace('hidden', 'var');
  } else {
    a.className = a.className.replace('var', 'hidden');
  }
}

// aaaaaj
function checkName(el) {
  document.getElementById('myDiv').innerHTML = document.getElementById('myText').value;
  a = document.getElementById('myDiv').textContent;
  b = a.length;
  for (i=0;i<b;i++){
    c = a.slice(b-3, b);
    if(c == 'set') {
      a = a.replace(a.slice(b-3, b), '<span class="textcoc_c">set</span>');
      b -= 1;
    }
  }
  document.getElementById('myDiv').innerHTML = a;
}

// loadiing page 
// aaaaak
function onload_func() {
  document.getElementById('onload').className = 'hidden';
}

// aaaaal
function open_tab(act, tab_box_sa_id) {
  var i, tab_box_sa, tab_box_nav_btn;
  tab_box_sa = document.getElementsByClassName("tab_box_sa");
  for (i = 0; i < tab_box_sa.length; i++) {
    tab_box_sa[i].className= "hidden";
  }
  tab_box_nav_btn = document.getElementsByClassName("tab_box_nav_btn");
  for (i = 0; i < tab_box_nav_btn.length; i++) {
    tab_box_nav_btn[i].className = tab_box_nav_btn[i].className.replace(" active", "");
  }
  document.getElementById(tab_box_sa_id).className = "tab_box_sa";
  act.currentTarget.className += " active";
}


function aaaaam($aaam) {
  var aaa,aab,aac,aad,aae,aaf,aag,aah,aai,aak,aal,aam,aan;
  aaa = $aaam.slice(0, 3);
  aab = $aaam.slice(3, $aaam.length);
  aac = aaa+'BRF'+aab;
  aak = aaa+'WRF'+aab;
  aad = document.getElementsByClassName(aac);
  aal = document.getElementsByClassName(aak);
  aae = 'var';
  for(aai=0;aai<aad.length;aai++){
    if(aad[aai].className.match('active')) {
      aaf = aai;
    }
    aad[aai].className = aad[aai].className.replace('active', aae);
    aal[aai].className = aal[aai].className.replace(aae, 'hidden');
  }
  aah = document.getElementsByClassName(aae);
  if(aaf+1 < aah.length) {
    aad[aaf+1].className = aad[aaf+1].className.replace(aae, 'active');
    aal[aaf+1].className = aal[aaf+1].className.replace('hidden', aae);
  } else {
    aad[0].className = aad[0].className.replace(aae, 'active');
    aal[0].className = aal[0].className.replace('hidden', aae);
  }
}


function aaaaan($aaaaan) {
  var aaaaana,aaaaanb,aaaaanc,aaaaand,aaaaane,aaaaanf,aaaaang,aaaaanh,aaaaani,aaaaank,aaaaanl,aaaaanm,aaaaann;
  aaaaana = $aaaaan.slice(0, 3);
  aaaaanb = $aaaaan.slice(3, $aaaaan.length);
  aaaaanc = aaaaana+'BRF'+aaaaanb;
  aaaaank = aaaaana+'WRF'+aaaaanb;
  aaaaand = document.getElementsByClassName(aaaaanc);
  aaaaanl = document.getElementsByClassName(aaaaank);
  aaaaane = 'var';

  for(aaaaani=0;aaaaani<aaaaand.length;aaaaani++){
    if(aaaaand[aaaaani].className.match('active')) {
      aaaaanf = aaaaani;
    }
    aaaaand[aaaaani].className = aaaaand[aaaaani].className.replace('active', aaaaane);
    aaaaanl[aaaaani].className = aaaaanl[aaaaani].className.replace(aaaaane, 'hidden');
  }
  aaaaanh = document.getElementsByClassName(aaaaank);
  if(aaaaanf+1 < aaaaanh.length) {
    aaaaand[aaaaanf+1].className = aaaaand[aaaaanf+1].className.replace(aaaaane, 'active');
    aaaaanl[aaaaanf+1].className = aaaaanl[aaaaanf+1].className.replace('hidden', aaaaane);
  } else {
    aaaaand[0].className = aaaaand[0].className.replace(aaaaane, 'active');
    aaaaanl[0].className = aaaaanl[0].className.replace('hidden', aaaaane);
  }
}


function aaaaao($aaaaan) {
  var aaaaana,aaaaanb,aaaaanc,aaaaand,aaaaane,aaaaanf,aaaaang,aaaaanh,aaaaani,aaaaank,aaaaanl,aaaaanm,aaaaann;
  aaaaana = $aaaaan.slice(0, 3);
  aaaaanb = $aaaaan.slice(3, $aaaaan.length);
  aaaaanc = aaaaana+'BRF'+aaaaanb;
  aaaaank = aaaaana+'WRF'+aaaaanb;
  aaaaand = document.getElementsByClassName(aaaaanc);
  aaaaanl = document.getElementsByClassName(aaaaank);
  aaaaane = 'var';

  for(aaaaani=0;aaaaani<aaaaand.length;aaaaani++){
    if(aaaaand[aaaaani].className.match('active')) {
      aaaaanf = aaaaani;
    }
    aaaaand[aaaaani].className = aaaaand[aaaaani].className.replace('active', aaaaane);
    aaaaanl[aaaaani].className = aaaaanl[aaaaani].className.replace(aaaaane, 'hidden');
  }
  aaaaanh = document.getElementsByClassName(aaaaank);
  if(aaaaanf <= 0) {
    aaaaand[aaaaanh.length-1].className = aaaaand[aaaaanh.length-1].className.replace(aaaaane, 'active');
    aaaaanl[aaaaanh.length-1].className = aaaaanl[aaaaanh.length-1].className.replace('hidden', aaaaane);
  } else {
    aaaaand[aaaaanf-1].className = aaaaand[aaaaanf-1].className.replace(aaaaane, 'active');
    aaaaanl[aaaaanf-1].className = aaaaanl[aaaaanf-1].className.replace('hidden', aaaaane);
  }
}



// Open and close window
function aaaaap($aaaaap, aaaaapb) {
  var aaaaapa = document.getElementById($aaaaap);
  if(aaaaapa.className === 'hidden') {
    aaaaapa.className = aaaaapa.className.replace('hidden', aaaaapb);
  }else {
    aaaaapa.className = aaaaapa.className.replace(aaaaapb, 'hidden');
  }
}


// aaaaaq = get_code_func
function get_code_func(taken_id) {
  var taken_class, required_class, condition, js_var, js_var_length;
  taken_class = document.getElementById(taken_id).className;
  condition = taken_class.slice(0, 9);
  js_var = document.getElementsByClassName('var_jsid');
  js_var_length = js_var.length;
  for (i = 0; i < js_var_length; i++ ) {
    js_var[i].className = js_var[i].className.replace('var_jsid', 'hidden');
  }
  if(condition === 'hidden') {
    required_class = document.getElementById(taken_id).className.replace('hidden','var_jsid');
    document.getElementById(taken_id).className = required_class;
  } else {
    required_class = document.getElementById(taken_id).className.replace('var_jsid','hidden');
    document.getElementById(taken_id).className = required_class;
  }
  document.getElementById('body_a_id').className = document.getElementById('body_a_id').className.replace('body_b', 'body_a');
}
function change_color(type) {
  switch(type){
    case 'dec':
      r = document.getElementById('red_color_input').value;
      g = document.getElementById('green_color_input').value;
      b = document.getElementById('blue_color_input').value;
      a = document.getElementById('opacity_color_input').value;
      document.getElementById('color_display').style.backgroundColor = "rgba(" + [r, g, b, a].join() + ")";
      r = eval(r);
      g = eval(g);
      b = eval(b);
      if(r < 16) {
        r = '0' + dec_to_hex(r);
      } else {
        r = dec_to_hex(r);
      }
      if(g < 16) {
        g = '0' + dec_to_hex(g);
      } else {
        g = dec_to_hex(g);
      }
      if(b < 16) {
        b = '0' + dec_to_hex(b);
      } else {
        b = dec_to_hex(b);
      }
      if(a < 16) {
        a = '0' + dec_to_hex(a);
      } else {
        a = dec_to_hex(a);
      }
      
      document.getElementById('color_hex_value_counter').value = "#" + r + g + b + a;
      document.getElementById('color_display').style.backgroundColor = "#" + r + g + b + a;
      break;
    case 'hex':
      var val = document.getElementById('color_hex_value_counter').value;
      r = val.slice(1, 3);
      r = hex_to_dec('0x' + r);
      g = val.slice(3, 5);
      g = hex_to_dec('0x' + g);
      b = val.slice(5, 7);
      b = hex_to_dec('0x' + b);
      a = val.slice(7, 9);
      a = hex_to_dec('0x' + a);
      document.getElementById('red_color_input').value = r;
      document.getElementById('green_color_input').value = g;
      document.getElementById('blue_color_input').value = b;
      document.getElementById('opacity_color_input').value = a;
      document.getElementById('color_display').style.backgroundColor = "rgba(" + [r, g, b, a].join() + ")";
      break;
    
  }
}
function dec_to_hex(num) {
  num = eval(num);
  return num.toString(16).toUpperCase();
}
function hex_to_dec(num) {
  if(num.slice(0, 2) === '0x') {
    num = eval(num);
    num = parseInt(num);
  } else {
    num = num.replace(num, '0x'+ num);
    num = parseInt(num);
  }
  return num;
}
