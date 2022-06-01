import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date(2022, 6, 2);
  const expenseTitle = "Car Insurance";
  const expensePrice = 10000;

  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price"> PKR {expensePrice} </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
