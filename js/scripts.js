
$(document).ready(function(){
  $("form#stress-test").submit(function(event){
    event.preventDefault();
    $("#stress-signs").show();
    $("input:checkbox[name=signs]:checked").each(function(){
      var yourSigns = $(this).val();
      console.log(yourSigns);
      $("#stress-signs").append(yourSigns + "<br>");
    });
    $("#stress-symptoms").show();
    $("input:checkbox[name=symptoms]:checked").each(function(){
      var yourSymptoms = $(this).val();
      console.log(yourSymptoms);
      $("#stress-symptoms").append(yourSymptoms + "<br>");
    });
    $("#coping-mechanisms").show();
    $("input:checkbox[name=coping-methods]:checked").each(function(){
      var yourCopingMethods = $(this).val();
      console.log(yourCopingMethods);
      $("#coping-mechanisms").append(yourCopingMethods + "<br>");
    });
    $("#stress-test").hide();
  });
});
