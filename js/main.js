function getQuizAnswer(name) {
  var el = document.getElementsByName(name);
  for (var i=0, len=el.length; i<len; ++i)
    if (el[i].checked) return el[i].value;
}

  document.getElementById("q1_confirm").addEventListener("click",
    function(){

      ans = getQuizAnswer("q1");
      console.log(ans);

      if(ans){
        document.getElementById("quiz").style.display = "none";

        if (ans == 4){
          document.getElementById("question_right").style.display = "block";
        } else {
          document.getElementById("question_wrong").style.display = "block";
          }
      } else {
        alert("LOL. You didn't answer the question!");
      }
  });

  document.getElementById("reset_quiz").addEventListener("click",
    function(){

      //reset quiz visibilities, clear form, scroll back up top
      document.getElementById("quiz").style.display = "block";
      document.getElementById("question_right").style.display = "none";
      document.getElementById("question_wrong").style.display = "none";

      var el = document.getElementsByName("q1");
        for(var i=0;i<el.length;i++)
          el[i].checked = false;

      window.scrollTo(0,0);
    }
  );
