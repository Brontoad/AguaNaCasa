import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/login'
 */
const Controllerb6041c76e8e1cd791f8f89d035d48611 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllerb6041c76e8e1cd791f8f89d035d48611.url(options),
    method: 'get',
})

Controllerb6041c76e8e1cd791f8f89d035d48611.definition = {
    methods: ["get","head"],
    url: '/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/login'
 */
Controllerb6041c76e8e1cd791f8f89d035d48611.url = (options?: RouteQueryOptions) => {
    return Controllerb6041c76e8e1cd791f8f89d035d48611.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/login'
 */
Controllerb6041c76e8e1cd791f8f89d035d48611.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllerb6041c76e8e1cd791f8f89d035d48611.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/login'
 */
Controllerb6041c76e8e1cd791f8f89d035d48611.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controllerb6041c76e8e1cd791f8f89d035d48611.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/login'
 */
    const Controllerb6041c76e8e1cd791f8f89d035d48611Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controllerb6041c76e8e1cd791f8f89d035d48611.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/login'
 */
        Controllerb6041c76e8e1cd791f8f89d035d48611Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controllerb6041c76e8e1cd791f8f89d035d48611.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/login'
 */
        Controllerb6041c76e8e1cd791f8f89d035d48611Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controllerb6041c76e8e1cd791f8f89d035d48611.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controllerb6041c76e8e1cd791f8f89d035d48611.form = Controllerb6041c76e8e1cd791f8f89d035d48611Form
    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/about'
 */
const Controller535fd093ca1d5254af5dc12ac208e8d5 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller535fd093ca1d5254af5dc12ac208e8d5.url(options),
    method: 'get',
})

Controller535fd093ca1d5254af5dc12ac208e8d5.definition = {
    methods: ["get","head"],
    url: '/about',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/about'
 */
Controller535fd093ca1d5254af5dc12ac208e8d5.url = (options?: RouteQueryOptions) => {
    return Controller535fd093ca1d5254af5dc12ac208e8d5.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/about'
 */
Controller535fd093ca1d5254af5dc12ac208e8d5.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller535fd093ca1d5254af5dc12ac208e8d5.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/about'
 */
Controller535fd093ca1d5254af5dc12ac208e8d5.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controller535fd093ca1d5254af5dc12ac208e8d5.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/about'
 */
    const Controller535fd093ca1d5254af5dc12ac208e8d5Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controller535fd093ca1d5254af5dc12ac208e8d5.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/about'
 */
        Controller535fd093ca1d5254af5dc12ac208e8d5Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller535fd093ca1d5254af5dc12ac208e8d5.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/about'
 */
        Controller535fd093ca1d5254af5dc12ac208e8d5Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller535fd093ca1d5254af5dc12ac208e8d5.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controller535fd093ca1d5254af5dc12ac208e8d5.form = Controller535fd093ca1d5254af5dc12ac208e8d5Form
    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/contact_us'
 */
const Controller2a69da187029c2954579a50467b9614c = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller2a69da187029c2954579a50467b9614c.url(options),
    method: 'get',
})

Controller2a69da187029c2954579a50467b9614c.definition = {
    methods: ["get","head"],
    url: '/contact_us',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/contact_us'
 */
Controller2a69da187029c2954579a50467b9614c.url = (options?: RouteQueryOptions) => {
    return Controller2a69da187029c2954579a50467b9614c.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/contact_us'
 */
Controller2a69da187029c2954579a50467b9614c.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller2a69da187029c2954579a50467b9614c.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/contact_us'
 */
Controller2a69da187029c2954579a50467b9614c.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controller2a69da187029c2954579a50467b9614c.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/contact_us'
 */
    const Controller2a69da187029c2954579a50467b9614cForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controller2a69da187029c2954579a50467b9614c.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/contact_us'
 */
        Controller2a69da187029c2954579a50467b9614cForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller2a69da187029c2954579a50467b9614c.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/contact_us'
 */
        Controller2a69da187029c2954579a50467b9614cForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller2a69da187029c2954579a50467b9614c.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controller2a69da187029c2954579a50467b9614c.form = Controller2a69da187029c2954579a50467b9614cForm
    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/signup/user'
 */
const Controllerabfebab5f12f9e8a8bb188ee70323df2 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllerabfebab5f12f9e8a8bb188ee70323df2.url(options),
    method: 'get',
})

Controllerabfebab5f12f9e8a8bb188ee70323df2.definition = {
    methods: ["get","head"],
    url: '/signup/user',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/signup/user'
 */
Controllerabfebab5f12f9e8a8bb188ee70323df2.url = (options?: RouteQueryOptions) => {
    return Controllerabfebab5f12f9e8a8bb188ee70323df2.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/signup/user'
 */
Controllerabfebab5f12f9e8a8bb188ee70323df2.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllerabfebab5f12f9e8a8bb188ee70323df2.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/signup/user'
 */
Controllerabfebab5f12f9e8a8bb188ee70323df2.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controllerabfebab5f12f9e8a8bb188ee70323df2.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/signup/user'
 */
    const Controllerabfebab5f12f9e8a8bb188ee70323df2Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controllerabfebab5f12f9e8a8bb188ee70323df2.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/signup/user'
 */
        Controllerabfebab5f12f9e8a8bb188ee70323df2Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controllerabfebab5f12f9e8a8bb188ee70323df2.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/signup/user'
 */
        Controllerabfebab5f12f9e8a8bb188ee70323df2Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controllerabfebab5f12f9e8a8bb188ee70323df2.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controllerabfebab5f12f9e8a8bb188ee70323df2.form = Controllerabfebab5f12f9e8a8bb188ee70323df2Form
    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/signup/station'
 */
const Controller8fa004c2d5bf1f8990a619a85a4bffca = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller8fa004c2d5bf1f8990a619a85a4bffca.url(options),
    method: 'get',
})

Controller8fa004c2d5bf1f8990a619a85a4bffca.definition = {
    methods: ["get","head"],
    url: '/signup/station',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/signup/station'
 */
Controller8fa004c2d5bf1f8990a619a85a4bffca.url = (options?: RouteQueryOptions) => {
    return Controller8fa004c2d5bf1f8990a619a85a4bffca.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/signup/station'
 */
Controller8fa004c2d5bf1f8990a619a85a4bffca.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller8fa004c2d5bf1f8990a619a85a4bffca.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/signup/station'
 */
Controller8fa004c2d5bf1f8990a619a85a4bffca.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controller8fa004c2d5bf1f8990a619a85a4bffca.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/signup/station'
 */
    const Controller8fa004c2d5bf1f8990a619a85a4bffcaForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controller8fa004c2d5bf1f8990a619a85a4bffca.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/signup/station'
 */
        Controller8fa004c2d5bf1f8990a619a85a4bffcaForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller8fa004c2d5bf1f8990a619a85a4bffca.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/signup/station'
 */
        Controller8fa004c2d5bf1f8990a619a85a4bffcaForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller8fa004c2d5bf1f8990a619a85a4bffca.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controller8fa004c2d5bf1f8990a619a85a4bffca.form = Controller8fa004c2d5bf1f8990a619a85a4bffcaForm
    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/signup/rider'
 */
const Controller0ca9dbfdd9b7baf32380597ac3f2fe7f = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller0ca9dbfdd9b7baf32380597ac3f2fe7f.url(options),
    method: 'get',
})

Controller0ca9dbfdd9b7baf32380597ac3f2fe7f.definition = {
    methods: ["get","head"],
    url: '/signup/rider',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/signup/rider'
 */
Controller0ca9dbfdd9b7baf32380597ac3f2fe7f.url = (options?: RouteQueryOptions) => {
    return Controller0ca9dbfdd9b7baf32380597ac3f2fe7f.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/signup/rider'
 */
Controller0ca9dbfdd9b7baf32380597ac3f2fe7f.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller0ca9dbfdd9b7baf32380597ac3f2fe7f.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/signup/rider'
 */
Controller0ca9dbfdd9b7baf32380597ac3f2fe7f.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controller0ca9dbfdd9b7baf32380597ac3f2fe7f.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/signup/rider'
 */
    const Controller0ca9dbfdd9b7baf32380597ac3f2fe7fForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controller0ca9dbfdd9b7baf32380597ac3f2fe7f.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/signup/rider'
 */
        Controller0ca9dbfdd9b7baf32380597ac3f2fe7fForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller0ca9dbfdd9b7baf32380597ac3f2fe7f.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/signup/rider'
 */
        Controller0ca9dbfdd9b7baf32380597ac3f2fe7fForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller0ca9dbfdd9b7baf32380597ac3f2fe7f.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controller0ca9dbfdd9b7baf32380597ac3f2fe7f.form = Controller0ca9dbfdd9b7baf32380597ac3f2fe7fForm

const Controller = {
    '/login': Controllerb6041c76e8e1cd791f8f89d035d48611,
    '/about': Controller535fd093ca1d5254af5dc12ac208e8d5,
    '/contact_us': Controller2a69da187029c2954579a50467b9614c,
    '/signup/user': Controllerabfebab5f12f9e8a8bb188ee70323df2,
    '/signup/station': Controller8fa004c2d5bf1f8990a619a85a4bffca,
    '/signup/rider': Controller0ca9dbfdd9b7baf32380597ac3f2fe7f,
}

export default Controller