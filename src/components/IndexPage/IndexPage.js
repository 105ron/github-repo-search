
import React from 'react';
import styled from 'styled-components';
import SearchInput from '../../containers/SearchInput/SearchInput';
import Aux from '../../hoc/Aux/Aux';

const Title = styled.h1`
  position: absolute;
  top: 10px;
  text-align: center;
  font-family: sans-serif;
`;

function indexPage() {
  return (
    <Aux>
      <Title>
        GitHub Repo Search
      </Title>
      <SearchInput />
    </Aux>
  );
}

export default indexPage;
