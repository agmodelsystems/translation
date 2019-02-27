const serializer = (result) => ({
  id: result.get('id'),
  code: result.get('code'),
  name: result.get('name')
})

export default serializer
