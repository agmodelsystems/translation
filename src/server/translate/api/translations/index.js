import { Router } from 'express'
import list from './list'
import create from './create'
import show from './show'
import update from './update'

const router = new Router({ mergeParams: true })

router.get('/', list)

router.post('/', create)

router.get('/:id', show)

router.patch('/:id', update)

export default router
