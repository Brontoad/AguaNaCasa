import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
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
const user = {
    suspend: Object.assign(suspend, suspend),
}

export default user