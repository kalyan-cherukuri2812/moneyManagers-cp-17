import {Component} from 'react'
import './index.css'
import {v4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    income: '',
    ipTitle: '',
    ipAmount: '',
    ipType: transactionTypeOptions[0].optionId,
    transactionItemList: [],
  }

  titleChange = event => {
    this.setState({ipTitle: event.target.value})
  }

  amountChange = event => {
    this.setState({ipAmount: event.target.value})
  }

  optionChange = event => {
    this.setState({ipType: event.target.value})
  }

  AddClick = event => {
    event.preventDefault()
    const {ipTitle, ipAmount, ipType} = this.state
    const newTransactionItemList = {
      id: v4(),
      title: ipTitle,
      amount: parseInt(ipAmount),
      type: ipType,
    }
    this.setState(prev => ({
      transactionItemList: [
        ...prev.transactionItemList,
        newTransactionItemList,
      ],
      ipTitle: '',
      ipAmount: '',
    }))
  }

  deleteClick = id => {
    this.setState(prev => ({
      transactionItemList: prev.transactionItemList.filter(
        each => each.id !== id,
      ),
    }))
  }

  getIncome = () => {
    const {transactionItemList} = this.state
    let income = 0
    transactionItemList.forEach(each => {
      if (each.type === transactionTypeOptions[0].optionId) {
        income += each.amount
      }
    })
    return income
  }

  getExpenses = () => {
    const {transactionItemList} = this.state
    let expenses = 0
    transactionItemList.forEach(each => {
      if (each.type === transactionTypeOptions[1].optionId) {
        expenses += each.amount
      }
    })
    return expenses
  }

  render() {
    const {ipTitle, ipAmount, transactionItemList} = this.state
    const incomeBalance = this.getIncome()
    const expensesBalance = this.getExpenses()
    const totalBalance = this.getIncome() - this.getExpenses()

    return (
      <div className="bg-container">
        <div className="great-card">
          <h1 className="g-h">Hi, Richard</h1>
          <p className="g-p">
            Welcome back to your <span>Money Manager</span>
          </p>
        </div>
        <MoneyDetails
          incomeBalance={incomeBalance}
          expensesBalance={expensesBalance}
          totalBalance={totalBalance}
        />
        <div className="down-card">
          <div className="form">
            <form onSubmit={this.AddClick}>
              <h1 className="t-h">Add Transaction</h1>
              <div className="input-div">
                <label className="label" htmlFor="title">
                  TITLE
                </label>
                <input
                  value={ipTitle}
                  className="input"
                  id="title"
                  type="text"
                  placeholder="TITLE"
                  onChange={this.titleChange}
                />
              </div>
              <div className="input-div">
                <label className="label" htmlFor="amount">
                  AMOUNT
                </label>
                <input
                  value={ipAmount}
                  className="input"
                  id="amount"
                  type="text"
                  placeholder="AMOUNT"
                  onChange={this.amountChange}
                />
              </div>
              <div className="input-div">
                <label className="label" htmlFor="select">
                  TYPE
                </label>
                <select
                  className="input"
                  id="select"
                  onChange={this.optionChange}
                >
                  {transactionTypeOptions.map(each => (
                    <option key={each.optionId} value={each.optionId}>
                      {each.displayText}
                    </option>
                  ))}
                </select>
              </div>
              <button className="add-btn" type="submit">
                Add
              </button>
            </form>
          </div>
          <div className="history-card">
            <h1 className="h-h">History</h1>
            <div className="history-sub-card">
              <ul className="ul">
                <li className="history-sub-div">
                  <p className="h-p">Title</p>
                  <p className="h-p">Amount</p>
                  <p className="h-p">Type</p>
                </li>
                {transactionItemList.map(each => (
                  <TransactionItem
                    key={each.id}
                    transactionDetails={each}
                    deleteClick={this.deleteClick}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
