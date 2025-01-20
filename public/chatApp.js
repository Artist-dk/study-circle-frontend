
let lcObj = new Object();
lcObj.interval = '';
lcObj.txt = '';
lcObj.cond = true;
lcObj.scroll = true;
var id = document.getElementById('_info');
id.addEventListener('click', infoPanel);
function infoPanel() {
    var xhr  = new XMLHttpRequest();
    xhr.open('get','getUserInfo.php',true);
    xhr.onload = function() {
        document.querySelector('.info-main').innerHTML = this.responseText;
    }
    xhr.send();
}
var id = document.getElementById('_setting');
id.addEventListener('click', settingPanel);
function settingPanel() {
    var a = document.querySelector("setting-pnel");
}
var id = document.querySelector('._logout');
id.addEventListener('click', logout);
function logout() {
    var xhr = new XMLHttpRequest();
    xhr.open('post','logout.php',true);
    xhr.onload = function() {
        window.location.replace("http://localhost/project/");
    }
    xhr.send();
}
var id = document.getElementsByClassName('friend-li');
var len = id.length;
// console.log(len);
for(var i = 0; i < len; i++) {
    id[i].addEventListener('click',setRecipient);
}
// id.addEventListener('click',loadChat);
function setRecipient(e) {
    var recipient = e.currentTarget.lastChild.lastChild.lastChild.textContent.trim();
    // console.log(recipient);
    var xhr = new XMLHttpRequest();
    xhr.open('post','setRecipient.php',true); 
    xhr.onload = function() {
        loadChatHead();
        loadChat();
        document.querySelector('.chat-main-psudo').classList.add('hidden');
        document.querySelector('.chat-main').classList.remove('hidden');
    }

    var a = "recipient="+recipient;
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // console.log(a);
    xhr.send(a);
}
function loadChatHead() {
    var id = document.querySelector('.chat-head');
    var xhr = new XMLHttpRequest();
    xhr.open('get','loadChatHead.php',true);
    xhr.onload  = function() {
        // console.log(this.responseText);
        id.innerHTML = this.responseText;
    }
    xhr.send();
}
function loadChat() {
    var xhr = new XMLHttpRequest();
    xhr.open('post','loadChat.php',true); 
    xhr.onload = function() {
        var id = document.querySelector('.chat-body');
        if(lcObj.txt != this.responseText) {
            lcObj.txt = this.responseText;
            id.innerHTML = this.responseText;
            if(lcObj.scroll) {
                id.scrollTop = id.scrollHeight;
            }
        }
        if(lcObj.cond) {
            lcObj.interval = setInterval(loadChat, 1000);
            lcObj.cond = false;
        }
    }
    xhr.send();
}
var id = document.getElementById("_sendMsg");
document.getElementById('_msg').addEventListener('keyup',(event)=>{ if(event.keyCode==13) sendMsg()});
id.addEventListener('click',sendMsg);
function sendMsg() {
    // console.log('send_msg');
    var id = document.getElementById('_msg');
    var xhr = new XMLHttpRequest();
    xhr.open('post','saveMsg.php',true);
    xhr.onload = function() {
        // var id = document.querySelector('.chat-body');
        // id.innerHTML = this.responseText;
        // console.log(this.responseText);
        loadChat();
    }
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    var a = "msg="+id.value+"&msg_type='t'";
    // console.log(a);
    xhr.send(a);
}
function sayhi() {
    console.log('sayHi');
    var xhr = new XMLHttpRequest();
    xhr.open('post','saveMsg.php',true);
    xhr.onload = function() {
        loadChat();
        console.log(this.responseText);
    }
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    var a = 'Hi!';
    var a = "msg="+a+"&msg_type=t";
    xhr.send(a);
}
window.ononline = function() {
    alert('online');
    changeStatus(1);
}
window.onoffline = function() {
    alert('offline');
    changeStatus(0);
}
function changeStatus(a) {
    var xhr = new XMLHttpRequest();
    xhr.open('post','changeOnlineStatus.php',true);
    xhr.onload = function() {
        console.log(this.responseText);
    }
    xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
    var data = 'data='+a;
    console.log(data);
    xhr.send(data);
}
