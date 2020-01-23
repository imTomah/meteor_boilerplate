import React, { useState}from 'react'
import {Form, Button, Container} from 'semantic-ui-react'
import { Accounts } from 'meteor/accounts-base'

function Signup(props){
    const [email, setEmail]  = useState()
    const [password, setPassword]  = useState()
    
    const signup = () => {
        Accounts.createUser({email,password}, (err) => {
            if(err){
                alert(err.message)
            }else {
                console.log("Utilisateur crée !!")
            }
        })
    }
    return(
        <Container>
            <h1>Inscrivez-vous</h1>
            <Form onSubmit={signup}>
                <Form.Input value={email} onChange={ (e, {value}) => setEmail(value)} label="Email" required type="email" placeholder="Exemple@gmal.fr" />
                <Form.Input value={password} onChange={ (e, {value}) => setPassword(value)} label="Mot de passe" required type="password" />
                <Button disabled={!email || !password} color="green">M'inscrire</Button>
            </Form>
        </Container>
        
    )
}
export default Signup