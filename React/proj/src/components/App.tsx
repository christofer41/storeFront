import * as React from "react";
import Layout from "./Layout";

console.log('API_KEY', process.env.REACT_APP_WEATHER_API_KEY)





export default class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Layout/>
            </React.Fragment>
        )
    }
}