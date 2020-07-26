import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const StatisticsLine = ({name, value}) => {
    return (<p>{name} {value}</p>)
}

const Statistics = ({props}) => {

    const all = props.good + props.bad + props.neutral

    const average = props.good - props.bad;
    const averaged = average / all;
    const positive = props.good / all * 100;

    if (all === 0) return (<p>No feedback given</p>)

    return (
        <div>
            <table>
                <tbody>
                <tr>
                    <td>            <StatisticsLine name={'good'} value={props.good}/>
                    </td>
                </tr>
                </tbody>
                <tbody>
                <tr>
                    <td><StatisticsLine name={'neutral'} value={props.neutral}/></td>
                </tr>
                </tbody>
                <tbody>
                <tr>
                    <td><StatisticsLine name={'bad'} value={props.bad}/></td>
                </tr>
                </tbody>
                <tbody>
                <tr>
                    <td>            <StatisticsLine name={'all'} value={all}/>
                    </td>
                </tr>
                </tbody>
                <tbody>
                <tr>
                    <td>
                        <StatisticsLine name={'average'} value={averaged}/>
                    </td>
                </tr>
                </tbody>
                <tbody>
                <tr>
                    <td>
                        <StatisticsLine name={'positive'} value={positive}/>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}


const App = () => {
    // tallenna napit omaan tilaansa
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const prop = {
      good, neutral, bad,
    };


    return (
        <div>
            <h1>give feedback</h1>
            <button onClick={() => setGood(good + 1)}>good</button>
            <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
            <button onClick={() => setBad(bad + 1)}>bad</button>
            <h1>statistics</h1>
            <Statistics props={prop}/>

    </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)