function ispisNavigacije(){
    let navLink=["index.html","cenovnik.html","contact.html","o_autoru.html"];
    let navText=["POČETNA","CENOVNIK","KONTAKT","O AUTORU"];
    let ispis=`<ul class="navbar-nav ms-auto">`;
    for(let i=0;i<navLink.length;i++)
    {
        ispis+=`<li class="nav-item">
                    <a aria-current="page" class="nav-link" href="${navLink[i]}">${navText[i]}</a>
                </li>`;
    }
    ispis+=`</ul>`;
    document.querySelector("#navbarNav").innerHTML=ispis;
}

function promeni(){
    if(slika1.src=='https://nemanjanedeljkovicc.github.io/nemanja-sajt/assets/img/slika6.jpg')
    {
        slika1.src="https://nemanjanedeljkovicc.github.io/nemanja-sajt/assets/img/slika7.jpg";
    }
    else if(slika1.src=='https://nemanjanedeljkovicc.github.io/nemanja-sajt/assets/img/slika7.jpg')
    {
        slika1.src="https://nemanjanedeljkovicc.github.io/nemanja-sajt/assets/img/slika8.jpg";
    }
    else if(slika1.src=='https://nemanjanedeljkovicc.github.io/nemanja-sajt/assets/img/slika8.jpg')
    {
        slika1.src="https://nemanjanedeljkovicc.github.io/nemanja-sajt/assets/img/slika6.jpg";
    }
    setTimeout(promeni,3000);
    };

function napravi(){
 var sport = new Array("MMA", "BOX", "KICKBOX");
 var n=document.getElementById("dropdownlista");
 var y;
  z=`<select name='sport' id="lista"><option value="0">`+"Izaberite veštinu"+`</option>`;

  for(indeks in sport){
  z+=`<option value="${indeks+1}">` + sport [ indeks ] + "</option>";
  }
  z+="</select>";
  z+=`<span class="span-forma5">`+"Morate izabrati jednu opciju"+`</span>`;
n.innerHTML=z;

ime.innerHTML=`<input type="text" name="ime" id="ime1" placeholder="Ime:Primer(Nemanja)" /><span class="span-forma">Ime mora početi velikim
 slovom</span>`;
document.getElementById("prezime").innerHTML=`<input type="text" name="prezime" id="prezime1" placeholder="Prezime:Primer(Nedeljković)" />
<span class="span-forma2">Prezime mora početi velikim slovom</span>`;
email1.innerHTML=`<input type="text" name="email" id="email7" placeholder="Email:Primer(nemanja.nedeljkovic@gmail.com)" />
<span class="span-forma3">Mejl mora sadržati @</span>`;
telefon.innerHTML=`<input type="text" name="telefon" id="telefon1" placeholder="Telefon:Primer(0612345678)" />
<span class="span-forma4">Telefon mora početi sa 06 i imati 10 cifara</span>`;

musko.innerHTML=`<input type="radio" name="rb" value="musko" id="rb1" /><span>Muško</span><br/>`;
zensko.innerHTML=`<input type="radio" name="rb" value="zensko" id="rb2" /> <span>Žensko</span>`;
neizjasnjeno.innerHTML=`<input type="radio" name="rb" value="neizjasnjeno" id="rb3" /> <span>Ne želim da se izjasnim</span>`;
komentar.innerHTML=`<textarea id="tekstualno" name="area" placeholder="Unesite komentar..." ></textarea><span class="span-forma7">
Morate uneti bar 10 karaktera</span>`;
dugme1.innerHTML=`<input type="button" name="dugme" id="dugme" value="POŠALJI"/>`;
}


function proveraForme(){
    const ime=document.querySelector("#ime1");
    let regexIme=/^[A-ZŠĐČĆŽ][a-zšđčćž]{2,10}$/;

    if(!regexIme.test(ime.value)){
        document.querySelector(".span-forma").classList.add("prikazi");
    }
    else{
        document.querySelector(".span-forma").classList.remove("prikazi");
    }

    const prezime=document.querySelector("#prezime1");
    let regexPrezime=/^[A-ZŠĐČĆŽ][a-zšđčćž]{2,15}$/;
    if(!regexPrezime.test(prezime.value)){
        document.querySelector(".span-forma2").classList.add("prikazi");
    }
    else{
        document.querySelector(".span-forma2").classList.remove("prikazi");
    }
    
    const mejl=document.querySelector("#email7");
    let regexMejl=/^[a-z][a-z\.-_0-9]+(@gmail.com|@yahoo.com|@ict.edu.rs)$/;
    if(!regexMejl.test(mejl.value)){
        document.querySelector(".span-forma3").classList.add("prikazi");
    }
    else{
        document.querySelector(".span-forma3").classList.remove("prikazi");
    }

    const telefon=document.querySelector("#telefon1");
    let regexTelefon=/^06[0-9]{8}$/;
    if(!regexTelefon.test(telefon.value)){
        document.querySelector(".span-forma4").classList.add("prikazi");
    }
    else{
        document.querySelector(".span-forma4").classList.remove("prikazi");
    }

    if(lista.options.selectedIndex==0)
    {
        document.querySelector(".span-forma5").classList.add("prikazi");
    }
    else{
        document.querySelector(".span-forma5").classList.remove("prikazi");
    }

    var t=document.getElementById("forma1");
    var marker=0;
    for(var i=0;i<t.rb.length;i++)
    {
        if(t.rb[i].checked==false)
        {
            marker++;
        }
        else{
            marker=0;
            break;
        }
    }
    if(marker==3)
    {
        document.querySelector(".span-forma6").classList.add("prikazi");
    }
    else{
        document.querySelector(".span-forma6").classList.remove("prikazi");
    }

    var n=document.getElementById("tekstualno");
    if(n.value<10)
    {
        document.querySelector(".span-forma7").classList.add("prikazi");
    }
    else{
        document.querySelector(".span-forma7").classList.remove("prikazi");
    }

    if((regexIme.test(ime.value)) && (regexPrezime.test(prezime.value)) && (regexMejl.test(mejl.value)) && 
    (regexTelefon.test(telefon.value)) && (marker!=3) && (lista.options.selectedIndex!=0) && (n.value>=10))
    {
        document.querySelector(".span-logovanje").classList.add("prikazi2");
    }
}
   

function dodaj(){
    ime2.innerHTML=`<input type="text" name="ime" id="ime3" placeholder="Ime:Primer(Nemanja)" /><span class="span-forma">
    Ime mora početi velikim slovom</span>`;
    prezime2.innerHTML=`<input type="text" name="prezime" id="prezime" placeholder="Prezime:Primer(Nedeljković)" />
    <span class="span-forma2">Prezime mora početi velikim slovom</span>`;
    email2.innerHTML=`<input type="text" name="email" id="email" placeholder="Email:Primer(nemanja.nedeljkovic@gmail.com)" />
    <span class="span-forma3">Mejl u sebi mora imati @</span>`;
    var sport = new Array("MMA", "BOX", "KICKBOX");
    var n=document.getElementById("dropdownlista2");
    var y;
     z=`<select name='sport' id="lista"><option value="0">`+"Izaberite veštinu"+`</option>`;
   
     for(indeks in sport){
     z+=`<option value="${indeks+1}">` + sport [ indeks ] + "</option>";
     }
     z+="</select>";
     z+=`<span class="span-forma5">`+"Morate izabrati jednu opciju"+`</span>`;
   n.innerHTML=z;
   dugme2.innerHTML=`<input type="button" name="dugme" id="dugme2" value="POŠALJI"/>`
}

function proveraForme2(){
    const ime=document.querySelector("#ime3");
    let regexIme=/^[A-ZŠĐČĆŽ][a-zšđčćž]{2,10}$/;

    if(!regexIme.test(ime.value)){
        document.querySelector(".span-forma").classList.add("prikazi");
    }
    else{
        document.querySelector(".span-forma").classList.remove("prikazi");
    }

    const prezime=document.querySelector("#prezime");
    let regexPrezime=/^[A-ZŠĐČĆŽ][a-zšđčćž]{2,15}$/;
    if(!regexPrezime.test(prezime.value)){
        document.querySelector(".span-forma2").classList.add("prikazi");
    }
    else{
        document.querySelector(".span-forma2").classList.remove("prikazi");
    }
    
    var mejl=document.querySelector("#email");
    let regexMejl=/^[a-z][a-z\.-_0-9]+(@gmail.com|@yahoo.com|@ict.edu.rs)$/;
    if(!regexMejl.test(mejl.value)){
        document.querySelector(".span-forma3").classList.add("prikazi");
    }
    else{
        document.querySelector(".span-forma3").classList.remove("prikazi");
    }
    if(lista.options.selectedIndex==0)
    {
        document.querySelector(".span-forma5").classList.add("prikazi");
    }
    else{
        document.querySelector(".span-forma5").classList.remove("prikazi");
    }
    if((regexMejl.test(mejl.value)) && (lista.options.selectedIndex!=0) && (regexPrezime.test(prezime.value))
    && (regexIme.test(ime.value)))
        {
            document.querySelector(".span-logovanje").classList.add("prikazi2");
        }
}

function trenerDodaj(){
    let slikeTrenera=["trainer1.jpg","trainer2.jpg","trainer3.jpg","trainer4.jpg"];
    let cena=["1000.00din","1500.00din","2000.00din","1500.00din"];
    let cena2=["13000.00din","15000.00din","18000.00din","21000.00din"];
    let imeTrenera=["Stevan Maletić","Joe Rogan","Ivan Milijevski","Jesson Li"];
    let trenerOpis=["Personalni trener boksa","Personalni trener kickboksa","VIP trener boksa","Personalni trener mma"];
    let ispis=`<div class="row mt-5">`;
    for(let i=0;i<cena.length;i++)
    {
        ispis+=`            
        <div class="col-12 col-md-6 mb-5">
            <div class="card">
                <div class="row g-0">
                <div class="col-md-6 col-7">
                    <img src="assets/img/${slikeTrenera[i]}" class="img-fluid rounded-start" alt="slika trenera">
                </div>
                <div class="col-md-6 col-5">
                    <div class="card-body">
                    <h5 class="card-title">${imeTrenera[i]}</h5>
                    <p class="card-text">${trenerOpis[i]}</p>
                    <p class="card-text">&#x25CF;1 trening-${cena[i]}</p>
                    <p class="card-text">&#x25CF;30 treninga-${cena2[i]}</p>
                    </div>
                </div>
                </div>
            </div>
        </div>`
    }
    ispis+=`</div>`;
    treneri2.innerHTML=ispis;
}

function ispisDrustveneMreze(){
    let mreze=["https://www.instagram.com/","https://www.facebook.com/","https://www.youtube.com/"];
    let ikonice=["fa-instagram","fa-facebook","fa-youtube"];
    let ispis=`<ul class="col-12 d-flex justify-content-evenly">`;
    for(let i=0;i<mreze.length;i++)
    {
        ispis+=`<li><a href="${mreze[i]}" target="_blank"><i class="fa-brands ${ikonice[i]}"></i></a></li>`;
    }
    ispis+=`</ul>`;
    mreze2.innerHTML=ispis;

    let mreze_2=["sitemap.xml","rss.xml","document.pdf"];
    let ikonice_2=["fa-sitemap","fa-rss","fa-file"];
    let ispis_2=`<ul class="col-12 d-flex justify-content-evenly">`;
    for(let i=0;i<mreze_2.length;i++)
    {
        ispis_2+=`<li><a href="${mreze_2[i]}" target="_blank"><i class="fa-solid ${ikonice_2[i]}"></i></a></li>`;
    }
    ispis_2+=`</ul>`;
    mreze3.innerHTML=ispis_2;

    let vreme=["fa-location-dot","fa-envelope"];
    let radno=["Zdravka Čelara 16,Beograd","nemanja.nedeljkovic.30.22@gmail.com"];
    let ispisi=` <h6>Kontakt informacije</h6>
    <ul class="row">`;
    for(let i=0;i<vreme.length;i++)
    {
        ispisi+=` <li class="col-12 col-md-6 col-lg-12"><i class="fa-solid ${vreme[i]}"></i>${radno[i]}</li>`;
    }
    ispisi+='</ul>';
    kontakt2.innerHTML=ispisi;

    let ikonica=["fa-clock","fa-clock"];
    let vreme2=["Pon-Sub: 7:00-23:00","Ned: 8:00-19:00"];
    let napisi=` <h6>Radno vreme</h6>
    <ul class="row">`;
    for(let i=0;i<vreme.length;i++)
    {
        napisi+=`<li class="col-12 col-md-6 col-lg-12"><i class="fa-regular ${ikonica[i]}"></i>${vreme2[i]}</li>`;
    } 
    napisi+='</ul>';
    vreme3.innerHTML=napisi;
}

let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

$(document).ready(function(){
    $('#disclaimer').hide()
    $('#togglebutton').click(function(){
      $('#disclaimer').toggle('slow');
      if(togglebutton.text=="Prikaži više")
      {
      $('#togglebutton').text("Prikaži manje");
      }
    else
    {
    $('#togglebutton').text("Prikaži više");
    }
    });
  });

$(document).ready(function(){
    $('#disclaimer2').hide()
    $('#togglebutton2').click(function(){
      $('#disclaimer2').toggle('slow');
      if(togglebutton2.text=="Prikaži više")
      {
      $('#togglebutton2').text("Prikaži manje");
      }
    else
    {
    $('#togglebutton2').text("Prikaži više");
    }
    });
  });

  $(document).ready(function(){
    $('#disclaimer3').hide()
    $('#togglebutton3').click(function(){
      $('#disclaimer3').toggle('slow');
      if(togglebutton3.text=="Prikaži više")
      {
      $('#togglebutton3').text("Prikaži manje");
      }
    else
    {
    $('#togglebutton3').text("Prikaži više");
    }
    });
  });


  $(document).ready(function(){
    $('#disclaimer4').hide()
    $('#togglebutton4').click(function(){
      $('#disclaimer4').toggle('slow');
      if(togglebutton4.text=="Prikaži više")
      {
      $('#togglebutton4').text("Prikaži manje");
      }
    else
    {
    $('#togglebutton4').text("Prikaži više");
    }
    });
  });

