import React, { useState } from 'react'
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom'


const Header = () => {
  const [current, setCurrent] = useState(null)

  const handleClick = e => {
    console.log('click ', e);
    setCurrent(e.key)
  }

  return (
    <header>
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="home">
          <Icon type="home" />
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="newpost">
          <Icon type="plus" />
          <Link to="/posts/new">Add Post</Link>
        </Menu.Item>
      </Menu>
    </header>
  );
};

export default Header;