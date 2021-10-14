$(document).ready(function(){
    $(".addition").keyup(function(){
          var val1 = +$(".value1").val();
          var val2 = +$(".value2").val();
          $("#result").val(val1+val2);
   });
});

$(document).ready(function(){
    $(".subtract").keyup(function(){
          var val1 = +$(".value1").val();
          var val2 = +$(".value2").val();
          $("#result1").val(val1-val2);
   });
});

$(document).ready(function(){
    $(".multiply").keyup(function(){
          var val1 = +$(".value1").val();
          var val2 = +$(".value2").val();
          $("#result2").val(val1*val2);
   });
});

$(document).ready(function(){
    $(".division").keyup(function(){
          var val1 = +$(".value1").val();
          var val2 = +$(".value2").val();
          $("#result3").val(val1/val2);
   });
});

$(document).ready(function(){
    $(".remainder").keyup(function(){
          var val1 = +$(".value1").val();
          var val2 = +$(".value2").val();
          $("#result4").val(val1%val2);
   });
});

$(document).ready(function(){
    $(".percentage").keyup(function(){
          var val1 = +$(".value1").val();
          var val2 = +$(".value2").val();
          var val3 = +$(".value3").val();
          var val4 = +$(".value4").val();
          $("#result5").val(val2*val1/100);
          $("#result6").val(val4*100/val3);
   });
});

$(document).ready(function(){
    $(".simpleInterest").keyup(function(){
          var val1 = +$(".value1").val();
          var val2 = +$(".value2").val();
          var val3 = +$(".value3").val();
          $("#result7").val(val1*val2*val3/100);
   });
});
