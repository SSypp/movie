import React,{Component} from "react"

import { Rate } from 'antd';

import "../../../css/movieItem.scss"
export default class MovieListItem extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="box" onClick={this.getDetail} >
                <img src={this.props.images.small} alt=""/>
                <h4 title={this.props.title}>电影名称：{this.props.title}</h4>
                <h4>上映时间：{this.props.mainland_pubdate}</h4>
                <h4 title={this.props.genres.join(",")}>电影类型：{this.props.genres.join(",")}</h4>
                {
                   this.ratingISNull()
                }

            </div>
        )
    }
    ratingISNull = () => {
        if(this.props.rating.average == '0'){
            return (
                <h4>未评分</h4>
            )
        }else{
            return (
                <Rate disabled defaultValue={this.props.rating.average / 2 } />
            )
        }
    }

    getDetail = () => {
        // console.log(this.props.history)
        this.props.history.push(`/movie/detail/` + this.props.id )
    }
}