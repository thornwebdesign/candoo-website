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

const Image:React.FC<{imageSource: string}> = function ({imageSource}) {
    return (
        <div className="col-auto d-flex flex-column justify-content-center align-items-center">
            <img src={imageSource} className="img-fluid" />
        </div>
    )
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
            <div className="row mb-5 py-4">
                {alignment === 'left' ? <Image imageSource={imageSource}/> : null}
                <div className="col d-flex">
                    <div className="d-flex flex-column justify-content-start align-items-start">
                        {children}
                    </div>
                </div>
                {alignment === 'right' ? <Image imageSource={imageSource}/> : null}
            </div>
        )
    }
}

export { _Component as CardImage }