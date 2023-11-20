import { Carousel, Container } from "react-bootstrap"
import "../css/Home.css"

export function Home() {
    return (
        <>
            <Container className="justify-content-center">
                <Carousel fade className="justify-content-center">
                    <Carousel.Item className="justify-content-center">
                        {/* <ExampleCarouselImage text="First slide" /> */}
                        <img alt="First Slide" src="https://cdnb.artstation.com/p/assets/images/images/049/410/861/large/chien-truong-quoc-final.jpg?1652426905" className="justify-content-center"/>
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        {/* <ExampleCarouselImage text="Second slide" /> */}
                        <img alt="Second Slide" src="https://cdnb.artstation.com/p/assets/images/images/049/410/861/large/chien-truong-quoc-final.jpg?1652426905" />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        {/* <ExampleCarouselImage text="Third slide" /> */}
                        <img alt="Third Slide" src="https://cdnb.artstation.com/p/assets/images/images/049/410/861/large/chien-truong-quoc-final.jpg?1652426905" />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
            <section className="center">
                Coming Soon
            </section>
        </>
    )
}