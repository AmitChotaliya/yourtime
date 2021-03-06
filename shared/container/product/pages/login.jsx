import React from 'react';
import {connect} from 'react-redux';

const styles = {
    col: {
        paddingTop: 40,
        paddingLeft: 0,
        paddingRight: 0,
        textAlign: 'center'
    },
    auth0_container: {
        display: 'inline-block'
    }
};

var Login = React.createClass({
    showLogin: function () {
        this.props.lock.show({
            callbackURL: this.props.site_domain+'/app/loading',
            responseType: 'token',
            authParams: {
                scope: 'openid nickname email app_metadata'
            },
            container: 'auth0-lock-container'
        });
    },
    componentDidMount: function () {
        console.log('login mount');
        this.showLogin();
    },
    render: function () {
        return (
            <div className="row">
                <div className="col-sm-12"
                     style={styles.col}>
                    <div style={styles.auth0_container}
                        id="auth0-lock-container"></div>
                </div>
            </div>
        );
    }
});

function mapStateToProps(state, ownProps) {
    return {
        lock: state.auth.lock,
        site_domain: state.auth.site_domain
    };
}

export default connect(mapStateToProps)(Login);

