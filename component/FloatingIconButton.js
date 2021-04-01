import React, {Component} from 'react';
import {
    View,
    Button,
    Icon,
    Fab
} from 'native-base';
class FloatingIconButton extends Component {
    constructor() {
        super();
        this.state = {
            active: true
        };
    }
    render() {
        return (
                <Fab active={
                        this.state.active
                    }
                    direction="up"
                    style={
                        {
                            backgroundColor: '#5067FF',
                        }
                    }
                    position="bottomRight"
                    onPress={
                        () => this.setState({
                            active: !this.state.active
                        })
                }>
                    <Icon name="share"/>
                    <Button style={
                        {backgroundColor: '#34A34F'}
                    }>
                        <Icon name="logo-whatsapp"/>
                    </Button>

                    <Button style={
                        {backgroundColor: '#3B5998'}
                    }>
                        <Icon name="logo-facebook"/>
                    </Button>

                    <Button style={
                        {backgroundColor: '#DD5144'}
                    }>
                        <Icon name="mail"/>
                    </Button>

                </Fab>
        );
    }
}
export default FloatingIconButton;
