import React from 'react'
import logo from '../static/images/logo.svg'

import styled from 'styled-components'
import Container from '../layout/Container';

const HeaderItem = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;


const Header = () => {
  return (
    <HeaderItem>
      <img src={logo} alt="" />
      <ul>
        <li>uz</li>
        <li>uz</li>
      </ul>
    </HeaderItem>
  )
}

export default Header