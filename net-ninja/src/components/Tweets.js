import React from 'react'
import Tweet from './Tweet';

const Tweets = (props) => {
    const tweets = [
        { name: 'Ashiqur', tweet: 'React is Aghh, I need sleep' },
        { name: 'Faisal', tweet: 'Wahts aup Guys, I am on the way' },
        { name: 'Tusar', tweet: 'I got job and moving on Frankfurt' },
    ]

    return (
        <section>
            {tweets.map((tweet, index) => {
                return (
                    <div key={index}>
                        <Tweet name={tweet.name} tweet={tweet.tweet} />
                    </div>
                )
            })}
        </section>
    )
};

export default Tweets;

