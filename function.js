function home(){
  document.getElementById("sub_home").style.display="inline-block";
  document.getElementById("sub_about").style.display="none";
  document.getElementById("sub_lab").style.display="none";
  document.getElementById("sub_inst").style.display="none";
  document.getElementById("sub_contact").style.display="none";
}

function about(){
  document.getElementById("sub_home").style.display="none";
  document.getElementById("sub_about").style.display="inline-block";
  document.getElementById("sub_lab").style.display="none";
  document.getElementById("sub_inst").style.display="none";
  document.getElementById("sub_contact").style.display="none";
}

function lab(){
  document.getElementById("sub_home").style.display="none";
  document.getElementById("sub_about").style.display="none";
  document.getElementById("sub_lab").style.display="inline-block";
  document.getElementById("sub_inst").style.display="none";
  document.getElementById("sub_contact").style.display="none";
}

function inst(){
  document.getElementById("sub_home").style.display="none";
  document.getElementById("sub_about").style.display="none";
  document.getElementById("sub_lab").style.display="none";
  document.getElementById("sub_inst").style.display="inline-block";
  document.getElementById("sub_contact").style.display="none";
}

function contact(){
  document.getElementById("sub_home").style.display="none";
  document.getElementById("sub_about").style.display="none";
  document.getElementById("sub_lab").style.display="none";
  document.getElementById("sub_inst").style.display="none";
  document.getElementById("sub_contact").style.display="inline-block";
}
