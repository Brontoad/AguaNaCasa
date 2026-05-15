import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\StationController::store
 * @see app/Http/Controllers/StationController.php:83
 * @route '/station'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/station',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\StationController::store
 * @see app/Http/Controllers/StationController.php:83
 * @route '/station'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\StationController::store
 * @see app/Http/Controllers/StationController.php:83
 * @route '/station'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\StationController::store
 * @see app/Http/Controllers/StationController.php:83
 * @route '/station'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\StationController::store
 * @see app/Http/Controllers/StationController.php:83
 * @route '/station'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\StationController::index
 * @see app/Http/Controllers/StationController.php:34
 * @route '/user/station'
 */
const indexe612bfb895298d3425ac8f746e39bb97 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexe612bfb895298d3425ac8f746e39bb97.url(options),
    method: 'get',
})

indexe612bfb895298d3425ac8f746e39bb97.definition = {
    methods: ["get","head"],
    url: '/user/station',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\StationController::index
 * @see app/Http/Controllers/StationController.php:34
 * @route '/user/station'
 */
indexe612bfb895298d3425ac8f746e39bb97.url = (options?: RouteQueryOptions) => {
    return indexe612bfb895298d3425ac8f746e39bb97.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\StationController::index
 * @see app/Http/Controllers/StationController.php:34
 * @route '/user/station'
 */
indexe612bfb895298d3425ac8f746e39bb97.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexe612bfb895298d3425ac8f746e39bb97.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\StationController::index
 * @see app/Http/Controllers/StationController.php:34
 * @route '/user/station'
 */
indexe612bfb895298d3425ac8f746e39bb97.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexe612bfb895298d3425ac8f746e39bb97.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\StationController::index
 * @see app/Http/Controllers/StationController.php:34
 * @route '/user/station'
 */
    const indexe612bfb895298d3425ac8f746e39bb97Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: indexe612bfb895298d3425ac8f746e39bb97.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\StationController::index
 * @see app/Http/Controllers/StationController.php:34
 * @route '/user/station'
 */
        indexe612bfb895298d3425ac8f746e39bb97Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: indexe612bfb895298d3425ac8f746e39bb97.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\StationController::index
 * @see app/Http/Controllers/StationController.php:34
 * @route '/user/station'
 */
        indexe612bfb895298d3425ac8f746e39bb97Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: indexe612bfb895298d3425ac8f746e39bb97.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    indexe612bfb895298d3425ac8f746e39bb97.form = indexe612bfb895298d3425ac8f746e39bb97Form
    /**
* @see \App\Http\Controllers\StationController::index
 * @see app/Http/Controllers/StationController.php:34
 * @route '/admin/station'
 */
const indexc4c8014ff1ae79815ca9f8950eef604b = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexc4c8014ff1ae79815ca9f8950eef604b.url(options),
    method: 'get',
})

indexc4c8014ff1ae79815ca9f8950eef604b.definition = {
    methods: ["get","head"],
    url: '/admin/station',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\StationController::index
 * @see app/Http/Controllers/StationController.php:34
 * @route '/admin/station'
 */
indexc4c8014ff1ae79815ca9f8950eef604b.url = (options?: RouteQueryOptions) => {
    return indexc4c8014ff1ae79815ca9f8950eef604b.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\StationController::index
 * @see app/Http/Controllers/StationController.php:34
 * @route '/admin/station'
 */
indexc4c8014ff1ae79815ca9f8950eef604b.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexc4c8014ff1ae79815ca9f8950eef604b.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\StationController::index
 * @see app/Http/Controllers/StationController.php:34
 * @route '/admin/station'
 */
indexc4c8014ff1ae79815ca9f8950eef604b.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexc4c8014ff1ae79815ca9f8950eef604b.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\StationController::index
 * @see app/Http/Controllers/StationController.php:34
 * @route '/admin/station'
 */
    const indexc4c8014ff1ae79815ca9f8950eef604bForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: indexc4c8014ff1ae79815ca9f8950eef604b.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\StationController::index
 * @see app/Http/Controllers/StationController.php:34
 * @route '/admin/station'
 */
        indexc4c8014ff1ae79815ca9f8950eef604bForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: indexc4c8014ff1ae79815ca9f8950eef604b.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\StationController::index
 * @see app/Http/Controllers/StationController.php:34
 * @route '/admin/station'
 */
        indexc4c8014ff1ae79815ca9f8950eef604bForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: indexc4c8014ff1ae79815ca9f8950eef604b.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    indexc4c8014ff1ae79815ca9f8950eef604b.form = indexc4c8014ff1ae79815ca9f8950eef604bForm

export const index = {
    '/user/station': indexe612bfb895298d3425ac8f746e39bb97,
    '/admin/station': indexc4c8014ff1ae79815ca9f8950eef604b,
}

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
const StationController = { store, index, approve, suspend }

export default StationController