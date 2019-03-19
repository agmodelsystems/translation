import { testHandler } from '../../utils/test'
import { expect } from 'chai'
import show from './show'

describe('api/labels/show', () => {

  it('cannot load a non existant label', async () => {

    const req = {
      params: {
        id: 2
      }
    }

    const res = await testHandler(show, req)

    expect(res.status()).to.be.equal(404)
    expect(res.json().message).to.be.equal('Could not find label')

  })

  it('loads a legitimate label', async () => {

    const req = {
      params: {
        id: 1
      }
    }

    const res = await testHandler(show, req)

    expect(res.status()).to.be.equal(200)
    expect(res.json().data).to.be.eql({
      id: 1,
      name: 'Hello',
      english: 'Hello',
      description: 'Greeting'
    })

  })

})
