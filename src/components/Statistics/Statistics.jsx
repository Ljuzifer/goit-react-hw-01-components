import { StatisticsList } from 'components/StatisticsList/StatisticsList';

export const Statistics = ({ title, statData }) => {
  return (
    <section>
      {title && <h2>{title}</h2>}
      <ul>
        {statData.map(statEl => (
          <li key={statEl.id}>
            <StatisticsList statEl={statEl} />
          </li>
        ))}
      </ul>
    </section>
  );
};
