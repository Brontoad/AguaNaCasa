import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\OrderController::index
 * @see app/Http/Controllers/OrderController.php:18
 * @route '/user/order'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/user/order',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\OrderController::index
 * @see app/Http/Controllers/OrderController.php:18
 * @route '/user/order'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\OrderController::index
 * @see app/Http/Controllers/OrderController.php:18
 * @route '/user/order'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\OrderController::index
 * @see app/Http/Controllers/OrderController.php:18
 * @route '/user/order'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\OrderController::index
 * @see app/Http/Controllers/OrderController.php:18
 * @route '/user/order'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\OrderController::index
 * @see app/Http/Controllers/OrderController.php:18
 * @route '/user/order'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\OrderController::index
 * @see app/Http/Controllers/OrderController.php:18
 * @route '/user/order'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \App\Http\Controllers\OrderController::order
 * @see app/Http/Controllers/OrderController.php:0
 * @route '/station/orders'
 */
const order19aa18b67be288a64532029aeee0a38e = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: order19aa18b67be288a64532029aeee0a38e.url(options),
    method: 'get',
})

order19aa18b67be288a64532029aeee0a38e.definition = {
    methods: ["get","head"],
    url: '/station/orders',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\OrderController::order
 * @see app/Http/Controllers/OrderController.php:0
 * @route '/station/orders'
 */
order19aa18b67be288a64532029aeee0a38e.url = (options?: RouteQueryOptions) => {
    return order19aa18b67be288a64532029aeee0a38e.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\OrderController::order
 * @see app/Http/Controllers/OrderController.php:0
 * @route '/station/orders'
 */
order19aa18b67be288a64532029aeee0a38e.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: order19aa18b67be288a64532029aeee0a38e.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\OrderController::order
 * @see app/Http/Controllers/OrderController.php:0
 * @route '/station/orders'
 */
order19aa18b67be288a64532029aeee0a38e.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: order19aa18b67be288a64532029aeee0a38e.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\OrderController::order
 * @see app/Http/Controllers/OrderController.php:0
 * @route '/station/orders'
 */
    const order19aa18b67be288a64532029aeee0a38eForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: order19aa18b67be288a64532029aeee0a38e.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\OrderController::order
 * @see app/Http/Controllers/OrderController.php:0
 * @route '/station/orders'
 */
        order19aa18b67be288a64532029aeee0a38eForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: order19aa18b67be288a64532029aeee0a38e.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\OrderController::order
 * @see app/Http/Controllers/OrderController.php:0
 * @route '/station/orders'
 */
        order19aa18b67be288a64532029aeee0a38eForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: order19aa18b67be288a64532029aeee0a38e.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    order19aa18b67be288a64532029aeee0a38e.form = order19aa18b67be288a64532029aeee0a38eForm
    /**
* @see \App\Http\Controllers\OrderController::order
 * @see app/Http/Controllers/OrderController.php:0
 * @route '/rider/orders'
 */
const order838dd9d5f1d14b006ac82d8c366dfe7c = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: order838dd9d5f1d14b006ac82d8c366dfe7c.url(options),
    method: 'get',
})

order838dd9d5f1d14b006ac82d8c366dfe7c.definition = {
    methods: ["get","head"],
    url: '/rider/orders',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\OrderController::order
 * @see app/Http/Controllers/OrderController.php:0
 * @route '/rider/orders'
 */
order838dd9d5f1d14b006ac82d8c366dfe7c.url = (options?: RouteQueryOptions) => {
    return order838dd9d5f1d14b006ac82d8c366dfe7c.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\OrderController::order
 * @see app/Http/Controllers/OrderController.php:0
 * @route '/rider/orders'
 */
order838dd9d5f1d14b006ac82d8c366dfe7c.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: order838dd9d5f1d14b006ac82d8c366dfe7c.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\OrderController::order
 * @see app/Http/Controllers/OrderController.php:0
 * @route '/rider/orders'
 */
order838dd9d5f1d14b006ac82d8c366dfe7c.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: order838dd9d5f1d14b006ac82d8c366dfe7c.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\OrderController::order
 * @see app/Http/Controllers/OrderController.php:0
 * @route '/rider/orders'
 */
    const order838dd9d5f1d14b006ac82d8c366dfe7cForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: order838dd9d5f1d14b006ac82d8c366dfe7c.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\OrderController::order
 * @see app/Http/Controllers/OrderController.php:0
 * @route '/rider/orders'
 */
        order838dd9d5f1d14b006ac82d8c366dfe7cForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: order838dd9d5f1d14b006ac82d8c366dfe7c.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\OrderController::order
 * @see app/Http/Controllers/OrderController.php:0
 * @route '/rider/orders'
 */
        order838dd9d5f1d14b006ac82d8c366dfe7cForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: order838dd9d5f1d14b006ac82d8c366dfe7c.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    order838dd9d5f1d14b006ac82d8c366dfe7c.form = order838dd9d5f1d14b006ac82d8c366dfe7cForm

export const order = {
    '/station/orders': order19aa18b67be288a64532029aeee0a38e,
    '/rider/orders': order838dd9d5f1d14b006ac82d8c366dfe7c,
}

const OrderController = { index, order }

export default OrderController