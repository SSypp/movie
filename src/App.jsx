import React, { Component } from "react"
import { HashRouter, Route, Link } from "react-router-dom";

import { Layout, Menu, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

// 引入App.scss
// import AppStyle from "./css/appStyle.scss"
import "./css/appStyle.scss"

import Home from "./components/Home/home.jsx"
import About from "./components/About/about.jsx"
import Movie from "./components/Movie/movie.jsx";

export default class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <HashRouter>
                <Layout className="layout" style={{ height: "100%" }}>
                    <Header>
                        <div className="logo"></div>
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={window.location.hash.split("/")}
                            style={{ lineHeight: '64px' }}
                        >
                            <Menu.Item key="home"><Link to="/home">首页</Link></Menu.Item>
                            <Menu.Item key="movie"><Link to="/movie">电影</Link></Menu.Item>
                            <Menu.Item key="about"><Link to="/about">关于</Link></Menu.Item>
                        </Menu>
                    </Header>
                    <Content style={{ padding: '0' }} style={{height:"100%"}}>
                        <Route path="/home" component={Home} exact></Route>
                        <Route path="/movie" component={Movie}></Route>
                        <Route path="/about" component={About}></Route>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </HashRouter>
        )
    }
}