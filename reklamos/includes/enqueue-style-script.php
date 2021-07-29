<?php 
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Enqueue scripts and styles.
 */
function reklamos_scripts() {
	wp_enqueue_style( 'reklamos-style', get_template_directory_uri(). '/assets/css/app.css' );
	wp_style_add_data( 'reklamos-style', 'rtl', 'replace' );

	wp_enqueue_script( 'reklamos-navigation', get_template_directory_uri(). '/assets/js/app.js', array(), _S_VERSION, true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'reklamos_scripts' );









