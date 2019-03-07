import { testHandler } from '../../utils/test'
import { expect } from 'chai'
import create from './create'

describe('api/signin/create', () => {

  it('requires a username', async () => {

    const req = {
      body: {}
    }

    const res = await testHandler(create, req)

    expect(res.status()).to.be.equal(422)
    expect(res.json().message).to.be.equal('Username is required')

  })

  it('cannot find non existant user', async () => {

    const req = {
      body: {
        username: 'jerrygarcia'
      }
    }

    const res = await testHandler(create, req)

    expect(res.status()).to.be.equal(404)
    expect(res.json().message).to.be.equal('Could not find user')

  })

  it('requires a password', async () => {

    const req = {
      body: {
        username: 'mochini'
      }
    }

    const res = await testHandler(create, req)

    expect(res.status()).to.be.equal(422)
    expect(res.json().message).to.be.equal('Password is required')

  })

  it('requires a valid password', async () => {

    const req = {
      body: {
        username: 'mochini',
        password: 'invalid'
      }
    }

    const res = await testHandler(create, req)

    expect(res.status()).to.be.equal(422)
    expect(res.json().message).to.be.equal('Password is not valid')

  })

  it('returns a json webtoken', async () => {

    const req = {
      body: {
        username: 'mochini',
        password: 'amts'
      }
    }

    const res = await testHandler(create, req)

    expect(res.status()).to.be.equal(200)
    expect(res.json().data.token).to.not.be.null

  })

})
