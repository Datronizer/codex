import React from 'react';

import './App.css';
import { AppNavBar } from './AppNavBar';
import { AppRouter } from './AppRouter';
import { Footer } from './Footer';

type AppProps = {};
type AppState = {};

export class App extends React.Component<AppProps, AppState> {
    public constructor(props: AppProps) {
        super(props)
    }

    public render(): React.ReactNode {
        return (
            <div className="App" >
                <AppNavBar />
                <AppRouter />
                <Footer />
            </div>
        );
    }
}
