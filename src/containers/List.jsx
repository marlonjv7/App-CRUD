import React, { useEffect, useState } from 'react'
import { Button, Layout, Table } from 'antd';
import axios from 'axios';
import locale from 'antd/lib/date-picker/locale/en_US';

const List = () => {

  const [users, setUsers] = useState([])

  const getData = async () => {
    // const data = await (await fetch('https://app-02-06.herokuapp.com/usuarios')).json()
    const { data } = await axios.get('https://app-02-06.herokuapp.com/usuarios');
    console.log(data);
    setUsers(data)
  }

  const dataKey = users.map(user => ({
    ...user,
    key: user.id
  }))

  const deleteM = async (id) => {
    try {
      await axios.delete(`https://app-02-06.herokuapp.com/usuarios/${id}`)
    } catch (error) {
alert('error')
    }
  }

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
  }, [users])


  const { Content } = Layout
  // const dataSource = [
  //   {
  //     key: '1',
  //     name: 'Jose Daniel Garcia Jaime',
  //     address: '10 Downing Street',
  //     tdni: "C.E",
  //     dni: 123456789,
  //     tel: 3137894565,
  //     img: "https://cdn-icons-png.flaticon.com/512/147/147144.png"
  //   }
  // ];
  const columns = [
    {
      title: 'Nombres',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Tipo de documento',
      dataIndex: 'tdni',
      key: 'tdni',
    },
    {
      title: 'Documento',
      dataIndex: 'dni',
      key: 'dni',
    },
    {
      title: 'Telefóno',
      dataIndex: 'tel',
      key: 'tel'
    },
    {
      title: 'Dirección',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Imagen',
      dataIndex: 'img',
      key: 'img',
      render: data => (<img style={{ width: "50px" }} src={data} alt="img" />)
    },
    {
      title: 'Accion',
      key: 'action',
      render: (u) => (<Button onClick={() => deleteM(u.id)}>Eliminar</Button>)
    },
  ];
  return (
    <Content
      style={{
        padding: '0 50px',
        margin: "50px auto 0 auto"
      }}
    >
      <Table dataSource={dataKey} columns={columns} pagination={false} />
    </Content>
  )
}

export default List