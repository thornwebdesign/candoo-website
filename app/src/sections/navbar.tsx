import { Component } from 'react'

/**
 * 
 */
interface Props {

}

/**
 * 
 */
interface State {

}

/**
 * 
 */
class _Component extends Component<Props, State> {
    /**
     *
     *
     * @type {Readonly<State>}
     * @memberof Section
     */
    state: Readonly<State> = {

    }

    render() {
        const { } = this.state
        const { } = this.props

        return (
            <div className="container-fluid navbar-container centered">
                <div className="container px-4 d-flex flex-row align-items-center justify-content-start">
                    <div className="brand">
                        <img src="/images/logo.png" className="img-fluid" />
                    </div>
                    <div className="navbar mx-3" style={{
                        flex: 1
                    }}>
                        <ul className="d-flex flex-row justify-content-start align-items-center">
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">Consumers</a>
                            </li>
                            <li>
                                <a href="#">Enterprises</a>
                            </li>
                            <li>
                                <a href="#">Resources</a>
                            </li>
                            <li>
                                <a href="#">Order Now</a>
                            </li>
                            <li>
                                <a href="#">Sign In</a>
                            </li>
                        </ul>
                    </div>
                    <div className="action-buttons">
                        <div className="row">
                            <div className="btn btn-primary text-light">Members Support</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export { _Component as NavBar }