import { CardImage, Section } from "../components"

const WeAreHere4USection = function () {
    return (
        <Section>
            <CardImage alignment="left" imageSource="https://placehold.co/900x700" >
                <div className="ms-4 flex-grow-1 d-flex flex-column justify-content-center align-items-start">
                    <div className="py-4">
                        <span className="display-5 fw-bolder">Ready? We’re here for you!</span>
                    </div>
                    <p className="fs-3">
                        Whether you are purchasing for yourself, your loved one or your community, find which
                        service option works best for you.
                    </p>
                    <div className="fs-3">
                        <span>
                        <strong>I need help for:</strong>
                        </span>
                        <ul className="text-primary fw-bolder">
                        <li>Myself</li>
                        <li>My clients or community</li>
                        <li>My loved one</li>
                    </ul>
                    </div>
                    
                </div>
            </CardImage>
        </Section >
    )
}

export default WeAreHere4USection