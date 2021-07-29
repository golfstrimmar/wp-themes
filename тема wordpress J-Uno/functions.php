<?php
/**
 * j-uno functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package j-uno
 */

if ( ! defined( '_S_VERSION' ) ) {
	// Replace the version number of the theme on each release.
	define( '_S_VERSION', '1.0.0' );
}

if ( ! function_exists( 'j_uno_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function j_uno_setup() {
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on j-uno, use a find and replace
		 * to change 'j-uno' to the name of your theme in all the template files.
		 */
		load_theme_textdomain( 'j-uno', get_template_directory() . '/languages' );

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		//----------------- поддержка изображений записи(превью)-------------------
// https://www.youtube.com/watch?v=eNURjX3L7oM--------14.02


add_theme_support( 'post-thumbnails' );

// В папке wp-content uploads находятся изображения из медиафайлы
// wordpress их размножает и создает несколько вариантов одной картинки
// вариант для превью записи можно определить . например 225 на 490

if (function_exists( 'add_image_size' )){
add_image_size('slider-confirm',49,49,true);
}


	// ------------------регистрация меню--------------------

		register_nav_menus(
			array(
				'j-uno-header' => esc_html__( 'Меню в шапке сайта', 'j-uno-header' ),
					'j-uno-phone' => esc_html__( 'Tелефон', 'j-uno-phone' ),
'j-uno-phone-icon' => esc_html__( 'Tелефон-иконка', 'j-uno-phone-icon' ),

			)
		);

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
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



		// Set up the WordPress core custom background feature.
		add_theme_support(
			'custom-background',
			apply_filters(
				'j_uno_custom_background_args',
				array(
					'default-color' => 'ffffff',
					'default-image' => '',
				)
			)
		);



		// Add theme support for selective refresh for widgets.
		add_theme_support( 'customize-selective-refresh-widgets' );



	// ----------редактирование логотипа из админки----------

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
add_action( 'after_setup_theme', 'j_uno_setup' );


/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function j_uno_content_width() {
	// This variable is intended to be overruled from themes.
	// Open WPCS issue: {@link https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards/issues/1043}.
	// phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound
	$GLOBALS['content_width'] = apply_filters( 'j_uno_content_width', 640 );
}
add_action( 'after_setup_theme', 'j_uno_content_width', 0 );


// -------------------регистрация виджетов---------------

// function j_uno_widgets_init() {
// 	register_sidebar(
// 		array(
// 			'name'          => esc_html__( 'Sidebar', 'j-uno' ),
// 			'id'            => 'sidebar-1',
// 			'description'   => esc_html__( 'Add widgets here.', 'j-uno' ),
// 			'before_widget' => '<section id="%1$s" class="widget %2$s">',
// 			'after_widget'  => '</section>',
// 			'before_title'  => '<h2 class="widget-title">',
// 			'after_title'   => '</h2>',
// 		)
// 	);
// }
// add_action( 'widgets_init', 'j_uno_widgets_init' );

add_filter('show_admin_bar', '__return_false');


// ------регистрация скриптов и стилей-----

function j_uno_scripts() {

	wp_enqueue_style( 'j-uno-plyr',  get_template_directory_uri(). '/assets/css/plyr.css' );
	wp_enqueue_style( 'j-uno-popup-link',  get_template_directory_uri(). '/assets/css/popup-link.css' );
	wp_enqueue_style( 'j-uno-calc',  get_template_directory_uri(). '/assets/css/forma-calc.css' );
	wp_enqueue_style( 'j-uno-popup-video',  get_template_directory_uri(). '/assets/css/popup-video.css' );
	wp_enqueue_style( 'j-uno-juxtapose',  get_template_directory_uri(). '/assets/css/juxtapose.css' );
	wp_enqueue_style( 'j-uno-style',  get_template_directory_uri(). '/assets/css/app.css' );


	wp_style_add_data( 'j-uno-style', 'rtl', 'replace' );

	wp_enqueue_script( 'j-uno-jquery', get_template_directory_uri() . '/assets/js/jquery.js',   array(),true );
	wp_enqueue_script( 'j-uno-mixitup', get_template_directory_uri() . '/assets/js/mixitup.js',  array(),true );
	wp_enqueue_script( 'j-uno-slick', get_template_directory_uri() . '/assets/js/slick.js',  array(),true );
	wp_enqueue_script( 'j-uno-plyr', get_template_directory_uri() . '/assets/js/plyr.js',   array(),true );
	wp_enqueue_script( 'j-uno-juxtapose', get_template_directory_uri() . '/assets/js/juxtapose.js',  array(),true );
	wp_enqueue_script( 'j-uno-app', get_template_directory_uri() . '/assets/js/app.js',  array(),true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'j_uno_scripts' );




// -----------------------------------------------------------------------
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




// --------регистрация кастомного типа записей--------------------

function my_custom_init(){
register_post_type('slider-garant', array(
		'labels'             => array(
			'name'               => 'Видео сборки', // Основное название типа записи
			'singular_name'      => 'Видео сборки', // отдельное название записи 
			'add_new'            => 'Добавить видео сборки' 
		  ),
		'public'             => true,
		'has_archive'        => true,
		'menu_position'      => 4,
		'menu_icon'          =>'dashicons-video-alt',
		'supports'           => array('title','thumbnail','editor')
	) );

	register_post_type('slider-confirm', array(
		'labels'             => array(
			'name'               => 'Видеоотзывы', // Основное название типа записи
			'singular_name'      => 'Видеоотзыв', // отдельное название записи 
			'add_new'            => 'Добавить отзыв' 
		  ),
		'public'             => true,
		'has_archive'        => true,
		'menu_position'      => 5,
		'menu_icon'          =>'dashicons-format-video',
		'supports'           => array('title','thumbnail','editor')
	) );
	register_post_type('products', array(
		'labels'             => array(
			'name'               => 'Объекты', // Основное название типа записи
			'singular_name'      => 'Объект', // отдельное название записи 
			'add_new'            => 'Добавить объект' 
		  ),
		'public'             => true,
		'has_archive'        => true,
		'menu_position'      => 6,
		'menu_icon'          =>'dashicons-hammer',
		'show_in_rest'       => true,
		'supports'           => array('title','thumbnail'),
		'taxonomies' => array( 'category' )
	) );

}


add_action('init', 'my_custom_init');


