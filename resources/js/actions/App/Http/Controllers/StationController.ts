import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\StationController::store
* @see app/Http/Controllers/StationController.php:78
* @route '/station'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/station',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\StationController::store
* @see app/Http/Controllers/StationController.php:78
* @route '/station'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\StationController::store
* @see app/Http/Controllers/StationController.php:78
* @route '/station'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\StationController::store
* @see app/Http/Controllers/StationController.php:78
* @route '/station'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\StationController::store
* @see app/Http/Controllers/StationController.php:78
* @route '/station'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\StationController::index
* @see app/Http/Controllers/StationController.php:34
* @route '/user/station'
*/
const indexe612bfb895298d3425ac8f746e39bb97 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexe612bfb895298d3425ac8f746e39bb97.url(options),
    method: 'get',
})

indexe612bfb895298d3425ac8f746e39bb97.definition = {
    methods: ["get","head"],
    url: '/user/station',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\StationController::index
* @see app/Http/Controllers/StationController.php:34
* @route '/user/station'
*/
indexe612bfb895298d3425ac8f746e39bb97.url = (options?: RouteQueryOptions) => {
    return indexe612bfb895298d3425ac8f746e39bb97.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\StationController::index
* @see app/Http/Controllers/StationController.php:34
* @route '/user/station'
*/
indexe612bfb895298d3425ac8f746e39bb97.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexe612bfb895298d3425ac8f746e39bb97.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\StationController::index
* @see app/Http/Controllers/StationController.php:34
* @route '/user/station'
*/
indexe612bfb895298d3425ac8f746e39bb97.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexe612bfb895298d3425ac8f746e39bb97.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\StationController::index
* @see app/Http/Controllers/StationController.php:34
* @route '/user/station'
*/
const indexe612bfb895298d3425ac8f746e39bb97Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexe612bfb895298d3425ac8f746e39bb97.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\StationController::index
* @see app/Http/Controllers/StationController.php:34
* @route '/user/station'
*/
indexe612bfb895298d3425ac8f746e39bb97Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexe612bfb895298d3425ac8f746e39bb97.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\StationController::index
* @see app/Http/Controllers/StationController.php:34
* @route '/user/station'
*/
indexe612bfb895298d3425ac8f746e39bb97Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexe612bfb895298d3425ac8f746e39bb97.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

indexe612bfb895298d3425ac8f746e39bb97.form = indexe612bfb895298d3425ac8f746e39bb97Form
/**
* @see \App\Http\Controllers\StationController::index
* @see app/Http/Controllers/StationController.php:34
* @route '/admin/stations'
*/
const index4a702cfca5cdc8227be88a584b2c4e16 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index4a702cfca5cdc8227be88a584b2c4e16.url(options),
    method: 'get',
})

index4a702cfca5cdc8227be88a584b2c4e16.definition = {
    methods: ["get","head"],
    url: '/admin/stations',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\StationController::index
* @see app/Http/Controllers/StationController.php:34
* @route '/admin/stations'
*/
index4a702cfca5cdc8227be88a584b2c4e16.url = (options?: RouteQueryOptions) => {
    return index4a702cfca5cdc8227be88a584b2c4e16.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\StationController::index
* @see app/Http/Controllers/StationController.php:34
* @route '/admin/stations'
*/
index4a702cfca5cdc8227be88a584b2c4e16.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index4a702cfca5cdc8227be88a584b2c4e16.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\StationController::index
* @see app/Http/Controllers/StationController.php:34
* @route '/admin/stations'
*/
index4a702cfca5cdc8227be88a584b2c4e16.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index4a702cfca5cdc8227be88a584b2c4e16.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\StationController::index
* @see app/Http/Controllers/StationController.php:34
* @route '/admin/stations'
*/
const index4a702cfca5cdc8227be88a584b2c4e16Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index4a702cfca5cdc8227be88a584b2c4e16.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\StationController::index
* @see app/Http/Controllers/StationController.php:34
* @route '/admin/stations'
*/
index4a702cfca5cdc8227be88a584b2c4e16Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index4a702cfca5cdc8227be88a584b2c4e16.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\StationController::index
* @see app/Http/Controllers/StationController.php:34
* @route '/admin/stations'
*/
index4a702cfca5cdc8227be88a584b2c4e16Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index4a702cfca5cdc8227be88a584b2c4e16.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index4a702cfca5cdc8227be88a584b2c4e16.form = index4a702cfca5cdc8227be88a584b2c4e16Form

export const index = {
    '/user/station': indexe612bfb895298d3425ac8f746e39bb97,
    '/admin/stations': index4a702cfca5cdc8227be88a584b2c4e16,
}

const StationController = { store, index }

export default StationController