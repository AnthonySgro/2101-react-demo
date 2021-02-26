import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const app = document.querySelector('#app');

const Square = ({ color, removeSquare, idx }) => {
  return (
    <div
      style={{
        backgroundColor: color,
        width: '100px',
        height: '100px',
        margin: '10px',
      }}
      onClick={() => removeSquare(idx)}
    >
    </div>
  );
}

const badCSSColors = [
  'cornsilk',
  'slategrey',
  'lightgoldenrodyellow',
  'lawngreen',
  'dodgerblue',
];

const randomColor = () => badCSSColors[Math.floor(badCSSColors.length * Math.random())];

class Home extends Component {
  state = {
    squares: [],
  };

  addSquare = () => {
    const newSquare = {
      color: randomColor(),
    };

    const { squares } = this.state;

    this.setState({
      squares: [...squares, newSquare],
    }, () => {
      console.log(this.state);
    });
  }

  removeSquare = (idx) => {
    const { squares } = this.state;

    const filteredSquares = squares.filter((sq, i) => i !== idx);

    this.setState({
      squares: filteredSquares,
    });
  }

  render() {
    const { squares } = this.state;

    return (
      <div
        style={{
          width: '100vw',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <button onClick={this.addSquare}>Add Square</button>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}
        >
          {
            squares.map(({ color }, idx) => {
              return (
                <Square
                  color={color}
                  key={idx}
                  idx={idx}
                  removeSquare={this.removeSquare}
                />
              );
            })
          }
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Home />, app, () => {
  console.log('Application is rendered!');
});
