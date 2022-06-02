import React from 'react'
import { Layout } from 'antd'

const Footer = () => {
  const { Footer } = Layout
  return (
    <Footer
    style={{
      textAlign: 'center',
      bottom: 0,
      right: 0,
      left: 0
    }}
  >
    Academia Geek ©2022 Created by Mentor AG
  </Footer>
  )
}

export default Footer