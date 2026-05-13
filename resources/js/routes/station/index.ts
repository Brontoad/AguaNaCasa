import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\DashboardController::dashboard
 * @see app/Http/Controllers/DashboardController.php:33
 * @route '/station/dashboard'
 */
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/station/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\DashboardController::dashboard
 * @see app/Http/Controllers/DashboardController.php:33
 * @route '/station/dashboard'
 */
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DashboardController::dashboard
 * @see app/Http/Controllers/DashboardController.php:33
 * @route '/station/dashboard'
 */
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\DashboardController::dashboard
 * @see app/Http/Controllers/DashboardController.php:33
 * @route '/station/dashboard'
 */
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\DashboardController::dashboard
 * @see app/Http/Controllers/DashboardController.php:33
 * @route '/station/dashboard'
 */
    const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: dashboard.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\DashboardController::dashboard
 * @see app/Http/Controllers/DashboardController.php:33
 * @route '/station/dashboard'
 */
        dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: dashboard.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\DashboardController::dashboard
 * @see app/Http/Controllers/DashboardController.php:33
 * @route '/station/dashboard'
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
 * @see app/Http/Controllers/OrderController.php:21
 * @route '/station/order'
 */
export const order = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: order.url(options),
    method: 'get',
})

order.definition = {
    methods: ["get","head"],
    url: '/station/order',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\OrderController::order
 * @see app/Http/Controllers/OrderController.php:21
 * @route '/station/order'
 */
order.url = (options?: RouteQueryOptions) => {
    return order.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\OrderController::order
 * @see app/Http/Controllers/OrderController.php:21
 * @route '/station/order'
 */
order.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: order.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\OrderController::order
 * @see app/Http/Controllers/OrderController.php:21
 * @route '/station/order'
 */
order.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: order.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\OrderController::order
 * @see app/Http/Controllers/OrderController.php:21
 * @route '/station/order'
 */
    const orderForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: order.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\OrderController::order
 * @see app/Http/Controllers/OrderController.php:21
 * @route '/station/order'
 */
        orderForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: order.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\OrderController::order
 * @see app/Http/Controllers/OrderController.php:21
 * @route '/station/order'
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
* @see \App\Http\Controllers\ProductController::product
 * @see app/Http/Controllers/ProductController.php:19
 * @route '/station/product'
 */
export const product = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: product.url(options),
    method: 'get',
})

product.definition = {
    methods: ["get","head"],
    url: '/station/product',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ProductController::product
 * @see app/Http/Controllers/ProductController.php:19
 * @route '/station/product'
 */
product.url = (options?: RouteQueryOptions) => {
    return product.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProductController::product
 * @see app/Http/Controllers/ProductController.php:19
 * @route '/station/product'
 */
product.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: product.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ProductController::product
 * @see app/Http/Controllers/ProductController.php:19
 * @route '/station/product'
 */
product.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: product.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ProductController::product
 * @see app/Http/Controllers/ProductController.php:19
 * @route '/station/product'
 */
    const productForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: product.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ProductController::product
 * @see app/Http/Controllers/ProductController.php:19
 * @route '/station/product'
 */
        productForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: product.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ProductController::product
 * @see app/Http/Controllers/ProductController.php:19
 * @route '/station/product'
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
 * @see app/Http/Controllers/SaleController.php:0
 * @route '/station/sales'
 */
export const sale = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: sale.url(options),
    method: 'get',
})

sale.definition = {
    methods: ["get","head"],
    url: '/station/sales',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SaleController::sale
 * @see app/Http/Controllers/SaleController.php:0
 * @route '/station/sales'
 */
sale.url = (options?: RouteQueryOptions) => {
    return sale.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SaleController::sale
 * @see app/Http/Controllers/SaleController.php:0
 * @route '/station/sales'
 */
sale.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: sale.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\SaleController::sale
 * @see app/Http/Controllers/SaleController.php:0
 * @route '/station/sales'
 */
sale.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: sale.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\SaleController::sale
 * @see app/Http/Controllers/SaleController.php:0
 * @route '/station/sales'
 */
    const saleForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: sale.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\SaleController::sale
 * @see app/Http/Controllers/SaleController.php:0
 * @route '/station/sales'
 */
        saleForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: sale.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\SaleController::sale
 * @see app/Http/Controllers/SaleController.php:0
 * @route '/station/sales'
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
* @see \App\Http\Controllers\ProfileController::profile
 * @see app/Http/Controllers/ProfileController.php:20
 * @route '/station/profile'
 */
export const profile = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: profile.url(options),
    method: 'get',
})

profile.definition = {
    methods: ["get","head"],
    url: '/station/profile',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ProfileController::profile
 * @see app/Http/Controllers/ProfileController.php:20
 * @route '/station/profile'
 */
profile.url = (options?: RouteQueryOptions) => {
    return profile.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProfileController::profile
 * @see app/Http/Controllers/ProfileController.php:20
 * @route '/station/profile'
 */
profile.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: profile.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ProfileController::profile
 * @see app/Http/Controllers/ProfileController.php:20
 * @route '/station/profile'
 */
profile.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: profile.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ProfileController::profile
 * @see app/Http/Controllers/ProfileController.php:20
 * @route '/station/profile'
 */
    const profileForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: profile.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ProfileController::profile
 * @see app/Http/Controllers/ProfileController.php:20
 * @route '/station/profile'
 */
        profileForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: profile.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ProfileController::profile
 * @see app/Http/Controllers/ProfileController.php:20
 * @route '/station/profile'
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
const station = {
    dashboard: Object.assign(dashboard, dashboard),
order: Object.assign(order, order),
product: Object.assign(product, product),
sale: Object.assign(sale, sale),
profile: Object.assign(profile, profile),
}

export default station