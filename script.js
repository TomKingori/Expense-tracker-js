window.addEventListener('load', () => {
    const form = document.querySelector('#new-expense-form');
    const nameval = document.querySelector('#name');
    const dateval = document.querySelector('#date');
    const amountval = document.querySelector('#amount');
    const list_el = document.querySelector('#expenses');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = nameval.value;
        const date = dateval.value;
        const amount = amountval.value;

        if (!name){
            alert('Please fill out the expense name');
            return;
        } else if (!date){
            alert('Please fill out the expense date');
            return;
        } else if (!amount){
            alert('Please fill out the expense amount');
            return;
        }

        const expense_el = document.createElement("div");
        expense_el.classList.add('expense', 'd-flex', 'flex-row');

        const expense_name_el = document.createElement("div");
        expense_name_el.classList.add('expensename', 'p-2', 'w-25');
        expense_name_el.innerText = name;
        

        const expense_date_el = document.createElement("div");
        expense_date_el.classList.add('expensedate', 'p-2', 'w-25');
        expense_date_el.innerText = date;
        

        const expense_amount_el = document.createElement("div");
        expense_amount_el.classList.add('expenseamount', 'p-2', 'w-25');
        expense_amount_el.innerText = amount;

        expense_el.appendChild(expense_name_el);
        expense_el.appendChild(expense_date_el);
        expense_el.appendChild(expense_amount_el);

        const expense_delete_el = document.createElement("button");
        expense_delete_el.classList.add("delete");
        expense_delete_el.innerHTML = "Delete";

        expense_el.appendChild(expense_delete_el); 

        list_el.appendChild(expense_el);

        expense_delete_el.addEventListener('click', () => {
            list_el.removeChild(expense_el);
        });
    });

});