import { Component } from 'react'
import { Section } from '../components'

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
class NewsLetterSection extends Component<Props, State> {
    /**
     *
     *
     * @type {Readonly<State>}
     * @memberof NewsLetterSection
     */
    state: Readonly<State> = {

    }

    render() {
        const { } = this.state
        const { } = this.props

        return (
            <Section>
                <div className="text-center my-5 py-5">
                    <span className="fs-4 text-dark">Get free resources and up to date information. <a href="#"
                        className="text-primary fw-bold">Join our newsletter.</a></span>
                </div>
            </Section>
        )
    }
}

export default NewsLetterSection