import React from 'react'
import {Form, Button, Container} from 'semantic-ui-react'

function Signup(props){
    return(
        <Container>
            <h1>Inscrivez-vous</h1>
            <Form>
                <Form.Input label="Email" required type="email" placeholder="Exemple@gmal.fr" />
                <Form.Input label="Mot de passe" required type="password" />
                <Button color="green">M'inscrire</Button>
            </Form>
        </Container>
        
    )
}
export default Signup