import React from 'react'

const whithClass = ( Component, className) => {
    return props => {
        return (
            <div className={className}>
                <Component {...props} />
            </div>
        )
    }
}

export default whithClass