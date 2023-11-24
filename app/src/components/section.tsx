import { FC, PropsWithChildren } from 'react'

const Section: FC<PropsWithChildren> = function({children}) {
    return (
        <div className="container-fluid">
            <div className="container">{children}</div>
        </div>
    )
}

export { Section }