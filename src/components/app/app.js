import React from 'react';
import ErrorIndicator from '../error-indicator';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './app.css';
import ErrorButton from "../error-button/error-button";

export  default  class App extends React.Component{
    state= {
       showRandomPlanet: true,
       selectedPerson: 5,
        hasError: false,
    };
    onPersonSelected = (id)=>{
       this.setState({
           selectedPerson: id,
       }) ;
    };
    componentDidCatch(){
        console.log('componentDidCatch');
        this.setState({hasError: true});
    }
    render(){
        if(this.state.hasError) {
            return <ErrorIndicator/>;
        }
        return (
            <div>
                <Header />
                <RandomPlanet />
                <div className='row mb2 button-row'>
                    <ErrorButton/>
                </div>
                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList onItemSelected={this.onPersonSelected}/>
                    </div>
                    <div className="col-md-6">
                        <PersonDetails personId={this.state.selectedPerson} />
                    </div>
                </div>
            </div>
        );
    }
};

