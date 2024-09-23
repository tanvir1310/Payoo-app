
document.getElementById('btn-cash-out').addEventListener('click', function(event){
  event.preventDefault();
  const inputCashOut = getInputFieldValueById('input-cash-out');
  const inputCashPin = getInputFieldValueById('input-cash-pin');

  if(isNaN(inputCashOut)){
    alert('Please enter a valid amount');

    return;
  }

  if(inputCashPin === 12){
    const balance = getTextFieldValueById('balance');

    if(inputCashOut > balance){
      alert('You do not have enough money to cash out.');

      return;
    }
    const newBalance = balance - inputCashOut;
    document.getElementById('balance').innerText = newBalance;


    // add transaction history

    const div = document.createElement('div');
    div.classList.add('bg-black-300');
    div.innerHTML = `
    <h4>Cash Out:</h4>
    <p>${inputCashOut} withdraw. New Balance ${newBalance}</p>
    
    `
    document.getElementById('transaction-container').appendChild(div);
    
  }
  else{
    alert('failed to cash out ! please try again')
  }
  
})