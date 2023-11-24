import { Component, ReactNode } from 'react'
import HelpHeartBeatAwaySection from './help-heart-away'
import NoBreakingBankSection from './no-breaking-bank'
import WeAreHere4USection from './we-are-here-4-u'
import WeMakeTechnologySection from './we-make-technology'
import WhyCandoo from './why-candoo'

/**
 * 
 */
interface Props {
    type: SectionType
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
     * @memberof NewsLetterSection
     */
    state: Readonly<State> = {

    }

    render() {
        const { } = this.state
        const { type } = this.props
        let component: ReactNode = <></>
        switch (type) {
            case 'help-heart-away':
                component = (<HelpHeartBeatAwaySection />)
                break
            case 'no-breaking-bank':
                component = (<NoBreakingBankSection />)
                break;
            case 'we-are-here-4-u':
                component = (<WeAreHere4USection />)
                break;
            case 'we-make-technology':
                component = (<WeMakeTechnologySection />)
                break;
            case 'why-candoo':
                component = (<WhyCandoo />)
                break;
        }
        return component
    }
}

export {_Component as HeroSection}