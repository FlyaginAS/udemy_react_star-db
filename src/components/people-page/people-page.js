import React, { Component } from 'react';

import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';
import ErrorIndicator from '../error-indicator/error-indicator';
import  ErrorBoundry from '../error-boundry';
import './people-page.css';
import SwapiService from "../../services/swapi-service";

const Row=({left, right})=>{
    return (
        <div className="row mb2">
            <div className="col-md-6">
                {left}
            </div>
            <div className="col-md-6">
                {right}
            </div>
        </div>
    );
};


export default class PeoplePage extends Component {

    state = {
        selectedPerson: 3,
        hasError: false
    };
    swapiService= new SwapiService();


    onPersonSelected = (selectedPerson) => {
        this.setState({ selectedPerson });
    };

    render() {

        if (this.state.hasError) {
            return <ErrorIndicator />;
        }

        const itemList=(
            <ItemList
                onItemSelected={this.onPersonSelected}
                getData={this.swapiService.getAllPeople}
            >
                {(i)=> (
                    `${i.name}  (${i.birthYear})`
                )}

            </ItemList>
        );
        const personDetails=(
            <ErrorBoundry>
            <PersonDetails personId={this.state.selectedPerson} />
            </ErrorBoundry>
        );

        return (
            <ErrorBoundry>
                <Row left={itemList} right={personDetails}/>
            </ErrorBoundry>
        );
    }
}
