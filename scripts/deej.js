    function showAbt()
    {
      if ( document.getElementById('abtContent').style.display == "none" ) {
            document.getElementById('abtContent').style.display= "";
          } /*else {
            document.getElementById('portfolioContent').style.display = "";
          } */   

      if ( document.getElementById('stuffContent').style.display == "" ) {
            document.getElementById('stuffContent').style.display= "none";
          } /*else {
            document.getElementById('progressContent').style.display = "none";
          }   */  

      if ( document.getElementById('contactContent').style.display == "" ) {
            document.getElementById('contactContent').style.display= "none";
          } /*else {
            document.getElementById('progressContent').style.display = "none";
          }   */                                       
    }

    function showStuff()
    {
 

      if ( document.getElementById('stuffContent').style.display == "none" ) {
            document.getElementById('stuffContent').style.display= "";
          } /*else {
            document.getElementById('portfolioContent').style.display = "";
          } */   

      if ( document.getElementById('abtContent').style.display == "" ) {
            document.getElementById('abtContent').style.display= "none";
          } /*else {
            document.getElementById('progressContent').style.display = "none";
          }   */  

      if ( document.getElementById('contactContent').style.display == "" ) {
            document.getElementById('contactContent').style.display= "none";
          } /*else {
            document.getElementById('progressContent').style.display = "none";
          }   */                                         
    }    

    function showContact()
    {
 

      if ( document.getElementById('contactContent').style.display == "none" ) {
            document.getElementById('contactContent').style.display= "";
          } /*else {
            document.getElementById('portfolioContent').style.display = "";
          } */   

      if ( document.getElementById('stuffContent').style.display == "" ) {
            document.getElementById('stuffContent').style.display= "none";
          } /*else {
            document.getElementById('progressContent').style.display = "none";
          }   */  

      if ( document.getElementById('abtContent').style.display == "" ) {
            document.getElementById('abtContent').style.display= "none";
          } /*else {
            document.getElementById('progressContent').style.display = "none";
          }   */                                         
    }  





          $("document").ready(function(){
          $("li#abt").click(function() {
            $('li#abt').removeClass("unselected");
            })            
          $('li#abt').click(function(){
            $('li#abt').addClass("selected");
          })
          $("li#abt").click(function() {
            $('li#stuff').removeClass("selected");
            })
          $('li#abt').click(function(){
            $('li#stuff').addClass("unselected");
          })          
          $("li#abt").click(function() {
            $('li#contact').removeClass("selected");
            })
          $('li#abt').click(function(){
            $('li#contact').addClass("unselected");
            });
          });          

          $("document").ready(function(){
          $("li#stuff").click(function() {
            $('li#stuff').removeClass("unselected");
            })            
          $('li#stuff').click(function(){
            $('li#stuff').addClass("selected");
          })
          $("li#stuff").click(function() {
            $('li#abt').removeClass("selected");
            })
          $('li#stuff').click(function(){
            $('li#abt').addClass("unselected");
          })          
          $("li#stuff").click(function() {
            $('li#contact').removeClass("selected");
            })
          $('li#stuff').click(function(){
            $('li#contact').addClass("unselected");
            });
          });         

          $("document").ready(function(){
          $("li#contact").click(function() {
            $('li#contact').removeClass("unselected");
            })            
          $('li#contact').click(function(){
            $('li#contact').addClass("selected");
          })
          $("li#contact").click(function() {
            $('li#stuff').removeClass("selected");
            })
          $('li#contact').click(function(){
            $('li#stuff').addClass("unselected");
          })          
          $("li#contact").click(function() {
            $('li#abt').removeClass("selected");
            })
          $('li#contact').click(function(){
            $('li#abt').addClass("unselected");
            });
          });  
               
