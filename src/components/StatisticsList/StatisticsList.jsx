import { Label, Percent } from './StatisticsList.styled';

export const StatisticsList = ({ statEl: { label, percentage } }) => {
  return (
    <>
      <Label>{label}</Label>
      <Percent>{percentage}%</Percent>
    </>
  );
};
