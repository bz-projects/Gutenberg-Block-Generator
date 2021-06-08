import React, { Component } from 'react';
import { Tab, Tabs, Button } from 'react-bootstrap';
import { BasicsStep } from './steps/basics';
import { CodeGenerator } from './code';
import { GBStore } from '../store';

export default class Generator extends Component {

    
    state = {
        isCodeVis: false 
    }

    render() {
        return(
            <>
                <div className="gb__info jumbotron">
                    <div className="gb__info-container container">
                        <h1 className="gb__info-headline display-4">Gutenberg Block Generator</h1>
                        <p className="gb__info-content lead">
                           Gutenberg Development made <strong>simple, free and powerfull.</strong>  
                        </p>
                    </div>   
                </div>
                <main className="gb__generator container">
                    <article className="global-space">
                        <h3>
                            Gutenberg Basic Generator - WIP
                        </h3>
                        <p>
                            Notice: This plattform is still WIP.
                        </p>
                         <p>
                            <iframe src="https://ghbtns.com/github-btn.html?user=bz-projects&repo=Gutenberg-Block-Generator&type=star&count=true&size=large" frameborder="0" scrolling="0" width="170" height="30" title="GitHub"></iframe>
                        </p>
                    </article>
                    <Tabs transition={false} defaultActiveKey="general" id="uncontrolled-tab-example">
                        <Tab eventKey="general" title="General">
                            <div className="gb__generator-tab">
                                <form>
                                    <fieldset>
                                        <h5>Basics</h5>
                                        <BasicsStep />
                                    </fieldset>
                                </form>
                            </div>
                        </Tab>
                    </Tabs>
                    <div className="container global-space">
                        <article className="gb__generator-buttons row">
                            <Button 
                                className="gb__generator-button" 
                                variant="primary" 
                                size="lg" 
                                block 
                                onClick={ ( ) => {
                                  
                                    this.setState( {
                                        isCodeVis: true
                                    });

                                    GBStore.update(e => {
                                        e.isCodeVis = true;
                                    });
                                  
                                }}
                            >
                                Generate
                            </Button>
                            <Button
                                className="gb__generator-button" 
                                variant="outline-primary" 
                                size="lg" 
                                block
                            >
                                Reset
                            </Button>
                        </article>
                    </div>

                    <CodeGenerator />
                </main>
            </>
        )
    }
}
