import React from 'react'
import { Navbar, Nav } from 'rsuite';
import CogIcon from '@rsuite/icons/legacy/Cog';
import logo from '../img/logo.png'

const NavBar = () => (
  <Navbar appearance="inverse" style={{position:'fixed', width:'100%'}}>
    <img href="#" src={logo} alt='logo' style={{width:'150px', marginLeft:'50px'}}></img>

    <Nav pullRight>

    <Nav.Menu title="Settings" icon={<CogIcon />}>
        <Nav.Item>Profil</Nav.Item>
        <Nav.Item>Se déconnecter</Nav.Item>
    </Nav.Menu>

    </Nav>
  </Navbar>
);

export default NavBar