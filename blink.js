      //Cursur blinker code following
        $(document).ready(function(){
           $(window).load(function(){
               
               var text = $('#myhead');
               var span = $('#myspan');
               var str = text.text();
               var mystr = '';
               var i=1;
               var j=0; 
                
                var num = setInterval(fun,100);
               function fun()
               {
                 
                  mystr= mystr+str[j];
                   text.text(mystr);
                  text.animate({opacity:1},1000);
                    if(i==str.length)
                      {
                        clearInterval(num);
                        setInterval(fun2,300);
                      }
                   
                  i++;
                   j++;
               }
                   
              function fun2()
               {
                   
              span.animate({opacity:1},500,again);       
               }
               function again()
               {
                   span.css('opacity','0');
               }
               
           }) ;
            
        });