
function WhatWeDoSection() {

    return (
        <div className="container-fluid mb-5">
            <div className="container">
                <div className="text-center mb-4">
                    <h1 className="text-primary display-3">What We Do</h1>
                </div>

                <div className="row text-center mt-2 mb-5">
                    <div className="col">
                        <div className="card border-0">
                            <img src="/images/service1.png" className="img-fluid" />
                            <span className="card-text fs-4 fw-bold">Remote Lessons &
                                Support</span>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card border-0">
                            <img src="/images/service2.png" className="img-fluid" />
                            <span className="card-text fs-4 fw-bold">Library of On-Demand How To Guides & Videos</span>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card border-0">
                            <img src="/images/service3.png" className="img-fluid" />
                            <span className="card-text fs-4 fw-bold">Group Lessons</span>
                        </div>
                    </div>
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