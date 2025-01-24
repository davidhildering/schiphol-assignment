import { http, HttpResponse } from 'msw'
import flights from '../data/flights.json'

const handlers = [
    // Intercept "GET /flights" requests...
    http.get('/flights', () => {
        // ...and respond to them using this JSON response.
        return HttpResponse.json(flights)
    }),
]

export default handlers;