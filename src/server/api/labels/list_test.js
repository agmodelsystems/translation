import { testHandler } from '../../utils/test'
import { expect } from 'chai'
import list from './list'

describe('api/labels/list', () => {

  it('loads all of the labels', async () => {

    const res = await testHandler(list)

    expect(res.status()).to.be.equal(200)
    expect(res.json().data.length).to.be.equal(1)
    expect(res.json().data[0]).to.be.eql({
      id: 1,
      name: 'Hello',
      english: 'Hello',
      description: 'Greeting'
    })

  })


})
