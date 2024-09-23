document.getElementById('btn-add-money').addEventListener('click', function(event){

  event.preventDefault();
 
  const addMoneyInput = getInputFieldValueById('input-add-money');
  const inputPinNumber = getInputFieldValueById('input-pin-number');

  if(isNaN(addMoneyInput)){
    alert('Please enter a valid amount');

    return;
  }

  if(inputPinNumber === 12){
    const balance = getTextFieldValueById('balance');
    const newBalance = balance + addMoneyInput;
    document.getElementById('balance').innerText = newBalance;

    // add transaction history
    const p = document.createElement('p');
    p.innerText = `Added:
    ${addMoneyInput} TK. New Balance: ${newBalance}`;
    document.getElementById('transaction-container').appendChild(p);
    
  }
  else{
    alert('failed to add money ! please try again')
  }
})