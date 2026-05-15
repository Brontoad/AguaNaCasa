import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
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
const system_fee = {
    store: Object.assign(store, store),
}

export default system_fee