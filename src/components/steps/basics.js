import React, { Component } from 'react';
import { 
    Col, 
    Row, 
    FormGroup, 
    Form,
    FormControl
} from 'react-bootstrap';

import { GBStore } from '../../store/index';
import { ChromePicker } from 'react-color';

export class BasicsStep extends Component {

    state = {
        OwnSelected: false,
        IconBackground: GBStore.currentState.BlockIconBackgroundColor,
        IconForeGroundColor: GBStore.currentState.BlockIconForegroundColor
    };

    render() {
        return(
           <>
                <Row>
                    <Col sm={5}>
                        <FormGroup>
                            <Form.Label htmlFor="blockname">Block Name</Form.Label>
                            <FormControl
                                defaultValue={ GBStore.currentState.BlockName }
                                required
                                id="blockname"
                                placeholder="Gutenberg Block Name"
                                aria-label="Block Name"
                                aria-describedby="block-name"
                                onChange={ ( content ) => {
                                    GBStore.update(e => {
                                       e.BlockName = content.target.value;
                                    });
                                }}
                            />
                        </FormGroup>
                    </Col>

                    <Col sm={3}>
                        <FormGroup>
                            <Form.Label htmlFor="blockid">Block ID</Form.Label>
                            <FormControl
                                defaultValue={ GBStore.currentState.BlockID }
                                required
                                id="blockid"
                                placeholder="core/paragraph"
                                aria-label="Block ID"
                                aria-describedby="block-id"
                                onChange={ ( content ) => {
                                    GBStore.update(e => {
                                       e.BlockID = content.target.value;
                                    });
                                }}
                            />
                        </FormGroup>
                    </Col>
                    <Col sm={3}>
                        <FormGroup>
                            <Form.Label htmlFor="blockcategory">Block Category</Form.Label>
                            <FormControl
                                required
                                id="blockcategory"
                                as="select"
                                aria-label="Block Category"
                                aria-describedby="block-category"
                                onChange={ ( content ) => {
                                    GBStore.update(e => {
                                        e.BlockCategory = content.target.value;
                                    });

                                    if( content.target.value === 'own') {
                                        this.setState( {
                                            OwnSelected: true 
                                        });

                                        GBStore.update(e => {
                                            e.BlockCategoryEx = true;
                                        });
                                    }else {
                                        this.setState( {
                                            OwnSelected: false 
                                        });

                                        GBStore.update(e => {
                                            e.BlockCategoryEx = false;
                                        });
                                    }
                                }}
                            >
                                <option value="none">Choose your Block category</option>
                                <option value="common">Common Blocks</option>
                                <option value="formatting">Formatting</option>
                                <option value="layout">Layout Elements</option>
                                <option value="widget">Widgets</option>
                                <option value="embeds">Embeds</option>
                                <option value="own">Your own Category</option>
                            </FormControl>
                        </FormGroup>

                        {  this.state.OwnSelected === true ? 

                            <FormGroup>
                                    <Form.Label htmlFor="blockcustomcat">Block Custom Category</Form.Label>
                                    <FormControl
                                        id="blockcustomcat"
                                        placeholder="Your custom category name"
                                        aria-label="Block Custom Category"
                                        aria-describedby="categoryname"
                                        defaultValue={ GBStore.currentState.BlockCategoryCustom }
                                        onChange={ ( content ) => {
                                            GBStore.update(e => {
                                                e.BlockCategoryCustom = content.target.value;
                                            });
                                        }}
                                    />
                            </FormGroup>

                            : ''                        
                        }

                    </Col>
                </Row>
                <Row className="global-space">
                    <Col sm={3}>
                        <FormGroup>
                            <Form.Label htmlFor="blockparent">Parent Block</Form.Label>
                            <FormControl
                                id="blockparent"
                                placeholder="core/paragraph"
                                aria-label="Parent Block"
                                aria-describedby="blockparent"
                                defaultValue={ GBStore.currentState.BlockParentID }
                                onChange={ ( content ) => {
                                    GBStore.update(e => {
                                        e.BlockParentID = content.target.value;
                                    });
                                }}
                            />
                        </FormGroup>
                    </Col>
                    <Col sm={3}>
                        <FormGroup>
                            <Form.Label htmlFor="blockicon">Block Icon</Form.Label>
                            <FormControl
                                id="blockicon"
                                placeholder="excerpt-view"
                                aria-label="Block Icon"
                                aria-describedby="block-description"
                                defaultValue={ GBStore.currentState.BlockIcon }
                                onChange={ ( content ) => {
                                    GBStore.update(e => {
                                        e.BlockIcon = content.target.value;
                                    });
                                }}
                            />
                            <small>
                                Please visit our <a rel="noopener noreferrer" href="https://developer.wordpress.org/resource/dashicons" target="_blank">Dashicon Page</a>
                            </small>
                        </FormGroup>
                    </Col>
                    <Col sm={5}>
                        <FormGroup>
                            <Form.Label htmlFor="blockdesc">Block Description</Form.Label>
                            <FormControl
                                id="blockdesc"
                                placeholder="About your Gutenberg Block"
                                aria-label="Block Description"
                                aria-describedby="block-description"
                                defaultValue={ GBStore.currentState.BlockDesc }
                                onChange={ ( content ) => {
                                    GBStore.update(e => {
                                        e.BlockDesc = content.target.value;
                                    });
                                }}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <hr />
                <h5>Extend</h5>
                <Row className="global-space">
                    <Col>
                        <FormGroup>
                           <p>
                               With this color settings you can customize your own block Listing. 
                               Your colors will be combinated with your Dashicon.
                           </p>
                           <p>
                               For more details please visit our documentation page 
                               for <a rel="noopener noreferrer" href="https://developer.wordpress.org/block-editor/developers/block-api/block-registration/" target="_blank">registering custom Blocks</a>.
                           </p>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Form.Label>Block Icon Background Color</Form.Label>
                            <ChromePicker 
                                color={ this.state.IconBackground }
                                onChange={
                                    (color ) => {
                                        this.setState( {
                                            IconBackground: color.hex
                                        })
                                    }
                                }
                                onChangeComplete={
                                    ( color ) => {
                                        GBStore.update(e => {
                                            e.BlockIconBackgroundColor = color.hex;
                                        });
                                    }
                                }
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Form.Label>Block Icon Foreground Color</Form.Label>
                        <ChromePicker 
                            color={ this.state.IconForeGroundColor }
                            onChange={
                                ( color ) => {
                                    this.setState( {
                                        IconForeGroundColor: color.hex
                                    })
                                }
                            }
                            onChangeComplete={
                                ( color ) => {
                                    GBStore.update(e => {
                                        e.BlockIconBackgroundColor = color.hex;
                                    });
                                }
                            }
                        />
                        </FormGroup>
                    </Col>
                </Row>
           </>
        )
    }
}
