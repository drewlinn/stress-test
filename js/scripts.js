
var stressLevel = 0

$(document).ready(function(){
  $("form#stress-test").submit(function(event){
    event.preventDefault();
    $("#stress-signs").show();
    $("input:checkbox[name=signs]:checked").each(function(){
      var yourSigns = $(this).val();
      stressLevel = stressLevel +=2;
      $("#stress-signs").append(yourSigns + "<br>");
    });
    $("#stress-symptoms").show();
    $("input:checkbox[name=symptoms]:checked").each(function(){
      var yourSymptoms = $(this).val();
      stressLevel = stressLevel +=3;
      $("#stress-symptoms").append(yourSymptoms + "<br>");
    });
    $("#coping-mechanisms").show();
    $("input:checkbox[name=coping-methods]:checked").each(function(){
      var yourCopingMethods = $(this).val();
      stressLevel = stressLevel -=2;
      $("#coping-mechanisms").append(yourCopingMethods + "<br>");
    });
    $("#stress-test").hide();
    if (stressLevel >= -10 && stressLevel <= 10) {
      $("#make-changes").hide();
      $("#doomed").hide();
      $("#good-job").show();
    } else if (stressLevel >= 11 && stressLevel <= 19) {
      $("#good-job").hide();
      $("#doomed").hide();
      $("#make-changes").show();
    } else if (stressLevel >= 20 && stressLevel <= 25) {
      $("#make-changes").hide();
      $("#good-job").hide();
      $("#doomed").show();
    };
  });
});
