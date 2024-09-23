// document.getElementById('button-login').addEventListener('click', function(){
 
// })

// step 01-set event handler
document.getElementById('button-login').addEventListener('click', function(event){

  // step 02- prevent default behavior(reloading browser)
  event.preventDefault();
  // console.log('log in click');

  // step 03- get the phone number and pin number
  const phoneNumber = document.getElementById('phone-number').value;
  const pinNumber = document.getElementById('pin-number').value;

  // console.log(phoneNumber,pinNumber);

  // step 04- validation phone number and pin number with fokira style
  // this is temporary....you should not do like this
  if(phoneNumber === '123' && pinNumber === '12'){
    // console.log('login successful');
    window.location.href = '/home.html';
  } 
  // step 05- allow user to use the website
  else {
    alert('login failed');
  }
  
})