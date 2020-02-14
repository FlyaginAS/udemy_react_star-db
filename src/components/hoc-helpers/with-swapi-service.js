import  React, {Component} from 'react';
import {SwapiServiceConsumer} from "../swapi-service-context";

const  withSwapiService =(mapMethodsToProps)=> (Wrapped )=>{
    return class extends Component {
        render(){
            return (
                <SwapiServiceConsumer>
                    {
                        (swapiService)=>{
                            const serviceProps=mapMethodsToProps(swapiService);
                            return (
                                <Wrapped {...this.props}  {...serviceProps}/>
                            );
                        }
                    }

                </SwapiServiceConsumer>
            );
        }
    }
};

export  default withSwapiService;

