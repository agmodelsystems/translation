import { testHandler } from '../../utils/test'
import { expect } from 'chai'
import translations from './translations'

describe('api/labels/translations', () => {

  it('loads translations for an existing label', async () => {

    const req = {
      params: {
        label_id: 1
      }
    }

    const res = await testHandler(translations, req)

    expect(res.status()).to.be.equal(200)
    expect(res.json().data.length).to.be.equal(4)

  })

})
