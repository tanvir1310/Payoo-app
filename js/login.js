// document.getElementById('button-login').addEventListener('click', function(){
 
document.getElementById('button-login').addEventListener('click', function(event){

  event.preventDefault();

  const phoneNumber = document.getElementById('phone-number').value;
  const pinNumber = document.getElementById('pin-number').value;

  if(phoneNumber === '123' && pinNumber === '12'){

   // window.location.href = '/home.html';
  } 

  else {
    alert('login failed');
  }
  
})
