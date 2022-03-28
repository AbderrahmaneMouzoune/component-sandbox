import React from 'react'

interface IWrapperComponent {
    component: any
    title: string
}

function WrapperComponent({ component, title }: IWrapperComponent) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '.5em' }}>
            <div className="badge">{title.toUpperCase()}</div>
            <div>{component()}</div>
        </div>
    )
}

export default WrapperComponent
