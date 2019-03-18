const serializer = (result) => ({
  id: result.get('id'),
  name: result.get('name'),
  description: result.get('description'),
  english: result.get('english')
})

export default serializer
