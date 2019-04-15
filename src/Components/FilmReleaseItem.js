import React,{Component} from "react"

class FilmReleaseItem extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
      <a href={this.props.url}><h4>{this.props.name}</h4></a>
      </div>
    )
  }
}

export default FilmReleaseItem
