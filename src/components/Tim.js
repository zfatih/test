import React, {Component} from 'react';
import '../stil.css';

class Tim extends Component{
    constructor(){
        super()
        this.state={
            mecevi:[]
        }
    }
    componentDidMount(){
        let naziv = this.props.match.params.team_name;
        console.log("ucitavam tim");
        fetch('https://apifootball.com/api/?action=get_H2H&firstTeam='+naziv+'&secondTeam=Arsenal&APIkey=7eb42d018ffa2981ac25f1e581eb9ae95b63c44f73ca7a723ccccea4c930a257')
            .then(response=>{
                return response.json();
            }).then((data)=>{
              let meceviFetchano=data.firstTeam_lastResults;
              meceviFetchano.sort((mec1, mec2)=>{
                  return (mec1.match_date+mec1.match_time) - (mec2.match_date+mec2.match_time);
              })
              for( var i = meceviFetchano.length-1;i>4; i--){
                 meceviFetchano.splice(i, 1);
              }
              this.setState({mecevi: meceviFetchano});
              console.log(meceviFetchano);
            })
    }
    render (){
        return (
            <div className="Tim">
                <div className="container">
            <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.mecevi.map((mec) => { return (
                                <tr key={mec.match_id}>
                                    <th>{mec.match_date}</th>
                                    <th>{mec.league_name}</th>
                                    <th>{mec.match_hometeam_name}</th>
                                    <th>{mec.match_hometeam_score}</th>
                                    <th>{mec.match_awayteam_score}</th>
                                    <th>{mec.match_awayteam_name}</th>
                                </tr>
                            )})
                        }
                    </tbody>
                </table>
                </div>
            </div>
        )
    }
}

export default Tim