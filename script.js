

function loveCalculator(){
  let name = document.getElementById('yourName').value;
  let lovers = document.getElementById('crushName').value;

  if(name == ""){
   alert('Please enter your name');
  }else if (name.length <=2 ) {
   alert('Min lenght is 3')
  }else if(!isNaN(name)){
   alert('Numbers are not allowed');
  }

  else if(lovers == ""){
   alert('Please enter your love name');
  }else if (lovers.length <=2 ) {
   alert('Min lenght is 3')
  }else if(!isNaN(lovers)){
   alert('Numbers are not allowed');
 }
  else
 {
   let lovePercentage =  Math.random() ;
     lovePercentage = lovePercentage * 100;
     lovePercentage = Math.floor(lovePercentage);
   document.getElementById('loveValue').value = lovePercentage + "%";
 }

}
