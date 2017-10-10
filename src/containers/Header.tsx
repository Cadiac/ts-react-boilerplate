import Header from '../components/Header/Header';
import { RootAction } from '../actions/index';
import { connect, Dispatch } from 'react-redux';

import { push } from 'react-router-redux';

export function mapDispatchToProps(dispatch: Dispatch<RootAction>) {
  // You could also create navigation actions from these and dispatch them
  // This would be better approach, since if you needed to change some link changing the
  // router + the navigation action would be enough
  return {
    navigateHello: () => dispatch(push('/')),
    navigateAbout: () => dispatch(push('/about')),
    navigateTopics: () => dispatch(push('/topics')),
  };
}

export default connect(undefined, mapDispatchToProps)(Header);
