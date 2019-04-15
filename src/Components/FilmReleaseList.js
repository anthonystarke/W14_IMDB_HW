import React,{Component} from "react";
import FilmReleaseItem from './FilmReleaseItem';

class FilmReleaseList extends Component{
  constructor(props){
    super(props);
  }
  render(){

    const filmNodes = this.props.data.map(film => {
          return( <FilmReleaseItem name={film.name}key={film.id} url={film.url}></FilmReleaseItem>)
        })

    return(
      <div>
        <h3>Printing from list</h3>
        {filmNodes}
      </div>
    )
  }
}

export default FilmReleaseList;
