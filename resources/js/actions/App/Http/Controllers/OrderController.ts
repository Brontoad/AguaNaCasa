import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\OrderController::index
* @see app/Http/Controllers/OrderController.php:21
* @route '/user/order'
*/
const index88eeacdb5135206efb168dad4c19cbc9 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index88eeacdb5135206efb168dad4c19cbc9.url(options),
    method: 'get',
})

index88eeacdb5135206efb168dad4c19cbc9.definition = {
    methods: ["get","head"],
    url: '/user/order',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\OrderController::index
* @see app/Http/Controllers/OrderController.php:21
* @route '/user/order'
*/
index88eeacdb5135206efb168dad4c19cbc9.url = (options?: RouteQueryOptions) => {
    return index88eeacdb5135206efb168dad4c19cbc9.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\OrderController::index
* @see app/Http/Controllers/OrderController.php:21
* @route '/user/order'
*/
index88eeacdb5135206efb168dad4c19cbc9.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index88eeacdb5135206efb168dad4c19cbc9.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\OrderController::index
* @see app/Http/Controllers/OrderController.php:21
* @route '/user/order'
*/
index88eeacdb5135206efb168dad4c19cbc9.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index88eeacdb5135206efb168dad4c19cbc9.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\OrderController::index
* @see app/Http/Controllers/OrderController.php:21
* @route '/user/order'
*/
const index88eeacdb5135206efb168dad4c19cbc9Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index88eeacdb5135206efb168dad4c19cbc9.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\OrderController::index
* @see app/Http/Controllers/OrderController.php:21
* @route '/user/order'
*/
index88eeacdb5135206efb168dad4c19cbc9Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index88eeacdb5135206efb168dad4c19cbc9.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\OrderController::index
* @see app/Http/Controllers/OrderController.php:21
* @route '/user/order'
*/
index88eeacdb5135206efb168dad4c19cbc9Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index88eeacdb5135206efb168dad4c19cbc9.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index88eeacdb5135206efb168dad4c19cbc9.form = index88eeacdb5135206efb168dad4c19cbc9Form
/**
* @see \App\Http\Controllers\OrderController::index
* @see app/Http/Controllers/OrderController.php:21
* @route '/station/order'
*/
const index2dfc93ed14fca054c9ef406c8db7228e = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index2dfc93ed14fca054c9ef406c8db7228e.url(options),
    method: 'get',
})

index2dfc93ed14fca054c9ef406c8db7228e.definition = {
    methods: ["get","head"],
    url: '/station/order',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\OrderController::index
* @see app/Http/Controllers/OrderController.php:21
* @route '/station/order'
*/
index2dfc93ed14fca054c9ef406c8db7228e.url = (options?: RouteQueryOptions) => {
    return index2dfc93ed14fca054c9ef406c8db7228e.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\OrderController::index
* @see app/Http/Controllers/OrderController.php:21
* @route '/station/order'
*/
index2dfc93ed14fca054c9ef406c8db7228e.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index2dfc93ed14fca054c9ef406c8db7228e.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\OrderController::index
* @see app/Http/Controllers/OrderController.php:21
* @route '/station/order'
*/
index2dfc93ed14fca054c9ef406c8db7228e.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index2dfc93ed14fca054c9ef406c8db7228e.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\OrderController::index
* @see app/Http/Controllers/OrderController.php:21
* @route '/station/order'
*/
const index2dfc93ed14fca054c9ef406c8db7228eForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index2dfc93ed14fca054c9ef406c8db7228e.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\OrderController::index
* @see app/Http/Controllers/OrderController.php:21
* @route '/station/order'
*/
index2dfc93ed14fca054c9ef406c8db7228eForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index2dfc93ed14fca054c9ef406c8db7228e.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\OrderController::index
* @see app/Http/Controllers/OrderController.php:21
* @route '/station/order'
*/
index2dfc93ed14fca054c9ef406c8db7228eForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index2dfc93ed14fca054c9ef406c8db7228e.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index2dfc93ed14fca054c9ef406c8db7228e.form = index2dfc93ed14fca054c9ef406c8db7228eForm

export const index = {
    '/user/order': index88eeacdb5135206efb168dad4c19cbc9,
    '/station/order': index2dfc93ed14fca054c9ef406c8db7228e,
}

/**
* @see \App\Http\Controllers\OrderController::store
* @see app/Http/Controllers/OrderController.php:59
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
* @see app/Http/Controllers/OrderController.php:59
* @route '/order'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\OrderController::store
* @see app/Http/Controllers/OrderController.php:59
* @route '/order'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\OrderController::store
* @see app/Http/Controllers/OrderController.php:59
* @route '/order'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\OrderController::store
* @see app/Http/Controllers/OrderController.php:59
* @route '/order'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\OrderController::confirm
* @see app/Http/Controllers/OrderController.php:135
* @route '/order/confirm/{id}'
*/
export const confirm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: confirm.url(args, options),
    method: 'put',
})

confirm.definition = {
    methods: ["put"],
    url: '/order/confirm/{id}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\OrderController::confirm
* @see app/Http/Controllers/OrderController.php:135
* @route '/order/confirm/{id}'
*/
confirm.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    if (Array.isArray(args)) {
        args = {
            id: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        id: args.id,
    }

    return confirm.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\OrderController::confirm
* @see app/Http/Controllers/OrderController.php:135
* @route '/order/confirm/{id}'
*/
confirm.put = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: confirm.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\OrderController::confirm
* @see app/Http/Controllers/OrderController.php:135
* @route '/order/confirm/{id}'
*/
const confirmForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: confirm.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\OrderController::confirm
* @see app/Http/Controllers/OrderController.php:135
* @route '/order/confirm/{id}'
*/
confirmForm.put = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: confirm.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

confirm.form = confirmForm

/**
* @see \App\Http\Controllers\OrderController::pick_up
* @see app/Http/Controllers/OrderController.php:160
* @route '/order/pick_up/{id}'
*/
export const pick_up = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: pick_up.url(args, options),
    method: 'put',
})

pick_up.definition = {
    methods: ["put"],
    url: '/order/pick_up/{id}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\OrderController::pick_up
* @see app/Http/Controllers/OrderController.php:160
* @route '/order/pick_up/{id}'
*/
pick_up.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    if (Array.isArray(args)) {
        args = {
            id: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        id: args.id,
    }

    return pick_up.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\OrderController::pick_up
* @see app/Http/Controllers/OrderController.php:160
* @route '/order/pick_up/{id}'
*/
pick_up.put = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: pick_up.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\OrderController::pick_up
* @see app/Http/Controllers/OrderController.php:160
* @route '/order/pick_up/{id}'
*/
const pick_upForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: pick_up.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\OrderController::pick_up
* @see app/Http/Controllers/OrderController.php:160
* @route '/order/pick_up/{id}'
*/
pick_upForm.put = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: pick_up.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

pick_up.form = pick_upForm

/**
* @see \App\Http\Controllers\OrderController::refill
* @see app/Http/Controllers/OrderController.php:186
* @route '/order/refill/{id}'
*/
export const refill = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: refill.url(args, options),
    method: 'put',
})

refill.definition = {
    methods: ["put"],
    url: '/order/refill/{id}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\OrderController::refill
* @see app/Http/Controllers/OrderController.php:186
* @route '/order/refill/{id}'
*/
refill.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    if (Array.isArray(args)) {
        args = {
            id: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        id: args.id,
    }

    return refill.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\OrderController::refill
* @see app/Http/Controllers/OrderController.php:186
* @route '/order/refill/{id}'
*/
refill.put = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: refill.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\OrderController::refill
* @see app/Http/Controllers/OrderController.php:186
* @route '/order/refill/{id}'
*/
const refillForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: refill.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\OrderController::refill
* @see app/Http/Controllers/OrderController.php:186
* @route '/order/refill/{id}'
*/
refillForm.put = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: refill.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

refill.form = refillForm

/**
* @see \App\Http\Controllers\OrderController::deliver
* @see app/Http/Controllers/OrderController.php:0
* @route '/order/deliver/{id}'
*/
export const deliver = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: deliver.url(args, options),
    method: 'put',
})

deliver.definition = {
    methods: ["put"],
    url: '/order/deliver/{id}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\OrderController::deliver
* @see app/Http/Controllers/OrderController.php:0
* @route '/order/deliver/{id}'
*/
deliver.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    if (Array.isArray(args)) {
        args = {
            id: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        id: args.id,
    }

    return deliver.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\OrderController::deliver
* @see app/Http/Controllers/OrderController.php:0
* @route '/order/deliver/{id}'
*/
deliver.put = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: deliver.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\OrderController::deliver
* @see app/Http/Controllers/OrderController.php:0
* @route '/order/deliver/{id}'
*/
const deliverForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: deliver.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\OrderController::deliver
* @see app/Http/Controllers/OrderController.php:0
* @route '/order/deliver/{id}'
*/
deliverForm.put = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: deliver.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

deliver.form = deliverForm

/**
* @see \App\Http\Controllers\OrderController::cancel
* @see app/Http/Controllers/OrderController.php:233
* @route '/order/cancel/{id}'
*/
export const cancel = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: cancel.url(args, options),
    method: 'put',
})

cancel.definition = {
    methods: ["put"],
    url: '/order/cancel/{id}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\OrderController::cancel
* @see app/Http/Controllers/OrderController.php:233
* @route '/order/cancel/{id}'
*/
cancel.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    if (Array.isArray(args)) {
        args = {
            id: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        id: args.id,
    }

    return cancel.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\OrderController::cancel
* @see app/Http/Controllers/OrderController.php:233
* @route '/order/cancel/{id}'
*/
cancel.put = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: cancel.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\OrderController::cancel
* @see app/Http/Controllers/OrderController.php:233
* @route '/order/cancel/{id}'
*/
const cancelForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: cancel.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\OrderController::cancel
* @see app/Http/Controllers/OrderController.php:233
* @route '/order/cancel/{id}'
*/
cancelForm.put = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: cancel.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

cancel.form = cancelForm

/**
* @see \App\Http\Controllers\OrderController::order
* @see app/Http/Controllers/OrderController.php:0
* @route '/rider/orders'
*/
export const order = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: order.url(options),
    method: 'get',
})

order.definition = {
    methods: ["get","head"],
    url: '/rider/orders',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\OrderController::order
* @see app/Http/Controllers/OrderController.php:0
* @route '/rider/orders'
*/
order.url = (options?: RouteQueryOptions) => {
    return order.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\OrderController::order
* @see app/Http/Controllers/OrderController.php:0
* @route '/rider/orders'
*/
order.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: order.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\OrderController::order
* @see app/Http/Controllers/OrderController.php:0
* @route '/rider/orders'
*/
order.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: order.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\OrderController::order
* @see app/Http/Controllers/OrderController.php:0
* @route '/rider/orders'
*/
const orderForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: order.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\OrderController::order
* @see app/Http/Controllers/OrderController.php:0
* @route '/rider/orders'
*/
orderForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: order.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\OrderController::order
* @see app/Http/Controllers/OrderController.php:0
* @route '/rider/orders'
*/
orderForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: order.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

order.form = orderForm

const OrderController = { index, store, confirm, pick_up, refill, deliver, cancel, order }

export default OrderController