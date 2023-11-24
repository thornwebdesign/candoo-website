interface ServiceInterface {
    caption: string
    title: string
    buttonText: string
    imageSource: string
}

const services: ServiceInterface[] = [
    {
        caption: "Myself",
        title: "Get the help you need right now.",
        buttonText: "Get started",
        imageSource: "https://placehold.co/700x500"
    },
    {
        caption: "My loved ones",
        title: "Give the help your loved ones need.",
        buttonText: "Get started",
        imageSource: "https://placehold.co/700x500"
    }, {
        caption: "My residents, clients and members",
        title: "Learn how Candoo partners with senior living communities, health plans, healthcare & social service & government agencies.",
        buttonText: "Get started",
        imageSource: "https://placehold.co/700x500"
    }
]

function INeedCandooSection() {

    return (
        <div className="container-fluid mb-5">
            <div className="container">
                <div className="text-center py-4">
                    <h1 className="display-4 text-primary">I need Candoo Tech for…</h1>
                </div>
                <div className="row">
                    {services.map(service => (
                        <div className="col">
                            <div className="text-center">
                                <img src={service.imageSource} className="img-fluid" />
                                <h3>{service.caption}</h3>
                            </div>
                            <div className="mt-2 p-2">
                                <div className="d-flex flex-row justify-content-start align-items-center">
                                    <span className="flex-grow-1 text-align-left pe-2">{service.title}</span>
                                    <div className="btn btn-primary text-light text-center">{service.buttonText}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default INeedCandooSection