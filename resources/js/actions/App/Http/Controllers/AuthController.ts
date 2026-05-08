import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\AuthController::login
 * @see app/Http/Controllers/AuthController.php:12
 * @route '/login'
 */
export const login = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: login.url(options),
    method: 'post',
})

login.definition = {
    methods: ["post"],
    url: '/login',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AuthController::login
 * @see app/Http/Controllers/AuthController.php:12
 * @route '/login'
 */
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuthController::login
 * @see app/Http/Controllers/AuthController.php:12
 * @route '/login'
 */
login.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: login.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\AuthController::login
 * @see app/Http/Controllers/AuthController.php:12
 * @route '/login'
 */
    const loginForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: login.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AuthController::login
 * @see app/Http/Controllers/AuthController.php:12
 * @route '/login'
 */
        loginForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: login.url(options),
            method: 'post',
        })
    
    login.form = loginForm
/**
* @see \App\Http\Controllers\AuthController::logout
 * @see app/Http/Controllers/AuthController.php:56
 * @route '/logout'
 */
export const logout = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: logout.url(options),
    method: 'get',
})

logout.definition = {
    methods: ["get","head"],
    url: '/logout',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AuthController::logout
 * @see app/Http/Controllers/AuthController.php:56
 * @route '/logout'
 */
logout.url = (options?: RouteQueryOptions) => {
    return logout.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuthController::logout
 * @see app/Http/Controllers/AuthController.php:56
 * @route '/logout'
 */
logout.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: logout.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AuthController::logout
 * @see app/Http/Controllers/AuthController.php:56
 * @route '/logout'
 */
logout.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: logout.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\AuthController::logout
 * @see app/Http/Controllers/AuthController.php:56
 * @route '/logout'
 */
    const logoutForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: logout.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\AuthController::logout
 * @see app/Http/Controllers/AuthController.php:56
 * @route '/logout'
 */
        logoutForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: logout.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\AuthController::logout
 * @see app/Http/Controllers/AuthController.php:56
 * @route '/logout'
 */
        logoutForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: logout.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    logout.form = logoutForm
const AuthController = { login, logout }

export default AuthController