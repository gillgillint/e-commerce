import styled from '@emotion/styled';
import { sm } from '../../responsive';

export const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${sm({height:'40vh'})}
`;

export const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  margin: 0 5px;

  cursor: pointer;
`;
