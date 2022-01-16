
import React from 'react'

const Tweet = (props) => {


    return (
        <div>
            <h1>Tweets by :{props.name}</h1>
            <p>Tweet : {props.tweet}</p>

        </div>
    )
}

export default Tweet;