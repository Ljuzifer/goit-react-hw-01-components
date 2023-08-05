import { StatisticsList } from 'components/StatisticsList/StatisticsList';
import { List, Statistic, StatItem, Title } from './Statistics.styled';

export const Statistics = ({ title, statData }) => {
  return (
    <Statistic>
      {title && <Title>{title}</Title>}
      <List>
        {statData.map(statEl => (
          <StatItem key={statEl.id}>
            <StatisticsList statEl={statEl} />
          </StatItem>
        ))}
      </List>
    </Statistic>
  );
};
