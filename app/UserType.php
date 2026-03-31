<?php

namespace App;

enum UserType : string
{
    case ADMIN = 'admin';
    case USER = 'user';
}
