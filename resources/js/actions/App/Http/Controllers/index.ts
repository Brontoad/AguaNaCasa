import AuthController from './AuthController'
import UserController from './UserController'
import DashboardController from './DashboardController'
import StationController from './StationController'
import OrderController from './OrderController'
import SubscriptionController from './SubscriptionController'
import ProfileController from './ProfileController'
import ProductController from './ProductController'
import SaleController from './SaleController'
const Controllers = {
    AuthController: Object.assign(AuthController, AuthController),
UserController: Object.assign(UserController, UserController),
DashboardController: Object.assign(DashboardController, DashboardController),
StationController: Object.assign(StationController, StationController),
OrderController: Object.assign(OrderController, OrderController),
SubscriptionController: Object.assign(SubscriptionController, SubscriptionController),
ProfileController: Object.assign(ProfileController, ProfileController),
ProductController: Object.assign(ProductController, ProductController),
SaleController: Object.assign(SaleController, SaleController),
}

export default Controllers