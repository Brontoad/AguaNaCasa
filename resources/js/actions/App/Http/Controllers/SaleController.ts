import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\SaleController::station
* @see app/Http/Controllers/SaleController.php:0
* @route '/station/sales'
*/
export const station = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: station.url(options),
    method: 'get',
})

station.definition = {
    methods: ["get","head"],
    url: '/station/sales',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SaleController::station
* @see app/Http/Controllers/SaleController.php:0
* @route '/station/sales'
*/
station.url = (options?: RouteQueryOptions) => {
    return station.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SaleController::station
* @see app/Http/Controllers/SaleController.php:0
* @route '/station/sales'
*/
station.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: station.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\SaleController::station
* @see app/Http/Controllers/SaleController.php:0
* @route '/station/sales'
*/
station.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: station.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\SaleController::station
* @see app/Http/Controllers/SaleController.php:0
* @route '/station/sales'
*/
const stationForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: station.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\SaleController::station
* @see app/Http/Controllers/SaleController.php:0
* @route '/station/sales'
*/
stationForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: station.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\SaleController::station
* @see app/Http/Controllers/SaleController.php:0
* @route '/station/sales'
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

const SaleController = { station }

export default SaleController