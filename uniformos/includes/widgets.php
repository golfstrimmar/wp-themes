<?php 
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function uniformos_widgets_init() {
    
	register_sidebar(
		array(
			'name'          => esc_html__( 'Map-Kaunas', 'uniformos-map' ),
			'id'            => 'sidebar-1',
			'description'   => esc_html__( 'Add widgets here.', 'uniformos' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
		)
	);
	register_sidebar(
		array(
			'name'          => esc_html__( 'Map-Klaipėda', 'uniformos-map-2' ),
			'id'            => 'sidebar-2',
			'description'   => esc_html__( 'Add widgets here.', 'uniformos' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
		)
	);
	
	register_sidebar(
		array(
			'name'          => esc_html__( 'Categories-colors filters', 'color-filters' ),
			'id'            => 'color-filters',
			'description'   => esc_html__( 'Add widgets here.', 'uniformos' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
		)
	);
}
add_action( 'widgets_init', 'uniformos_widgets_init' );