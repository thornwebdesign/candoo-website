import { Component } from 'react'
import { Section } from '../components/section'

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
class _Section extends Component<Props, State> {
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
            <Section>
                <div className="d-flex flex-row justify-content-center align-items-center fs-1">
                    <span className="fs-4 me-5">©2021 Candoo Tech. All Rights Reserved.</span>
                    <ul className="d-flex flex-row justify-content-around align-items-center">
                        <li>
                            <a href="#" className="px-2">
                                <i className="bi bi-instagram instagram-color"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="px-2">
                                <i className="bi bi-twitter-x twitter-color"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="px-2">
                                <i className="bi bi-linkedin linkedin-color"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="px-2">
                                <i className="bi bi-facebook facebook-color"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </Section>
        )
    }
}

export { _Section as CopyrightSection }