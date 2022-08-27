import './index.css'

const MoneyDetails = props => {
  const {incomeBalance, expensesBalance, totalBalance} = props

  return (
    <div className="balance-card">
      <div className="b-sub-card bg-1">
        <img
          className="b-img"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png "
          alt="balance"
        />
        <div>
          <p className="b-p1">Your Balance</p>
          <p className="b-p2" testid="balanceAmount">
            Rs {totalBalance}
          </p>
        </div>
      </div>
      <div className="b-sub-card bg-2">
        <img
          className="b-img"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
        />
        <div>
          <p className="b-p1">Your Income</p>
          <p className="b-p2" testid="incomeAmount">
            Rs {incomeBalance}
          </p>
        </div>
      </div>
      <div className="b-sub-card bg-3">
        <img
          className="b-img"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png "
          alt="expenses"
        />
        <div>
          <p className="b-p1">Your Expenses</p>
          <p className="b-p2" testid="expensesAmount">
            Rs {expensesBalance}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
