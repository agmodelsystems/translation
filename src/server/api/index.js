import { Router } from 'express'
import languages from './languages'
import labels from './labels'
import signin from './signin'
import translations from './translations'
import token from './token'
import notFound from './default/not_found'
import error from './default/error'

const router = new Router({ mergeParams: true })

router.use('/signin', signin)

router.use(token)

router.use('/languages', languages)

router.use('/languages/:language_id/translations', translations)

router.use('/labels', labels)

router.use(notFound)

router.use(error)

export default router
