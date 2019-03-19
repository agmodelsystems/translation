import { testHandler } from '../../utils/test'
import { expect } from 'chai'
import users from './users'

describe('api/languages/users', () => {

  it('rejects duplicate asignments', async () => {

    const req = {
      body: {
        user_id: 1,
        language_id: 1
      }
    }

    const res = await testHandler(users, req)

    expect(res.status()).to.be.equal(404)
    expect(res.json().message).to.be.equal('The relationship already exists')

  })

})
