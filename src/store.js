import React from 'react';
import Reflux from 'reflux';
import $ from 'jquery';

import actions from './actions';

const store = Reflux.createStore({
  listenables: [actions],
  data: [],
  //onAdd: (item) => {
  //  console.log('[THIS]', this);
  //  this.data.push(item);
  //  this.trigger(this.data);
  //  console.log('added');
  //},
  onAdd: function(item) {
    console.log('[THIS]', this);
    this.data.push(item);
    this.trigger(this.data);
    console.log('added');
  },
  onFetch: function() {
    let self = this;
    $.ajax({
      url: 'data.json',
      success: function(data) {
        console.log('[STORE]', 'ajax fetched', data);
        self.data.push(data.data[0].item);
        self.trigger(self.data);
      }
    });
  },
  //onClear: () => {
  //  this.data = [];
  //  this.trigger(this.data);
  //  console.log('cleared');
  //}
  onClear: function() {
    this.data = [];
    this.trigger(this.data);
    console.log('cleared');
  }
});

export default store;