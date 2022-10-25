/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Binding from './screens/binding/Binding';
import Feed from './screens/feed/Feed';

AppRegistry.registerComponent(appName, () => Feed);
