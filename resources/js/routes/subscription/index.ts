import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\SubscriptionController::create
 * @see app/Http/Controllers/SubscriptionController.php:41
 * @route '/subscription'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: create.url(options),
    method: 'post',
})

create.definition = {
    methods: ["post"],
    url: '/subscription',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SubscriptionController::create
 * @see app/Http/Controllers/SubscriptionController.php:41
 * @route '/subscription'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SubscriptionController::create
 * @see app/Http/Controllers/SubscriptionController.php:41
 * @route '/subscription'
 */
create.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: create.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\SubscriptionController::create
 * @see app/Http/Controllers/SubscriptionController.php:41
 * @route '/subscription'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: create.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\SubscriptionController::create
 * @see app/Http/Controllers/SubscriptionController.php:41
 * @route '/subscription'
 */
        createForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: create.url(options),
            method: 'post',
        })
    
    create.form = createForm
/**
* @see \App\Http\Controllers\SubscriptionController::pay
 * @see app/Http/Controllers/SubscriptionController.php:65
 * @route '/subscription/pay'
 */
export const pay = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: pay.url(options),
    method: 'put',
})

pay.definition = {
    methods: ["put"],
    url: '/subscription/pay',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\SubscriptionController::pay
 * @see app/Http/Controllers/SubscriptionController.php:65
 * @route '/subscription/pay'
 */
pay.url = (options?: RouteQueryOptions) => {
    return pay.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SubscriptionController::pay
 * @see app/Http/Controllers/SubscriptionController.php:65
 * @route '/subscription/pay'
 */
pay.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: pay.url(options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\SubscriptionController::pay
 * @see app/Http/Controllers/SubscriptionController.php:65
 * @route '/subscription/pay'
 */
    const payForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: pay.url({
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\SubscriptionController::pay
 * @see app/Http/Controllers/SubscriptionController.php:65
 * @route '/subscription/pay'
 */
        payForm.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: pay.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    pay.form = payForm
const subscription = {
    create: Object.assign(create, create),
pay: Object.assign(pay, pay),
}

export default subscription