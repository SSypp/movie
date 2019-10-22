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

                    <Layout>
                        <Sider width={200} style={{ background: '#fff' }}>
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{ height: '100%', borderRight: 0 }}
                            >
                                <SubMenu
                                    key="sub1"
                                    title={
                                        <span>
                                            <Icon type="user" />
                                            subnav 1
              </span>
                                    }
                                >
                                    <Menu.Item key="1">option1</Menu.Item>
                                    <Menu.Item key="2">option2</Menu.Item>
                                    <Menu.Item key="3">option3</Menu.Item>
                                    <Menu.Item key="4">option4</Menu.Item>
                                </SubMenu>
                                <SubMenu
                                    key="sub2"
                                    title={
                                        <span>
                                            <Icon type="laptop" />
                                            subnav 2
              </span>
                                    }
                                >
                                    <Menu.Item key="5">option5</Menu.Item>
                                    <Menu.Item key="6">option6</Menu.Item>
                                    <Menu.Item key="7">option7</Menu.Item>
                                    <Menu.Item key="8">option8</Menu.Item>
                                </SubMenu>
                                <SubMenu
                                    key="sub3"
                                    title={
                                        <span>
                                            <Icon type="notification" />
                                            subnav 3
              </span>
                                    }
                                >
                                    <Menu.Item key="9">option9</Menu.Item>
                                    <Menu.Item key="10">option10</Menu.Item>
                                    <Menu.Item key="11">option11</Menu.Item>
                                    <Menu.Item key="12">option12</Menu.Item>
                                </SubMenu>
                            </Menu>
                        </Sider>
                        <Layout>
                            <Content style={{ padding: '0 50px' }}>
                                <Route path="/home" component={Home} exact></Route>
                                <Route path="/movie" component={Movie}></Route>
                                <Route path="/about" component={About}></Route>
                            </Content>
                            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                        </Layout>
                    </Layout>
                </Layout>

            </HashRouter>
        )
    }
}