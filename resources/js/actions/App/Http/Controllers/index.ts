import UserController from './UserController'
import StationController from './StationController'
import ProductController from './ProductController'
import OrderController from './OrderController'
import SubscriptionController from './SubscriptionController'
import Settings from './Settings'
const Controllers = {
    UserController: Object.assign(UserController, UserController),
StationController: Object.assign(StationController, StationController),
ProductController: Object.assign(ProductController, ProductController),
OrderController: Object.assign(OrderController, OrderController),
SubscriptionController: Object.assign(SubscriptionController, SubscriptionController),
Settings: Object.assign(Settings, Settings),
}

export default Controllers