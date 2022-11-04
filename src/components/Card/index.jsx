import React from 'react';

import { FiThumbsUp } from 'react-icons/fi';

import {
    CardContainer,
    Content,
    HasInfo,
    ImageBackground,
    PostInfo,
    UserInfo,
    UserPicture 
} from './styles';

const Card = () => {
    return (
        <CardContainer>
            <ImageBackground src="https://imagens.itforum.com.br/itforum.com.br/wp-content/uploads/2019/10/internet-completa-50-anos-1.jpg" />
            <Content>
                <UserInfo>
                    <UserPicture src="https://avatars.githubusercontent.com/u/54272286?s=96&v=4"/>
                    <div>
                        <h4>Fabiana Fonseca</h4>
                        <p>Há 8 minutos</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>Projeto para curso de Html e css</h4>
                    <p>Projeto feito o curso de html e css no bootcamp dio do Global avanade ...<strong>Saiba mais</strong></p>
                </PostInfo>
                <HasInfo>
                    <h4>#HTML #CSS #Javascript</h4>                   
                    <p>
                        <FiThumbsUp /> 10
                    </p>
                </HasInfo>
            </Content>
        </CardContainer>
    )
}

export { Card };