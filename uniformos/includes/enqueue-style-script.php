<?php 
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
// ++++++++++++++		style		scripts		+++++++++++++

function uniformos_scripts() {
wp_enqueue_style( 'uniformos-style', get_template_directory_uri(). '/assets/css/app.css' );
wp_style_add_data( 'uniformos-style', 'rtl', 'replace' );
wp_enqueue_script( 'uniformos-navigation', get_template_directory_uri() . '/assets/js/app.js', array(), _S_VERSION, true );
if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
wp_enqueue_script( 'comment-reply' );
}
}
add_action( 'wp_enqueue_scripts', 'uniformos_scripts' );