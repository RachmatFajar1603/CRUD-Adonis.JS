import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class PagesController {
  
  async home({ view }: HttpContext) {
    return view.render('pages/home')
  }

  async about({ view }: HttpContext) {
    return view.render('pages/about')
  }

  async crud({ view }: HttpContext) {
    return view.render('pages/crud')
  }

  async register({ view }: HttpContext) {
    return view.render('pages/register')
  }

  async datatable({ view }: HttpContext) {
    const users = await User.query().orderBy('id', 'asc')
    return view.render('pages/datatable', { users: users })
  }
}
