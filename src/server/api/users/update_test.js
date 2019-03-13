import { testHandler } from '../../utils/test'
import { expect } from 'chai'
import create from './create'

describe('api/users/password', () => {

  it('requires a username', async () => {

    const req = {
      body: {}
    }

    const res = await testHandler(create, req)

    expect(res.status()).to.be.equal(422)
    expect(res.json().message).to.be.equal('Username is required')

  })

})
