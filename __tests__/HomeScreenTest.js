import 'react-native';
import React from 'react';
import Home from '../screens/HomeScreen.js';

import renderer from 'react-test-renderer';

//https://github.com/babel/babel/issues/6892
//https://github.com/testing-library/react-hooks-testing-library/issues/151
//https://60devs.com/npm-install-specific-version.html
//https://www.youtube.com/watch?v=bGT7vcZNrA8

it('test the change function', ()=>{

  let HomeData = renderer.create(<Home />).getInstance();

  expect(HomeData.change(2)).toEqual(20);
});
