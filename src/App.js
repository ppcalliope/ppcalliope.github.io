import React from 'react';
import LazyLoading from './components/LazyLoadingView/index'
import intl from 'react-intl-universal'

import './App.less'
import './common.less'

import {
  HashRouter as Router,
  Switch,
  Route,
  //useParams
} from "react-router-dom";


class App extends React.Component {

  state = {
    initDone: false,
  }

  componentDidMount() {
    this.setState(
      { initDone: true });
  }

  render() {
    const { initDone } = this.state;

    const MyRoute = ({ MyComponent, ...rest }) => {
      return (
        <Route
          {...rest}
          render={routerProps => (
            <MyComponent
              intl={intl}
              initDone={initDone}
              {...routerProps} ></MyComponent>)
          } />
      )
    }

    return (
      <Router>
        <Switch>
          <MyRoute exact path='/show' MyComponent={LazyLoading('ShowPage/index')} />
          <MyRoute exact path='/publish/mobile/*' MyComponent={LazyLoading('PublishPage/index')} />
          <MyRoute exact path='/' MyComponent={LazyLoading('Homepage/index')} />
        </Switch>
      </Router>
    )
  }
}

export default App