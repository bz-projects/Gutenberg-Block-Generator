import React, { Component } from 'react';
import { Tab, Tabs, Button } from 'react-bootstrap';
import { BasicsStep } from './steps/basics';

export default class Generator extends Component {
    render() {

        return(
            <>
                <div className="gb__info jumbotron">
                    <div className="gb__info-container container">
                        <h1 className="gb__info-headline display-4">Gutenberg Block Generator</h1>
                        <p className="gb__info-content lead">
                            Use our first biggest Gutenberg Online Creater Tool and enjoy developing with WordPress! 
                        </p>
                    </div>   
                </div>
                <main className="gb__generator container">
                    <article className="global-space">
                        <h3>
                            Gutenberg Components
                        </h3>
                        <p>
                            Choose your components and check it out!
                        </p>
                    </article>
                    <h4>
                        Block Preview
                    </h4>
                    <img src="https://i.ibb.co/CPcKyb5/block.jpg" alt="Gutenberg Backend" />

                    <Tabs defaultActiveKey="general" id="uncontrolled-tab-example">
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
                        <Tab eventKey="supports" title="Supports">
                            <div className="gb__generator-tab">
                                <form>
                                    <BasicsStep />
                                </form>
                            </div>
                        </Tab>
                        <Tab eventKey="components" title="Components">
                            <div className="gb__generator-tab">
                                <form>
                                    <BasicsStep />
                                </form>
                            </div>
                        </Tab>
                        <Tab eventKey="generate" title="Generate">
                            <div className="gb__generator-tab">
                                <form>
                                    <BasicsStep />
                                </form>
                            </div>
                        </Tab>
                    </Tabs>
                    <div className="container global-space">
                        <article className="gb__generator-buttons row">
                            <Button className="gb__generator-button" variant="primary" size="lg" block>
                                Generate
                            </Button>
                            <Button className="gb__generator-button" variant="outline-primary" size="lg" block>
                                Reset
                            </Button>
                        </article>
                    </div>
                </main>
            </>
        )
    }
}