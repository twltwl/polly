/* eslint-env jest */

import { mount } from 'enzyme'
import React from 'react'

import { Question } from './question.js'

describe('Question test', () => {
  it('Shows headline', () => {
    const cmp = mount(<Question question="Foo" onVote={() => {}} />)
    expect(cmp.find('h2').text()).toEqual('Question: Foo')
  })

  it('Shows number of votes', () => {
    const cmp = mount(
      <Question choices={[{ choice: 'foo', votes: 1337 }]} onVote={() => {}} />
    )
    expect(cmp.find('.votes').text()).toEqual('1337 votes')
  })

  it('Shows vote %', () => {
    const cmp = mount(
      <Question choices={[{ choice: 'foo', votes: 1337 }]} onVote={() => {}} />
    )
    expect(cmp.find('.percentage').text()).toEqual('(100%)')
  })
})
