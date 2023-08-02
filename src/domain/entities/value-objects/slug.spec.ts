import { Slug } from './slug'

test('it should be abel to create a new slug from text', () => {
  const slug =  Slug.createFromText('Example question title')

  expect(slug.value).toEqual('example-question-title')
})