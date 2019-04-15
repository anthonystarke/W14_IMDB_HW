import React,{Component} from "react"
import FilmReleaseList from "../Components/FilmReleaseList.js"

class FilmReleaseBox extends Component{
  constructor(props){
    super(props);
  }
  render(){

    this.state = {data:[
      {
        id: 1,
        name: "Avengers: Endgame",
        url: "https://www.imdb.com/title/tt4154796/?ref_=rlm"
      },
      {
        id: 2,
        name: "Tolkien",
        url: "https://www.imdb.com/title/tt3361792/?ref_=rlm"
      },
      {
        id: 3,
        name: "A Dog's Journey",
        url: "https://www.imdb.com/title/tt8385474/?ref_=rlm"
      },
      {
        id: 4,
        name: "Pokémon Detective Pikachu",
        url: "https://www.imdb.com/title/tt5884052/?ref_=rlm"
      },
      {
        id: 5,
        name: "Aladdin",
        url: "https://www.imdb.com/title/tt6139732/?ref_=rlm"
      }
    ]}

    return(
      <div>
      <h2>Rendering from the box</h2>
        <FilmReleaseList data={this.state.data}/>
      </div>
    )
  };
}


export default FilmReleaseBox;
