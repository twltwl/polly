/* eslint-env jest */

import { mount } from 'enzyme'
import React from 'react'

import { QuestionSummary } from './QuestionSummary.js'

describe('Question summary test', () => {
  it('Shows summary headline', () => {
    const cmp = mount(<QuestionSummary question="Foo" />)
    expect(cmp.find('h2').text()).toEqual('Foo')
  })

  it('Shows publish date', () => {
    const cmp = mount(
      <QuestionSummary published_at="2015-05-27T21:22:26.670000+00:00" />
    )
    expect(cmp.find('.publishedAt').text()).toEqual('5/27/2015')
  })

  it('Shows correct number of choices', () => {
    const cmp = mount(<QuestionSummary choices={[1, 2, 3]} />)
    expect(cmp.find('.choices').text()).toEqual('3 Choices')
  })
})
