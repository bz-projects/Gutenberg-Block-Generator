import React, { Component } from 'react';
import { GBStore } from '../store/index';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { 
        Button, 
        Accordion,
        Card
} from 'react-bootstrap';

export class CodeGenerator extends Component {

    render() {
        let CodeVis          = GBStore.currentState.isCodeVis;
        let $BlockName       = GBStore.currentState.BlockName;
        let $BlockID         = GBStore.currentState.BlockID;
        let $BlockCategory   = GBStore.currentState.BlockCategory;
        // let $BlockCategoryEx = GBStore.currentState.BlockCategoryEx;
        let $BlockDesc       = GBStore.currentState.BlockDesc;
        let $BlockIcon       = GBStore.currentState.BlockIcon;
        let $BlockParentID   = GBStore.currentState.BlockParentID;
        let $BlockBG         = GBStore.currentState.BlockIconBackgroundColor;
        let $BlockForColor   = GBStore.currentState.BlockIconForegroundColor;

        const copyText = () => {
            let content = document.querySelectorAll('.code__wrapper')[0].textContent;
        
            navigator.clipboard.writeText(content); 
            alert('Text copied!');
        }

        return(
            <>  

            { CodeVis === true ?

            <>  

            <Accordion defaultActiveKey="0">
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        Generated Code
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <SyntaxHighlighter showLineNumbers="true" language="javascript" style={atomOneDark} className="code__wrapper">
{`    const { registerBlockType }  = wp.blocks;
    const { Fragment } = wp.element;

    registerBlockType( '${ $BlockID }', {
        title: '${ $BlockName }',
        description: '${ $BlockDesc }',      
        category: '${ $BlockCategory }',
        ${ $BlockParentID ? `parent: [ '${$BlockParentID}' ], `: ''}
        ${  $BlockBG && $BlockForColor && $BlockIcon ? `icon: {
            background: '${ $BlockBG }',
            foreground: '${ $BlockForColor }',
            src: '${ $BlockIcon }',
        },  
            `
            : `
        icon: '${ $BlockIcon }', `
        }    
        edit() {
            return(
                <Fragment>
                    <h2>Your Code</h2>
                </Fragment>
            );
        },
        save() {
            return(
                <h4>Your Code</h4>
            );
        },
    } );`
}   
                            </SyntaxHighlighter>

                            <Button className="copy-clipboard" variant="light"  size="lg" onClick={() => { copyText() }}>
                                Copy to clipboard                    
                            </Button>

                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
               
            </Accordion>
            </>
                : ''
            }
            </>
        )
    }
}