import { Router } from 'express'
import list from './list'
import show from './show'
import create from './create'
import translations from './translations'

const router = new Router({ mergeParams: true })

router.get('/', list)

router.post('/', create)

router.get('/:id', show)

router.get('/:label_id/translations', translations)

export default router
