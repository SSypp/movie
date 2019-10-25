import React,{Component} from "react"

import { Layout, Menu, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

import {Route,Link} from "react-router-dom"

import MovieList from "./movieView/MovieList.jsx"
import MovieDetail from "./movieView/MovieDetail";

export default class Movie extends Component{
    constructor(props){
        super(props)
    }

    componentWillMount() {
        // fetch("http://www.liulongbin.top:3005/api/getlunbo")
        //     .then(
        //         res => {
        //             return res.json()
        //         }
        //     ).then(
        //         data => {
        //             console.log(data)
        //         }
        // )
    }
    render(){
        return(
            <Layout style={{height:"100%"}}>
                <Sider width={240} style={{ background: '#fff' }}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={window.location.hash.split("/")[2]}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        <Menu.Item key="in_theaters"><Link to="/movie/in_theaters/1">正在热映</Link></Menu.Item>
                        <Menu.Item key="coming_soon"><Link to="/movie/coming_soon/1">即将上映</Link></Menu.Item>
                        <Menu.Item key="top250"><Link to="/movie/top250/1">Top250</Link></Menu.Item>
                    </Menu>
                </Sider>
                <Layout style={{ background: '#fff',marginLeft: "1px",padding:"40px 10px",boxSizing:"border-box" }}>
                    <Content>
                        <Route path="/movie/:type/:page" component={MovieList}></Route>
                        <Route path="/movie/detail/:id" component={MovieDetail}/>
                    </Content>
                </Layout>
            </Layout>
        )
    }
}