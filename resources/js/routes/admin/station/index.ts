import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\StationController::approve
 * @see app/Http/Controllers/StationController.php:156
 * @route '/station/approve'
 */
export const approve = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: approve.url(options),
    method: 'put',
})

approve.definition = {
    methods: ["put"],
    url: '/station/approve',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\StationController::approve
 * @see app/Http/Controllers/StationController.php:156
 * @route '/station/approve'
 */
approve.url = (options?: RouteQueryOptions) => {
    return approve.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\StationController::approve
 * @see app/Http/Controllers/StationController.php:156
 * @route '/station/approve'
 */
approve.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: approve.url(options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\StationController::approve
 * @see app/Http/Controllers/StationController.php:156
 * @route '/station/approve'
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
* @see \App\Http\Controllers\StationController::approve
 * @see app/Http/Controllers/StationController.php:156
 * @route '/station/approve'
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
* @see \App\Http\Controllers\StationController::suspend
 * @see app/Http/Controllers/StationController.php:171
 * @route '/station/suspend'
 */
export const suspend = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: suspend.url(options),
    method: 'put',
})

suspend.definition = {
    methods: ["put"],
    url: '/station/suspend',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\StationController::suspend
 * @see app/Http/Controllers/StationController.php:171
 * @route '/station/suspend'
 */
suspend.url = (options?: RouteQueryOptions) => {
    return suspend.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\StationController::suspend
 * @see app/Http/Controllers/StationController.php:171
 * @route '/station/suspend'
 */
suspend.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: suspend.url(options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\StationController::suspend
 * @see app/Http/Controllers/StationController.php:171
 * @route '/station/suspend'
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
* @see \App\Http\Controllers\StationController::suspend
 * @see app/Http/Controllers/StationController.php:171
 * @route '/station/suspend'
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
const station = {
    approve: Object.assign(approve, approve),
suspend: Object.assign(suspend, suspend),
}

export default station