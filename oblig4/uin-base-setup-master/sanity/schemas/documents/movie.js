const movie = {
    name: 'movie',
    title: 'Movie',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            description: 'Write the movie title here.'
        },
        {
            name: 'actor',
            title: 'Actor',
            type: 'reference',
            to: [{type: 'actor'}]
        }
    ]
}

export default movie;