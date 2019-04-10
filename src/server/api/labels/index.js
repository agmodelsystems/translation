import { Router } from 'express'
import list from './list'
import show from './show'
import create from './create'
import translations from './translations'
import update from './update'
import deleteLabel from './deleteLabel'

const router = new Router({ mergeParams: true })

router.get('/', list)

router.post('/', create)

router.get('/:id', show)

router.get('/:label_id/translations', translations)

router.patch('/:id', update)

router.delete('/:id', deleteLabel)

export default router
