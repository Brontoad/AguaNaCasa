import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\SubscriptionController::index
 * @see app/Http/Controllers/SubscriptionController.php:13
 * @route '/subscription'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/subscription',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SubscriptionController::index
 * @see app/Http/Controllers/SubscriptionController.php:13
 * @route '/subscription'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SubscriptionController::index
 * @see app/Http/Controllers/SubscriptionController.php:13
 * @route '/subscription'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\SubscriptionController::index
 * @see app/Http/Controllers/SubscriptionController.php:13
 * @route '/subscription'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\SubscriptionController::create
 * @see app/Http/Controllers/SubscriptionController.php:21
 * @route '/subscription/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/subscription/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SubscriptionController::create
 * @see app/Http/Controllers/SubscriptionController.php:21
 * @route '/subscription/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SubscriptionController::create
 * @see app/Http/Controllers/SubscriptionController.php:21
 * @route '/subscription/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\SubscriptionController::create
 * @see app/Http/Controllers/SubscriptionController.php:21
 * @route '/subscription/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\SubscriptionController::store
 * @see app/Http/Controllers/SubscriptionController.php:29
 * @route '/subscription'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/subscription',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SubscriptionController::store
 * @see app/Http/Controllers/SubscriptionController.php:29
 * @route '/subscription'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SubscriptionController::store
 * @see app/Http/Controllers/SubscriptionController.php:29
 * @route '/subscription'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SubscriptionController::show
 * @see app/Http/Controllers/SubscriptionController.php:37
 * @route '/subscription/{subscription}'
 */
export const show = (args: { subscription: string | number | { id: string | number } } | [subscription: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/subscription/{subscription}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SubscriptionController::show
 * @see app/Http/Controllers/SubscriptionController.php:37
 * @route '/subscription/{subscription}'
 */
show.url = (args: { subscription: string | number | { id: string | number } } | [subscription: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { subscription: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { subscription: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    subscription: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        subscription: typeof args.subscription === 'object'
                ? args.subscription.id
                : args.subscription,
                }

    return show.definition.url
            .replace('{subscription}', parsedArgs.subscription.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\SubscriptionController::show
 * @see app/Http/Controllers/SubscriptionController.php:37
 * @route '/subscription/{subscription}'
 */
show.get = (args: { subscription: string | number | { id: string | number } } | [subscription: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\SubscriptionController::show
 * @see app/Http/Controllers/SubscriptionController.php:37
 * @route '/subscription/{subscription}'
 */
show.head = (args: { subscription: string | number | { id: string | number } } | [subscription: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\SubscriptionController::edit
 * @see app/Http/Controllers/SubscriptionController.php:45
 * @route '/subscription/{subscription}/edit'
 */
export const edit = (args: { subscription: string | number | { id: string | number } } | [subscription: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/subscription/{subscription}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SubscriptionController::edit
 * @see app/Http/Controllers/SubscriptionController.php:45
 * @route '/subscription/{subscription}/edit'
 */
edit.url = (args: { subscription: string | number | { id: string | number } } | [subscription: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { subscription: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { subscription: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    subscription: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        subscription: typeof args.subscription === 'object'
                ? args.subscription.id
                : args.subscription,
                }

    return edit.definition.url
            .replace('{subscription}', parsedArgs.subscription.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\SubscriptionController::edit
 * @see app/Http/Controllers/SubscriptionController.php:45
 * @route '/subscription/{subscription}/edit'
 */
edit.get = (args: { subscription: string | number | { id: string | number } } | [subscription: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\SubscriptionController::edit
 * @see app/Http/Controllers/SubscriptionController.php:45
 * @route '/subscription/{subscription}/edit'
 */
edit.head = (args: { subscription: string | number | { id: string | number } } | [subscription: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\SubscriptionController::update
 * @see app/Http/Controllers/SubscriptionController.php:53
 * @route '/subscription/{subscription}'
 */
export const update = (args: { subscription: string | number | { id: string | number } } | [subscription: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/subscription/{subscription}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\SubscriptionController::update
 * @see app/Http/Controllers/SubscriptionController.php:53
 * @route '/subscription/{subscription}'
 */
update.url = (args: { subscription: string | number | { id: string | number } } | [subscription: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { subscription: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { subscription: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    subscription: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        subscription: typeof args.subscription === 'object'
                ? args.subscription.id
                : args.subscription,
                }

    return update.definition.url
            .replace('{subscription}', parsedArgs.subscription.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\SubscriptionController::update
 * @see app/Http/Controllers/SubscriptionController.php:53
 * @route '/subscription/{subscription}'
 */
update.put = (args: { subscription: string | number | { id: string | number } } | [subscription: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\SubscriptionController::update
 * @see app/Http/Controllers/SubscriptionController.php:53
 * @route '/subscription/{subscription}'
 */
update.patch = (args: { subscription: string | number | { id: string | number } } | [subscription: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\SubscriptionController::destroy
 * @see app/Http/Controllers/SubscriptionController.php:61
 * @route '/subscription/{subscription}'
 */
export const destroy = (args: { subscription: string | number | { id: string | number } } | [subscription: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/subscription/{subscription}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\SubscriptionController::destroy
 * @see app/Http/Controllers/SubscriptionController.php:61
 * @route '/subscription/{subscription}'
 */
destroy.url = (args: { subscription: string | number | { id: string | number } } | [subscription: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { subscription: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { subscription: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    subscription: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        subscription: typeof args.subscription === 'object'
                ? args.subscription.id
                : args.subscription,
                }

    return destroy.definition.url
            .replace('{subscription}', parsedArgs.subscription.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\SubscriptionController::destroy
 * @see app/Http/Controllers/SubscriptionController.php:61
 * @route '/subscription/{subscription}'
 */
destroy.delete = (args: { subscription: string | number | { id: string | number } } | [subscription: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})
const subscription = {
    index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
show: Object.assign(show, show),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default subscription