import React from 'react'
import {Link} from 'react-router-dom'

const Home = () =>{
    return (
         <div className="section no-pad-bot" id="index-banner">
            <div className="container">
            <br/><br/>
            <h3 className="header center green-text">Dobrodošli na Rezultati.com</h3>
            <div className="row center">
                <h5 className="header col s12 light">Pratite rezultate na jednom mjestu!</h5>
            </div>
            <div className="row center">
                <Link to="/Lige" id="download-button" className="btn-large waves-effect waves-light green">Pretraži lige</Link>
            </div>
            <br/><br/>

            </div>
        </div>
    )
}

export default Home