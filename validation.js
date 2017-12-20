function getID(a) {
    return document.getElementById(a);
}

function emailValid(id_email) {
    var email = getID(id_email);
    if (!email.value.match(/.+@.+/)) {
        errorMessageEmail(id_email, email.parentNode.id, 'Invalid email property');
    }
    else {
        removeErrorEmail(id_email, email.parentNode.id);
    }
   
}

function nameValid(id_name) {
    var userName = getID(id_name);
    if (!userName.value.match(/^[a-z ,.'-]+$/i)) {
        errorMessageName(id_name, userName.parentNode.id, 'Please, enter your real name');
    }
    else {
        removeErrorName(id_name, userName.parentNode.id);
    }
    
}

function phoneValid(id_name) {
    var phoneNum = getID(id_name);
    if (!phoneNum.value.match(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/)) {
        errorMessagePhone(id_name, phoneNum.parentNode.id, 'Please, enter your real phone number');
    }
    else {
        removeErrorPhone(id_name, phoneNum.parentNode.id);
    }
    
}

function textareaValid(id_name) {
    var txtarea = getID(id_name);
    if (txtarea.value == "" || txtarea.value == null) {
        errorMessageTXT(id_name, txtarea.parentNode.id, 'This field is required');
    }
    else {
        removeErrorTXT(id_name, txtarea.parentNode.id);
    }
    
}

function errorMessageName(id_field, parent_div, message) {
    var x = document.querySelectorAll(".error_msg_name");
    if (x.length == 0) {
        var pElem = document.createElement("p");
        pElem.setAttribute("class", "error_msg_name");
        var pText = document.createTextNode(message);
        pElem.appendChild(pText);
        getID(parent_div).appendChild(pElem);
        getID(id_field).setAttribute("class", "error_field");
          var chm = document.getElementsByClassName("chm_name");
        for (var i = 0; i < chm.length; i++) {
        if (chm.length > 0) {
            chm[i].parentNode.removeChild(chm[i]);
        }
    }
    }
}

function removeErrorName(id_field, parent_div) {
    var err_msg = document.getElementsByClassName("error_msg_name");
    for (var i = 0; i < err_msg.length; i++) {
        if (err_msg.length > 0) {
            err_msg[i].parentNode.removeChild(err_msg[i]);
            getID(id_field).classList.remove("error_field");
        }
    }

    var ch_once = document.querySelectorAll(".chm_name");
    if (ch_once.length == 0) {
        var ch = document.createElement("div");
        ch.setAttribute("class", "chm_name");
        getID(parent_div).appendChild(ch);
    }
}




function errorMessageEmail(id_field, parent_div, message) {
    var x = document.querySelectorAll(".error_msg_email");
    if (x.length == 0) {
        var pElem = document.createElement("p");
        pElem.setAttribute("class", "error_msg_email");
        var pText = document.createTextNode(message);
        pElem.appendChild(pText);
        getID(parent_div).appendChild(pElem);
        getID(id_field).setAttribute("class", "error_field");
          var chm = document.getElementsByClassName("chm_email");
        for (var i = 0; i < chm.length; i++) {
        if (chm.length > 0) {
            chm[i].parentNode.removeChild(chm[i]);
        }
    }
    }
}

function removeErrorEmail(id_field, parent_div) {
    var err_msg = document.getElementsByClassName("error_msg_email");
    for (var i = 0; i < err_msg.length; i++) {
        if (err_msg.length > 0) {
            err_msg[i].parentNode.removeChild(err_msg[i]);
            getID(id_field).classList.remove("error_field");
        }
    }

    var ch_once = document.querySelectorAll(".chm_email");
    if (ch_once.length == 0) {
        var ch = document.createElement("div");
        ch.setAttribute("class", "chm_email");
        getID(parent_div).appendChild(ch);
    }
}

function errorMessagePhone(id_field, parent_div, message) {
    var x = document.querySelectorAll(".error_msg_phone");
    if (x.length == 0) {
        var pElem = document.createElement("p");
        pElem.setAttribute("class", "error_msg_phone");
        var pText = document.createTextNode(message);
        pElem.appendChild(pText);
        getID(parent_div).appendChild(pElem);
        getID(id_field).setAttribute("class", "error_field");
          var chm = document.getElementsByClassName("chm_phone");
        for (var i = 0; i < chm.length; i++) {
        if (chm.length > 0) {
            chm[i].parentNode.removeChild(chm[i]);
        }
    }
    }
}

function removeErrorPhone(id_field, parent_div) {
    var err_msg = document.getElementsByClassName("error_msg_phone");
    for (var i = 0; i < err_msg.length; i++) {
        if (err_msg.length > 0) {
            err_msg[i].parentNode.removeChild(err_msg[i]);
            getID(id_field).classList.remove("error_field");
        }
    }

    var ch_once = document.querySelectorAll(".chm_phone");
    if (ch_once.length == 0) {
        var ch = document.createElement("div");
        ch.setAttribute("class", "chm_phone");
        getID(parent_div).appendChild(ch);
    }
}



function errorMessageTXT(id_field, parent_div, message) {
    var x = document.querySelectorAll(".error_msg_txt");
    if (x.length == 0) {
        var pElem = document.createElement("p");
        pElem.setAttribute("class", "error_msg_txt");
        var pText = document.createTextNode(message);
        pElem.appendChild(pText);
        getID(parent_div).appendChild(pElem);
        getID(id_field).setAttribute("class", "error_field");
          var chm = document.getElementsByClassName("chm_txt");
        for (var i = 0; i < chm.length; i++) {
        if (chm.length > 0) {
            chm[i].parentNode.removeChild(chm[i]);
        }
    }
    }
}

function removeErrorTXT(id_field, parent_div) {
    var err_msg = document.getElementsByClassName("error_msg_txt");
    for (var i = 0; i < err_msg.length; i++) {
        if (err_msg.length > 0) {
            err_msg[i].parentNode.removeChild(err_msg[i]);
            getID(id_field).classList.remove("error_field");
        }
    }

    var ch_once = document.querySelectorAll(".chm_txt");
    if (ch_once.length == 0) {
        var ch = document.createElement("div");
        ch.setAttribute("class", "chm_txt");
        getID(parent_div).appendChild(ch);
    }
}