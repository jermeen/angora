const button = document.getElementById('Button');
const ptext = document.getElementById('ptext');
let ptextCounter = 0;
button.addEventListener('click', function() {
            if (ptextCounter === 0) {
                ptext.textContent = "“So many books, so little time.”";
               
                ptextCounter++;
            }
             else if(ptextCounter === 1){
                ptext.textContent = "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”";
                
                ptextCounter++;
                
            }
            else if(ptextCounter === 2){
                ptext.textContent = "“A room without books is like a body without a soul.”";
                ptextCounter++;
                
            }
            else if(ptextCounter === 3){
                ptext.textContent = "“You only live once, but if you do it right, once is enough.”";
                ptextCounter++;
                
            }
            else if(ptextCounter === 4){
                ptext.textContent = "“Be the change that you wish to see in the world.”";
                ptextCounter++;
                
            }
            else if(ptextCounter === 5){
                ptext.textContent = "“We accept the love we think we deserve.”";
                ptextCounter++;
                
            }
            else if(ptextCounter === 6){
                ptext.textContent ="“It is better to be hated for what you are than to be loved for what you are not.”";
                ptextCounter++;
                
            }
            else{
                ptext.textContent = "“A friend is someone who knows all about you and still loves you.”";
                ptextCounter=0;
                
            }
        });