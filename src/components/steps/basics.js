import React, { Component } from 'react';
import { 
    Col, 
    Row, 
    FormGroup, 
    Form,
    FormControl
} from 'react-bootstrap';

import { ChromePicker } from 'react-color';

export class BasicsStep extends Component {

    render() {
        return(
           <>
                <Row>
                    <Col sm={5}>
                        <FormGroup>
                            <Form.Label for="blockname">Block Name</Form.Label>
                            <FormControl
                                required
                                id="blockname"
                                placeholder="Gutenberg Block Name"
                                aria-label="Block Name"
                                aria-describedby="block-name"
                            />
                        </FormGroup>
                    </Col>

                    <Col sm={3}>
                        <FormGroup>
                            <Form.Label for="blockid">Block ID</Form.Label>
                            <FormControl
                                required
                                id="blockid"
                                placeholder="core/pargraph"
                                aria-label="Block ID"
                                aria-describedby="block-id"
                            />
                        </FormGroup>
                    </Col>
                    <Col sm={3}>
                        <FormGroup>
                            <Form.Label for="blockcategory">Block Category</Form.Label>
                            <FormControl
                                required
                                id="blockcategory"
                                as="select"
                                aria-label="Block Category"
                                aria-describedby="block-category"
                            >
                                <option selected disabled value="none">Choose your Block category</option>
                                <option value="CommonBlocks">Common Blocks</option>
                                <option value="Formatting">Formatting</option>
                                <option value="LayoutElements">Layout Elements</option>
                                <option value="Widgets">Widgets</option>
                                <option value="Embeds">Embeds</option>
                                <option value="own">Own Category</option>
                            </FormControl>
                        </FormGroup>
                        <FormGroup>
                            <Form.Label for="blockcustomcat">Block Custom Category</Form.Label>
                            <FormControl
                                id="blockcustomcat"
                                placeholder="Your custom category name"
                                aria-label="Block Custom Category"
                                aria-describedby="categoryname"
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row className="global-space">
                    <Col sm={3}>
                        <FormGroup>
                            <Form.Label for="blockparent">Parent Block</Form.Label>
                            <FormControl
                                id="blockparent"
                                placeholder="core/pargraph"
                                aria-label="Parent Block"
                                aria-describedby="blockparent"
                            />
                        </FormGroup>
                    </Col>
                    <Col sm={3}>
                        <FormGroup>
                            <Form.Label for="blockicon">Block Icon</Form.Label>
                            <FormControl
                                id="blockicon"
                                placeholder="excerpt-view"
                                aria-label="Block Icon"
                                aria-describedby="block-description"
                            />
                            <small>
                                Please visit our <a href="https://developer.wordpress.org/resource/dashicons" target="_blank">Dashicon Page</a>
                            </small>
                        </FormGroup>
                    </Col>
                    <Col sm={5}>
                        <FormGroup>
                            <Form.Label for="blockdesc">Block Description</Form.Label>
                            <FormControl
                                id="blockdesc"
                                placeholder="About your Gutenberg Block"
                                aria-label="Block Description"
                                aria-describedby="block-description"
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
                               for <a href="https://developer.wordpress.org/block-editor/developers/block-api/block-registration/" target="_blank">registering custom Blocks</a>.
                           </p>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Form.Label>Block Icon Background Color</Form.Label>
                            <ChromePicker />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Form.Label>Block Icon Foreground Color</Form.Label>
                            <ChromePicker />
                        </FormGroup>
                    </Col>
                </Row>

           </>
        )
    }
}
