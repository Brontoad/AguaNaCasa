import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\SaleController::index
 * @see app/Http/Controllers/SaleController.php:16
 * @route '/station/sale'
 */
const index4b39ab4cbf6527c081beb0b9bb11c908 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index4b39ab4cbf6527c081beb0b9bb11c908.url(options),
    method: 'get',
})

index4b39ab4cbf6527c081beb0b9bb11c908.definition = {
    methods: ["get","head"],
    url: '/station/sale',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SaleController::index
 * @see app/Http/Controllers/SaleController.php:16
 * @route '/station/sale'
 */
index4b39ab4cbf6527c081beb0b9bb11c908.url = (options?: RouteQueryOptions) => {
    return index4b39ab4cbf6527c081beb0b9bb11c908.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SaleController::index
 * @see app/Http/Controllers/SaleController.php:16
 * @route '/station/sale'
 */
index4b39ab4cbf6527c081beb0b9bb11c908.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index4b39ab4cbf6527c081beb0b9bb11c908.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\SaleController::index
 * @see app/Http/Controllers/SaleController.php:16
 * @route '/station/sale'
 */
index4b39ab4cbf6527c081beb0b9bb11c908.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index4b39ab4cbf6527c081beb0b9bb11c908.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\SaleController::index
 * @see app/Http/Controllers/SaleController.php:16
 * @route '/station/sale'
 */
    const index4b39ab4cbf6527c081beb0b9bb11c908Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index4b39ab4cbf6527c081beb0b9bb11c908.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\SaleController::index
 * @see app/Http/Controllers/SaleController.php:16
 * @route '/station/sale'
 */
        index4b39ab4cbf6527c081beb0b9bb11c908Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index4b39ab4cbf6527c081beb0b9bb11c908.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\SaleController::index
 * @see app/Http/Controllers/SaleController.php:16
 * @route '/station/sale'
 */
        index4b39ab4cbf6527c081beb0b9bb11c908Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index4b39ab4cbf6527c081beb0b9bb11c908.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index4b39ab4cbf6527c081beb0b9bb11c908.form = index4b39ab4cbf6527c081beb0b9bb11c908Form
    /**
* @see \App\Http\Controllers\SaleController::index
 * @see app/Http/Controllers/SaleController.php:16
 * @route '/admin/sale'
 */
const index31b63a4a9a58645ff1f4e068bf9c296c = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index31b63a4a9a58645ff1f4e068bf9c296c.url(options),
    method: 'get',
})

index31b63a4a9a58645ff1f4e068bf9c296c.definition = {
    methods: ["get","head"],
    url: '/admin/sale',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SaleController::index
 * @see app/Http/Controllers/SaleController.php:16
 * @route '/admin/sale'
 */
index31b63a4a9a58645ff1f4e068bf9c296c.url = (options?: RouteQueryOptions) => {
    return index31b63a4a9a58645ff1f4e068bf9c296c.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SaleController::index
 * @see app/Http/Controllers/SaleController.php:16
 * @route '/admin/sale'
 */
index31b63a4a9a58645ff1f4e068bf9c296c.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index31b63a4a9a58645ff1f4e068bf9c296c.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\SaleController::index
 * @see app/Http/Controllers/SaleController.php:16
 * @route '/admin/sale'
 */
index31b63a4a9a58645ff1f4e068bf9c296c.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index31b63a4a9a58645ff1f4e068bf9c296c.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\SaleController::index
 * @see app/Http/Controllers/SaleController.php:16
 * @route '/admin/sale'
 */
    const index31b63a4a9a58645ff1f4e068bf9c296cForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index31b63a4a9a58645ff1f4e068bf9c296c.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\SaleController::index
 * @see app/Http/Controllers/SaleController.php:16
 * @route '/admin/sale'
 */
        index31b63a4a9a58645ff1f4e068bf9c296cForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index31b63a4a9a58645ff1f4e068bf9c296c.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\SaleController::index
 * @see app/Http/Controllers/SaleController.php:16
 * @route '/admin/sale'
 */
        index31b63a4a9a58645ff1f4e068bf9c296cForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index31b63a4a9a58645ff1f4e068bf9c296c.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index31b63a4a9a58645ff1f4e068bf9c296c.form = index31b63a4a9a58645ff1f4e068bf9c296cForm

export const index = {
    '/station/sale': index4b39ab4cbf6527c081beb0b9bb11c908,
    '/admin/sale': index31b63a4a9a58645ff1f4e068bf9c296c,
}

const SaleController = { index }

export default SaleController