import { testHandler } from '../../utils/test'
import { expect } from 'chai'
import create from './create'

describe('api/labels/create', () => {

  it('rejects a label without name', async () => {

    const body = {}

    const res = await testHandler(create, { body })

    expect(res.status()).to.be.equal(422)
    expect(res.json().errors.name[0]).to.be.equal('The name is required')

  })


  it('creates a label with valid data', async () => {

    const body = {
      name: 'test label',
      description: 'this is a test label'
    }

    const res = await testHandler(create, { body })

    const data = res.json().data

    expect(res.status()).to.be.equal(200)
    expect(data.id).to.be.not.null
    expect(data.name).to.be.equal(body.name)
    expect(data.description).to.be.equal(body.description)
    expect(data.created_at).to.be.not.null
    expect(data.updated_at).to.be.not.null

  })

})
