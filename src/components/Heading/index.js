import React, { Component } from 'react';
import Container from "react-grid-system/src/grid/Container";

export default class Heading extends Component {
    render() {
        return (
            <section>
                <Container>
                    <h1>{ this.props.title }</h1>
                </Container>
            </section>
        )
    }
}
