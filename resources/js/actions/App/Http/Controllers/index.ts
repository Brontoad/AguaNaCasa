import AuthController from './AuthController'
import UserController from './UserController'
import StationController from './StationController'
import RiderController from './RiderController'
import DashboardController from './DashboardController'
import OrderController from './OrderController'
import SubscriptionController from './SubscriptionController'
import ProfileController from './ProfileController'
import AddressController from './AddressController'
import ProductController from './ProductController'
import SaleController from './SaleController'
const Controllers = {
    AuthController: Object.assign(AuthController, AuthController),
UserController: Object.assign(UserController, UserController),
StationController: Object.assign(StationController, StationController),
RiderController: Object.assign(RiderController, RiderController),
DashboardController: Object.assign(DashboardController, DashboardController),
OrderController: Object.assign(OrderController, OrderController),
SubscriptionController: Object.assign(SubscriptionController, SubscriptionController),
ProfileController: Object.assign(ProfileController, ProfileController),
AddressController: Object.assign(AddressController, AddressController),
ProductController: Object.assign(ProductController, ProductController),
SaleController: Object.assign(SaleController, SaleController),
}

export default Controllers