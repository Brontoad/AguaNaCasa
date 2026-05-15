import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\RiderController::approve
 * @see app/Http/Controllers/RiderController.php:227
 * @route '/rider/approve'
 */
export const approve = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: approve.url(options),
    method: 'put',
})

approve.definition = {
    methods: ["put"],
    url: '/rider/approve',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\RiderController::approve
 * @see app/Http/Controllers/RiderController.php:227
 * @route '/rider/approve'
 */
approve.url = (options?: RouteQueryOptions) => {
    return approve.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\RiderController::approve
 * @see app/Http/Controllers/RiderController.php:227
 * @route '/rider/approve'
 */
approve.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: approve.url(options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\RiderController::approve
 * @see app/Http/Controllers/RiderController.php:227
 * @route '/rider/approve'
 */
    const approveForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: approve.url({
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\RiderController::approve
 * @see app/Http/Controllers/RiderController.php:227
 * @route '/rider/approve'
 */
        approveForm.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: approve.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    approve.form = approveForm
/**
* @see \App\Http\Controllers\RiderController::suspend
 * @see app/Http/Controllers/RiderController.php:209
 * @route '/rider/suspend'
 */
export const suspend = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: suspend.url(options),
    method: 'put',
})

suspend.definition = {
    methods: ["put"],
    url: '/rider/suspend',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\RiderController::suspend
 * @see app/Http/Controllers/RiderController.php:209
 * @route '/rider/suspend'
 */
suspend.url = (options?: RouteQueryOptions) => {
    return suspend.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\RiderController::suspend
 * @see app/Http/Controllers/RiderController.php:209
 * @route '/rider/suspend'
 */
suspend.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: suspend.url(options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\RiderController::suspend
 * @see app/Http/Controllers/RiderController.php:209
 * @route '/rider/suspend'
 */
    const suspendForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: suspend.url({
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\RiderController::suspend
 * @see app/Http/Controllers/RiderController.php:209
 * @route '/rider/suspend'
 */
        suspendForm.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: suspend.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    suspend.form = suspendForm
const rider = {
    approve: Object.assign(approve, approve),
suspend: Object.assign(suspend, suspend),
}

export default rider