import { Component, PropsWithChildren } from 'react'

/**
 * 
 */
interface Props {
    imageSource: string
    alignment: CardImageAligment
}

/**
 * 
 */
interface State {
 
}

/**
 * 
 */
class _Component extends Component<PropsWithChildren<Props>, State> {
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
        const { children, imageSource, alignment } = this.props

        return (
            <div className="row mb-5 p-4">
                {alignment === 'left' ? (
                    <div className="col">
                    <img src={imageSource} className="img-fluid" />
                </div>
                ) : null}
                <div className="col d-flex">
                    <div className="d-flex flex-column justify-content-start align-items-start">
                        {children}
                    </div>
                </div>
                {alignment === 'right' ? (
                    <div className="col">
                    <img src={imageSource} className="img-fluid" />
                </div>
                ) : null}

            </div>
        )
    }
}

export { _Component as CardImage }