import React from 'react';
import styled from '@emotion/styled';
import { InputBase } from '@mui/material';
import { Search } from '@mui/icons-material';
import { sm } from '../../../responsive';

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 24px;
  padding: 6px;
  ${sm({ margin: "0 0 0 0" })}
`;

function NavbarSearch() {
  return (
    <SearchContainer>
      <InputBase
        placeholder='Search'
        className='h-5 text-sm'
        sx={{
          color: 'grey.700',
        }}
      />
      <Search sx={{ color: 'grey.400', fontSize: 16 }} />
    </SearchContainer>
  );
}

export default NavbarSearch;
