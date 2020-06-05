class RandomGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numberOfGuessing: 0,
            currentGuessing: 0,
            randomNumber: 0,
            message: "",
        };
    }

    componentDidMount() {
        this.setState({
            randomNumber: this.random()
        })
    }

    random = () => {
        return Math.floor(Math.random() * 100) + 1
    }

    onGuessingChange = (event) => {
        // console.log(event.target.value)
        this.setState({
            currentGuessing: Number(event.target.value)
        })
    }

    guessing = () => {
        var {currentGuessing, randomNumber, message, numberOfGuessing } = this.state;

        if (currentGuessing > randomNumber) {
            message = "Your guessing is bigger"
            // this.setState({ message : "Your guessing is bigger"})
        } else if (currentGuessing < randomNumber) {
            message = "Your guessing is smaller"
        } else {
            message = "Chúc mừng";
            alert(message);
        }
        numberOfGuessing++
        this.setState({ message, numberOfGuessing })
    }

    render() {
        var {
            numberOfGuessing,
            currentGuessing,
            randomNumber,
            message,
        } = this.state;
        return (
            <div>
                <div className="jumbotron text-center">
                    <h1>Getting random number - {randomNumber}</h1>
                    <p>
                        Tôi đã random một số trong khoảng 1 - 100, đố bạn đoán
                        được?
                    </p>
                </div>

                <div className="main">
                    <button>New Game</button>
                    <hr />
                    <p className="text-bold">
                        Số lần bạn đã đoán là: {numberOfGuessing}
                    </p>
                    <p className="text-bold">Số bạn đoán là</p>
                    <input 
                    value={currentGuessing}
                    onChange={this.onGuessingChange} 
                    type="text" />
                    <button onClick={this.guessing}>Đoán</button>
                    <p>{message}</p>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<RandomGame />, document.getElementById("app"));
