interface ServiceInterface {
    imageSource: string
    title: string
    link?: string
}

const services: ServiceInterface[] = [
    {
        imageSource: "https://placehold.co/800x450",
        title: "Remote Lessons & Support",
        link: undefined
    },
    {
        imageSource: "https://placehold.co/800x450",
        title: "Library of On-Demand How To Guides & Videos",
        link: undefined
    },
    {
        imageSource: "https://placehold.co/800x450",
        title: "Group Lessons",
        link: undefined
    }
]


function WhatWeDoSection() {

    return (
        <div className="container-fluid mb-5">
            <div className="container">
                <div className="text-center mb-4">
                    <h1 className="text-primary display-3">What We Do</h1>
                </div>

                <div className="row text-center mt-2 mb-5">
                    {services.map(service => (
                        <div className="col">
                            <div className="card border-0">
                                <img src={service.imageSource} className="img-fluid" />
                                <span className="card-text fs-4 fw-bold">{service.title}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="d-flex flex-row justify-content-center align-items-center mt-5">
                    <div className="btn btn-primary text-light px-4 py-3 me-3">Consumers learn more</div>
                    <div className="btn btn-primary text-light px-4 py-3">Enterprises learn more</div>
                </div>
            </div>
        </div>
    )
}

export default WhatWeDoSection