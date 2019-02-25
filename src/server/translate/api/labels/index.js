import { Router } from 'express'
import list from './list'
import show from './show'
import create from './create'

const router = new Router({ mergeParams: true })

router.get('/', list)

router.post('/', create)

router.get('/:id', show)

export default router
