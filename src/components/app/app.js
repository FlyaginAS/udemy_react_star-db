import React, { Component } from 'react';
import Header from '../header';
import ErrorBoundry from '../error-boundry';
import SwapiService from "../../services/swapi-service";
import DummySwapiService from'../../services/dummy-swapi-service';
import  {SwapiServiceProvider} from "../swapi-service-context";
import  {PeoplePage, StarshipsPage, PlanetsPage} from '../pages';
import './app.css';

export default class App extends Component {
    state = {
        swapiService : new SwapiService(),
    };
    onServiceChange=()=>{
        this.setState(({swapiService})=>{
            const Service = swapiService instanceof  SwapiService ?
                DummySwapiService : SwapiService;
            console.log('switched to', Service.name);
            return {
                swapiService: new Service(),
            };
        });
    };

    render() {



        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={this.state.swapiService}>
                    <div className="stardb-app">
                        <Header onServiceChange={this.onServiceChange} />

                        <PeoplePage/>
                        <PlanetsPage/>
                        <StarshipsPage/>

                    </div>
                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    }
}
