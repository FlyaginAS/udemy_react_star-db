import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundry';
import Row from "../row/row";
import ItemDetails, { Record } from "../item-details/item-details";
import SwapiService from "../../services/swapi-service";
import ItemList from '../item-list';
import  {
    PersonDetails,
    PlanetDetails,
    StarshipDetails,
    PersonList,
    StarshipList,
    PlanetList,} from '../sw-components';
import './app.css';
import {SwapiServiceProvider} from "../swapi-service-context";
import DummySwapiService from '../../services/dummy-swapi-service';

export default class App extends Component {

    swapiService = new SwapiService();

    state = {
        showRandomPlanet: true
    };

    toggleRandomPlanet = () => {
        this.setState((state) => {
            return {
                showRandomPlanet: !state.showRandomPlanet
            }
        });
    };

    render() {

        const planet = this.state.showRandomPlanet ?
            <RandomPlanet/> :
            null;

        const { getPerson,
            getStarship,
            getPersonImage,
            getStarshipImage,
            getAllPeople,
            getAllPlanets } = this.swapiService;


        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={this.swapiService}>
                <div className="stardb-app">
                    <Header />
                    <PersonDetails itemId={11}/>
                    <PlanetDetails itemId={5}/>
                    <StarshipDetails itemId={9}/>
                    <PersonList/>

                    <StarshipList/>

                    <PlanetList/>


                </div>
                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    }
}
