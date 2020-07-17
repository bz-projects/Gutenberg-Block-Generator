import React, { Component } from 'react';
import { GBStore } from '../store/index';

export class CodeGenerator extends Component {

    render() {
        let CodeVis          = GBStore.currentState.isCodeVis;
        let $BlockName       = GBStore.currentState.BlockName;
        let $BlockID         = GBStore.currentState.BlockID;
        let $BlockCategory   = GBStore.currentState.BlockCategory;
        let $BlockCategoryEx = GBStore.currentState.BlockCategoryEx;
        let $BlockDesc       = GBStore.currentState.BlockDesc;
        let $BlockIcon       = GBStore.currentState.BlockIcon;
        let $BlockParentID   = GBStore.currentState.BlockParentID;
        let $BlockBG         = GBStore.currentState.BlockIconBackgroundColor;
        let $BlockForColor   = GBStore.currentState.BlockIconForegroundColor;

        return(
            <>  

            { CodeVis === true ?

            <>
            <h3 className="global-space">
                Copy your Code
            </h3>
            <pre>
                {
                `
                const { registerBlockType }  = wp.blocks;
                const { Fragment } = wp.element;

                registerBlockType( '${ $BlockID }', {
                    title: '${ $BlockName }',
                    description: '${ $BlockDesc }',      
                    category: '${ $BlockCategory }',
                    ${  $BlockBG && $BlockForColor && $BlockIcon ? `
                    icon: {
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
                </pre>
            </>
                : ''
            }
            </>
        )
    }
}