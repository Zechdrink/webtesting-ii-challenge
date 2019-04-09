import React from 'react';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return ( 
            
            <div className = 'dashboard'>
                <div>
                    <button onClick = {this.props.onStrike}> Strike </button>
                    <button onClick = {this.props.onBall}> Ball </button>
                </div>
                <div>
                    <button onClick = {this.props.onFoul}> Foul </button>
                    <button onClick = {this.props.onHit}> Hit </button>
                </div>
            </div>

         );
    }
}
 
export default Dashboard;