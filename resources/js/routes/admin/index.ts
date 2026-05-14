import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\DashboardController::dashboard
 * @see app/Http/Controllers/DashboardController.php:114
 * @route '/admin/dashboard'
 */
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/admin/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\DashboardController::dashboard
 * @see app/Http/Controllers/DashboardController.php:114
 * @route '/admin/dashboard'
 */
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DashboardController::dashboard
 * @see app/Http/Controllers/DashboardController.php:114
 * @route '/admin/dashboard'
 */
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\DashboardController::dashboard
 * @see app/Http/Controllers/DashboardController.php:114
 * @route '/admin/dashboard'
 */
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\DashboardController::dashboard
 * @see app/Http/Controllers/DashboardController.php:114
 * @route '/admin/dashboard'
 */
    const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: dashboard.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\DashboardController::dashboard
 * @see app/Http/Controllers/DashboardController.php:114
 * @route '/admin/dashboard'
 */
        dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: dashboard.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\DashboardController::dashboard
 * @see app/Http/Controllers/DashboardController.php:114
 * @route '/admin/dashboard'
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
 * @route '/admin/stations'
 */
export const station = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: station.url(options),
    method: 'get',
})

station.definition = {
    methods: ["get","head"],
    url: '/admin/stations',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\StationController::station
 * @see app/Http/Controllers/StationController.php:34
 * @route '/admin/stations'
 */
station.url = (options?: RouteQueryOptions) => {
    return station.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\StationController::station
 * @see app/Http/Controllers/StationController.php:34
 * @route '/admin/stations'
 */
station.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: station.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\StationController::station
 * @see app/Http/Controllers/StationController.php:34
 * @route '/admin/stations'
 */
station.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: station.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\StationController::station
 * @see app/Http/Controllers/StationController.php:34
 * @route '/admin/stations'
 */
    const stationForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: station.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\StationController::station
 * @see app/Http/Controllers/StationController.php:34
 * @route '/admin/stations'
 */
        stationForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: station.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\StationController::station
 * @see app/Http/Controllers/StationController.php:34
 * @route '/admin/stations'
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
const admin = {
    dashboard: Object.assign(dashboard, dashboard),
station: Object.assign(station, station),
}

export default admin