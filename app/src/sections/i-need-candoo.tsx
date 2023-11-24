
function INeedCandooSection() {

    return (
        <div className="container-fluid mb-5">
            <div className="container">
                <div className="text-center py-4">
                    <h1 className="display-4 text-primary">I need Candoo Tech for…</h1>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="text-center">
                            <img src="/images/card-image1.jpg" className="img-fluid" />
                            <h3>Myself</h3>
                        </div>
                        <div className="mt-2 p-2">
                            <div className="d-flex flex-row justify-content-start align-items-center">
                                <span className="flex-grow-1 text-align-left pe-2">Get the help you need right now.</span>
                                <div className="btn btn-primary text-light text-center">Get Started</div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="text-center">
                            <img src="/images/card-image2.jpg" className="img-fluid" />
                            <h3>My loved ones</h3>
                        </div>
                        <div className="">
                            <div className="d-flex flex-row justify-content-center align-items-start">
                                <span className="flex-grow-1 text-align-left">Give the help your loved ones need.</span>
                                <div className="btn btn-primary text-light text-center">Get Started</div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="">
                            <img src="/images/card-image3.jpg" className="img-fluid" />
                            <h3>My residents, clients & members</h3>
                        </div>
                        <div className="">
                            <div className="d-flex flex-row justify-content-center align-items-start">
                                <span className="flex-grow-1 text-align-left pe-2">Learn how Candoo partners with senior living
                                    communities, health plans, healthcare & social service & government agencies.</span>
                                <div className="btn btn-primary text-light">Get Started</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default INeedCandooSection