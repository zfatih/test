import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import LoadingSpiner from './LoadingSpinner.js'

class Liga extends Component{
    constructor(){
        super()
        this.state={
            timovi:[]
        }
    }
    componentDidMount(){
        let id = this.props.match.params.league_id;
        console.log("ucitavam ligu");
        fetch('https://apifootball.com/api/?action=get_standings&league_id='+id+'&APIkey=7eb42d018ffa2981ac25f1e581eb9ae95b63c44f73ca7a723ccccea4c930a257')
            .then(response=>{
                return response.json();
            }).then((data)=>{
              let timoviFetchano=data;
              timoviFetchano.sort((tim1, tim2)=>{
                  return tim1.overall_league_position - tim2.overall_league_position;
              })
              this.setState({timovi: timoviFetchano});
              console.log(timoviFetchano);
            })
    }
    render (){
        return (
            <div className="Liga">
                {
                    this.state.timovi.length===0 ? (
                        <div className="center">
                            <br></br>
                            <br></br>
                        <LoadingSpiner/></div>
                    ) :
                    (
                        <div className="container">
                            <br></br>
                            <h5 className="header col s12 light">Stanje na tabeli (kliknite na naziv tima za zadnjih 5 utakmica):</h5>
                            <br></br>
                            <table>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Tim</th>
                                        <th>MP</th>
                                        <th>W</th>
                                        <th>D</th>
                                        <th>L</th>
                                        <th>GF</th>
                                        <th>GA</th>
                                        <th>Pts</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.timovi.map((tim) => { return (
                                            <tr key={tim.team_name}>
                                                <th>{tim.overall_league_position}</th>
                                                <th><Link to={"/Timovi/" +tim.team_name}>{tim.team_name}</Link></th>
                                                <th>{tim.overall_league_payed}</th>
                                                <th>{tim.overall_league_W}</th>
                                                <th>{tim.overall_league_D}</th>
                                                <th>{tim.overall_league_L}</th>
                                                <th>{tim.overall_league_GF}</th>
                                                <th>{tim.overall_league_GA}</th>
                                                <th>{tim.overall_league_PTS}</th>
                                            </tr>
                                        )})
                                    }
                                </tbody>
                            </table>
                            <br></br>
                            <br></br>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default Liga