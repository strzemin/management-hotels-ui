import React, { Component } from 'react';
import PropTypes from 'prop-types';

import 'src/assets/stylesheets/base.scss';
import { RES_API, INFO_ENDPOINT, API_REDUX , DEFAULT_QUERY_REDUX } from '../config/config';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      hits: [],
      id: 0,
      pong: ''
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    fetch(API_REDUX + DEFAULT_QUERY_REDUX)
      .then(response => response.json())
      .then(data => this.setState({ hits: data.hits }));

     this.handleClick();
  }

  handleClick(event) {
    fetch(RES_API + INFO_ENDPOINT)
      .then(response => response.json())
      .then(data => this.setState({ id: data.id , pong:data.pong}));
  }

  render() {

  const { name } = this.props;
  const { hits, id, pong } = this.state;

 
  const ViewData = hits.map(hit =>
                      <div key={hit.objectID}>
                        <a href={hit.url}>{hit.title}</a>
                      </div>
                    );
    return (
        <div>{name}, {id} , {pong}
        <li onClick={this.handleClick}>Get ping</li>
        <br/>
        <div>
          <h2>Do nauki linki na temat reduxa</h2>
          {ViewData}
        </div>
        
        </div>
    );
  }
}

App.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string
};

export default App;
