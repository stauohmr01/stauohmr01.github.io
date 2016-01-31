function tblfilter(nm,key){
  if(!document.getElementsByTagName) return;
  var trs = document.getElementById(nm).rows;
  for(var i=0; i<trs.length; i++){
    var tr = trs[i];
    if(!tr.title || tr.title=='') continue;
    var found=0;
    if(key == '') found=1;
    else {
      var keys = tr.title.split(',');
      for(var j=0; j<keys.length; j++){
        if(keys[j] == key){ found=1; break; }
      }
    }
    tr.style.display = found?'':'none';
  }
}


function changecss(){
if(document.getElementById("slidemenu").style.display == ""){
    document.getElementById("slidemenu").style.display="none";
  }
  else{
    document.getElementById("slidemenu").style.display="";
  }
}