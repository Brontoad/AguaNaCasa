import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\StationController::index
 * @see app/Http/Controllers/StationController.php:15
 * @route '/station'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/station',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\StationController::index
 * @see app/Http/Controllers/StationController.php:15
 * @route '/station'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\StationController::index
 * @see app/Http/Controllers/StationController.php:15
 * @route '/station'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\StationController::index
 * @see app/Http/Controllers/StationController.php:15
 * @route '/station'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\StationController::create
 * @see app/Http/Controllers/StationController.php:23
 * @route '/station/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/station/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\StationController::create
 * @see app/Http/Controllers/StationController.php:23
 * @route '/station/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\StationController::create
 * @see app/Http/Controllers/StationController.php:23
 * @route '/station/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\StationController::create
 * @see app/Http/Controllers/StationController.php:23
 * @route '/station/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\StationController::store
 * @see app/Http/Controllers/StationController.php:31
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
 * @see app/Http/Controllers/StationController.php:31
 * @route '/station'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\StationController::store
 * @see app/Http/Controllers/StationController.php:31
 * @route '/station'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\StationController::show
 * @see app/Http/Controllers/StationController.php:47
 * @route '/station/{station}'
 */
export const show = (args: { station: string | number | { id: string | number } } | [station: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/station/{station}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\StationController::show
 * @see app/Http/Controllers/StationController.php:47
 * @route '/station/{station}'
 */
show.url = (args: { station: string | number | { id: string | number } } | [station: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { station: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { station: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    station: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        station: typeof args.station === 'object'
                ? args.station.id
                : args.station,
                }

    return show.definition.url
            .replace('{station}', parsedArgs.station.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\StationController::show
 * @see app/Http/Controllers/StationController.php:47
 * @route '/station/{station}'
 */
show.get = (args: { station: string | number | { id: string | number } } | [station: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\StationController::show
 * @see app/Http/Controllers/StationController.php:47
 * @route '/station/{station}'
 */
show.head = (args: { station: string | number | { id: string | number } } | [station: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\StationController::edit
 * @see app/Http/Controllers/StationController.php:55
 * @route '/station/{station}/edit'
 */
export const edit = (args: { station: string | number | { id: string | number } } | [station: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/station/{station}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\StationController::edit
 * @see app/Http/Controllers/StationController.php:55
 * @route '/station/{station}/edit'
 */
edit.url = (args: { station: string | number | { id: string | number } } | [station: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { station: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { station: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    station: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        station: typeof args.station === 'object'
                ? args.station.id
                : args.station,
                }

    return edit.definition.url
            .replace('{station}', parsedArgs.station.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\StationController::edit
 * @see app/Http/Controllers/StationController.php:55
 * @route '/station/{station}/edit'
 */
edit.get = (args: { station: string | number | { id: string | number } } | [station: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\StationController::edit
 * @see app/Http/Controllers/StationController.php:55
 * @route '/station/{station}/edit'
 */
edit.head = (args: { station: string | number | { id: string | number } } | [station: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\StationController::update
 * @see app/Http/Controllers/StationController.php:63
 * @route '/station/{station}'
 */
export const update = (args: { station: string | number | { id: string | number } } | [station: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/station/{station}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\StationController::update
 * @see app/Http/Controllers/StationController.php:63
 * @route '/station/{station}'
 */
update.url = (args: { station: string | number | { id: string | number } } | [station: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { station: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { station: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    station: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        station: typeof args.station === 'object'
                ? args.station.id
                : args.station,
                }

    return update.definition.url
            .replace('{station}', parsedArgs.station.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\StationController::update
 * @see app/Http/Controllers/StationController.php:63
 * @route '/station/{station}'
 */
update.put = (args: { station: string | number | { id: string | number } } | [station: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\StationController::update
 * @see app/Http/Controllers/StationController.php:63
 * @route '/station/{station}'
 */
update.patch = (args: { station: string | number | { id: string | number } } | [station: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\StationController::destroy
 * @see app/Http/Controllers/StationController.php:145
 * @route '/station/{station}'
 */
export const destroy = (args: { station: string | number | { id: string | number } } | [station: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/station/{station}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\StationController::destroy
 * @see app/Http/Controllers/StationController.php:145
 * @route '/station/{station}'
 */
destroy.url = (args: { station: string | number | { id: string | number } } | [station: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { station: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { station: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    station: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        station: typeof args.station === 'object'
                ? args.station.id
                : args.station,
                }

    return destroy.definition.url
            .replace('{station}', parsedArgs.station.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\StationController::destroy
 * @see app/Http/Controllers/StationController.php:145
 * @route '/station/{station}'
 */
destroy.delete = (args: { station: string | number | { id: string | number } } | [station: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})
const station = {
    index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
show: Object.assign(show, show),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default station