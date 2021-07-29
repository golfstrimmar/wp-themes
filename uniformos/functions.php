<?php
/**
 * uniformos functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package uniformos
 */

if ( ! defined( '_S_VERSION' ) ) {
	// Replace the version number of the theme on each release.
	define( '_S_VERSION', '1.0.0' );
}

if ( ! function_exists( 'uniformos_setup' ) ) :
	function uniformos_setup() {
		load_theme_textdomain( 'uniformos', get_template_directory() . '/languages' );

		add_theme_support( 'automatic-feed-links' );
		add_theme_support( 'title-tag' );
		add_theme_support( 'post-thumbnails' );
		add_theme_support(
			'html5',
			array(
				'search-form',
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
				'style',
				'script',
			)
		);
		add_theme_support(
			'custom-background',
			apply_filters(
				'uniformos_custom_background_args',
				array(
					'default-color' => 'ffffff',
					'default-image' => '',
				)
			)
		);
		add_theme_support( 'customize-selective-refresh-widgets' );
		add_theme_support(
			'custom-logo',
			array(
				'height'      => 250,
				'width'       => 250,
				'flex-width'  => true,
				'flex-height' => true,
			)
		);
	}
endif;
add_action( 'after_setup_theme', 'uniformos_setup' );

function uniformos_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'uniformos_content_width', 640 );
}
add_action( 'after_setup_theme', 'uniformos_content_width', 0 );


/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/inc/jetpack.php';
}

/**
 * Load WooCommerce compatibility file.
 */
if ( class_exists( 'WooCommerce' ) ) {
	require get_template_directory() . '/inc/woocommerce.php';
}


add_filter('show_admin_bar', '__return_false');





// -------------vidgets---------------
require get_template_directory() . '/includes/widgets.php';

// -------------menus---------------
require get_template_directory() . '/includes/enqueue-style-script.php';

// -------------menus---------------
require get_template_directory() . '/includes/register-menus.php';

//------acf---------
require get_template_directory() . '/includes/acf-options.php';

// -----пользовательские поля
require get_template_directory() . '/includes/reg-post-type.php';



// -------- изменение текста на кнопке посмотреть карзину
function tb_text_strings( $translated_text, $text, $domain ) {
    switch ( $translated_text ) {
        case 'Просмотр корзины' :
            $translated_text = __( 'Peržiūrėti krepšelį', 'woocommerce' );
            break;
    }
    return $translated_text;
}
add_filter( 'gettext', 'tb_text_strings', 20, 3 );


remove_action( 'woocommerce_before_shop_loop_item_title', 'woocommerce_template_loop_product_thumbnail', 10);
add_action( 'woocommerce_before_shop_loop_item_title', 'woocommerce_template_loop_product_thumbnail', 10);

if ( ! function_exists( 'woocommerce_template_loop_product_thumbnail' ) ) {
    function woocommerce_template_loop_product_thumbnail() {
        echo woocommerce_get_product_thumbnail();
    } 
}
if ( ! function_exists( 'woocommerce_get_product_thumbnail' ) ) {   
    function woocommerce_get_product_thumbnail( $size = 'shop_catalog', $placeholder_width = 0, $placeholder_height = 0  ) {
        global $post, $woocommerce;
        $output = '<div class="cat_loop_image">';

        if ( has_post_thumbnail() ) {               
            $output .= get_the_post_thumbnail( $post->ID, $size );
        } else {
             $output .= wc_placeholder_img( $size );
        }                       
        $output .= '</div>';
        return $output;
    }
}








