import React,{Component} from "react"

import fetchJsonp from "fetch-jsonp"

import { Spin, Alert, Pagination  } from 'antd';

import MovieListItem from "./MovieListItem.jsx";
export default class MovieList extends Component{
    constructor(props){
        super(props)
        this.state = {
            movies:[],//当前电影列表
            nowPage:parseInt(props.match.params.page) || 1,//当前电影所在的页
            pageSize:18,//每页显示多少条数据
            totalCount:0,//总电影数
            isLoading: true, //是否加载loading
            movieType:props.match.params.type//电影的类型

        }
    }

    render(){
        // console.log(this.props.match.params)
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
        this.loadMovieListByTypeAndPage()
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
            isLoading: true,
            nowPage:parseInt(nextProps.match.params.page) || 1,//当前电影所在的页
            movieType:nextProps.match.params.type,//电影的类型
            totalCount:0
        },function(){
            this.loadMovieListByTypeAndPage()
        })
    }

    // 根据电影类型和页码，获取电影数据
    loadMovieListByTypeAndPage = () => {

        let start = this.state.pageSize * (this.state.nowPage - 1)
        let url = `http://api.douban.com/v2/movie/${this.state.movieType}?apikey=0df993c66c0c636e29ecbb5344252a4a&start=${start}&count=${this.state.pageSize}`

        fetchJsonp(url).then(res => {return res.json()}).then(
            data => {
                this.setState({
                    isLoading:false, //请求成功则消去loading效果
                    movies:data.subjects, //把拿到的电影列表数据赋
                    totalCount: data.total //总条数
                })

            }
        )

        // const data = require(`../../../mock/${this.props.match.params.type}.json`)
        // setTimeout(() => {
        //     this.setState({
        //         isLoading:false, //请求成功则消去loading效果
        //         movies:data.subjects, //把拿到的电影列表数据赋值
        //         totalCount: data.total //总条数
        //     })
        // },500)

    }

    reLoadList = () => {
        if(this.state.isLoading){
            return (
                <Spin tip="Loading...">
                    <Alert
                        message="内容正在加载中"
                        description="正在请求电影资源，请稍等一下"
                        type="info"
                    />
                </Spin>
            )
        }else{
            return (
                <div>
                    <div style={{display:"flex",flexWrap:"wrap",justifyContent:"flex-start",marginBottom:"30px" }}>
                        {this.state.movies.map((item)=>{
                            return <MovieListItem {...item} key={item.id} history={this.props.history}></MovieListItem>
                        })}
                    </div>
                    <Pagination defaultCurrent={this.state.nowPage}
                                pageSize={this.state.pageSize}
                                total={this.state.totalCount}
                                onChange={this.handlePageChange}
                                style={{textAlign:"right", marginRight:"20px"}} />
                </div>
            )
        }
    }
    handlePageChange = (page) => {
        this.props.history.push(`/movie/` + this.props.match.params.type + "/" + page)
        // window.location.href =`/#/movie/` + this.props.match.params.type + "/" + page
    }
}