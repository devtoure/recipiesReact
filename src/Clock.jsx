import  React , { useState ,Component } from  'react' ;

export default class Clock extends  Component {


    constructor(props) {
        super(props);
        this.state = { clock: new Date()};
        this.timer = null ;
    }

    componentDidMount() {
        this.timer = window.setInterval(() => {
           this.setState({ clock: new Date()})
        });
    }

    componentWillUnmount() {
        window.clearInterval(this.timer);
    }

    render() {
        return <div >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, perspiciatis!
        </div>
    }
}

