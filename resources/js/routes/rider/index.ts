import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\DashboardController::dashboard
 * @see app/Http/Controllers/DashboardController.php:62
 * @route '/rider/dashboard'
 */
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/rider/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\DashboardController::dashboard
 * @see app/Http/Controllers/DashboardController.php:62
 * @route '/rider/dashboard'
 */
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DashboardController::dashboard
 * @see app/Http/Controllers/DashboardController.php:62
 * @route '/rider/dashboard'
 */
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\DashboardController::dashboard
 * @see app/Http/Controllers/DashboardController.php:62
 * @route '/rider/dashboard'
 */
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\DashboardController::dashboard
 * @see app/Http/Controllers/DashboardController.php:62
 * @route '/rider/dashboard'
 */
    const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: dashboard.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\DashboardController::dashboard
 * @see app/Http/Controllers/DashboardController.php:62
 * @route '/rider/dashboard'
 */
        dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: dashboard.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\DashboardController::dashboard
 * @see app/Http/Controllers/DashboardController.php:62
 * @route '/rider/dashboard'
 */
        dashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: dashboard.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    dashboard.form = dashboardForm
/**
* @see \App\Http\Controllers\OrderController::order
 * @see app/Http/Controllers/OrderController.php:0
 * @route '/rider/orders'
 */
export const order = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: order.url(options),
    method: 'get',
})

order.definition = {
    methods: ["get","head"],
    url: '/rider/orders',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\OrderController::order
 * @see app/Http/Controllers/OrderController.php:0
 * @route '/rider/orders'
 */
order.url = (options?: RouteQueryOptions) => {
    return order.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\OrderController::order
 * @see app/Http/Controllers/OrderController.php:0
 * @route '/rider/orders'
 */
order.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: order.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\OrderController::order
 * @see app/Http/Controllers/OrderController.php:0
 * @route '/rider/orders'
 */
order.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: order.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\OrderController::order
 * @see app/Http/Controllers/OrderController.php:0
 * @route '/rider/orders'
 */
    const orderForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: order.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\OrderController::order
 * @see app/Http/Controllers/OrderController.php:0
 * @route '/rider/orders'
 */
        orderForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: order.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\OrderController::order
 * @see app/Http/Controllers/OrderController.php:0
 * @route '/rider/orders'
 */
        orderForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: order.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    order.form = orderForm
/**
* @see \App\Http\Controllers\ProfileController::profile
 * @see app/Http/Controllers/ProfileController.php:29
 * @route '/rider/profile'
 */
export const profile = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: profile.url(options),
    method: 'get',
})

profile.definition = {
    methods: ["get","head"],
    url: '/rider/profile',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ProfileController::profile
 * @see app/Http/Controllers/ProfileController.php:29
 * @route '/rider/profile'
 */
profile.url = (options?: RouteQueryOptions) => {
    return profile.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProfileController::profile
 * @see app/Http/Controllers/ProfileController.php:29
 * @route '/rider/profile'
 */
profile.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: profile.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ProfileController::profile
 * @see app/Http/Controllers/ProfileController.php:29
 * @route '/rider/profile'
 */
profile.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: profile.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ProfileController::profile
 * @see app/Http/Controllers/ProfileController.php:29
 * @route '/rider/profile'
 */
    const profileForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: profile.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ProfileController::profile
 * @see app/Http/Controllers/ProfileController.php:29
 * @route '/rider/profile'
 */
        profileForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: profile.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ProfileController::profile
 * @see app/Http/Controllers/ProfileController.php:29
 * @route '/rider/profile'
 */
        profileForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: profile.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    profile.form = profileForm
const rider = {
    dashboard: Object.assign(dashboard, dashboard),
order: Object.assign(order, order),
profile: Object.assign(profile, profile),
}

export default rider