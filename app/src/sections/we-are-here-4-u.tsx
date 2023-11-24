import { CardImage, Section } from "../components"

const WeAreHere4USection = function () {
    return (
        <Section>
            <CardImage alignment="left" imageSource="https://placehold.co/800x400" >
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <h1>Ready? We’re here for you!</h1>
                    <p>
                        Whether you are purchasing for yourself, your loved one or your community, find which
                        service option works best for you.

                        <strong>I need help for:</strong>
                    </p>
                    <ul>
                        <li>Myself</li>
                        <li>My clients or community</li>
                        <li>My loved one</li>
                    </ul>
                </div>
                <div className="action-buttons">
                    <div className="row">
                        <div className="btn btn-primary text-light">Members Support</div>
                    </div>
                </div>
            </CardImage>
        </Section >
    )
}

export default WeAreHere4USection