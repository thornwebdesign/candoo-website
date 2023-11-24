import { CardImage, Section } from "../components"

const WeMakeTechnologySection = function () {
    return (
        <Section>
            <CardImage alignment="right" imageSource="https://placehold.co/600x600">
                <div className="ms-4 flex-grow-1 d-flex flex-column justify-content-center align-items-start">
                    <div className="py-4">
                        <span className="display-3 fw-bold text-dark">We make technology easy.</span>
                    </div>
                    <div className="px-2">
                        <p className="fs-4">
                            Candoo Tech provides tech support and training to help older adults feel more comfortable
                            with phones, computers, tablets, and more. We work with enterprises including senior living
                            communities, health plans and healthcare providers, social service agencies and directly
                            with consumers. Our services are remote and nationwide.
                        </p>
                        <h3 className="text-dark">Get started:</h3>
                        <p className="fs-4 text-primary fw-bold">
                            Consumers | Enterprises
                        </p>
                    </div>
                </div>

            </CardImage>
        </Section>
    )
}

export default WeMakeTechnologySection