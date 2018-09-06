document.onreadystatechange = function() {
    setTimeout(function(){
    document.getElementById('loader').style.visibility="hidden";
    },4500);
}

var audio = document.getElementById("himegud");
audio.play();
audio.volume = 1;


function listadmin() { 
  var admin = document.getElementById('listadmin');
  var speed = admin.style.display;
  var btnadmin = document.getElementById('btn-admin');
  if (speed == 'block') { 
    admin.style.display = 'none';
  }
  else { 
    admin.style.display = 'block';
  }
}  

function listper() { 
  var peraturan = document.getElementById('peraturan');
  var perper = peraturan.style.display;
  var btnper = document.getElementById('btn-per');
  if (perper == 'block') { 
    peraturan.style.display = 'none';
  }
  else { 
    peraturan.style.display = 'block';
  }
}

function logwhm() { 
  var whm = document.getElementById('logwhm');
  var speed = whm.style.display;
  var btnwhm = document.getElementById('btn-logwhm');
  if (speed == 'block') { 
    whm.style.display = 'none';
  }
  else { 
    whm.style.display = 'block';
  }
}  

function logcp() { 
  var cp = document.getElementById('logcp');
  var speed = cp.style.display;
  var btncp = document.getElementById('btn-logcp');
  if (speed == 'block') { 
    cp.style.display = 'none';
  }
  else { 
    cp.style.display = 'block';
  }
}  

function listdomain() { 
  var domain = document.getElementById('domain');
  var speed = domain.style.display;
  var btndomain = document.getElementById('btn-domain');
  if (speed == 'block') { 
    domain.style.display = 'none';
  }
  else { 
    domain.style.display = 'block';
  }
}

function listharga() { 
  var harga = document.getElementById('harga');
  var speed = harga.style.display;
  var btndomain = document.getElementById('btn-harga');
  if (speed == 'block') { 
    harga.style.display = 'none';
  }
  else { 
    harga.style.display = 'block';
  }
} 

function logdemo() { 
  var demoo = document.getElementById('logdemo');
  var speed = demoo.style.display;
  var btndemoo = document.getElementById('btn-logdemo');
  if (speed == 'block') { 
    demoo.style.display = 'none';
  }
  else { 
    demoo.style.display = 'block';
  }
}   
