import React, { Component } from 'react';
import axios from 'axios'

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.props.isUpdating ? this.props.updateSmurf : this.props.addSmurf}>
          <input
            onChange={this.props.handleInputChange}
            placeholder="name"
            value={this.props.name}
            name="name"
            required
          />
          <input
            onChange={this.props.handleInputChange}
            placeholder="age"
            value={this.props.age}
            name="age"
            required
          />
          <input
            onChange={this.props.handleInputChange}
            placeholder="height"
            value={this.props.height}
            name="height"
            required
          />
          <button type="submit">{this.props.isUpdating ? 'Update Smurf' : 'Add to the village'}</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
