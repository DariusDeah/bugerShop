import { fakeDB } from '../db/fakeDB.js'
import { burgerService } from '../services/BurgerService.js'
import BaseController from '../utils/BaseController.js'

export class BurgersController extends BaseController {
  constructor() {
    super('api/burgers') // base route
    this.router
      .get('', this.getBurgers) // runs get burgers function which gets all burgers using base url
      .get('/:id', this.getBurger) // gets runs get burger function that gets singular burger by its id
      .post('', this.createBurger) // creates a new object that holds the data of what was passed in
      .delete('/:id', this.deleteBurger)// deletes burger by id
  }

  async getBurgers(req, res, next) {
    res.send(fakeDB.burgers)
  }

  async getBurger(req, res, next) {
    try {
      const id = req.params.id
      const burger = await burgerService.getById(id)
      res.send(burger)
    } catch (error) {
      next(error)
    }
  }

  async createBurger(req, res, next) {
    try {
      const newBurger = burgerService.createBurger(req.body)
      res.send(newBurger)
    } catch (error) {
      next(error)
    }
  }

  async deleteBurger(req, res, next) {
    try {
      const id = req.prams.id
      const burger = await burgerService.deleteBurger(id)
      res.send(burger)
    } catch (error) {
      next(error)
    }
  }
}
