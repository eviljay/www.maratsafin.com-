
<!--
// BeSeen.com Quizlet
//Copyright 1998 by Beseen.com.  All Rights Reserved.      
//http://www.beseen.com
var qwinx41082
function ViewResults(form){
     
      for (var i=0;i<form.answer.length;i++){
           if (form.answer[i].checked){
              break
           }
      }
      var answer=""
      if (i<form.answer.length){
           answer = form.answer[i].value
      } 
     qwinx41082=window.open("","QuizletResultsWindow","toolbar=no,directories=no, status=no,menubar=no,resizable=no,width=486,height=312");
     var qtxt="<html><head><title>Quizlet Results</title></head><FRAMESET ROWS=*,70 BORDER=0><FRAME NAME=\"QuizletResultsFrame\" FRAMEBORDER=NO MARGINHEIGHT=0 MARGINWIDTH=0 NORESIZE  SRC=\"http://mercury.beseen.com/quizlet/x/41082/Results.html?a=" + answer + "\"> <FRAME NAME=\"QuizletAdFrame\" FRAMEBORDER=NO MARGINHEIGHT=0 MARGINWIDTH=0 NORESIZE SCROLLING=NO SRC=\"http://mercury.beseen.com/qsponsor.html?r=qu_s&t=sports&synd=\"></FRAMESET>"
      qwinx41082.document.clear()
      qwinx41082.document.write(qtxt)
      qwinx41082.focus()
}
document.write("<FORM><TABLE BORDER=0 WIDTH=160 CELLPADDING=0><TR><TD BGCOLOR=\"C9CFCC\"><FONT face=Verdana, Arial, Helvetica, sans-serif SIZE=-2 COLOR=\"#000000\"><A HREF=\"http://www.beseen.com/\" TARGET=\"NewBrowserWindow\"><IMG SRC=\"http://www.beseen.com/images/quizlet/quizlogo_small.gif\" WIDTH=70 HEIGHT=16 ALT=\"Quizlet\" ALIGN=RIGHT BORDER=0></A><BR><BR><B>Q:</B> Who will cause Marat Safin the most trouble in the Rotterdam tournament?<BR></TD></TR><TR><TD BGCOLOR=\"C9CFCC\"><FONT face=Verdana, Arial, Helvetica, sans-serif SIZE=-2 COLOR=\"#000000\"> &nbsp; <INPUT TYPE=RADIO NAME=answer VALUE=\"1\" onClick=\"ViewResults(this.form)\"> Johansson<BR> &nbsp; <INPUT TYPE=RADIO NAME=answer VALUE=\"2\" onClick=\"ViewResults(this.form)\"> Ferrero<BR> &nbsp; <INPUT TYPE=RADIO NAME=answer VALUE=\"3\" onClick=\"ViewResults(this.form)\"> Ivanisevic<BR> &nbsp; <INPUT TYPE=RADIO NAME=answer VALUE=\"4\" onClick=\"ViewResults(this.form)\"> Federer<BR> &nbsp; <INPUT TYPE=RADIO NAME=answer VALUE=\"5\" onClick=\"ViewResults(this.form)\"> Santoro<BR> &nbsp; <INPUT TYPE=RADIO NAME=answer VALUE=\"6\" onClick=\"ViewResults(this.form)\"> other<BR> &nbsp; <CENTER><INPUT TYPE=BUTTON VALUE=\"View Results\" onClick=\"ViewResults(this.form)\"></CENTER></FONT><IMG SRC=\"http://janus.beseen.com/PL/index1013626799?prod=quiz&sub=question&synd=&acct=mercury.x41082\" HEIGHT=1 WIDTH=1 BORDER=0></TD></TR></TABLE></FORM>")
 // -->

