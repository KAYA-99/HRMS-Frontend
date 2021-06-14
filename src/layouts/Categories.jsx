import React from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'

const options = [
    { key: 1, text: 'Choice 1', value: 1 },
    { key: 2, text: 'Choice 2', value: 2 },
    { key: 3, text: 'Choice 3', value: 3 },
]




export default function Categories() {
    return (
        <div>
            <Menu pointing vertical inverted >
                <Menu.Item
                    name='home'

                />
                <Menu.Item
                    name='messages'

                />
                <Menu.Item
                    name='friends'

                />

                <Menu.Item compact>
                    <Dropdown inverted text='Şehirler' options={options} simple item />
                </Menu.Item>
                
            </Menu>

        </div>
    )
}
