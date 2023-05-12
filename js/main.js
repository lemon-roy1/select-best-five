
const cart = [];

function display(cart){
    const cartContainer = document.getElementById("player-cart");
    cartContainer.textContent = '';

    for(let i = 0; i < cart.length; i++)
    {
        if(i<5){
            const div = document.createElement("li");
            div.innerHTML = `
            <li class="text-light">${i+1}. &nbsp &nbsp   ${cart[i].plName}</li>
            
            `;
            cartContainer.appendChild(div);
        }else{
          alert('this is not posibal')
        }

    }
    
}


function addToCart(element) {
    const plName = element.parentNode.parentNode.children[0].innerText;
    const players = {
        plName: plName,         
    }
    cart.push(players);
    display(cart);
   element.disabled = true;
    }
  

   
//------------------------------------------------



document.getElementById('players-total').addEventListener('click' , function previus(){
    const palyerFiled = document.getElementById("player_filed");
    const parPlayerString = palyerFiled.value;
    const parPalyerAmount = parseFloat(parPlayerString)
   
    const totleExpenses = cart.length * parPalyerAmount;

    const totalExpensesField = document.getElementById('total-Expenses');
    totalExpensesField.innerText=totleExpenses;

})

document.getElementById('total-calculate').addEventListener('click' , function(){
    
    const managerField = document.getElementById('manager-field');
    const managerFieldAmountString = managerField.value;
    const managerFieldAmount = parseFloat(managerFieldAmountString);

   const coachField = document.getElementById('coach-field');
   const coachFieldString = coachField.value;
   const coachFieldAmount = parseFloat(coachFieldString);

   const NewtotalAmount = managerFieldAmount + coachFieldAmount;

   const palyerFiled = document.getElementById("player_filed");
   const parPlayerString = palyerFiled.value;
   const parPalyerAmount = parseFloat(parPlayerString)
   console.log(parPalyerAmount);
   const totleExpenses = cart.length*parPalyerAmount;
   console.log(totleExpenses);


   const totalAmount = NewtotalAmount-totleExpenses;
  
   const totleExpenseField = document.getElementById('total');
   totleExpenseField.innerText = totalAmount
})






