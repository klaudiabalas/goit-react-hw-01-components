import propTypes from 'prop-types';
import css from './Statistics.module.css';

function randomColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const Statistics = ({ title, stats }) => {
  return (
    <>
      <section className={css.statistics}>
        <h2 className={css.title}>{title}</h2>
        <ul className={css.statList}>
          <li
            className={(css.item, css.bordeLeft)}
            style={{ backgroundColor: randomColor() }}
          >
            <span className={css.label}>.docx</span>
            <span className={css.percentage}>4%</span>
          </li>
          <li className={css.item} style={{ backgroundColor: randomColor() }}>
            <span className={css.label}>.mp3</span>
            <span className={css.percentage}>14%</span>
          </li>
          <li className={css.item} style={{ backgroundColor: randomColor() }}>
            <span className={css.label}>.pdf</span>
            <span className={css.percentage}>41%</span>
          </li>
          <li
            className={(css.item, css.bordeRight)}
            style={{ backgroundColor: randomColor() }}
          >
            <span className={css.label}>.mp4</span>
            <span className={css.percentage}>12%</span>
          </li>
        </ul>
      </section>
    </>
  );
};

Statistics.propTypes = {
  label: propTypes.string.isRequired,
  percentage: propTypes.number.isRequired,
};
