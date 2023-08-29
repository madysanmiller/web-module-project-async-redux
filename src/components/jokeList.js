import React from "react";
import { connect } from "react-redux";
import Joke from "./Joke";
const jokeList = props => {
    const { jokes } = props;

    return (<div id='jokeList'>
        {
        jokes.map(joke => {
            return (<Joke joke={joke}/>)
        })
        }
    </div>);
}
const mapStateToProps = (state) => {
    return {
        jokes: state.jokes
    }
}
export default connect(mapStateToProps)(jokeList);