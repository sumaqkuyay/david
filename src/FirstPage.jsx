import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Block from './Block';
import './App.css';

class FirstPage extends Component {
	constructor(props) {
		super(props);  
		this.state = {
		  'movs': {
        'b_0': {
          'color': 'empty',
          'near': ['b_1', 'b_3']
        },
        'b_1': {
          'color': 'img_1',
          'near': ['b_0', 'b_2', 'b_4']
        },
        'b_2': {
          'color': 'img_2',
          'near': ['b_1', 'b_5',]
        },
        'b_3': {
          'color': 'img_3',
          'near': ['b_0', 'b_4', 'b_6'],
        },
        'b_4': {
          'color': 'img_4',
          'near': ['b_1', 'b_3', 'b_5', 'b_7'],
        },
        'b_5': {
          'color': 'img_5',
          'near': ['b_2', 'b_4', 'b_8'],
        },
        'b_6': {
          'color': 'img_6',
          'near': ['b_3', 'b_7',],
        },
        'b_7': {
          'color': 'img_7',
          'near': ['b_6', 'b_4', 'b_8'],
        },
        'b_8': {
          'color': 'img_8',
          'near': ['b_7', 'b_5'],
        },
      }
		};
    this.handleChange = this.handleChange.bind(this);
	}
	changesDone() {
	 // console.log("done!", this.state);
	}
	
	componentDidMount() {
	  this.handleChange(1);
	  this.handleChange(4);
	  this.handleChange(7);
	  this.handleChange(6);
	  this.handleChange(3);
	  this.handleChange(0);
	  this.handleChange(1);
	  this.handleChange(4);
	  this.handleChange(7);	  
  }
	
  handleChange(nClicked) {
    if ( nClicked >= 0 && nClicked <= 8  ) {
      for(var i = 0; this.state.movs['b_' + nClicked].near.length > i; i++) {
        var _b = this.state.movs['b_' + nClicked].near[i];
        // console.log(">", _b);
        if (this.state.movs[_b].color === 'empty') {
          var no = {
            'movs': {}
          };
          no['movs'][_b] = {};
          // this.state
          // console.log("n",  this.state.movs['b_' + nClicked].color);
          no['movs'][_b].color = this.state.movs['b_' + nClicked].color;
          no['movs'][_b].near = this.state.movs[_b].near;
          
          no['movs']['b_' + nClicked] = {};
          no['movs']['b_' + nClicked].color = 'empty';
          no['movs']['b_' + nClicked].near = this.state.movs['b_' + nClicked].near;

          var _new = Object.assign(this.state.movs, no['movs']);
          this.setState({
            'movs': _new
          }, function() {
            this.changesDone();
          });
        }
      }
    }
  };
  
  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <img src="./cumple.jpg" className="App-logo" alt="logo" />
        </div>
        <p className="texto1">First order the puzzle</p>
        <div className="wrapper">
          <div className="multibox">
            <Block number={0} 
            	handleChange={this.handleChange} 
              color={this.state.movs.b_0.color} />
            <Block number={1} 
            	handleChange={this.handleChange} 
              color={this.state.movs.b_1.color} />
            <Block number={2} 
            	handleChange={this.handleChange} 
              color={this.state.movs.b_2.color} />
            <Block number={3} 
            	handleChange={this.handleChange} 
              color={this.state.movs.b_3.color} />
            <Block number={4} 
            	handleChange={this.handleChange} 
              color={this.state.movs.b_4.color} />
            <Block number={5} 
            	handleChange={this.handleChange} 
              color={this.state.movs.b_5.color} />
            <Block number={6} 
            	handleChange={this.handleChange} 
              color={this.state.movs.b_6.color} />
            <Block number={7} 
            	handleChange={this.handleChange} 
              color={this.state.movs.b_7.color} />
            <Block number={8} 
            	handleChange={this.handleChange} 
              color={this.state.movs.b_8.color} />
          </div>
        </div>
        <Link to="/happyBirthday">
        <button>Next</button>
        </Link>
      </div>
    );
  }
}

export default FirstPage;