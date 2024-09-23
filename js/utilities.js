function getInputFieldValueById(id){
  const inputValue = document.getElementById(id).value;
  const inputNumber = parseFloat(inputValue);
  return inputNumber;
}

function getTextFieldValueById(id){
  const inputTextValue = document.getElementById(id).innerText;
  const inputTextNumber = parseFloat(inputTextValue);
  return inputTextNumber;
}


function showSectionById(id){

  document.getElementById('add-money-form').classList.add('hidden');
  document.getElementById('cash-out-form').classList.add('hidden');
  document.getElementById('transaction-form').classList.add('hidden');

  document.getElementById(id).classList.remove('hidden');

}