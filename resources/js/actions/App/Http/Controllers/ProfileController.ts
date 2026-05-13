import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\ProfileController::user
* @see app/Http/Controllers/ProfileController.php:11
* @route '/user/profile'
*/
export const user = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: user.url(options),
    method: 'get',
})

user.definition = {
    methods: ["get","head"],
    url: '/user/profile',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ProfileController::user
* @see app/Http/Controllers/ProfileController.php:11
* @route '/user/profile'
*/
user.url = (options?: RouteQueryOptions) => {
    return user.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProfileController::user
* @see app/Http/Controllers/ProfileController.php:11
* @route '/user/profile'
*/
user.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: user.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ProfileController::user
* @see app/Http/Controllers/ProfileController.php:11
* @route '/user/profile'
*/
user.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: user.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ProfileController::user
* @see app/Http/Controllers/ProfileController.php:11
* @route '/user/profile'
*/
const userForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: user.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ProfileController::user
* @see app/Http/Controllers/ProfileController.php:11
* @route '/user/profile'
*/
userForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: user.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ProfileController::user
* @see app/Http/Controllers/ProfileController.php:11
* @route '/user/profile'
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
* @see \App\Http\Controllers\ProfileController::station
* @see app/Http/Controllers/ProfileController.php:20
* @route '/station/profile'
*/
export const station = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: station.url(options),
    method: 'get',
})

station.definition = {
    methods: ["get","head"],
    url: '/station/profile',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ProfileController::station
* @see app/Http/Controllers/ProfileController.php:20
* @route '/station/profile'
*/
station.url = (options?: RouteQueryOptions) => {
    return station.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProfileController::station
* @see app/Http/Controllers/ProfileController.php:20
* @route '/station/profile'
*/
station.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: station.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ProfileController::station
* @see app/Http/Controllers/ProfileController.php:20
* @route '/station/profile'
*/
station.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: station.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ProfileController::station
* @see app/Http/Controllers/ProfileController.php:20
* @route '/station/profile'
*/
const stationForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: station.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ProfileController::station
* @see app/Http/Controllers/ProfileController.php:20
* @route '/station/profile'
*/
stationForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: station.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ProfileController::station
* @see app/Http/Controllers/ProfileController.php:20
* @route '/station/profile'
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
* @see \App\Http\Controllers\ProfileController::rider
* @see app/Http/Controllers/ProfileController.php:29
* @route '/rider/profile'
*/
export const rider = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: rider.url(options),
    method: 'get',
})

rider.definition = {
    methods: ["get","head"],
    url: '/rider/profile',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ProfileController::rider
* @see app/Http/Controllers/ProfileController.php:29
* @route '/rider/profile'
*/
rider.url = (options?: RouteQueryOptions) => {
    return rider.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProfileController::rider
* @see app/Http/Controllers/ProfileController.php:29
* @route '/rider/profile'
*/
rider.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: rider.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ProfileController::rider
* @see app/Http/Controllers/ProfileController.php:29
* @route '/rider/profile'
*/
rider.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: rider.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ProfileController::rider
* @see app/Http/Controllers/ProfileController.php:29
* @route '/rider/profile'
*/
const riderForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: rider.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ProfileController::rider
* @see app/Http/Controllers/ProfileController.php:29
* @route '/rider/profile'
*/
riderForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: rider.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ProfileController::rider
* @see app/Http/Controllers/ProfileController.php:29
* @route '/rider/profile'
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

const ProfileController = { user, station, rider }

export default ProfileController