import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\ProductController::index
 * @see app/Http/Controllers/ProductController.php:19
 * @route '/station/product'
 */
const index6109284ad818990fb5f65271e3fd1f67 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index6109284ad818990fb5f65271e3fd1f67.url(options),
    method: 'get',
})

index6109284ad818990fb5f65271e3fd1f67.definition = {
    methods: ["get","head"],
    url: '/station/product',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ProductController::index
 * @see app/Http/Controllers/ProductController.php:19
 * @route '/station/product'
 */
index6109284ad818990fb5f65271e3fd1f67.url = (options?: RouteQueryOptions) => {
    return index6109284ad818990fb5f65271e3fd1f67.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProductController::index
 * @see app/Http/Controllers/ProductController.php:19
 * @route '/station/product'
 */
index6109284ad818990fb5f65271e3fd1f67.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index6109284ad818990fb5f65271e3fd1f67.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ProductController::index
 * @see app/Http/Controllers/ProductController.php:19
 * @route '/station/product'
 */
index6109284ad818990fb5f65271e3fd1f67.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index6109284ad818990fb5f65271e3fd1f67.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ProductController::index
 * @see app/Http/Controllers/ProductController.php:19
 * @route '/station/product'
 */
    const index6109284ad818990fb5f65271e3fd1f67Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index6109284ad818990fb5f65271e3fd1f67.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ProductController::index
 * @see app/Http/Controllers/ProductController.php:19
 * @route '/station/product'
 */
        index6109284ad818990fb5f65271e3fd1f67Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index6109284ad818990fb5f65271e3fd1f67.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ProductController::index
 * @see app/Http/Controllers/ProductController.php:19
 * @route '/station/product'
 */
        index6109284ad818990fb5f65271e3fd1f67Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index6109284ad818990fb5f65271e3fd1f67.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index6109284ad818990fb5f65271e3fd1f67.form = index6109284ad818990fb5f65271e3fd1f67Form
    /**
* @see \App\Http\Controllers\ProductController::index
 * @see app/Http/Controllers/ProductController.php:19
 * @route '/admin/product'
 */
const indexb9fad3e711932c00c43526a240ff4b6e = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexb9fad3e711932c00c43526a240ff4b6e.url(options),
    method: 'get',
})

indexb9fad3e711932c00c43526a240ff4b6e.definition = {
    methods: ["get","head"],
    url: '/admin/product',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ProductController::index
 * @see app/Http/Controllers/ProductController.php:19
 * @route '/admin/product'
 */
indexb9fad3e711932c00c43526a240ff4b6e.url = (options?: RouteQueryOptions) => {
    return indexb9fad3e711932c00c43526a240ff4b6e.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProductController::index
 * @see app/Http/Controllers/ProductController.php:19
 * @route '/admin/product'
 */
indexb9fad3e711932c00c43526a240ff4b6e.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexb9fad3e711932c00c43526a240ff4b6e.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ProductController::index
 * @see app/Http/Controllers/ProductController.php:19
 * @route '/admin/product'
 */
indexb9fad3e711932c00c43526a240ff4b6e.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexb9fad3e711932c00c43526a240ff4b6e.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ProductController::index
 * @see app/Http/Controllers/ProductController.php:19
 * @route '/admin/product'
 */
    const indexb9fad3e711932c00c43526a240ff4b6eForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: indexb9fad3e711932c00c43526a240ff4b6e.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ProductController::index
 * @see app/Http/Controllers/ProductController.php:19
 * @route '/admin/product'
 */
        indexb9fad3e711932c00c43526a240ff4b6eForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: indexb9fad3e711932c00c43526a240ff4b6e.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ProductController::index
 * @see app/Http/Controllers/ProductController.php:19
 * @route '/admin/product'
 */
        indexb9fad3e711932c00c43526a240ff4b6eForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: indexb9fad3e711932c00c43526a240ff4b6e.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    indexb9fad3e711932c00c43526a240ff4b6e.form = indexb9fad3e711932c00c43526a240ff4b6eForm

export const index = {
    '/station/product': index6109284ad818990fb5f65271e3fd1f67,
    '/admin/product': indexb9fad3e711932c00c43526a240ff4b6e,
}

/**
* @see \App\Http\Controllers\ProductController::update_price
 * @see app/Http/Controllers/ProductController.php:154
 * @route '/station/product/price'
 */
export const update_price = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update_price.url(options),
    method: 'put',
})

update_price.definition = {
    methods: ["put"],
    url: '/station/product/price',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\ProductController::update_price
 * @see app/Http/Controllers/ProductController.php:154
 * @route '/station/product/price'
 */
update_price.url = (options?: RouteQueryOptions) => {
    return update_price.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProductController::update_price
 * @see app/Http/Controllers/ProductController.php:154
 * @route '/station/product/price'
 */
update_price.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update_price.url(options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\ProductController::update_price
 * @see app/Http/Controllers/ProductController.php:154
 * @route '/station/product/price'
 */
    const update_priceForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update_price.url({
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ProductController::update_price
 * @see app/Http/Controllers/ProductController.php:154
 * @route '/station/product/price'
 */
        update_priceForm.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update_price.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update_price.form = update_priceForm
/**
* @see \App\Http\Controllers\ProductController::update_is_available
 * @see app/Http/Controllers/ProductController.php:171
 * @route '/station/product/is_available'
 */
export const update_is_available = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update_is_available.url(options),
    method: 'put',
})

update_is_available.definition = {
    methods: ["put"],
    url: '/station/product/is_available',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\ProductController::update_is_available
 * @see app/Http/Controllers/ProductController.php:171
 * @route '/station/product/is_available'
 */
update_is_available.url = (options?: RouteQueryOptions) => {
    return update_is_available.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProductController::update_is_available
 * @see app/Http/Controllers/ProductController.php:171
 * @route '/station/product/is_available'
 */
update_is_available.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update_is_available.url(options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\ProductController::update_is_available
 * @see app/Http/Controllers/ProductController.php:171
 * @route '/station/product/is_available'
 */
    const update_is_availableForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update_is_available.url({
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ProductController::update_is_available
 * @see app/Http/Controllers/ProductController.php:171
 * @route '/station/product/is_available'
 */
        update_is_availableForm.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update_is_available.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update_is_available.form = update_is_availableForm
/**
* @see \App\Http\Controllers\ProductController::store
 * @see app/Http/Controllers/ProductController.php:76
 * @route '/product'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/product',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ProductController::store
 * @see app/Http/Controllers/ProductController.php:76
 * @route '/product'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProductController::store
 * @see app/Http/Controllers/ProductController.php:76
 * @route '/product'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ProductController::store
 * @see app/Http/Controllers/ProductController.php:76
 * @route '/product'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ProductController::store
 * @see app/Http/Controllers/ProductController.php:76
 * @route '/product'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\ProductController::update
 * @see app/Http/Controllers/ProductController.php:140
 * @route '/product'
 */
export const update = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/product',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\ProductController::update
 * @see app/Http/Controllers/ProductController.php:140
 * @route '/product'
 */
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProductController::update
 * @see app/Http/Controllers/ProductController.php:140
 * @route '/product'
 */
update.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\ProductController::update
 * @see app/Http/Controllers/ProductController.php:140
 * @route '/product'
 */
    const updateForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url({
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ProductController::update
 * @see app/Http/Controllers/ProductController.php:140
 * @route '/product'
 */
        updateForm.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
const ProductController = { index, update_price, update_is_available, store, update }

export default ProductController