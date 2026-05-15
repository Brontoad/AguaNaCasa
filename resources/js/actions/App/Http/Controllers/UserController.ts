import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\UserController::store
 * @see app/Http/Controllers/UserController.php:60
 * @route '/user'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/user',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\UserController::store
 * @see app/Http/Controllers/UserController.php:60
 * @route '/user'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserController::store
 * @see app/Http/Controllers/UserController.php:60
 * @route '/user'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\UserController::store
 * @see app/Http/Controllers/UserController.php:60
 * @route '/user'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\UserController::store
 * @see app/Http/Controllers/UserController.php:60
 * @route '/user'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\UserController::index
 * @see app/Http/Controllers/UserController.php:19
 * @route '/admin/user'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/user',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\UserController::index
 * @see app/Http/Controllers/UserController.php:19
 * @route '/admin/user'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserController::index
 * @see app/Http/Controllers/UserController.php:19
 * @route '/admin/user'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\UserController::index
 * @see app/Http/Controllers/UserController.php:19
 * @route '/admin/user'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\UserController::index
 * @see app/Http/Controllers/UserController.php:19
 * @route '/admin/user'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\UserController::index
 * @see app/Http/Controllers/UserController.php:19
 * @route '/admin/user'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\UserController::index
 * @see app/Http/Controllers/UserController.php:19
 * @route '/admin/user'
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
* @see \App\Http\Controllers\UserController::suspend
 * @see app/Http/Controllers/UserController.php:179
 * @route '/user/suspend'
 */
export const suspend = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: suspend.url(options),
    method: 'put',
})

suspend.definition = {
    methods: ["put"],
    url: '/user/suspend',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\UserController::suspend
 * @see app/Http/Controllers/UserController.php:179
 * @route '/user/suspend'
 */
suspend.url = (options?: RouteQueryOptions) => {
    return suspend.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserController::suspend
 * @see app/Http/Controllers/UserController.php:179
 * @route '/user/suspend'
 */
suspend.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: suspend.url(options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\UserController::suspend
 * @see app/Http/Controllers/UserController.php:179
 * @route '/user/suspend'
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
* @see \App\Http\Controllers\UserController::suspend
 * @see app/Http/Controllers/UserController.php:179
 * @route '/user/suspend'
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
const UserController = { store, index, suspend }

export default UserController