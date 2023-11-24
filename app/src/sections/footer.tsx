

function FooterSection() {

    return (
        <div className="container-fluid footer">
            <div className="container">
                <div className="row">
                    <div className="col-7">
                        <div className="row">
                            <div className="col">
                                <h3>Candoo Tech</h3>
                                <ul className="text-primary">
                                    <li className="nav-item">
                                        <a href="#" className="nav-link text-primary">Consumers</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link text-primary">Enterprises</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link text-primary">In the News</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link text-primary">Blog</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link text-primary">Resources</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link text-primary">Media Resources</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col">
                                <h3>Team</h3>
                                <ul className="text-primary">
                                    <li className="nav-item">
                                        <a href="#" className="nav-link text-primary">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link text-primary">Careers</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link text-primary">Partners</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col">
                                <h3>Support</h3>
                                <ul className="text-primary">
                                    <li className="nav-item">
                                        <a href="#" className="nav-link text-primary">Members Support</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link text-primary">FAQ</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link text-primary">Safety & Security</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link text-primary">Privacy Policy</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link text-primary">Terms of Use</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link text-primary">support@candootech.com</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link text-primary">(646)758-6606</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className="bg-light p-5">
                            <div className="text-center">
                                <h2>Subscribe to our Newsletter</h2>
                                <p>Join our newsletter to get the latest news and tips.</p>
                                <div className="d-flex flex-row justify-content-center align-center">
                                    <input type="email" style={{
                                        maxWidth: '220px'
                                    }} className="form-control me-2" placeholder="Email addresss" />
                                    <div className="btn btn-secondary text-light px-4 py-2">Submit</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterSection