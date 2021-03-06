/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2017 Skyscanner Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import renderer from 'react-test-renderer';
import BpkGridContainer from './BpkGridContainer';

describe('BpkGridContainer', () => {
  it('should render correctly', () => {
    const tree = renderer.create(
      <BpkGridContainer>Contents</BpkGridContainer>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly with "debug" attribute', () => {
    const tree = renderer.create(
      <BpkGridContainer debug>Contents</BpkGridContainer>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly with "fullWidth" attribute', () => {
    const tree = renderer.create(
      <BpkGridContainer fullWidth>Contents</BpkGridContainer>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly with "className" attribute', () => {
    const tree = renderer.create(
      <BpkGridContainer className="my-custom-class">Contents</BpkGridContainer>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly with arbitrary attributes', () => {
    const tree = renderer.create(
      <BpkGridContainer
        data-arbitrary-1="my-arbitrary-data"
        data-arbitrary-2="my-arbitrary-data"
      >
        Contents
      </BpkGridContainer>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

