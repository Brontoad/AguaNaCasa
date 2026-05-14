import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\DashboardController::dashboard
 * @see app/Http/Controllers/DashboardController.php:17
 * @route '/user/dashboard'
 */
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/user/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\DashboardController::dashboard
 * @see app/Http/Controllers/DashboardController.php:17
 * @route '/user/dashboard'
 */
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DashboardController::dashboard
 * @see app/Http/Controllers/DashboardController.php:17
 * @route '/user/dashboard'
 */
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\DashboardController::dashboard
 * @see app/Http/Controllers/DashboardController.php:17
 * @route '/user/dashboard'
 */
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\DashboardController::dashboard
 * @see app/Http/Controllers/DashboardController.php:17
 * @route '/user/dashboard'
 */
    const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: dashboard.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\DashboardController::dashboard
 * @see app/Http/Controllers/DashboardController.php:17
 * @route '/user/dashboard'
 */
        dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: dashboard.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\DashboardController::dashboard
 * @see app/Http/Controllers/DashboardController.php:17
 * @route '/user/dashboard'
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
* @see \App\Http\Controllers\StationController::station
 * @see app/Http/Controllers/StationController.php:34
 * @route '/user/station'
 */
export const station = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: station.url(options),
    method: 'get',
})

station.definition = {
    methods: ["get","head"],
    url: '/user/station',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\StationController::station
 * @see app/Http/Controllers/StationController.php:34
 * @route '/user/station'
 */
station.url = (options?: RouteQueryOptions) => {
    return station.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\StationController::station
 * @see app/Http/Controllers/StationController.php:34
 * @route '/user/station'
 */
station.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: station.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\StationController::station
 * @see app/Http/Controllers/StationController.php:34
 * @route '/user/station'
 */
station.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: station.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\StationController::station
 * @see app/Http/Controllers/StationController.php:34
 * @route '/user/station'
 */
    const stationForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: station.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\StationController::station
 * @see app/Http/Controllers/StationController.php:34
 * @route '/user/station'
 */
        stationForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: station.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\StationController::station
 * @see app/Http/Controllers/StationController.php:34
 * @route '/user/station'
 */
        stationForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: station.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    station.form = stationForm
/**
* @see \App\Http\Controllers\OrderController::order
 * @see app/Http/Controllers/OrderController.php:22
 * @route '/user/order'
 */
export const order = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: order.url(options),
    method: 'get',
})

order.definition = {
    methods: ["get","head"],
    url: '/user/order',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\OrderController::order
 * @see app/Http/Controllers/OrderController.php:22
 * @route '/user/order'
 */
order.url = (options?: RouteQueryOptions) => {
    return order.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\OrderController::order
 * @see app/Http/Controllers/OrderController.php:22
 * @route '/user/order'
 */
order.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: order.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\OrderController::order
 * @see app/Http/Controllers/OrderController.php:22
 * @route '/user/order'
 */
order.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: order.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\OrderController::order
 * @see app/Http/Controllers/OrderController.php:22
 * @route '/user/order'
 */
    const orderForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: order.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\OrderController::order
 * @see app/Http/Controllers/OrderController.php:22
 * @route '/user/order'
 */
        orderForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: order.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\OrderController::order
 * @see app/Http/Controllers/OrderController.php:22
 * @route '/user/order'
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
* @see \App\Http\Controllers\SubscriptionController::subscription
 * @see app/Http/Controllers/SubscriptionController.php:18
 * @route '/user/subscription'
 */
export const subscription = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: subscription.url(options),
    method: 'get',
})

subscription.definition = {
    methods: ["get","head"],
    url: '/user/subscription',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SubscriptionController::subscription
 * @see app/Http/Controllers/SubscriptionController.php:18
 * @route '/user/subscription'
 */
subscription.url = (options?: RouteQueryOptions) => {
    return subscription.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SubscriptionController::subscription
 * @see app/Http/Controllers/SubscriptionController.php:18
 * @route '/user/subscription'
 */
subscription.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: subscription.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\SubscriptionController::subscription
 * @see app/Http/Controllers/SubscriptionController.php:18
 * @route '/user/subscription'
 */
subscription.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: subscription.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\SubscriptionController::subscription
 * @see app/Http/Controllers/SubscriptionController.php:18
 * @route '/user/subscription'
 */
    const subscriptionForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: subscription.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\SubscriptionController::subscription
 * @see app/Http/Controllers/SubscriptionController.php:18
 * @route '/user/subscription'
 */
        subscriptionForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: subscription.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\SubscriptionController::subscription
 * @see app/Http/Controllers/SubscriptionController.php:18
 * @route '/user/subscription'
 */
        subscriptionForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: subscription.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    subscription.form = subscriptionForm
/**
* @see \App\Http\Controllers\ProfileController::profile
 * @see app/Http/Controllers/ProfileController.php:11
 * @route '/user/profile'
 */
export const profile = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: profile.url(options),
    method: 'get',
})

profile.definition = {
    methods: ["get","head"],
    url: '/user/profile',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ProfileController::profile
 * @see app/Http/Controllers/ProfileController.php:11
 * @route '/user/profile'
 */
profile.url = (options?: RouteQueryOptions) => {
    return profile.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProfileController::profile
 * @see app/Http/Controllers/ProfileController.php:11
 * @route '/user/profile'
 */
profile.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: profile.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ProfileController::profile
 * @see app/Http/Controllers/ProfileController.php:11
 * @route '/user/profile'
 */
profile.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: profile.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ProfileController::profile
 * @see app/Http/Controllers/ProfileController.php:11
 * @route '/user/profile'
 */
    const profileForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: profile.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ProfileController::profile
 * @see app/Http/Controllers/ProfileController.php:11
 * @route '/user/profile'
 */
        profileForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: profile.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ProfileController::profile
 * @see app/Http/Controllers/ProfileController.php:11
 * @route '/user/profile'
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
const user = {
    dashboard: Object.assign(dashboard, dashboard),
station: Object.assign(station, station),
order: Object.assign(order, order),
subscription: Object.assign(subscription, subscription),
profile: Object.assign(profile, profile),
}

export default user