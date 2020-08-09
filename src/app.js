const obj = {
  name: 'Nate',
  getName() {
    return this.name;
  }
};

const getName = obj.getName;

class IndecisionApp extends React.Component {
  
  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';
    const options = ['Thing one', 'Thing two', 'Thing three']

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <AddOption />
        <RemoveAll />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.test}</h1>
        <h2>Put your life in the hands of a computer</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }
  handleRemoveAll() {
    console.log(this.props.options)
  }
  render() {
    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove All</button>
        {
          this.props.options.map(option => <Option key={option} optionText={option} />)
        }
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        {this.props.optionText}
      </div>
    );
  }
}

class AddOption extends React.Component {
  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    if (option) {
      alert(option);
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

class RemoveAll extends React.Component {
  handleRemoveAll() {
    alert('Handle Remove All');
  }
  render() {
    return (
      <button onClick={this.handleRemoveAll}>Remove All</button>
    );
  }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));