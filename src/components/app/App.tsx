import React from 'react';

import '../../stylesheets/css/index.css';
import { AppRouter } from './AppRouter';


type AppProps = {};
type AppState = {};

export class App extends React.Component<AppProps, AppState>
{
    public constructor(props: AppProps)
    {
        super(props)
    }

    public render(): React.ReactNode
    {
        return (
            <div className="App" >
                {/* <AppNavBar /> */}
                <AppRouter />
                {/* <Footer /> */}
            </div>
        );
    }
}
