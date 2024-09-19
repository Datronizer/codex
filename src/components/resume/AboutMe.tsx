import { Container } from "react-bootstrap";

export function AboutMe()
{
    return (
        <Container>
            <h1>Who am I?</h1>
            <p>
                Hello, world! My name is Sienna Truong. I am a second year student at Sheridan College,
                enrolled in the Software Development & Network Engineering program.
            </p>
            <p>
                Prior to Sheridan, I double majored in Creative Writing and Pure Mathematics at
                the University of South Florida. During my time at USF, I have earned several accolades,
                including, but not limited to:
                <ul>
                    <li>Being on the Dean's List for 3 years</li>
                    <li>Joining the Pi Mu Epsilon Math Honor's Society</li>
                    <li>Receiving the Honor's College Medallion</li>
                    <li>Presenting my thesis at John Hopkins University's Humanities Conference</li>
                    <li>Published 3 short stories</li>
                    and more...
                </ul>
            </p>

            <h1>What I do?</h1> 
            <p>
                At the time of writing this, I am a junior software developer at NextRenaissance entertainment,
                a sister company of uYeti Entertainment. My daily work includes full stack development using
                TypeScript, ReactJS, SCSS for the front end; NestJS and Docker for the back end; and some front end game 
                development on Unity using C# & on Phaser 2 using Typescript.
            </p>
        </Container>
    )
}