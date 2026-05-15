import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\SystemFeeController::pay
 * @see app/Http/Controllers/SystemFeeController.php:33
 * @route '/system_fee/pay'
 */
export const pay = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: pay.url(options),
    method: 'put',
})

pay.definition = {
    methods: ["put"],
    url: '/system_fee/pay',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\SystemFeeController::pay
 * @see app/Http/Controllers/SystemFeeController.php:33
 * @route '/system_fee/pay'
 */
pay.url = (options?: RouteQueryOptions) => {
    return pay.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SystemFeeController::pay
 * @see app/Http/Controllers/SystemFeeController.php:33
 * @route '/system_fee/pay'
 */
pay.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: pay.url(options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\SystemFeeController::pay
 * @see app/Http/Controllers/SystemFeeController.php:33
 * @route '/system_fee/pay'
 */
    const payForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: pay.url({
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\SystemFeeController::pay
 * @see app/Http/Controllers/SystemFeeController.php:33
 * @route '/system_fee/pay'
 */
        payForm.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: pay.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    pay.form = payForm
/**
* @see \App\Http\Controllers\SystemFeeController::store
 * @see app/Http/Controllers/SystemFeeController.php:14
 * @route '/system_fee'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/system_fee',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SystemFeeController::store
 * @see app/Http/Controllers/SystemFeeController.php:14
 * @route '/system_fee'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SystemFeeController::store
 * @see app/Http/Controllers/SystemFeeController.php:14
 * @route '/system_fee'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\SystemFeeController::store
 * @see app/Http/Controllers/SystemFeeController.php:14
 * @route '/system_fee'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\SystemFeeController::store
 * @see app/Http/Controllers/SystemFeeController.php:14
 * @route '/system_fee'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
const SystemFeeController = { pay, store }

export default SystemFeeController