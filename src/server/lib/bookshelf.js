import Bookshelf from 'bookshelf'
import knex from './knex'

const bookshelf = Bookshelf(knex)

bookshelf.plugin('bookshelf-virtuals-plugin')

export default bookshelf
