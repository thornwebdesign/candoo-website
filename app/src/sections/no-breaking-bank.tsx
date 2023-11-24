import { CardImageLeft } from "../components/card-image-left"
import { Section } from "../components/section"

const NoBreakingBankSection = function () {
    return (
        <Section>
            <CardImageLeft imageSource="https://placehold.co/800x400" >
                <h1>No breaking the bank.</h1>
                <p>
                    Our membership offers unlimited phone and remote support. Whether you are purchasing for
                    your residents or clients, yourself or your loved ones, we have a plan for you!
                </p>
            </CardImageLeft>
        </Section>
    )
}

export default NoBreakingBankSection