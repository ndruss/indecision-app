const appRoot = document.getElementById('app');

const details = 'These are the details';

let isVisible = false;

const toggleVisibility = () => {
  isVisible = !isVisible;
  renderApp();
};

const renderApp = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleVisibility}>
        {isVisible ? 'Hide' : 'Show'} details
      </button>
      {isVisible && <p>{details}</p>}
    </div>
  );

  ReactDOM.render(template, appRoot);
};

renderApp();