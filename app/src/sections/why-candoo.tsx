import { CardImage, Section } from "../components"

const WhyCandoo = function () {
    return (
        <Section>
            <CardImage alignment="right" imageSource="https://placehold.co/900x700" >
                <div className="py-4">
                    <span className="display-3 fw-light text-primary">Why Candoo Tech?</span>
                </div>
                <div className="px-3">
                    <p className="fs-4">
                        As one of the nation’s leading providers of tech support and training designed specifically
                        for
                        older adults, you can trust our services are secure, affordable, and tailored to your needs.
                    </p>
                    <p className="fs-4">
                        <strong>Safety First</strong>: Our services are 100% remote. Also, we never access devices without your
                        permission and all our Tech Concierges are background-checked and U.S. based.
                    </p>
                </div>
            </CardImage>
        </Section>
    )
}

export default WhyCandoo