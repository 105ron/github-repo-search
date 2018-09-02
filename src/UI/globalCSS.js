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
  width: '100%',
  height: '30px',
  position: 'relatative',
  backgoundColor: 'black',
  fontSize: '16px',
  display: 'block',
  border: 'none',
  color: '#525252',
  lineHeight: '15px',
  marginTop: '2px',
  outline: '0 none',
  padding: '5px 0px 5px 5px',
  borderRadius: '2px',
  background: '#DFDFDF',
};

const dropDownStyling = {
  borderRadius: '5px',
  boxShadow: '0 0 10px 4px rgba(0, 0, 0, 0.1)',
  background: 'rgba(255, 255, 255, 0.9)',
  padding: '2px 0',
  fontSize: '90%',
  position: 'fixed',
  overflow: 'auto',
  maxHeight: '200px',
  position: 'absolute',
  left: '0',
  top: '32px',
};

module.exports ={
  globalStyle,
  inputStyling,
  dropDownStyling,
};
