import React from 'react'
import { Button, Menu, Image } from 'semantic-ui-react'

export default function SıgnedOut({ signIn }) {
    return (
        <div>
            <Menu size="small" borderless color="black" inverted pointing secondary style={{alignItems:"center"}}>
            <Menu.Item>
                
                <Button inverted color="yellow" onClick={signIn}>Giriş Yap</Button>
                <Button inverted color="yellow" style={{ marginLeft: '0.5em' }}>Kayıt Ol</Button>
                <Button inverted color="purple" onClick={signIn} style={{ marginLeft: '0.5em' }}>İş Veren</Button>
                <Button inverted color="purple" onClick={signIn} style={{ marginLeft: '0.5em' }}>İlan Yayınla</Button>
            </Menu.Item>
            </Menu>
        </div>
    )
}
