function grab() {
  var audio = new Audio("Sorry.mp3");
  audio.play();
  var startmain = document.getElementById("start-main");
  startmain.style.display = 'none';

  var apologizemain = document.getElementById("apologize-main");
  apologizemain.style.display = 'flex';

  setTimeout(() => {
    apologizemain.style.display = 'none';

    var apologize0 = document.getElementById("apologize-0");
    apologize0.style.display = 'flex';
    
    console.log("0");

    setTimeout(() => {
      apologize0.style.display = 'none';

      var apologize1 = document.getElementById("apologize-1");
      apologize1.style.display = 'flex';
      
      console.log("1");

      setTimeout(() => {
        apologize1.style.display = 'none';

        var apologize2 = document.getElementById("apologize-2");
        apologize2.style.display = 'flex';
        
        console.log("2");
        setTimeout(() => {
          apologize2.style.display = 'none';

          var apologize3 = document.getElementById("apologize-3");
          apologize3.style.display = 'flex';
          
          console.log("3");
          setTimeout(() => {
            apologize3.style.display = 'none';

            var apologize4 = document.getElementById("apologize-4");
            apologize4.style.display = 'flex';
            console.log("4");
            
            setTimeout(() => {
            apologize4.style.display = 'none';

            var apologize5 = document.getElementById("apologize-5");
            apologize5.style.display = 'flex';
            console.log("5");
            
            setTimeout(() => {
              apologize5.style.display = 'none';
            
              var apologize6 = document.getElementById("apologize-6");
              apologize6.style.display = 'flex';
              console.log("6");
              
              setTimeout(() => {
              apologize6.style.display = 'none';
            
              var apologize7 = document.getElementById("apologize-7");
              apologize7.style.display = 'flex';
              console.log("7");
              
              setTimeout(() => {
                var special = document.getElementById("STxt");
                special.innerHTML = "If i made you feel unvalued always remember I always make an effort to make you happy";
                
                console.log("8");
                
                setTimeout(() => {
                var special = document.getElementById("STxt");
                special.innerHTML = "Always remember....";
                
                console.log("8");
                
                setTimeout(() => {
                  var special = document.getElementById("STxt");
                  special.innerHTML = "I Love You";
                
                  console.log("8");
                }, 7000)
              }, 2000)
              }, 8000)
            }, 6000)
            }, 4000)
          }, 4000)
          }, 4500)
        }, 4000)
      }, 4000)
    }, 4000)
  }, 4000);
  console.log("working");
}