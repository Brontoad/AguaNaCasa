import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\AddressController::store
* @see app/Http/Controllers/AddressController.php:58
* @route '/address'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/address',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AddressController::store
* @see app/Http/Controllers/AddressController.php:58
* @route '/address'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AddressController::store
* @see app/Http/Controllers/AddressController.php:58
* @route '/address'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AddressController::store
* @see app/Http/Controllers/AddressController.php:58
* @route '/address'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AddressController::store
* @see app/Http/Controllers/AddressController.php:58
* @route '/address'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

const AddressController = { store }

export default AddressController