import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Card = styled.div`
  display: flex;
  align-items: center;
  width: 700px;
  height: 300px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 8px 10px 5px -1px rgba(105,96,105,1);
`;

const FieldWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
`;

const Label = styled.label`
  display: block;
  color: #7e7e7e;
  font-family: sans-serif;

`;

const Input = styled.input`
  font-size: 16px;
  display: block;
  width: 500px;
  border: none;
  color: #525252;
  height: 30px;
  line-height: 15px;
  margin-top: 2px;
  outline: 0 none;
  padding: 5px 0px 5px 5px;
  border-radius: 2px;
  background: #DFDFDF;
`;

const Button = styled.button`
  width: 100px;
  background: #FFF;
  cursor: pointer;
  border: 1px solid #CCC;
  padding: 8px 25px 8px 25px;
  color: #333;
  border-radius: 4px;
  &:hover {
    color: #333;
    background-color: #EBEBEB;
    border-color: #ADADAD;
  }
`;


function searchBar(props) {
  const { changed, value } = props;
  return (
    <Card>
      <FieldWrapper>
        <Label>
          <Input
            onChange={changed}
            value={value}
            type="text"
            placeholder="Enter Repository Name"
          />
        </Label>
        <Button>
          Submit
        </Button>
      </FieldWrapper>
    </Card>
  );
}

searchBar.propTypes = {
  changed: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default searchBar;
