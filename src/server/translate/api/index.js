import { Router } from 'express'
import languages from './languages'
import labels from './labels'
import signin from './signin'
import translations from './translations'

const router = new Router({ mergeParams: true })

router.use('/languages', languages)

router.use('/languages/:language_id/translations', translations)

router.use('/labels', labels)

router.use('/signin', signin)

export default router
