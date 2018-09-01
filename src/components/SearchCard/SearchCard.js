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

function searchCard(props) {
  const { children } = props;
  return (
    <Card>
      <FieldWrapper>
        {children}
        <Button>
          Submit
        </Button>
      </FieldWrapper>
    </Card>
  );
}

searchCard.propTypes = {
  children: PropTypes.object.isRequired,
};

export default searchCard;
