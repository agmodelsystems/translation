import { Router } from 'express'
import create from './create'
import update from './update'
import list from './list'

const router = new Router({ mergeParams: true })

router.post('/', create)

router.post('/:id', update)

router.get('/', list)

export default router
