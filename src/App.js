import React from 'react'
import './App.css'

import {Routes,Route,Link} from 'react-router-dom'
import {Layout,Typography,Space} from 'antd'

import { Navbar ,Homepage,Cryptocurrencies,News,CryptoDetails  } from './comp'
export const App = () => {
  return (
    <div className="app">
        <div className="navbar">
            <Navbar/>
        </div>
        <div className="main">

           <Layout>
               <div className="routes">
                   <Routes>
                        <Route path='/' element={<Homepage/>} />
                        <Route path='/cryptocurrencies' element={<Cryptocurrencies/>} />
                        <Route path='/crypto/:coinId' element={<CryptoDetails/>} />
                        <Route path='/news' element={<News/>} />

                   </Routes>
               </div>
           </Layout>

        <div className="footer" >
           <Typography.Title  level={5} style={{color :"white" ,textAlign:"center"}}>
                Crypyoverse <br/>
                All rights reserverd
           </Typography.Title>
           <Space>
               <Link to='/'>Home</Link>
               <Link to='/news'>News</Link>
                <Link to = '/cryptocurrencies'>Cryptocurrencies</Link>

           </Space>
           </div>

        </div>
    </div>
  )
}