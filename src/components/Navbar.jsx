import { Layout, Menu } from 'antd';
import React from 'react'
import {  useLocation, useNavigate } from 'react-router-dom';
import { Logo } from '../styles/styles';
const { Header } = Layout;

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

    const items = [
        {
            key: 1,
            label: "Registro",
            pathname: '/',
            onClick: ()=> navigate("/")
        },
        {
            key: 2,
            label: "Listado",
            pathname: '/list',
            onClick: ()=> navigate("/list")
        }
    ]
  return (
    <Header>
        <Logo src="https://academiageek.co/wp-content/uploads/2021/03/Logo-AG-2021.png" />
        <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={String((items.find(i => i.pathname === location.pathname)).key)}
        items={items}
      />
    </Header>
  )
}

export default Navbar;