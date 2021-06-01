import React, { PureComponent } from 'react';

import { Button } from 'antd';

class ProfileBanner extends PureComponent {
  goHome() {
    const { history, router } = this.props;
    console.log('Go Home>>>>>>>>', history, router);
    // history.push('/home');
  }

  render() {
    return (
      <div className="profile-banner__wrapper">
        <div className="avatar-container">Avatar</div>
        <div className="go-home">
          <Button
            onClick={() => {
              this.goHome();
            }}
          >
            HIII
          </Button>
        </div>
      </div>
    );
  }
}

export default ProfileBanner;
