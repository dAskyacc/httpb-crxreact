import React, { Component } from 'react';

export default class UnlockPage extends Component {
  state = {
    password: '',
    error: null,
  };

  submitting = false;

  handleSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    const { tryUnlockBraveTroops } = this.props;
    const { password } = this.state;

    if (password === '' || this.submitting) {
      return;
    }

    this.setState({ error: null });
    this.submitting = true;
    try {
      await tryUnlockBraveTroops(password);
    } catch (err) {
      const message =
        typeof err === 'object' && err.message ? err.message : err;
      this.setState({ error: message });
      this.submitting = false;
    }
  };

  render() {
    return (
      <div className="unlock-page__container">
        <div className="hel">Unlock</div>
      </div>
    );
  }
}
