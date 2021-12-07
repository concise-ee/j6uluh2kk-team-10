import React from 'react'

export const Christmas = ({christmas}) => {
    return(
        <div className="container">
            <h2>Is it T2 yet? {christmas.isItChristmasYet ? 'Yep' : 'Nope'}</h2>
        </div>
    )
}
