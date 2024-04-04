/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

// import PagesController from '#controllers/pages_controller'

import router from '@adonisjs/core/services/router'

const PagesController = () => import('#controllers/pages_controller')
const UsersController = () => import('#controllers/users_controller')

router.on('/').render('pages/home')

router.get('/home', [PagesController, 'home'])
router.get('/about', [PagesController, 'about'])
router.get('/register', [PagesController, 'register'])
router.get('/datatable', [PagesController, 'datatable'])

// router.post('/user', [UsersController, 'create'])
// router.get('/user/:id', [UsersController, 'edit']).as('user.edit')
// router.put('/user/:id', [UsersController, 'update']).as('user.edit')

router.resource('user', UsersController)

