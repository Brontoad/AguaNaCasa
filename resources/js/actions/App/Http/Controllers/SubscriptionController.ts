import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\SubscriptionController::index
 * @see app/Http/Controllers/SubscriptionController.php:18
 * @route '/user/subscription'
 */
const index266c0f918a9352bf71ff998fc72e49b4 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index266c0f918a9352bf71ff998fc72e49b4.url(options),
    method: 'get',
})

index266c0f918a9352bf71ff998fc72e49b4.definition = {
    methods: ["get","head"],
    url: '/user/subscription',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SubscriptionController::index
 * @see app/Http/Controllers/SubscriptionController.php:18
 * @route '/user/subscription'
 */
index266c0f918a9352bf71ff998fc72e49b4.url = (options?: RouteQueryOptions) => {
    return index266c0f918a9352bf71ff998fc72e49b4.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SubscriptionController::index
 * @see app/Http/Controllers/SubscriptionController.php:18
 * @route '/user/subscription'
 */
index266c0f918a9352bf71ff998fc72e49b4.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index266c0f918a9352bf71ff998fc72e49b4.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\SubscriptionController::index
 * @see app/Http/Controllers/SubscriptionController.php:18
 * @route '/user/subscription'
 */
index266c0f918a9352bf71ff998fc72e49b4.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index266c0f918a9352bf71ff998fc72e49b4.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\SubscriptionController::index
 * @see app/Http/Controllers/SubscriptionController.php:18
 * @route '/user/subscription'
 */
    const index266c0f918a9352bf71ff998fc72e49b4Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index266c0f918a9352bf71ff998fc72e49b4.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\SubscriptionController::index
 * @see app/Http/Controllers/SubscriptionController.php:18
 * @route '/user/subscription'
 */
        index266c0f918a9352bf71ff998fc72e49b4Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index266c0f918a9352bf71ff998fc72e49b4.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\SubscriptionController::index
 * @see app/Http/Controllers/SubscriptionController.php:18
 * @route '/user/subscription'
 */
        index266c0f918a9352bf71ff998fc72e49b4Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index266c0f918a9352bf71ff998fc72e49b4.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index266c0f918a9352bf71ff998fc72e49b4.form = index266c0f918a9352bf71ff998fc72e49b4Form
    /**
* @see \App\Http\Controllers\SubscriptionController::index
 * @see app/Http/Controllers/SubscriptionController.php:18
 * @route '/station/subscription'
 */
const index420e0700d8f338a193c65a02f1bdd7df = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index420e0700d8f338a193c65a02f1bdd7df.url(options),
    method: 'get',
})

index420e0700d8f338a193c65a02f1bdd7df.definition = {
    methods: ["get","head"],
    url: '/station/subscription',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SubscriptionController::index
 * @see app/Http/Controllers/SubscriptionController.php:18
 * @route '/station/subscription'
 */
index420e0700d8f338a193c65a02f1bdd7df.url = (options?: RouteQueryOptions) => {
    return index420e0700d8f338a193c65a02f1bdd7df.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SubscriptionController::index
 * @see app/Http/Controllers/SubscriptionController.php:18
 * @route '/station/subscription'
 */
index420e0700d8f338a193c65a02f1bdd7df.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index420e0700d8f338a193c65a02f1bdd7df.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\SubscriptionController::index
 * @see app/Http/Controllers/SubscriptionController.php:18
 * @route '/station/subscription'
 */
index420e0700d8f338a193c65a02f1bdd7df.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index420e0700d8f338a193c65a02f1bdd7df.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\SubscriptionController::index
 * @see app/Http/Controllers/SubscriptionController.php:18
 * @route '/station/subscription'
 */
    const index420e0700d8f338a193c65a02f1bdd7dfForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index420e0700d8f338a193c65a02f1bdd7df.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\SubscriptionController::index
 * @see app/Http/Controllers/SubscriptionController.php:18
 * @route '/station/subscription'
 */
        index420e0700d8f338a193c65a02f1bdd7dfForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index420e0700d8f338a193c65a02f1bdd7df.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\SubscriptionController::index
 * @see app/Http/Controllers/SubscriptionController.php:18
 * @route '/station/subscription'
 */
        index420e0700d8f338a193c65a02f1bdd7dfForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index420e0700d8f338a193c65a02f1bdd7df.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index420e0700d8f338a193c65a02f1bdd7df.form = index420e0700d8f338a193c65a02f1bdd7dfForm

export const index = {
    '/user/subscription': index266c0f918a9352bf71ff998fc72e49b4,
    '/station/subscription': index420e0700d8f338a193c65a02f1bdd7df,
}

/**
* @see \App\Http\Controllers\SubscriptionController::store
 * @see app/Http/Controllers/SubscriptionController.php:41
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
 * @see app/Http/Controllers/SubscriptionController.php:41
 * @route '/subscription'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SubscriptionController::store
 * @see app/Http/Controllers/SubscriptionController.php:41
 * @route '/subscription'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\SubscriptionController::store
 * @see app/Http/Controllers/SubscriptionController.php:41
 * @route '/subscription'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\SubscriptionController::store
 * @see app/Http/Controllers/SubscriptionController.php:41
 * @route '/subscription'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
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
const SubscriptionController = { index, store, pay }

export default SubscriptionController