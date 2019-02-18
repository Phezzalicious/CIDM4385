var root = document.getElementById('root');

const app = () => {
    return React.createElement('ul', {},  [
        React.createElement('li', null, 'react practice'),
        React.createElement('li', null, 'practice assignment 1')

    ]);

}
ReactDom.render(React.createElement(App), root);