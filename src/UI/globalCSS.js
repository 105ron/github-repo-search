const globalStyle = `
  *, *:before, *:after {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
  }
`;

const inputStyling = {
  backgoundColor: 'black',
  fontSize: '16px',
  display: 'block',
  width: '500px',
  border: 'none',
  color: '#525252',
  height: '30px',
  lineHeight: '15px',
  marginTop: '2px',
  outline: '0 none',
  padding: '5px 0px 5px 5px',
  borderRadius: '2px',
  background: '#DFDFDF',
};

module.exports ={
  globalStyle,
  inputStyling,
};
