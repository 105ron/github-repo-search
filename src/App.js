import React from 'react';
import styled, { injectGlobal } from 'styled-components';
import octocat from './assets/images/scientist_octocat.png';
import IndexPage from './components/IndexPage/IndexPage';
import { globalStyle } from './UI/globalCSS';

injectGlobal`${globalStyle}`;

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  min-width: 900px;
  min-height: 600px;
  height: 100vh;
  background: #d3cce3;
  background-image: url(${octocat}), linear-gradient(to right, #e0eafc, #cfdef3);
  background-position: bottom right;
  background-repeat: no-repeat;
  @media (max-width: 900px) {
    min-width: 400px;
    min-height: 300px;
    background-image: linear-gradient(to right, #e0eafc, #cfdef3);
  }
`;

function App() {
  return (
    <Layout>
      <IndexPage />
    </Layout>
  );
}

export default App;

/* eslint "no-unused-expressions": "off" */
