import React,{Component} from "react"
import { Button, Radio, Icon, Spin, Alert } from 'antd';
import fetchJsonp from "fetch-jsonp";
import "../../../css/movieDetail.scss"
export default class MovieDetail extends Component{
    constructor(props){
        super(props)
        this.state={
            movieDetail:{},
            isLoading:true
        }
    }
    componentWillMount() {
        console.log(this.props)
        this.fetchDetail()
    }
    fetchDetail = () => {
        const url = `https://api.douban.com/v2/movie/subject/${this.props.match.params.id}?apikey=0df993c66c0c636e29ecbb5344252a4a`
        fetchJsonp(url).then(
            res => { return res.json()}
        ).then(
            data => {
                this.setState({
                    isLoading:false,
                    movieDetail:data
                })
            }
        )

        // const data = require("../../../mock/30166972.json")
        // setTimeout(()=>{
        //     this.setState({
        //         isLoading:false,
        //         movieDetail: data
        //     })
        // },1000)
    }
    render(){
        return(
           <div className="detailStyle">
               <Button type="primary" onClick={this.goBack}>
                   <Icon type="left" />
                   Backward
               </Button>
               {
                    this.getLoadDetail()
               }

           </div>
        )
    }
    getLoadDetail = () => {
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
                <div className="movieDetail">
                    <p>{this.state.movieDetail.original_title}</p>
                    <img src={this.state.movieDetail.images.large} alt=""/>
                    <p className="movieDesc">{this.state.movieDetail.summary}</p>
                </div>
            )
        }
    }
    goBack = () => {
        this.props.history.go(-1)
    }
}