import { CardImage, Section } from "../components"

const NoBreakingBankSection = function () {
    return (
        <Section>
            <CardImage alignment="left" imageSource="https://placehold.co/900x700" >
                <div className="ms-5 flex-grow-1 text-left d-flex flex-column justify-content-center align-items-start">

                    <div className="py-4">
                        <span className="display-5 fw-bolder">No breaking the bank.</span>
                    </div>
                    <p className="fs-3">
                        Our membership offers unlimited phone and remote support. Whether you are purchasing for
                        your residents or clients, yourself or your loved ones, we have a plan for you!
                    </p>
                </div>

            </CardImage>
        </Section>
    )
}

export default NoBreakingBankSection