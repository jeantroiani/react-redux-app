class Contacts extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick

    render () {
        return (
            <p onClick={this.handleClick.bind(this)}>Hello</p>
        )
    }
}

var HelloWorld = function(props) {
    return (
        <h1>Hello World</h1>
    );
}

const HelooWorld = (props) => {
    return (
      <h1>Hello World</h1>
    );
}
