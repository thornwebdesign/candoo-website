import { CardImage } from "../components"

function LearnSomethingNewSection() {

    return (
        <div className="container-fluid my-4">
            <div className="container py-4">
                <div className="text-center d-flex flex-column justify-content-center align-items-center my-4 py-4">
                    <span className="display-3 text-primary fw-800 mb-4">Learn Something New</span>
                    <span className="fs-4 fw-bold">Let our personal tech concierges teach you how to use technology to make your life
                        easier and more fun!</span>
                </div>

                <CardImage alignment="left" imageSource="https://placehold.co/900x600" >
                    <div className="d-flex flex-column justify-content-start align-items-start">
                        <p>
                            Our 1-on-1 or small group lessons give you simple, easy to understand instructions and leave you with
                            printed out step-by-step instructions.
                        </p>
                        <p>
                            During COVID-19, all lessons are conducted by our remote software and Zoom. You can participate using your
                            mobile device or computer.
                        </p>
                        <p>
                            Below is a list of what we offer currently, if there’s something you want to learn that’s not here, <a
                                href="#" className="text-primary fw-bold">contact us</a> now.
                        </p>
                        <div className="">
                            <span>
                                <a href="#" className="text-primary fw-bold fs-4">Online Session</a>
                            </span>
                            <div className="">
                                <span>$75.00</span>
                                <span><s>$90.00</s></span>
                            </div>
                            <div className="btn btn-primary mt-5">
                                <a href="#" className="text-light px-3 py-2">Purchase</a>
                            </div>
                        </div>
                    </div>
                </CardImage>
         </div>
        </div>
    )
}

export default LearnSomethingNewSection