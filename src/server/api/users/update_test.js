import { testHandler } from '../../utils/test'
import { expect } from 'chai'
import update from './update'

describe('api/users/update', () => {

  it('can find the user', async () => {

    const req = {
      params: {
        id: 240
      }
    }

    const res = await testHandler(update, req)

    expect(res.status()).to.be.equal(404)
    expect(res.json().message).to.be.equal('Could not find user')
  })

})
