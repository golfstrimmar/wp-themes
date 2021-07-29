<?php
/**
 * WooCommerce Compatibility File
 *
 * @link https://woocommerce.com/
 *
 * @package uniformos
 */

/**
 * WooCommerce setup function.
 *
 * @link https://docs.woocommerce.com/document/third-party-custom-theme-compatibility/
 * @link https://github.com/woocommerce/woocommerce/wiki/Enabling-product-gallery-features-(zoom,-swipe,-lightbox)
 * @link https://github.com/woocommerce/woocommerce/wiki/Declaring-WooCommerce-support-in-themes
 *
 * @return void
 */
function uniformos_woocommerce_setup() {
	add_theme_support(
		'woocommerce',
		array(
			'thumbnail_image_width' => 150,
			'single_image_width'    => 300,
			'product_grid'          => array(
				'default_rows'    => 3,
				'min_rows'        => 1,
				'default_columns' => 4,
				'min_columns'     => 1,
				'max_columns'     => 6,
			),
		)
	);
	add_theme_support( 'wc-product-gallery-zoom' );
	add_theme_support( 'wc-product-gallery-lightbox' );
	add_theme_support( 'wc-product-gallery-slider' );
}
add_action( 'after_setup_theme', 'uniformos_woocommerce_setup' );

/**
 * WooCommerce specific scripts & stylesheets.
 *
 * @return void
 */
function uniformos_woocommerce_scripts() {
	wp_enqueue_style( 'uniformos-woocommerce-style', get_template_directory_uri() . '/woocommerce.css', array(), _S_VERSION );

	$font_path   = WC()->plugin_url() . '/assets/fonts/';
	$inline_font = '@font-face {
			font-family: "star";
			src: url("' . $font_path . 'star.eot");
			src: url("' . $font_path . 'star.eot?#iefix") format("embedded-opentype"),
				url("' . $font_path . 'star.woff") format("woff"),
				url("' . $font_path . 'star.ttf") format("truetype"),
				url("' . $font_path . 'star.svg#star") format("svg");
			font-weight: normal;
			font-style: normal;
		}';

	wp_add_inline_style( 'uniformos-woocommerce-style', $inline_font );
}
add_action( 'wp_enqueue_scripts', 'uniformos_woocommerce_scripts' );

/**
 * Disable the default WooCommerce stylesheet.
 *
 * Removing the default WooCommerce stylesheet and enqueing your own will
 * protect you during WooCommerce core updates.
 *
 * @link https://docs.woocommerce.com/document/disable-the-default-stylesheet/
 */
add_filter( 'woocommerce_enqueue_styles', '__return_empty_array' );

/**
 * Add 'woocommerce-active' class to the body tag.
 *
 * @param  array $classes CSS classes applied to the body tag.
 * @return array $classes modified to include 'woocommerce-active' class.
 */
function uniformos_woocommerce_active_body_class( $classes ) {
	$classes[] = 'woocommerce-active';

	return $classes;
}
add_filter( 'body_class', 'uniformos_woocommerce_active_body_class' );

/**
 * Related Products Args.
 *
 * @param array $args related products args.
 * @return array $args related products args.
 */
function uniformos_woocommerce_related_products_args( $args ) {
	$defaults = array(
		'posts_per_page' => 3,
		'columns'        => 3,
	);

	$args = wp_parse_args( $defaults, $args );

	return $args;
}
add_filter( 'woocommerce_output_related_products_args', 'uniformos_woocommerce_related_products_args' );

/**
 * Remove default WooCommerce wrapper.
 */
remove_action( 'woocommerce_before_main_content', 'woocommerce_output_content_wrapper', 10 );
remove_action( 'woocommerce_after_main_content', 'woocommerce_output_content_wrapper_end', 10 );

if ( ! function_exists( 'uniformos_woocommerce_wrapper_before' ) ) {
	/**
	 * Before Content.
	 *
	 * Wraps all WooCommerce content in wrappers which match the theme markup.
	 *
	 * @return void
	 */
	function uniformos_woocommerce_wrapper_before() {
		?>
<main id="primary" class="site-main">
  <?php
	}
}
add_action( 'woocommerce_before_main_content', 'uniformos_woocommerce_wrapper_before' );

if ( ! function_exists( 'uniformos_woocommerce_wrapper_after' ) ) {
	/**
	 * After Content.
	 *
	 * Closes the wrapping divs.
	 *
	 * @return void
	 */
	function uniformos_woocommerce_wrapper_after() {
		?>
</main><!-- #main -->
<?php
	}
}
add_action( 'woocommerce_after_main_content', 'uniformos_woocommerce_wrapper_after' );

/**
 * Sample implementation of the WooCommerce Mini Cart.
 *
 * You can add the WooCommerce Mini Cart to header.php like so ...
 *
	<?php
		if ( function_exists( 'uniformos_woocommerce_header_cart' ) ) {
			uniformos_woocommerce_header_cart();
		}
	?>
*/

if ( ! function_exists( 'uniformos_woocommerce_cart_link_fragment' ) ) {
/**
* Cart Fragments.
*
* Ensure cart contents update when products are added to the cart via AJAX.
*
* @param array $fragments Fragments to refresh via AJAX.
* @return array Fragments to refresh via AJAX.
*/
function uniformos_woocommerce_cart_link_fragment( $fragments ) {
ob_start();
uniformos_woocommerce_cart_link();
$fragments['a.cart-contents'] = ob_get_clean();

return $fragments;
}
}
add_filter( 'woocommerce_add_to_cart_fragments', 'uniformos_woocommerce_cart_link_fragment' );

if ( ! function_exists( 'uniformos_woocommerce_cart_link' ) ) {
/**
* Cart Link.
*
* Displayed a link to the cart including the number of items present and the cart total.
*
* @return void
*/
function uniformos_woocommerce_cart_link() {
?>
<a class="cart-contents" href="<?php echo esc_url( wc_get_cart_url() ); ?>"
  title="<?php esc_attr_e( 'View your shopping cart', 'uniformos' ); ?>">
  <?php
			$item_count_text = sprintf(
				/* translators: number of items in the mini cart. */
				_n( '%d item', '%d items', WC()->cart->get_cart_contents_count(), 'uniformos' ),
				WC()->cart->get_cart_contents_count()
			);
			?>
  <span class="amount"><?php echo wp_kses_data( WC()->cart->get_cart_subtotal() ); ?></span> <span
    class="count"><?php echo esc_html( $item_count_text ); ?></span>
</a>
<?php
	}
}

if ( ! function_exists( 'uniformos_woocommerce_header_cart' ) ) {
	/**
	 * Display Header Cart.
	 *
	 * @return void
	 */
	function uniformos_woocommerce_header_cart() {
		if ( is_cart() ) {
			$class = 'current-menu-item';
		} else {
			$class = '';
		}
		?>
<ul id="site-header-cart" class="site-header-cart">
  <li class="<?php echo esc_attr( $class ); ?>">
    <?php uniformos_woocommerce_cart_link(); ?>
  </li>
  <li>
    <?php
				$instance = array(
					'title' => '',
				);

				the_widget( 'WC_Widget_Cart', $instance );
				?>
  </li>
</ul>
<?php
	}





	
}



// ============================================================

// активируем поддержку woocommerce
function uniformos_add_woocommerce_support() {
    add_theme_support( 'woocommerce' );
}
add_action( 'after_setup_theme', 'uniformos_add_woocommerce_support' );



// убираем хлебные крошки со страницы продукта
add_filter( 'woocommerce_before_main_content', 'remove_breadcrumbs');
function remove_breadcrumbs() {
    if (is_product()){
        remove_action( 'woocommerce_before_main_content','woocommerce_breadcrumb', 20, 0);
    }
}



// отключитьт хлебные крошки 
// remove_action( "woocommerce_before_main_content", 'woocommerce_breadcrumb', 20 );


// убираем сайтбар
remove_action( "woocommerce_sidebar", 'woocommerce_get_sidebar', 10 );




// убираем  из на странице товара
remove_action('woocommerce_single_product_summary','woocommerce_template_single_price', 10);
remove_action('woocommerce_single_product_summary','woocommerce_template_single_meta', 40);
remove_action('woocommerce_single_product_summary','woocommerce_template_single_excerpt', 10);
remove_action('woocommerce_single_product_summary','woocommerce_template_single_add_to_cart', 30);
// убираем цену из карточки товара
remove_action('woocommerce_after_shop_loop_item_title','woocommerce_template_loop_price', 10);
remove_action('woocommerce_after_single_product_summary','woocommerce_output_product_data_tabs', 10);
remove_action('woocommerce_before_shop_loop','woocommerce_result_count', 20);

	
// function woo_catalog_orderby( $orderby ) {
//     unset($orderby["price"]); // Сортировка по цене по возрастанию
//     unset($orderby["price-desc"]); // Сортировка по цене по убыванию
//     unset($orderby["popularity"]); // Сортировка по популярности
//     unset($orderby["rating"]); // Сортировка по рейтингу
//     unset($orderby["date"]);    // Сортировка по дате
//     unset($orderby["title"]);	 // Сортировка по названию
//     unset($orderby["menu_order"]); // Сортировка по умолчанию (можно определить порядок в админ панели)
//     return $orderby;
// }
// add_filter( "woocommerce_catalog_orderby", "woo_catalog_orderby", 20 );




// remove default sorting dropdown
remove_action( 'woocommerce_before_shop_loop', 'woocommerce_catalog_ordering', 30 );




// убирает отзывы с страницы товара
add_filter( 'woocommerce_product_tabs', 'sb_woo_remove_reviews_tab', 98);
function sb_woo_remove_reviews_tab($tabs) {
unset($tabs['reviews']);
return $tabs;
}



// количество "Похожих товаров"
add_filter( 'woocommerce_output_related_products_args', 'jk_related_products_args' );
 function jk_related_products_args( $args ) {
$args['posts_per_page'] = 20; // количество "Похожих товаров"
$args['columns'] = 4;
 return $args;	
}



function custom_single_product_archive_thumbnail_size( $size ) {
 // определение нового размера для изображения в списке товаров
 $size = 'full';
 return $size;
}
// вызов фильтра
add_filter( 'single_product_archive_thumbnail_size', 'custom_single_product_archive_thumbnail_size', 10, 1 );



 // добавление табов описания товара на странице товара===== -->
require get_template_directory() . '/includes/description-tabs.php';



add_filter('woocommerce_breadcrumb_defaults','in_woocommerce_breadcrumb_defaults');

function in_woocommerce_breadcrumb_defaults($args){
    $args['delimiter']   = '&nbsp;&nbsp;&#62;&nbsp;&nbsp;';
    return $args;
}