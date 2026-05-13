import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\DashboardController::user
 * @see app/Http/Controllers/DashboardController.php:16
 * @route '/user/dashboard'
 */
export const user = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: user.url(options),
    method: 'get',
})

user.definition = {
    methods: ["get","head"],
    url: '/user/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\DashboardController::user
 * @see app/Http/Controllers/DashboardController.php:16
 * @route '/user/dashboard'
 */
user.url = (options?: RouteQueryOptions) => {
    return user.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DashboardController::user
 * @see app/Http/Controllers/DashboardController.php:16
 * @route '/user/dashboard'
 */
user.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: user.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\DashboardController::user
 * @see app/Http/Controllers/DashboardController.php:16
 * @route '/user/dashboard'
 */
user.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: user.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\DashboardController::user
 * @see app/Http/Controllers/DashboardController.php:16
 * @route '/user/dashboard'
 */
    const userForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: user.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\DashboardController::user
 * @see app/Http/Controllers/DashboardController.php:16
 * @route '/user/dashboard'
 */
        userForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: user.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\DashboardController::user
 * @see app/Http/Controllers/DashboardController.php:16
 * @route '/user/dashboard'
 */
        userForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: user.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    user.form = userForm
/**
* @see \App\Http\Controllers\DashboardController::station
 * @see app/Http/Controllers/DashboardController.php:33
 * @route '/station/dashboard'
 */
export const station = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: station.url(options),
    method: 'get',
})

station.definition = {
    methods: ["get","head"],
    url: '/station/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\DashboardController::station
 * @see app/Http/Controllers/DashboardController.php:33
 * @route '/station/dashboard'
 */
station.url = (options?: RouteQueryOptions) => {
    return station.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DashboardController::station
 * @see app/Http/Controllers/DashboardController.php:33
 * @route '/station/dashboard'
 */
station.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: station.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\DashboardController::station
 * @see app/Http/Controllers/DashboardController.php:33
 * @route '/station/dashboard'
 */
station.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: station.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\DashboardController::station
 * @see app/Http/Controllers/DashboardController.php:33
 * @route '/station/dashboard'
 */
    const stationForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: station.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\DashboardController::station
 * @see app/Http/Controllers/DashboardController.php:33
 * @route '/station/dashboard'
 */
        stationForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: station.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\DashboardController::station
 * @see app/Http/Controllers/DashboardController.php:33
 * @route '/station/dashboard'
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
* @see \App\Http\Controllers\DashboardController::rider
 * @see app/Http/Controllers/DashboardController.php:59
 * @route '/rider/dashboard'
 */
export const rider = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: rider.url(options),
    method: 'get',
})

rider.definition = {
    methods: ["get","head"],
    url: '/rider/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\DashboardController::rider
 * @see app/Http/Controllers/DashboardController.php:59
 * @route '/rider/dashboard'
 */
rider.url = (options?: RouteQueryOptions) => {
    return rider.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DashboardController::rider
 * @see app/Http/Controllers/DashboardController.php:59
 * @route '/rider/dashboard'
 */
rider.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: rider.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\DashboardController::rider
 * @see app/Http/Controllers/DashboardController.php:59
 * @route '/rider/dashboard'
 */
rider.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: rider.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\DashboardController::rider
 * @see app/Http/Controllers/DashboardController.php:59
 * @route '/rider/dashboard'
 */
    const riderForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: rider.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\DashboardController::rider
 * @see app/Http/Controllers/DashboardController.php:59
 * @route '/rider/dashboard'
 */
        riderForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: rider.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\DashboardController::rider
 * @see app/Http/Controllers/DashboardController.php:59
 * @route '/rider/dashboard'
 */
        riderForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: rider.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    rider.form = riderForm
/**
* @see \App\Http\Controllers\DashboardController::admin
 * @see app/Http/Controllers/DashboardController.php:76
 * @route '/admin/dashboard'
 */
export const admin = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: admin.url(options),
    method: 'get',
})

admin.definition = {
    methods: ["get","head"],
    url: '/admin/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\DashboardController::admin
 * @see app/Http/Controllers/DashboardController.php:76
 * @route '/admin/dashboard'
 */
admin.url = (options?: RouteQueryOptions) => {
    return admin.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DashboardController::admin
 * @see app/Http/Controllers/DashboardController.php:76
 * @route '/admin/dashboard'
 */
admin.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: admin.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\DashboardController::admin
 * @see app/Http/Controllers/DashboardController.php:76
 * @route '/admin/dashboard'
 */
admin.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: admin.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\DashboardController::admin
 * @see app/Http/Controllers/DashboardController.php:76
 * @route '/admin/dashboard'
 */
    const adminForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: admin.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\DashboardController::admin
 * @see app/Http/Controllers/DashboardController.php:76
 * @route '/admin/dashboard'
 */
        adminForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: admin.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\DashboardController::admin
 * @see app/Http/Controllers/DashboardController.php:76
 * @route '/admin/dashboard'
 */
        adminForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: admin.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    admin.form = adminForm
const DashboardController = { user, station, rider, admin }

export default DashboardController