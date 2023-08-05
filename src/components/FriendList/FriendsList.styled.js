import styled from 'styled-components';

export const List = styled.ul`
  margin: auto;
  margin-bottom: 55px;
  border: 1px solid lightgrey;
  padding: 4px;
  width: 440px;
`;

export const ListFriend = styled.li`
  display: flex;
  width: 100%;
  border: 2px dotted lightslategrey;
  background-color: lightskyblue;
  margin-bottom: 4px;
  padding: 8px 0 8px 20px;
  justify-content: flex-start;
  align-items: center;
`;

export const IsOnline = styled.span`
  display: block;
  width: 18px;
  height: 18px;
  margin-right: 44px;
  border-radius: 50%;
  background-color: ${props => (props.$online ? 'green' : 'red')};
`;

export const Avatar = styled.img`
  padding: 4px;
  margin-right: 88px;
  border: 1px solid black;
  border-radius: 8px;
  background-color: lightyellow;
`;

export const Name = styled.p`
  font-size: 28px;
  font-weight: bold;
  letter-spacing: 1.88;
`;
