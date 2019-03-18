import { Router } from 'express'
import list from './list'
import show from './show'
import create from './create'
import users from './users'

const router = new Router({ mergeParams: true })

router.get('/', list)

router.post('/', create)

router.get('/:id', show)

router.post('/users', users)


export default router
