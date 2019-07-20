import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  background-color: black;
  color: white;
  text-transform: uppercase;
  padding: 15px 0;
  font-size: 16px;
  border: 0;
  cursor: pointer;
  font-weight: 500;
  text-align: center;
  &:active,
  &:focus {
    outline: none;
  }
  &:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }
`;

const PictureContainer = styled.div`
`;

const Picture = styled.img`
`;

const EmpInfoContainer = styled.div`
`;

const EmpNameContainer = styled.div`
`;

const EmpName = styled.span`
`;

const WritedDate = styled.div`
`;

const Employee = ({
    employee,
    onClick,
    className
}) => {
  const {
    name,
    imgUrl
  } = employee;
  return (
    <Container className={className}>
      <PictureContainer
        onClick={onClick}
      >
        <Picture src={imgUrl}/>
      </PictureContainer>
      <EmpInfoContainer>
        <EmpNameContainer onClick={onClick}>
          <EmpName value={name}/>
        </EmpNameContainer>
        <WritedDate />
      </EmpInfoContainer>
    </Container>
  );
};

export default Employee;
