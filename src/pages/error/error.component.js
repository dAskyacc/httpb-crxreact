import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class ErrorPage extends PureComponent {
  static propTypes = {
    error: PropTypes.object,
  };

  renderErrorDetail(content) {
    return (
      <li>
        <p>{content}</p>
      </li>
    );
  }

  render() {
    const { error = {} } = this.props;

    const { message = 'no message', title = 'TestError' } = error;

    return (
      <section className="error-page">
        <h1 className="error-page__header">{title}</h1>
        <h2 className="error-page__subheader">{message}</h2>

        <section className="error-page__details">
          <details>{this.renderErrorDetail(message)}</details>
          <ul></ul>
        </section>
      </section>
    );
  }
}

export default ErrorPage;
