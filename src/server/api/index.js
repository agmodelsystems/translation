import notFound from './default/not_found'
import translations from './translations'
import error from './default/error'
import languages from './languages'
import { Router } from 'express'
import labels from './labels'
import signin from './signin'
import users from './users'
import token from './token'

const router = new Router({ mergeParams: true })

router.use('/signin', signin)

router.use(token)

router.use('/users', users)

router.use('/languages', languages)

router.use('/languages/:language_id/translations', translations)

router.use('/labels', labels)

router.use(notFound)

router.use(error)

export default router
