import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus , faHamburger  } from '@fortawesome/free-solid-svg-icons'
import dataservice from '../../service/dataservice'
// import { useEffect , useState } from 'react';
const { Component } = require("react");
//const TimeLine = require("../Timeline/Timeline")
const React  = require("react");
const {BottomNavigation , BottomNavigationAction} = require("@material-ui/core")


class Home extends Component{
   
    constructor(props){
        // const [timeline, setTimeline] = useState([]);
        // const [search, setSearch] = useState("");
        super(props);
        this.state = {
            currentState:0,
            user_name :localStorage.getItem('user-name') ,
            records:[] 
        };
        this.selectBottomNavigationItem = this.selectBottomNavigationItem.bind(this);
        this.getdata();

    }
    getdata =()=>{
        const data =  dataservice() ;
        data.then((result)=>{
            console.log(result);
            let error = result.error ; 
            if(error ===false){
                let record = result.records ; 
                console.log(record);
                this.setState({records:record})
                
            }
        });
    }
    selectBottomNavigationItem(index){
        this.setState({currentState: index});   
    }
    render(){
        return(
            <div className="bg-white container">
                <div className="display-name p-3">
                    {this.state.user_name}
                    <span className="float-right">
                      <FontAwesomeIcon icon={faHamburger}></FontAwesomeIcon>
                    </span>
                </div>
                <div className="header">
                    <div className="display">HELLO</div>
                </div>
                {
                    this.state.records.map(
                        x=>(
                        <div className="col-lg-6" key={x.id}>
                            <div className="card">
                            <div className="card-header">{x.caption}</div>
                            <div className="body">
                                <img src={x.image} alt={x.name}/>
                            </div>
                            </div>
                        </div>
                        )
                    )
                }
              
                

                <div className="btn-wrapper-floating">
                    <button className="floating-btn">
                        <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                    </button>

                </div>
           
                <BottomNavigation
                    value={this.state.currentState}
                    className="bottom-navigation"
                    onChange={(event, newValue) => {
                       this.selectBottomNavigationItem(newValue)
                    }}
                    showLabels>
                    <BottomNavigationAction label="Timeline"  />
                    <BottomNavigationAction label="Shortlist"  />
                    <BottomNavigationAction label="Match"   />
                    <BottomNavigationAction label="Profile"   />
                    </BottomNavigation>
            </div>
        ) ; 
    }
}
 export default Home ; 