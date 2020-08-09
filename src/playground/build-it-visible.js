class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.toggleVisibility = this.toggleVisibility.bind(this);
    this.state = {
      isVisible: false
    };
  }
  toggleVisibility() {
    this.setState((prevState) => {
      return {
        isVisible: !prevState.isVisible
      }
    });
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.toggleVisibility}>
          {this.state.isVisible ? 'Hide' : 'Show'} details
        </button>
        {this.state.isVisible && <p>These are the details</p>}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));


// const details = 'These are the details';

// let isVisible = false;

// const toggleVisibility = () => {
//   isVisible = !isVisible;
//   renderApp();
// };

// const renderApp = () => {
//   const template = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={toggleVisibility}>
//         {isVisible ? 'Hide' : 'Show'} details
//       </button>
//       {isVisible && <p>{details}</p>}
//     </div>
//   );

//   ReactDOM.render(template, document.getElementById('app'));
// };

