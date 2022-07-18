import React from 'react';

import { Products, Developers, Company } from '../Content';
import { DropdownProvider, DropdownOption, DropdownRoot } from '../Dropdown'
import { Container, DropdownStles } from './styles';


function Navbar() {
  return (
    <DropdownProvider> 
      <DropdownStles>
        <Container>
          <ul>
            <li>
              <DropdownOption name="Produtos" content={Products}/> 
            </li>
            <li>
              <DropdownOption name="Desenvolvedores" content={Developers}/> 
            </li>
            <li>
              <DropdownOption name="Empresa" content={Company}/> 
            </li>
          </ul>
        </Container>
        <DropdownRoot />
      </DropdownStles>
    </DropdownProvider>
  );
}

export default Navbar;