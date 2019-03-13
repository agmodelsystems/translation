const serializer = (result) => ({
  id: result.get('id'),
  name: result.get('name'),
  description: result.get('description')
})

export default serializer
