import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
import station45af79 from './station'
import riderBc906a from './rider'
import productD87513 from './product'
import user3b1c2b from './user'
import system_fee from './system_fee'
/**
* @see \App\Http\Controllers\DashboardController::dashboard
 * @see app/Http/Controllers/DashboardController.php:118
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
 * @see app/Http/Controllers/DashboardController.php:118
 * @route '/admin/dashboard'
 */
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DashboardController::dashboard
 * @see app/Http/Controllers/DashboardController.php:118
 * @route '/admin/dashboard'
 */
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\DashboardController::dashboard
 * @see app/Http/Controllers/DashboardController.php:118
 * @route '/admin/dashboard'
 */
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\DashboardController::dashboard
 * @see app/Http/Controllers/DashboardController.php:118
 * @route '/admin/dashboard'
 */
    const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: dashboard.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\DashboardController::dashboard
 * @see app/Http/Controllers/DashboardController.php:118
 * @route '/admin/dashboard'
 */
        dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: dashboard.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\DashboardController::dashboard
 * @see app/Http/Controllers/DashboardController.php:118
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
 * @route '/admin/station'
 */
export const station = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: station.url(options),
    method: 'get',
})

station.definition = {
    methods: ["get","head"],
    url: '/admin/station',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\StationController::station
 * @see app/Http/Controllers/StationController.php:34
 * @route '/admin/station'
 */
station.url = (options?: RouteQueryOptions) => {
    return station.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\StationController::station
 * @see app/Http/Controllers/StationController.php:34
 * @route '/admin/station'
 */
station.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: station.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\StationController::station
 * @see app/Http/Controllers/StationController.php:34
 * @route '/admin/station'
 */
station.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: station.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\StationController::station
 * @see app/Http/Controllers/StationController.php:34
 * @route '/admin/station'
 */
    const stationForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: station.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\StationController::station
 * @see app/Http/Controllers/StationController.php:34
 * @route '/admin/station'
 */
        stationForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: station.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\StationController::station
 * @see app/Http/Controllers/StationController.php:34
 * @route '/admin/station'
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
* @see \App\Http\Controllers\RiderController::rider
 * @see app/Http/Controllers/RiderController.php:19
 * @route '/admin/rider'
 */
export const rider = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: rider.url(options),
    method: 'get',
})

rider.definition = {
    methods: ["get","head"],
    url: '/admin/rider',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\RiderController::rider
 * @see app/Http/Controllers/RiderController.php:19
 * @route '/admin/rider'
 */
rider.url = (options?: RouteQueryOptions) => {
    return rider.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\RiderController::rider
 * @see app/Http/Controllers/RiderController.php:19
 * @route '/admin/rider'
 */
rider.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: rider.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\RiderController::rider
 * @see app/Http/Controllers/RiderController.php:19
 * @route '/admin/rider'
 */
rider.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: rider.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\RiderController::rider
 * @see app/Http/Controllers/RiderController.php:19
 * @route '/admin/rider'
 */
    const riderForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: rider.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\RiderController::rider
 * @see app/Http/Controllers/RiderController.php:19
 * @route '/admin/rider'
 */
        riderForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: rider.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\RiderController::rider
 * @see app/Http/Controllers/RiderController.php:19
 * @route '/admin/rider'
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
* @see \App\Http\Controllers\ProductController::product
 * @see app/Http/Controllers/ProductController.php:19
 * @route '/admin/product'
 */
export const product = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: product.url(options),
    method: 'get',
})

product.definition = {
    methods: ["get","head"],
    url: '/admin/product',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ProductController::product
 * @see app/Http/Controllers/ProductController.php:19
 * @route '/admin/product'
 */
product.url = (options?: RouteQueryOptions) => {
    return product.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProductController::product
 * @see app/Http/Controllers/ProductController.php:19
 * @route '/admin/product'
 */
product.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: product.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ProductController::product
 * @see app/Http/Controllers/ProductController.php:19
 * @route '/admin/product'
 */
product.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: product.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ProductController::product
 * @see app/Http/Controllers/ProductController.php:19
 * @route '/admin/product'
 */
    const productForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: product.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ProductController::product
 * @see app/Http/Controllers/ProductController.php:19
 * @route '/admin/product'
 */
        productForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: product.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ProductController::product
 * @see app/Http/Controllers/ProductController.php:19
 * @route '/admin/product'
 */
        productForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: product.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    product.form = productForm
/**
* @see \App\Http\Controllers\SaleController::sale
 * @see app/Http/Controllers/SaleController.php:16
 * @route '/admin/sale'
 */
export const sale = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: sale.url(options),
    method: 'get',
})

sale.definition = {
    methods: ["get","head"],
    url: '/admin/sale',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SaleController::sale
 * @see app/Http/Controllers/SaleController.php:16
 * @route '/admin/sale'
 */
sale.url = (options?: RouteQueryOptions) => {
    return sale.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SaleController::sale
 * @see app/Http/Controllers/SaleController.php:16
 * @route '/admin/sale'
 */
sale.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: sale.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\SaleController::sale
 * @see app/Http/Controllers/SaleController.php:16
 * @route '/admin/sale'
 */
sale.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: sale.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\SaleController::sale
 * @see app/Http/Controllers/SaleController.php:16
 * @route '/admin/sale'
 */
    const saleForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: sale.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\SaleController::sale
 * @see app/Http/Controllers/SaleController.php:16
 * @route '/admin/sale'
 */
        saleForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: sale.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\SaleController::sale
 * @see app/Http/Controllers/SaleController.php:16
 * @route '/admin/sale'
 */
        saleForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: sale.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    sale.form = saleForm
/**
* @see \App\Http\Controllers\UserController::user
 * @see app/Http/Controllers/UserController.php:19
 * @route '/admin/user'
 */
export const user = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: user.url(options),
    method: 'get',
})

user.definition = {
    methods: ["get","head"],
    url: '/admin/user',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\UserController::user
 * @see app/Http/Controllers/UserController.php:19
 * @route '/admin/user'
 */
user.url = (options?: RouteQueryOptions) => {
    return user.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserController::user
 * @see app/Http/Controllers/UserController.php:19
 * @route '/admin/user'
 */
user.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: user.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\UserController::user
 * @see app/Http/Controllers/UserController.php:19
 * @route '/admin/user'
 */
user.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: user.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\UserController::user
 * @see app/Http/Controllers/UserController.php:19
 * @route '/admin/user'
 */
    const userForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: user.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\UserController::user
 * @see app/Http/Controllers/UserController.php:19
 * @route '/admin/user'
 */
        userForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: user.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\UserController::user
 * @see app/Http/Controllers/UserController.php:19
 * @route '/admin/user'
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
const admin = {
    dashboard: Object.assign(dashboard, dashboard),
station: Object.assign(station, station45af79),
rider: Object.assign(rider, riderBc906a),
product: Object.assign(product, productD87513),
sale: Object.assign(sale, sale),
user: Object.assign(user, user3b1c2b),
system_fee: Object.assign(system_fee, system_fee),
}

export default admin