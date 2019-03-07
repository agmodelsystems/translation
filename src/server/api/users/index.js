import { Router } from 'express'
import create from './create'
import update from './update'

const router = new Router({ mergeParams: true })

router.post('/', create)

router.post('/:id', update)

export default router
