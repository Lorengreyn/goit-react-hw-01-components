import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const StatisticsItem = ({ label, percentage }) => {
  return (
    <li
      style={{
        backgroundColor: getRandomHexColor(),
      }}
      className={css.item}
    >
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  );
};

StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatisticsItem;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}