import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import * as S from './StyledSchedule';

const Dropdown = ({ name, type, level, handleFilter, filter }) => {
  const [isDropdownClick, setIsDropdownClick] = useState(false);

  const dropdownClicked = () => {
    setIsDropdownClick(prev => !prev);
  };

  const filterType = cate => {
    return cate.map((cate, idx) => (
      <S.FilterItem key={idx} onClick={e => handleFilter(e, type)}>
        {cate}
      </S.FilterItem>
    ));
  };
  return (
    <>
      <S.Box onClick={dropdownClicked}>
        <span>{type}</span>
        <S.CheckIcon isDropdownClick={isDropdownClick} type={type}>
          <StyledFontAwesomeIcon icon={faArrowDown} />
        </S.CheckIcon>
      </S.Box>
      {isDropdownClick && (
        <S.FilterBox type={type}>
          {type.toLowerCase() === 'name' ? filterType(name) : filterType(level)}
        </S.FilterBox>
      )}
    </>
  );
};

export default Dropdown;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: white;
  cursor: pointer;
  margin-left: 1rem;
  position: absolute;
  top: -2rem;
  right: 0.2rem;
`;
