import PropTypes from 'prop-types';
import css from './Transactions.module.css';

function randomColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const TransactionHistory = ({ items }) => {
  return (
    <>
      <table className={css.transactionHistory}>
        <thead>
          <tr className={css.title}>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(({ id, type, amount, currency }) => {
            return (
              <tr key={id} style={{ backgroundColor: randomColor() }}>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

TransactionHistory.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
