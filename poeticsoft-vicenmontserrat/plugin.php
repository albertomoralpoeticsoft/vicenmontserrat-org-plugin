<?php

/**
*
* Plugin Name: poeticsoft-vicenmontserrat
* Plugin URI: https://poeticsoft.com/plugins/vicenmontserrat
* Description: Poeticsoft Vicen Montserrat Custom Web
* Version: 0.00
* Author: Poeticsoft Team
* Author URI: https://poeticsoft.com/about
*/

add_filter('xmlrpc_enabled', '__return_false');
add_filter('login_display_language_dropdown', '__return_false');

require_once(dirname(__FILE__) . '/maillist.php');
require_once(dirname(__FILE__) . '/analytics/main.php');
require_once(dirname(__FILE__) . '/scripts.php');