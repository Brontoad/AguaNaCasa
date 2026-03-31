<?php

namespace App;

enum OrderStatus : string
{
    case WAITING_FOR_CONFIRMATION = 'waiting_for_confirmation';
    case TO_PICK_UP = 'to_pick_up';
    case REFILLING = 'refilling';
    case ON_DELIVERY = 'on_delivery';
    case COMPLETED = 'completed';
    case CANCELLED = 'cancelled';
}
