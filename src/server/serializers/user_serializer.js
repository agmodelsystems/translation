const serializer = (result) => ({
  id: result.get('id'),
  full_name: result.get('full_name'),
  email: result.get('email')

})

export default serializer
