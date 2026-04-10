import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\OrderController::index
 * @see app/Http/Controllers/OrderController.php:17
 * @route '/order'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/order',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\OrderController::index
 * @see app/Http/Controllers/OrderController.php:17
 * @route '/order'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\OrderController::index
 * @see app/Http/Controllers/OrderController.php:17
 * @route '/order'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\OrderController::index
 * @see app/Http/Controllers/OrderController.php:17
 * @route '/order'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\OrderController::create
 * @see app/Http/Controllers/OrderController.php:38
 * @route '/order/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/order/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\OrderController::create
 * @see app/Http/Controllers/OrderController.php:38
 * @route '/order/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\OrderController::create
 * @see app/Http/Controllers/OrderController.php:38
 * @route '/order/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\OrderController::create
 * @see app/Http/Controllers/OrderController.php:38
 * @route '/order/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\OrderController::store
 * @see app/Http/Controllers/OrderController.php:69
 * @route '/order'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/order',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\OrderController::store
 * @see app/Http/Controllers/OrderController.php:69
 * @route '/order'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\OrderController::store
 * @see app/Http/Controllers/OrderController.php:69
 * @route '/order'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\OrderController::show
 * @see app/Http/Controllers/OrderController.php:110
 * @route '/order/{order}'
 */
export const show = (args: { order: string | number | { id: string | number } } | [order: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/order/{order}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\OrderController::show
 * @see app/Http/Controllers/OrderController.php:110
 * @route '/order/{order}'
 */
show.url = (args: { order: string | number | { id: string | number } } | [order: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { order: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { order: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    order: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        order: typeof args.order === 'object'
                ? args.order.id
                : args.order,
                }

    return show.definition.url
            .replace('{order}', parsedArgs.order.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\OrderController::show
 * @see app/Http/Controllers/OrderController.php:110
 * @route '/order/{order}'
 */
show.get = (args: { order: string | number | { id: string | number } } | [order: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\OrderController::show
 * @see app/Http/Controllers/OrderController.php:110
 * @route '/order/{order}'
 */
show.head = (args: { order: string | number | { id: string | number } } | [order: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\OrderController::edit
 * @see app/Http/Controllers/OrderController.php:134
 * @route '/order/{order}/edit'
 */
export const edit = (args: { order: string | number | { id: string | number } } | [order: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/order/{order}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\OrderController::edit
 * @see app/Http/Controllers/OrderController.php:134
 * @route '/order/{order}/edit'
 */
edit.url = (args: { order: string | number | { id: string | number } } | [order: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { order: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { order: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    order: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        order: typeof args.order === 'object'
                ? args.order.id
                : args.order,
                }

    return edit.definition.url
            .replace('{order}', parsedArgs.order.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\OrderController::edit
 * @see app/Http/Controllers/OrderController.php:134
 * @route '/order/{order}/edit'
 */
edit.get = (args: { order: string | number | { id: string | number } } | [order: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\OrderController::edit
 * @see app/Http/Controllers/OrderController.php:134
 * @route '/order/{order}/edit'
 */
edit.head = (args: { order: string | number | { id: string | number } } | [order: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\OrderController::update
 * @see app/Http/Controllers/OrderController.php:157
 * @route '/order/{order}'
 */
export const update = (args: { order: string | number | { id: string | number } } | [order: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/order/{order}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\OrderController::update
 * @see app/Http/Controllers/OrderController.php:157
 * @route '/order/{order}'
 */
update.url = (args: { order: string | number | { id: string | number } } | [order: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { order: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { order: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    order: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        order: typeof args.order === 'object'
                ? args.order.id
                : args.order,
                }

    return update.definition.url
            .replace('{order}', parsedArgs.order.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\OrderController::update
 * @see app/Http/Controllers/OrderController.php:157
 * @route '/order/{order}'
 */
update.put = (args: { order: string | number | { id: string | number } } | [order: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\OrderController::update
 * @see app/Http/Controllers/OrderController.php:157
 * @route '/order/{order}'
 */
update.patch = (args: { order: string | number | { id: string | number } } | [order: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\OrderController::destroy
 * @see app/Http/Controllers/OrderController.php:330
 * @route '/order/{order}'
 */
export const destroy = (args: { order: string | number | { id: string | number } } | [order: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/order/{order}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\OrderController::destroy
 * @see app/Http/Controllers/OrderController.php:330
 * @route '/order/{order}'
 */
destroy.url = (args: { order: string | number | { id: string | number } } | [order: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { order: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { order: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    order: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        order: typeof args.order === 'object'
                ? args.order.id
                : args.order,
                }

    return destroy.definition.url
            .replace('{order}', parsedArgs.order.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\OrderController::destroy
 * @see app/Http/Controllers/OrderController.php:330
 * @route '/order/{order}'
 */
destroy.delete = (args: { order: string | number | { id: string | number } } | [order: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})
const OrderController = { index, create, store, show, edit, update, destroy }

export default OrderController