/* eslint-disable */
import React, {Component} from 'react';
import 'whatwg-fetch';
import ComplexSearch from 'complex-search';

const options = [
  {
    name: 'Key Phrases',
    badge: 0
  },
  {
    name: 'Inferences',
    badge: 1,
    items: [
      {
        name: 'when',
      },
      {
        name: 'there'
      },
      {
        name: 'was'
      }
    ]
  },
  {
    name: 'Tags',
    badge: 0,
    items: [
      {
        name: 'a',
        icon: 'f'
      },
      {
        name: 'girl',
        icon: 'v'
      },
      {
        name: 'and',
        icon: 'j'
      },
      {
        name: 'rainbow',
        icon: 'n'
      }
    ]
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
  }
  search(event) {
    console.log(event);
  }
  onView(event) {
    console.log('View');
  }
  onTick(event) {
    console.log('Tick');
  }
  render() {
    return (
      <main>
        <ComplexSearch
          options={options}
          onView={this.onView}
          onTick={this.onTick}
        />
      </main>
    );
  }

}
  
export default App;