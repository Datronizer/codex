import React from 'react';

import './App.css';
import { AppNavBar } from './AppNavBar';
import { AppRouter } from './AppRouter';
import { AppFooter } from './AppFooter';

type AppProps = {};
type AppState = {};

export class App extends React.Component<AppProps, AppState> {
    public constructor(props: AppProps) { 
        super(props)
    }

    public render(): React.ReactNode {
        return (
            <div className="App bg" >
                <AppNavBar />
                <br />
                <AppRouter />
                <AppFooter />
            </div>
        );
    }
}
