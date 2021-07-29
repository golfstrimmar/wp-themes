<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
} 
//---------------- регистрация меню----------------
register_nav_menus(
array(
'header-menu' => esc_html__( 'header-menu', 'header-menu' ),    
)
);

// function add_menuclass($ulclass) {
// return preg_replace('/<a /', '<a class="menu__link" ' , $ulclass); }
//   add_filter('wp_nav_menu','add_menuclass');










