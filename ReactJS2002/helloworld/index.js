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

// var car = {
//     name: "Vinfast",
//     start() {
//         console.log(this.name + " starting....")
//     }
// }

// window.name = "Window"

// var carStart = car.start.bind(car)

// car.start()
// carStart()

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timer: new Date().toLocaleTimeString(),
            inputValue: ""
        };
        // this.startClock = this.startClock.bind(this)
    }

    componentDidMount() {
        console.log("Create component clock")
        setInterval(this.tick, 1000);
    }

    componentWillUnMount() {
        console.log("Unmount")
    }

    tick = () => {
        // console.log(this.state.timer)
        // var stateCopy = { ...this.state }
        this.setState({
                timer: new Date().toLocaleTimeString()
            })
    };

    startClock = (number) => {
        // console.log("timer: ", this.state.timer)
        console.log(number)
    }
    
    inputChange = (event) => {
        this.setState({
            inputValue: event.target.value
        })
        // var inpuText = document.getElementById("inputText").value
        // console.log(inpuText)
        // document.getElementById("content").innerHTML = inpuText
    }

    clickMe = (event) => {
        console.log("Click me")
        alert("click me")
        event.preventDefault()
    }

    render() {
        // var inputValue = this.state.inputValue;
        // var timer = this.state.timer;

        var { timer, inputValue } = this.state;

        return (
            <div>
                <a href="https://google.com" onClick={ this.clickMe }>Click me</a>
                <h4 id="content"> { inputValue } </h4>
                <button name="startClock" onClick={ () => { this.startClock(1) } }>Start 1</button>
                <button name="startClock" onClick={ () => { this.startClock(2) } }>Start 2</button>
                <input id="inputText" type="text" onChange={ this.inputChange } />
                <h1> Clock </h1>
                <p> Timer: { timer } </p> 
            </div>
        );
    }
}

ReactDOM.render( <Clock /> , document.getElementById("app"));
