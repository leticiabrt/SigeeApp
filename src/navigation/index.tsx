import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MenuDrawer } from './MenuDrawer.navigation';
import { LoginStack } from './LoginStack';
import { Loading } from '../components/Loading';
import { useAuth } from '../hook/auth';

export function Navigation() {
    const {user, loading} = useAuth()
    if (loading) {
        return <Loading/>
    }
    return (
        <NavigationContainer>
           {user?.data?.token? <MenuDrawer/> : <LoginStack/>}
        </NavigationContainer>
    );
    }