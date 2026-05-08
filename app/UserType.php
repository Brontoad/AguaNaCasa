<?php

namespace App;

enum UserType : string
{
    case ADMIN = 'admin';
    case RIDER = 'rider';
    case STATION = 'station';
    case USER = 'user';
}
