import React, {Component} from 'react';
import LoadingSpiner from './LoadingSpinner.js'

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
                {
                        this.state.mecevi.length===0 ? (<div className="center"><br></br><br></br><LoadingSpiner/></div>) :
                        (
                       

                <div className="container">
                    <br></br>
                    <h5 className="header col s12 light">Zadnjih 5 utakmica tima {this.props.match.params.team_name}:</h5>
                    <br></br>
            <table>
                    <thead>
                        
                    </thead>
                    <tbody>
                        {
                            this.state.mecevi.map((mec) => { 
                                let style= {
                                    fontWeight: 'normal'
                                }
                                let style1 = {
                                    fontWeight: 'normal'
                                };
                                let style2 = {
                                    fontWeight: 'bold'
                                };
                                if(this.props.match.params.team_name === mec.match_hometeam_name){
                                    style1.fontWeight='bold';
                                    style2.fontWeight='normal';
                                } else {
                                    style2.fontWeight='bold';
                                    style1.fontWeight='normal';
                                }
                                return (
                                <tr key={mec.match_id}>
                                    <th style={style}>{mec.match_date}</th>
                                    <th style={style}>{mec.league_name}</th>
                                    <th style={style1}>{mec.match_hometeam_name}</th>
                                    <th style={style}>{mec.match_hometeam_score}</th>
                                    <th style={style}>{mec.match_awayteam_score}</th>
                                    <th style={style2}>{mec.match_awayteam_name}</th>
                                </tr>
                            )})
                        }
                    </tbody>
                </table>
                </div>
                     
                )
                }
            </div>
        )
    }
}

export default Tim