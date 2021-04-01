import React, {Component} from 'react';
import {
    Header,
    Button,
    Icon,
    Left,
    Right,
    Body,
    Title
} from 'native-base';
class Head extends Component {
    render() {
        return (
            <Header>
                <Left>
                    <Button transparent><Icon name='menu'/></Button>
                </Left>
                <Body>
                    <Title>Aplikasiku</Title>
                </Body>
                <Right>
                    <Button transparent><Icon name='home'/></Button>
                </Right>
            </Header>
        );
    }
}
export default Head;
