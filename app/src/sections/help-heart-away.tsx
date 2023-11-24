import { CardImage, Section } from "../components"

const HelpHeartBeatAwaySection = function () {
    return (
        <Section>
            <CardImage alignment="right" imageSource="https://placehold.co/800x700" >
                <div className="flex-grow-1 text-left d-flex flex-column justify-content-center align-items-start">
                    <div className="py-4">
                        <span className="display-5 fw-bolder">Help is a heartbeat away.</span>
                    </div>
                    <p className="fs-3">
                        It’s just like calling up a close friend. Our experienced Tech Concierges are ready to help
                        you set up your technology and get comfortable with it—no question is too big or small.
                    </p>
                </div>

            </CardImage>
        </Section>
    )
}

export default HelpHeartBeatAwaySection