import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\OrderController::confirm
 * @see app/Http/Controllers/OrderController.php:141
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
 * @see app/Http/Controllers/OrderController.php:141
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
 * @see app/Http/Controllers/OrderController.php:141
 * @route '/order/confirm/{id}'
 */
confirm.put = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: confirm.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\OrderController::confirm
 * @see app/Http/Controllers/OrderController.php:141
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
 * @see app/Http/Controllers/OrderController.php:141
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
 * @see app/Http/Controllers/OrderController.php:166
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
 * @see app/Http/Controllers/OrderController.php:166
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
 * @see app/Http/Controllers/OrderController.php:166
 * @route '/order/pick_up/{id}'
 */
pick_up.put = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: pick_up.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\OrderController::pick_up
 * @see app/Http/Controllers/OrderController.php:166
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
 * @see app/Http/Controllers/OrderController.php:166
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
 * @see app/Http/Controllers/OrderController.php:192
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
 * @see app/Http/Controllers/OrderController.php:192
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
 * @see app/Http/Controllers/OrderController.php:192
 * @route '/order/refill/{id}'
 */
refill.put = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: refill.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\OrderController::refill
 * @see app/Http/Controllers/OrderController.php:192
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
 * @see app/Http/Controllers/OrderController.php:192
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
 * @see app/Http/Controllers/OrderController.php:211
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
 * @see app/Http/Controllers/OrderController.php:211
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
 * @see app/Http/Controllers/OrderController.php:211
 * @route '/order/deliver/{id}'
 */
deliver.put = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: deliver.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\OrderController::deliver
 * @see app/Http/Controllers/OrderController.php:211
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
 * @see app/Http/Controllers/OrderController.php:211
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
 * @see app/Http/Controllers/OrderController.php:239
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
 * @see app/Http/Controllers/OrderController.php:239
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
 * @see app/Http/Controllers/OrderController.php:239
 * @route '/order/cancel/{id}'
 */
cancel.put = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: cancel.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\OrderController::cancel
 * @see app/Http/Controllers/OrderController.php:239
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
 * @see app/Http/Controllers/OrderController.php:239
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
const order = {
    confirm: Object.assign(confirm, confirm),
pick_up: Object.assign(pick_up, pick_up),
refill: Object.assign(refill, refill),
deliver: Object.assign(deliver, deliver),
cancel: Object.assign(cancel, cancel),
}

export default order