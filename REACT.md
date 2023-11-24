# React Components

### Default Component

```javascript
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
class Section extends Component<Props, State> {
    /**
     *
     *
     * @type {Readonly<State>}
     * @memberof Section
     */
    state: Readonly<State> = {

    }

    render() {
        const {} = this.state
        const {} = this.props
        
        return (
            <>
                <h1>Hello world</h1>
            </>
        )
    }
}

export default {Section as Name}
```

## Section Container

```javascript
import { FC, PropsWithChildren } from 'react'

const Section: FC<PropsWithChildren> = function({children}) {
    return (
        <div className="container-fluid">
            <div className="container">{children}</div>
        </div>
    )
}

export { Section }
```
