import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\ProductController::index
* @see app/Http/Controllers/ProductController.php:19
* @route '/station/product'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/station/product',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ProductController::index
* @see app/Http/Controllers/ProductController.php:19
* @route '/station/product'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProductController::index
* @see app/Http/Controllers/ProductController.php:19
* @route '/station/product'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ProductController::index
* @see app/Http/Controllers/ProductController.php:19
* @route '/station/product'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ProductController::index
* @see app/Http/Controllers/ProductController.php:19
* @route '/station/product'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ProductController::index
* @see app/Http/Controllers/ProductController.php:19
* @route '/station/product'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ProductController::index
* @see app/Http/Controllers/ProductController.php:19
* @route '/station/product'
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
* @see \App\Http\Controllers\ProductController::update_price
* @see app/Http/Controllers/ProductController.php:169
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
* @see app/Http/Controllers/ProductController.php:169
* @route '/station/product/price'
*/
update_price.url = (options?: RouteQueryOptions) => {
    return update_price.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProductController::update_price
* @see app/Http/Controllers/ProductController.php:169
* @route '/station/product/price'
*/
update_price.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update_price.url(options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\ProductController::update_price
* @see app/Http/Controllers/ProductController.php:169
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
* @see app/Http/Controllers/ProductController.php:169
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
* @see app/Http/Controllers/ProductController.php:188
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
* @see app/Http/Controllers/ProductController.php:188
* @route '/station/product/is_available'
*/
update_is_available.url = (options?: RouteQueryOptions) => {
    return update_is_available.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProductController::update_is_available
* @see app/Http/Controllers/ProductController.php:188
* @route '/station/product/is_available'
*/
update_is_available.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update_is_available.url(options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\ProductController::update_is_available
* @see app/Http/Controllers/ProductController.php:188
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
* @see app/Http/Controllers/ProductController.php:188
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

const ProductController = { index, update_price, update_is_available }

export default ProductController