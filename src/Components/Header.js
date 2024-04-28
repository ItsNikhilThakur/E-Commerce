import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, Menu, Dropdown } from 'semantic-ui-react';
import "../App.css";

const Header = () => {
  const [activeItem, setActiveItem] = useState('home');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const nav = useNavigate();

  const handleItemClick = (e, { name }) => setActiveItem(name);

  const showRRP = () => {
    nav("/RefundPolicy");
  };

  const home = () => {
    nav("/");
  };

  const showCU = () => {
    nav("/ContactUs");
  };

  const ShowLoginP = () => {
    nav("/LoginP");
  };

  const handleDropdownMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleDropdownMouseLeave = () => {
    setDropdownOpen(false);
  };
  
  return (
    <Menu secondary>
      <Menu.Item>
        <img alt="logo" src='../logo.jpg' />
      </Menu.Item>

      <Menu.Item
        name='home'
        active={activeItem === 'home'}
        onClick={home}
      />

      <Dropdown
        item
        text='Shopping'
        onMouseEnter={handleDropdownMouseEnter}
        onMouseLeave={handleDropdownMouseLeave}
        open={dropdownOpen}
      >
        <Dropdown.Menu>
          <div className="header"><strong>Categories</strong></div>
          <Dropdown.Item>
            <Dropdown text='Men'>
              <Dropdown.Menu>
                <div className="header"><strong>Sub-Categories</strong></div>
                <Dropdown.Item>Backpack</Dropdown.Item>
                <Dropdown.Item>Briefcase</Dropdown.Item>
                <Dropdown.Item>Duffel Bag</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Dropdown.Item>
          <Dropdown.Item>
            <Dropdown text='Women'>
              <Dropdown.Menu>
                <div className="header"><strong>Sub-Categories</strong></div>
                <Dropdown.Item>Handbag/Purse</Dropdown.Item>
                <Dropdown.Item>Tote Bag</Dropdown.Item>
                <Dropdown.Item>Sling Bag</Dropdown.Item>
                <Dropdown.Item>Clutch</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Menu.Item
        name='WhatsNew'
        active={activeItem === 'WhatsNew'}
        onClick={handleItemClick}
      />

      <Menu.Item
        name='Return-Refund Policy'
        active={activeItem === 'Return-Refund Policy'}
        onClick={showRRP}
      />

      <Menu.Item
        name='Contact Us'
        active={activeItem === 'Contact Us'}
        onClick={showCU}
      />

      <Menu.Menu position='right'>
        <Menu.Item>
          <Input icon='search' placeholder='Search...' />
        </Menu.Item>
        <Menu.Item
          name='logout'
          active={activeItem === 'logout'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name='Login'
          active={activeItem === 'Login'}
          onClick={ShowLoginP}
        />
        <Menu.Item
          name='Cart'
          active={activeItem === 'Cart'}
          onClick={handleItemClick}
        />
      </Menu.Menu>
    </Menu>
  );
};

export default Header;
