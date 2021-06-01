import React, { PureComponent } from 'react';

import { Switch, Route } from 'react-router-dom';

export default class FirstSetupPage extends PureComponent {
  state = {
    seedPhrase: '',
  };

  componentDidMount() {
    const {
      completedOfSetup,
      seedPhraseBackedUp, // backup
      history,
      isInitialized,
      isUnlocked,
    } = this.props;
  }

  handleCreateBraveAccount = async (password) => {
    const { createNewAccount } = this.props;
    try {
      const seedPhrase = await createNewAccount(password);
      this.setState({ seedPhrase });
    } catch (error) {
      throw new Error(error.message);
    }
  };

  handleUnlock = async (password) => {
    const { unlockAccount, history, nextRoute } = this.props;

    try {
      const seedPhrase = await unlockAccount(password);
      this.setState({ seedPhrase }, () => {
        history.push(nextRoute);
      });
    } catch (err) {
      throw new Error(err.message);
    }
  };

  render() {
    const { seedPhrase } = this.props;

    return (
      <div className="first-setup">
        <h2>First set Up</h2>
        <Switch></Switch>
      </div>
    );
  }
}
