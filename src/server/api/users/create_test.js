import { testHandler } from '../../utils/test'
import { expect } from 'chai'
import create from './create'

describe('api/users/create', () => {

  it('validates user', async () => {

    const req = {
      body: {}
    }

    const res = await testHandler(create, req)

    expect(res.status()).to.be.equal(422)
    expect(res.json().errors.first_name[0]).to.be.equal('The first_name is required')
    expect(res.json().errors.last_name[0]).to.be.equal('The last_name is required')
    expect(res.json().errors.email[0]).to.be.equal('The email is required')
    expect(res.json().errors.username[0]).to.be.equal('The username is required')

  })

})
