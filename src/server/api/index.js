import { Router } from 'express'
import languages from './languages'
import labels from './labels'
import signin from './signin'
import translations from './translations'
import token from './token'

const router = new Router({ mergeParams: true })

router.use('/signin', signin)

router.use(token)

router.use('/languages', languages)

router.use('/languages/:language_id/translations', translations)

router.use('/labels', labels)

export default router
