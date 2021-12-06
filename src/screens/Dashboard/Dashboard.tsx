import React from 'react';

import {
    Container,
    Header,
    Photo,
    User,
    UserInfo,
    UserGreeting,
    UserName,
    UserWrapper
} from './styles';

export function Dashboard() {
    return (
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/f/fd/Tom_and_Jerry.png' }} />
                        <User>
                            <UserGreeting>Olá, </UserGreeting>
                            <UserName>Daniel, </UserName>
                        </User>
                    </UserInfo>
                </UserWrapper>
            </Header>
        </Container>
    );
}