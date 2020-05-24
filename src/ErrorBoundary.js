import React, { Component } from 'react'
// eslint-disable-next-line 
import { Link, Redirect } from '@reach/router'

class ErrorBoundary  extends Component {
    state = { hasError: false, redirect: false };

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        //Here to add my logging system like logStash or Azure Monitor etc
        console.error("ErrorBoundary caught an error", error, info);
    }

    componentDidUpdate(){
        if(this.state.hasError){
            setTimeout(()=> this.setState({redirect : true}),5000);
        }
    }
    // it will run every timw when props || statr got update 
    componentWillUpdate(){
        if(this.state.hasError){
            setTimeout(()=> this.setState({ redirect:true }),5000)
        }
    }

    render(){
        if (this.state.redirect) {
            return <Redirect to="/" noThrow />;
          }
      
        if(this.state.hasError){
            return  (
                <h1>
                     There was an error with this listing.
                     {" "}
                     <Link to = '/'> Click here .</Link> to Go back to Home Page. 
                </h1>
            )
        }
        return this.props.children;
    }

}

export default ErrorBoundary;