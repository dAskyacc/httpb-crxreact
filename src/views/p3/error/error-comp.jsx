import React, { PureComponent } from 'react';

class ErrorPage extends PureComponent {
  renderErrorDetail(content) {
    return (
      <li>
        <p>{content}</p>
      </li>
    );
  }

  render() {
    const { error } = this.props;
    const { code, name, stack, message } = error;
    return (
      <section className="error-page">
        <h1 className="error-page__header">Error</h1>
        <h2 className="error-page__subheader">{message}</h2>

        <section className="error-page__details">
          <details>
            <summary>Error Detail Info</summary>
            <ul>
              {message ? this.renderErrorDetail(message) : null}
              {code ? this.renderErrorDetail(code) : null}
              {name ? this.renderErrorDetail(name) : null}
              {stack ? this.renderErrorDetail(stack) : null}
            </ul>
          </details>
        </section>
      </section>
    );
  }
}

export default ErrorPage;
