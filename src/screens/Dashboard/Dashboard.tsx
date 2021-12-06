import React from 'react';
import { Text } from 'react-native';

import {
    Container,
    Header,
    Photo,
    User,
    UserInfo,
    UserGreeting,
    UserName,
} from './styles';

export function Dashboard() {
    return (
        <Container>
            <Header>

                <UserInfo>
                    <Photo source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/f/fd/Tom_and_Jerry.png' }} />
                    <User>
                        <UserGreeting>Olá, </UserGreeting>
                        <UserName>Daniel, </UserName>
                    </User>
                </UserInfo>

            </Header>
        </Container>
    );
}