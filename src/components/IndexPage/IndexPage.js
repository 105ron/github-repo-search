
import React from 'react';
import styled from 'styled-components';
import SearchInput from '../../containers/SearchInput/SearchInput';
import Aux from '../../hoc/Aux/Aux';

const PageTitleWrapper = styled.div`
  position: absolute;
  top: 10px;
  @media (max-width: 900px) {
    top: 3px;
  }
`;

const Title = styled.h1`
  margin: 0 10px 7px 10px;
  text-align: center;
  font-family: sans-serif;
`;

const ByLine = styled.p`
  color: rgb(82, 82, 82);
  margin: 0 20px;
  text-align: center;
  font-family: sans-serif;
`

function indexPage() {
  return (
    <Aux>
      <PageTitleWrapper>
        <Title>
          GitHub Repository Search
        </Title>
        <ByLine>
          Enter search term below to search GitHub by repository name...
        </ByLine>
      </PageTitleWrapper>
      <SearchInput />
    </Aux>
  );
}

export default indexPage;
