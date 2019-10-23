import React,{Component} from "react"

import { Layout, Menu, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

import {Route,Link} from "react-router-dom"

import MovieList from "./movieView/MovieList.jsx"


export default class Movie extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Layout style={{height:"100%"}}>
                <Sider width={200} style={{ background: '#fff' }}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        <Menu.Item key="1"><Link to="/movie/in_theaters/1">正在热映</Link></Menu.Item>
                        <Menu.Item key="2"><Link to="/movie/coming_soon/1">即将上映</Link></Menu.Item>
                        <Menu.Item key="3"><Link to="/movie/top250/1">Top250</Link></Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Content>
                        <Route path="/movie/:type/:id" component={MovieList}></Route>
                    </Content>
                </Layout>
            </Layout>
        )
    }
}