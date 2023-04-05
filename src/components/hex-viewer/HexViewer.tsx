import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

import { formatHexColor, setColor } from '../../util';

/**
 * This page is used to change background colors using a hex input (see utils)
 */
export default function HexViewer(): JSX.Element {
    return (
        <Container className="HexViewer">
            <InternalHexViewer />
        </Container>
    );
}

type InternalHexViewerProps = {};
type InternalHexViewerState = {
    color: string;
    colorInput: string;
};

class InternalHexViewer extends React.Component<InternalHexViewerProps, InternalHexViewerState>
{
    public constructor(props: InternalHexViewerProps) {
        super(props)

        this.state = {
            color: "#ffffff",
            colorInput: ""
        }
    }

    public async componentDidMount() {
        this.setState({
            color: document.body.style.background,
            colorInput: ""
        }) // white background
    }

    public render(): React.ReactNode {
        return (
            <Container>
                <Row>
                    <Col>
                        <h2>Color viewer</h2>
                        <Form onSubmit={e => this.onSubmit(e)}>
                            <Form.Group className="mb-3" controlId="hexInput">
                                <Form.Label>Hex Value</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Ex: #ffffff or ffffff"
                                    value={this.state.colorInput}
                                    onChange={e => { this.setState({ colorInput: e.target.value }) }}
                                />
                                <Form.Text className="text-muted">
                                    Enter a hex value to view its color
                                </Form.Text>
                                <br />
                                <Button variant="primary" type="submit">Submit</Button>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Color Picker</Form.Label>
                                <Form.Control
                                    type='color'
                                    id='colorPicker'
                                    defaultValue={this.state.color}
                                    onChange={e => {
                                        setColor(e.target.value);
                                        this.setState({ color: document.body.style.background })
                                    }}
                                />
                                <Form.Text className="text-muted">
                                    Alternatively, you can use this color picker
                                </Form.Text>
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col>
                        <h2>Your current color is </h2>
                        {this.state.color + "ahhh"}

                    </Col>
                </Row>

            </Container>
        );
    }

    public async onSubmit(e: React.FormEvent): Promise<void> {
        e.preventDefault();

        // TODO: Add server component
        try {
            setColor(formatHexColor(this.state.colorInput));
            this.setState({ color: document.body.style.background, colorInput: "" })
        }
        catch (error) {
            console.error(error)
        }
    }
}