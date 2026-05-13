import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
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
* @route '/login_admin'
*/
const Controller357da8dec4ef4e473ecc7836d62dd15d = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller357da8dec4ef4e473ecc7836d62dd15d.url(options),
    method: 'get',
})

Controller357da8dec4ef4e473ecc7836d62dd15d.definition = {
    methods: ["get","head"],
    url: '/login_admin',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/login_admin'
*/
Controller357da8dec4ef4e473ecc7836d62dd15d.url = (options?: RouteQueryOptions) => {
    return Controller357da8dec4ef4e473ecc7836d62dd15d.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/login_admin'
*/
Controller357da8dec4ef4e473ecc7836d62dd15d.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller357da8dec4ef4e473ecc7836d62dd15d.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/login_admin'
*/
Controller357da8dec4ef4e473ecc7836d62dd15d.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controller357da8dec4ef4e473ecc7836d62dd15d.url(options),
    method: 'head',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/login_admin'
*/
const Controller357da8dec4ef4e473ecc7836d62dd15dForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controller357da8dec4ef4e473ecc7836d62dd15d.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/login_admin'
*/
Controller357da8dec4ef4e473ecc7836d62dd15dForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controller357da8dec4ef4e473ecc7836d62dd15d.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/login_admin'
*/
Controller357da8dec4ef4e473ecc7836d62dd15dForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controller357da8dec4ef4e473ecc7836d62dd15d.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Controller357da8dec4ef4e473ecc7836d62dd15d.form = Controller357da8dec4ef4e473ecc7836d62dd15dForm
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
    '/about': Controller535fd093ca1d5254af5dc12ac208e8d5,
    '/contact_us': Controller2a69da187029c2954579a50467b9614c,
    '/login_admin': Controller357da8dec4ef4e473ecc7836d62dd15d,
    '/signup/user': Controllerabfebab5f12f9e8a8bb188ee70323df2,
    '/signup/station': Controller8fa004c2d5bf1f8990a619a85a4bffca,
    '/signup/rider': Controller0ca9dbfdd9b7baf32380597ac3f2fe7f,
}

export default Controller