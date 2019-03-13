const serializer = (result) => ({
  id: result.get('id'),
  user: {
    id: result.related('user').get('id'),
    full_name: result.related('user').get('full_name'),
  },
  label: {
    id: result.related('label').get('id'),
    name: result.related('label').get('name'),
    description: result.related('label').get('description'),
    english: result.related('label').get('english')
  },
  language: {
    id: result.related('language').get('id'),
    full_name: result.related('language').get('code'),
    full_name: result.related('language').get('name')
  },
  // is_hightlighted: result.get('is_hightlighted'),
  text: result.get('text')
})

export default serializer
