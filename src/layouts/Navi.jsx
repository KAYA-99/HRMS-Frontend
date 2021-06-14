import React from 'react'
import { Container, Menu } from 'semantic-ui-react'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'
export default function Navi() {
    return (
        <Menu inverted boarderless color="black" fixed="top">
            <Container>
                <Menu.Item inverted name='HRMS'/>
                <Menu.Item name='messages' />
                <Menu.Menu position='right'>
                    <SignedOut/>
                    <SignedIn/>
                </Menu.Menu>
            </Container>
        </Menu>
    )
}
