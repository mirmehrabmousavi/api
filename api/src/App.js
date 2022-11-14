import React, {Component} from 'react';
import axios from "axios";

class App extends Component {
    state = {
        data: []
    }
    componentDidMount() {
        axios.get('/posts')
            .then((response) => {
                const allData = response.data
                this.setState({data: allData})
                //console.log(this.state.data)
            })
            .catch((error) => {
                console.log('error',error)
            })
    }

    render() {
        return (
            <div>
                <p>Hi, I'm King {this.state.data.length}</p>
                {this.state.data.map(da => <li key={da.id}>{da.title} --> {da.body}</li>)}
                <li>{this.state.data.title}hi im alive</li>
            </div>
        );
    }
}

export default App;
