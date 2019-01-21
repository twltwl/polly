/* eslint-env jest */

import { shallow } from 'enzyme'
import React from 'react'

import { Header } from './header.js'

describe('Header test', () => {
  it('Shows correct header', () => {
    const cmp = shallow(<Header label="Foo" />)
    expect(cmp.find('h1').text()).toEqual('Foo')
  })
})
