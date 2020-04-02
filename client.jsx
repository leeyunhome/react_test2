import React from 'react';
import ReactDom from 'react-dom';
import { hot } from 'react-hot-loader/root'

import Blog from './Blog';

const Hot = hot(Blog);

ReactDom.render(<Hot />, document.querySelector('#root'));