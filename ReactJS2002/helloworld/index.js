// var element = React.createElement("div", null, "Hello world")
// var element = (
//   <div>
//     <h1>Hello world</h1>
//     <p>This is hello world description</p>
//   </div>
// );
// ReactDOM.render(element, document.getElementById("app"));

// function tick() {
//     var timer = new Date().toLocaleTimeString()
//     var clock = (
//       <div>
//         <h1>Clock</h1>
//         <p>Timer: {timer}</p>
//       </div>
//     );
//     ReactDOM.render(clock, document.getElementById("app"));
// }
// setInterval(tick, 1000)

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timer: new Date().toLocaleTimeString(),
        };
        setInterval(this.tick, 1000);
    }

    tick = () => {
        this.setState({
                timer: new Date().toLocaleTimeString()
            })
            // this.state.timer = ""
            // console.log(this.state.timer);
    };

    render() {
        // console.log("Calling render: ", this.state.timer);
        return (
            <div>
                <h1 > Clock </h1>
                <p> Timer: { this.state.timer } </p> 
            </div>
        );
    }
}

ReactDOM.render( < Clock /> , document.getElementById("app"));
