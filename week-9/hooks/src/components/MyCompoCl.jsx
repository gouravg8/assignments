export default class MyCompo2 extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  componentDidMount() {
    console.log("mounted 2");
  }
  componentWillUnmount() {
    console.log("unmounted 2");
  }
  render() {
    return (
      <div>
        <p>compo 2</p>
        {/* <p>{this.state.count}</p> */}
        {/* <button onClick={this.increment}>increase</button> */}
      </div>
    );
  }
}
