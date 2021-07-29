<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
} 
//---------------- регистрация меню----------------
register_nav_menus(
array(
'menu-header' => esc_html__( 'menu-header', 'menu-header' ),    
'menu-header-white' => esc_html__( 'menu-header-white', 'menu-header-white' ), 
'menu-header-revers' => esc_html__( 'menu-header-revers', 'menu-header-revers' ), 
)
);

// function add_menuclass($ulclass) {
// return preg_replace('/<a /', '<a class="menu__link" ' , $ulclass); }
//   add_filter('wp_nav_menu','add_menuclass');