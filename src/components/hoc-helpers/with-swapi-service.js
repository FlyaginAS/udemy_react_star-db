import  React, {Component} from 'react';
import {SwapiServiceConsumer} from "../swapi-service-context";

const  withSwapiService = (View)=>{
    return class extends Component {
        render(){
            return (
                <SwapiServiceConsumer>
                    {
                        (swapiService)=>{
                            return (
                                <View {...this.props} swapiService={swapiService}/>
                            );
                        }
                    }

                </SwapiServiceConsumer>
            );
        }
    }
};

export  default withSwapiService;

