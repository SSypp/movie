import React,{Component} from "react"

export default class MovieList extends Component{
    constructor(props){
        super(props)
    }

    render(){
        console.log(this.props.match.params)
        return (
            <div>
                我是热门排行榜--{this.props.match.params.type} -- {this.props.match.params.id}
            </div>
        )
    }
}