import React from 'react';
import logo from '../../assets/logo-dio.png';
import { Button } from '../Button';

import { 
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper
} from './styles';

const Header = ({autenticado}) => {
    return (
        <Wrapper>
            <Container>
                <Row>
                    {autenticado ? (
                        <>
                            <img src={logo} alt="Logo da dio"/>
                            <BuscarInputContainer>
                                <Input placeholder='Buscar...' />
                            </BuscarInputContainer>
                            <Menu>Live Code</Menu>
                            <Menu>Global</Menu>                     
                        </>
                    ) : null}
                </Row>
                <Row>
                    {autenticado ? (
                        <UserPicture src="https://avatars.githubusercontent.com/u/54272286?s=96&v=4"/>
                    ) : (
                        <>
                            <MenuRight href='#'>Home</MenuRight>
                            <Button title="Entrar"/>
                            <Button title="Cadastrar" />
                        
                        </>
                    )}
                </Row>
            </Container>
        </Wrapper>
    )

}

export { Header}
