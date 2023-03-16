import React from 'react';
import Container from 'react-bootstrap/Container';

export default function Dashboard(): JSX.Element {
    return (
        <Container className="Dashboard">
            <InternalDashboard />
        </Container>
    );
}

type InternalDashboardProps = {};
type InternalDashboardState = {};

class InternalDashboard extends React.Component<InternalDashboardProps, InternalDashboardState>
{
    public constructor(props: InternalDashboardProps) {
        super(props)
    }

    public render(): React.ReactNode {
        return (
            <div>Hurdur</div>
        );
    }
}