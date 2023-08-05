import styled from 'styled-components';

function randomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Statistic = styled.section`
  width: 400px;
  text-align: center;

  margin: auto;
  margin-bottom: 50px;
`;

export const Title = styled.h2`
  text-transform: uppercase;
  font-size: 22px;
  margin-bottom: 20px;
`;

export const List = styled.ul`
  display: flex;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 15px 0 15px;
  width: calc(100% / 5);

  background-color: ${randomHexColor};
`;
