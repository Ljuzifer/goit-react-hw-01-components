import styled from 'styled-components';

export const PaymentTable = styled.table`
  border-color: transparent;
  border-radius: 13px;
  background-image: linear-gradient(80deg, #f1ba2c, #7a5a08);
  width: 100%;
  max-width: calc(100% - 100px);
  margin: auto;
  padding: 20px;
  font-weight: 600;
  margin-bottom: 20px;
  text-align: center;

  th {
    padding: 0 18px 18px;
    font-size: 30px;
    color: white;
  }

  td {
    border: 2px solid black;
    font-size: 25px;
    color: black;
  }
`;
