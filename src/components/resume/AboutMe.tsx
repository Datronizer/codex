import { Container } from "react-bootstrap";
import "./AboutMe.scss";

export function AboutMe()
{
    return (
        <Container className="about-shell simple">
            <header className="about-header simple-header">
                <div className="portrait-wrap">
                    <img src="/assets/26_Sienna.png" alt="Portrait of Sienna Truong" />
                </div>
                <div>
                    <p className="eyebrow">About</p>
                    <h1>Hi, I’m Sienna Truong.</h1>
                    <p>
                        I’m a full-stack developer and product tinkerer studying Software Development &amp; Network Engineering at Sheridan College.
                        I like pairing a creative-writing and math background with TypeScript, React/SCSS, and NestJS to build interfaces that feel clear and approachable.
                    </p>
                </div>
            </header>

            <section>
                <p>
                    These days I split my time between course work and shipping small tools. Professionally, I’ve been a Junior Software
                    Developer at uYeti/NextRenaissance, where I built full-stack features, live-service tooling, and Unity/Phaser front ends for game-adjacent products.
                    Before that, I served as Assistant Director of Technology for USF’s Student Government, refreshing labs, rolling out training roadmaps,
                    and launching a touch-free check-in system. I also taught as a Calculus Peer Leader and Tech Lead in the USF Math Department,
                    standing up Discord-based online learning and automating grade uploads.
                </p>
                <p>
                    Academically, I’m focused on cloud, systems, and usable interfaces. Earlier, at the University of South Florida,
                    I earned a BA in Creative Writing with a Mathematics minor, landing on the Dean’s List, joining Pi Mu Epsilon,
                    and receiving the Honors College Medallion. That blend of storytelling and rigor still shapes how I explain
                    complex ideas in the products I build.
                </p>
                <p>
                    On the side, I’m exploring ML/AI-assisted products and playful simulations: CareerLift AI (a resume analyzer + matcher),
                    YarkNet (a Yarkovsky-effect space simulator), and Project OLIVIA (homelab automation experiments).
                    If you want to chat about building thoughtful tools, feel free to reach out at <a href="mailto:truonchi@sheridancollege.ca">truonchi@sheridancollege.ca</a>.
                </p>
                <br />
                <p>
                    You're also probably wondering why I named the site TrueOnGod. The name came from a harmless joke by one of my best friends.
                    As he recalled:
                    <blockquote className="blockquote">
                        "I was just lying in bed one night, and thought about your last name, Truong.
                        I thought, huh, if I broke it down, it would be Tru, On, G. True on God."
                    </blockquote>

                    And my
                    new nickname was born, in the middle of a group call during a League match.
                </p>
            </section>
        </Container>
    );
}
