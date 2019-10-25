import React,{Component} from "react"

import fetchJsonp from "fetch-jsonp"

import { Spin, Alert } from 'antd';
export default class MovieList extends Component{
    constructor(props){
        super(props)
        this.state = {
            movies:[],//当前电影列表
            nowPage:parseInt(props.match.params.page) || 1,//当前电影所在的页
            pageSize:10,//每页显示多少条数据
            totalCount:14,//总电影数
            isLoading: true, //是否加载loading
            movieType:props.match.params.type//电影的类型

        }
    }

    render(){
        console.log(this.props.match.params)
        return (
            <div>
                {this.reLoadList()}
            </div>
        )
    }

    componentWillMount() {
        // setTimeout(()=>{
        //     this.setState({
        //         isLoading: false
        //     })
        // },2000)

        // fetchJsonp("http://api.douban.com/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a").then(
        //     res => {
        //         return res.json()
        //     }
        // ).then(
        //     data => {
        //         console.log(data)
        //     }
        // )

        // let start = this.state.pageSize * (this.state.nowPage - 1)
        // let url = `http://api.douban.com/v2/movie/${this.props.match.params.type}?apikey=0df993c66c0c636e29ecbb5344252a4a&start=${start}&count=${this.state.pageSize}`
        //
        // fetchJsonp(url).then(res => {return res.json()}).then(
        //     data => {
        //         console.log(data)
        //     }
        // )
    }

    reLoadList = () => {
        if(this.state.isLoading){
            return (
                <Spin tip="Loading...">
                    <Alert
                        message="Alert message title"
                        description="Further details about the context of this alert."
                        type="info"
                    />
                </Spin>
            )
        }else{
            return (
                <h1>页面已经加载完成！！</h1>
            )
        }
    }
}