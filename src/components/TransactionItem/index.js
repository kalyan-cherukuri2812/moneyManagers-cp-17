import './index.css'

const TransactionItem = props => {
  const {transactionDetails, deleteClick} = props
  const {id, title, amount, type} = transactionDetails

  const delClick = () => {
    deleteClick(id)
  }
  return (
    <li className="list">
      <p className="list-p">{title}</p>
      <p className="list-p">Rs {amount}</p>
      <p className="list-p">{type}</p>
      <div>
        <button
          className="del-btn"
          type="button"
          testid="delete"
          onClick={delClick}
        >
          <img
            className="del-img"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
