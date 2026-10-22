(function(){
  var PHONE="201044360405";
  var form=document.getElementById("lead-form");
  if(form){
    var err=document.getElementById("form-err");
    form.addEventListener("submit",function(e){
      e.preventDefault();
      var f={name:form.name.value.trim(),business:form.business.value,budget:form.budget.value,service:form.service.value};
      var ok=true;
      ["name","business","budget","service"].forEach(function(k){
        var el=form.elements[k];var bad=!f[k];el.classList.toggle("invalid",bad);el.setAttribute("aria-invalid",bad?"true":"false");if(bad)ok=false;
      });
      err.hidden=ok;
      if(!ok){var first=form.querySelector(".invalid");if(first)first.focus();return;}
      var msg="أهلاً CM Agency\n"+
        "الاسم: "+f.name+"\n"+
        "نوع النشاط: "+f.business+"\n"+
        "ميزانية الإعلانات الشهرية: "+f.budget+"\n"+
        "الخدمة المطلوبة: "+f.service;
      var url="https://wa.me/"+PHONE+"?text="+encodeURIComponent(msg);
      form.setAttribute("data-wa-url",url);
      window.location.href=url;
    });
    form.addEventListener("input",function(e){if(e.target.classList.contains("invalid")&&e.target.value){e.target.classList.remove("invalid");e.target.setAttribute("aria-invalid","false");}});
    form.addEventListener("change",function(e){if(e.target.classList.contains("invalid")&&e.target.value){e.target.classList.remove("invalid");e.target.setAttribute("aria-invalid","false");}});
  }
  // play one video at a time
  var vids=document.querySelectorAll("video");
  vids.forEach(function(v){v.addEventListener("play",function(){vids.forEach(function(o){if(o!==v)o.pause();});});});
})();
