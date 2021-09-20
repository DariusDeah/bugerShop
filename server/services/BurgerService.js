import { fakeDB } from '../db/fakeDB'
import { BadRequest, NotFound } from '../utils/Errors'

class BurgersService {
  getById(id) {
    const found = fakeDB.burgers.find(b => b.id.toString() === id)

    if (!found) {
      throw new NotFound('burger not found ' + id)
    }
    return found
  }

  createBurger(burgerData) {
    const found = fakeDB.burgers.find(nb => nb.name === burgerData.name)
    if (found) {
      throw new BadRequest('already a name')
    }
    burgerData.id = Math.floor(Math.random() * 20)

    fakeDB.burgers.push(burgerData)
    return burgerData
  }

  deleteBurger(id) {
    const found = fakeDB.burgers.find(d => d.id.toString() === id)
    if (!found) {
      throw new BadRequest('cant delete this item' + id)
    }
    return found
  }
}

export const burgerService = new BurgersService()
