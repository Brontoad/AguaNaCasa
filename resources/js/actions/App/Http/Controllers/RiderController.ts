import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\RiderController::store
 * @see app/Http/Controllers/RiderController.php:60
 * @route '/rider'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/rider',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\RiderController::store
 * @see app/Http/Controllers/RiderController.php:60
 * @route '/rider'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\RiderController::store
 * @see app/Http/Controllers/RiderController.php:60
 * @route '/rider'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\RiderController::store
 * @see app/Http/Controllers/RiderController.php:60
 * @route '/rider'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\RiderController::store
 * @see app/Http/Controllers/RiderController.php:60
 * @route '/rider'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
const RiderController = { store }

export default RiderController