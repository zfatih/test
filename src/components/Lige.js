import React, {Component } from 'react'
import {Link} from 'react-router-dom'
import '../stil.css'

class Lige extends Component{
    constructor(){
        super();
        this.state = {
            lige: []
        }
    }
    componentDidMount(){
        console.log("ucitavam lige");
        fetch('https://apifootball.com/api/?action=get_leagues&APIkey=7eb42d018ffa2981ac25f1e581eb9ae95b63c44f73ca7a723ccccea4c930a257')
            .then(response=>{
                return response.json();
            }).then((data)=>{
              let ligeFetchano=data.map((jednaLiga)=>{
                return (
                  {
                      league_id: jednaLiga.league_id,
                      league_name: jednaLiga.league_name
                  }
                )
              })
              this.setState({lige: ligeFetchano});
            })
      }
    render(){
        
        return (
            <div className="Lige">
                <div className="container">
                    <h1>Odaberite ligu:</h1>
                <div className="collection">
                    {this.state.lige.map((jednaLiga) => {
                        return (
                            <Link to={"/Lige/"+jednaLiga.league_id} className="collection-item" key={jednaLiga.league_id}>{jednaLiga.league_name}</Link>
                        )}
                    )}
                </div>
                </div>
            </div>
        )
    }
}

export default Lige