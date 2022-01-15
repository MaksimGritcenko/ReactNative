import algoliasearch from 'algoliasearch/lite';

export const getConditionalSearchQuery = () => ({
    search(requests) {
      if (
        requests.every(
            ({params}) => typeof params.query !== 'string' || !params.query.trim()
        )
      ) {
        // Here we have to do something else
        return Promise.resolve({
          results: requests.map(() => ({
            hits: [],
            nbHits: 0,
            nbPages: 0,
            processingTimeMS: 0,
          })),
        });
      }

      const searchClient = algoliasearch(
        'B9DIM6R7DB',
        'eb925579bcd9ea5c216cd8aec6a6a99e'
      );

      return searchClient.search(requests);
    },
});
