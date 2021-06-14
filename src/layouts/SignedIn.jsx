import React from 'react'
import { Dropdown, Image, Menu } from 'semantic-ui-react'
export default function SignedIn() {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://lh3.googleusercontent.com/kADHhfvcnxXizi7mFPBujLeEIfDSuwAEONjqZDKwJ7H1pZMN_ctrDt7n8Qm__ByH1bRkcigmwqqQRKNP_y8-_zHco7xHdcJ7ExfiqFdH6ztjoDdtt7xdufps26PiFSSOnyI6g2Gjhz1iG0K3WC-TSw-OkW9LieY9ca0-zMD6rHKHGOONhfCe2VQCOUosNKGAdwr8MsIb_QNRw4kb8Brz55X3EC50JPsPT5Hc8rBLhK31h2TOmnoEk-s8xJcn8fP0i_wDoEIylfaF9I8tf_b7muPfJMzp0ZHwkzta308eQUzeyrLX0Ai2ZC8Ub5TLQNjiVwsIpaCAzHPO5ZaejDN-_tBhjMen665CRQ-YlflAlo90AI8sI8s9GrlXqsoIsAkrKjuKSm7TK7KbJClDs_r04a16tG64DuFFI6PE6WPCB_CmW4hZW2t3YKx30rc0qwblfNPyZfKOhzxGH7zXfwrFPrdiE2Htkhnf1yPXB3p37-mmceDBx8KnXuXBaGflJ8HtrxVBkAlT0JIQ8DHqm03kOFKhI9Ed3KDtceFyC4xwP1FyMlPpOtLO3y7-YMyZ7woQXWTMUhk5wNukRFbLRPzRxwK1gMEFoGHxfGuU8L46seIjbz3eK0JwgMulZmQiysaQjQN0X8vBk6cnQ7gjYsBSpa-e2A2OwryPzVFDeLmEq_I-HG1N9fxH4pwb7ktZ8pmfRwlxX_qaOF11CcoV9XTepvE=s398-no?authuser=0" />
                <Dropdown pointing="top left" text="Abdulhakim">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info" />
                        <Dropdown.Item  text="Çıkış Yap" icon="sign-out" />
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
