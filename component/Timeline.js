import React, {Component} from 'react';
import {Container,Content} from 'native-base';

import Head from './Head';
import Posting from './Posting';
import FloatingIconButton from './FloatingIconButton';
import Navbar from './Navbar';

class Timeline extends Component {
    render() {
        return (
            <Container>
                <Head />
                <Content>
                    <Posting />
                    <Posting />
                    <Posting />
                    <Posting />
                </Content>
                <FloatingIconButton />
                <Navbar />
            </Container>
        );
    }
}
export default Timeline;
