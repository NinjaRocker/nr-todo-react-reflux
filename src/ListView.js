import React from 'react';
import Reflux from 'reflux';
import store from './store';

//const ListView = () => (
//  <div>ListView</div>
//);

//class ListView extends React.Component {
//  constructor() {
//    super();
//    console.log('[ListView]', '[constructor]', 'listenTo');
//    this.mixins = [Reflux.listenTo(store, 'onStore')];
//    this.state = {data: []};
//  }
//  onStore(data) {
//    console.log('[ListView]', data);
//    this.setState({data: data});
//  }
//  renderItem(item, idx) {
//    return <div>{idx}.{item}</div>;
//  }
//  render() {
//    return(
//      <div>
//        {this.state.data.map(this.renderItem)}
//      </div>
//    );
//  }
//}

const ListView = React.createClass({
  mixins: [Reflux.listenTo(store, 'onStore')],
  getInitialState: function() {
    return {data: []};
  },
  onStore: function(data) {
    this.setState({data: data});
  },
  renderItem: function(item, idx) {
    return <div>{idx}.{item}</div>
  },
  render: function() {
    return(
      <div>
        {this.state.data.map(this.renderItem)}
      </div>
    );
  }
});

export default ListView;
