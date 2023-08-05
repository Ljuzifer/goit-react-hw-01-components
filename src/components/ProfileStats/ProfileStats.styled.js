import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: space-around;
  background-color: lightgrey;
`;

export const ListStat = styled.li`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  /* width: calc((100% / 3) + 1px); */
  width: 100px;
  border: 1px solid #212121;
  border-bottom: 2px;
  padding-bottom: 20px;
  padding-top: 20px;
`;

export const Text = styled.span`
  /* color: darkgrey; */
  font-size: 13px;
  margin-bottom: 4px;
`;

export const Quantity = styled.span`
  font-size: 18px;
  font-weight: bold;
`;
