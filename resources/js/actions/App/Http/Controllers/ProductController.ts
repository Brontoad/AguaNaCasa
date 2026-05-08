import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\ProductController::product
 * @see app/Http/Controllers/ProductController.php:0
 * @route '/station/products'
 */
export const product = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: product.url(options),
    method: 'get',
})

product.definition = {
    methods: ["get","head"],
    url: '/station/products',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ProductController::product
 * @see app/Http/Controllers/ProductController.php:0
 * @route '/station/products'
 */
product.url = (options?: RouteQueryOptions) => {
    return product.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProductController::product
 * @see app/Http/Controllers/ProductController.php:0
 * @route '/station/products'
 */
product.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: product.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ProductController::product
 * @see app/Http/Controllers/ProductController.php:0
 * @route '/station/products'
 */
product.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: product.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ProductController::product
 * @see app/Http/Controllers/ProductController.php:0
 * @route '/station/products'
 */
    const productForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: product.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ProductController::product
 * @see app/Http/Controllers/ProductController.php:0
 * @route '/station/products'
 */
        productForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: product.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ProductController::product
 * @see app/Http/Controllers/ProductController.php:0
 * @route '/station/products'
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
const ProductController = { product }

export default ProductController