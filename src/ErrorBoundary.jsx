import React, {Component} from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null
        };
    }
    static getDerivedStateFromError(error) {
        return {error};
    }
    render() {
        const {error} = this.state;
        if(error) {
            return <><h1>Something went wrong</h1><pre>{error.message}</pre></>
        }
        return this.props.children;
    }
    componentDidMount() {
        console.log('mounted');
    }
}

export default ErrorBoundary;