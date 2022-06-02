import { Button, Input, Layout, Select, Tooltip } from 'antd';
import React, { useEffect } from 'react';
import { ContentDiv, Form } from '../styles/styles';
import { UserOutlined, InfoCircleOutlined } from "@ant-design/icons"
import Forms from '../hooks/Forms';
import { UploadFile } from '../helpers/UploadFile';
import axios from 'axios';
const url = 'https://app-02-06.herokuapp.com/usuarios'

const Registro = () => {
    const { Content } = Layout
    const { Option } = Select

    // Estados y Hooks
    const [data, handleChange, reset, handleChangeSelect, UploadImg] = Forms({
        name: '',
        address: '',
        tdni: "default",
        dni: '',
        tel: '',
        img: ""
    })

    const handleImg = ({ target }) => {
        const file = target.files[0];
        UploadFile(file)
            .then(resp => UploadImg(resp))
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const newData = await axios.post(url, data)
            reset()
        }catch(error){
            alert('opp errorr')
        }
        
        
    }


    useEffect(() => {


    }, [])





    return (
        <>
            <Content
                style={{
                    padding: '0 50px',
                    margin: "50px auto 0 auto"
                }}
            >
                <ContentDiv>
                    <h3 style={{ textAlign: "center" }}>Registro</h3>
                    <Form onSubmit={handleSubmit}>
                        <Input
                            name='name'
                            value={data.name}
                            onChange={handleChange}

                            placeholder="Ingrese sus nombres y apellidos"
                            prefix={<UserOutlined className="site-form-item-icon" />}
                            suffix={
                                <Tooltip title="Nombres y Apellidos">
                                    <InfoCircleOutlined
                                        style={{
                                            color: 'rgba(0,0,0,.45)',
                                        }}
                                    />
                                </Tooltip>
                            }
                        />
                        <Select
                            name='tdni'
                            value={data.tdni}
                            onChange={handleChangeSelect}

                            style={{
                                width: '100%',
                            }}
                            defaultValue="default"
                        >
                            <Option disabled value="default">Tipo de documento</Option>
                            <Option value="C.C">C.C</Option>
                            <Option value="C.E">C.E</Option>
                            <Option value="T.I">T.I</Option>
                        </Select>
                        <Input
                            name='dni'
                            value={data.dni}
                            onChange={handleChange}

                            placeholder="Número de documento"
                            suffix={
                                <Tooltip title="Numero del documento de identidad">
                                    <InfoCircleOutlined
                                        style={{
                                            color: 'rgba(0,0,0,.45)',
                                        }}
                                    />
                                </Tooltip>
                            }
                        />
                        <Input.Group compact>
                            <Select
                                style={{
                                    width: '25%',
                                }}
                                defaultValue="57"
                            >
                                <Option value="57">+57</Option>
                            </Select>
                            <Input
                                name='tel'
                            value={data.tel}
                                onChange={handleChange}

                                style={{
                                    width: '75%',
                                }}
                                type="number"
                                placeholder="Numero de teléfono"
                                suffix={
                                    <Tooltip title="Numero celular">
                                        <InfoCircleOutlined
                                            style={{
                                                color: 'rgba(0,0,0,.45)',
                                            }}
                                        />
                                    </Tooltip>
                                }
                            />
                        </Input.Group>

                        <Input
                            name='address'
                            value={data.address}
                            onChange={handleChange}

                            placeholder="Dirección"
                            suffix={
                                <Tooltip title="Ingrese su dirección">
                                    <InfoCircleOutlined
                                        style={{
                                            color: 'rgba(0,0,0,.45)',
                                        }}
                                    />
                                </Tooltip>
                            }
                        />
                        <input type='file' name='img' onChange={handleImg} />
                        <Button htmlType="submit" type="primary" >Registrarse</Button>
                    </Form>
                </ContentDiv>
            </Content>
        </>
    )
}

export default Registro