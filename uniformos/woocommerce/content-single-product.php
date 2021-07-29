<?php
/**
 * The template for displaying product content in the single-product.php template
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/content-single-product.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 3.6.0
 */

defined( 'ABSPATH' ) || exit;

global $product;

/**
 * Hook: woocommerce_before_single_product.
 *
 * @hooked woocommerce_output_all_notices - 10
 */
do_action( 'woocommerce_before_single_product' );

if ( post_password_required() ) {
	echo get_the_password_form(); // WPCS: XSS ok.
	return;
}
?>


<section class="product" id="product">




  <div class="product__body">

    <div class="product__column">
    
      <div class="product__slider product-slider">
        <!-- <div class="slider__body "> -->

            <div class="product__cat-links product-cat-links">
                 
                
                  <span>
                  <?php echo wc_get_product_category_list( $product->get_id(), ', ', '<span class="posted_in">' . _n( '', 'Kategorijos:', count( $product->get_category_ids() ), 'woocommerce' ) . ' ', '</span>' ); ?>
                  </span>
            </div>

        <div id="product-<?php the_ID(); ?>" <?php wc_product_class( '', $product ); ?>>
          <?php
	/**
	 * Hook: woocommerce_before_single_product_summary.
	 *
	 * @hooked woocommerce_show_product_sale_flash - 10
	 * @hooked woocommerce_show_product_images - 20
	 */
	do_action( 'woocommerce_before_single_product_summary' );
	?>


          <!-- </div> -->
        </div>
      </div>
    </div>


    <div class="product__column product-description">
      <div class="summary entry-summary">

        <?php
		/**
		 * Hook: woocommerce_single_product_summary.
		 *
		 * @hooked woocommerce_template_single_title - 5
		 * @hooked woocommerce_template_single_rating - 10
		 * @hooked woocommerce_template_single_price - 10
		 * @hooked woocommerce_template_single_excerpt - 20
		 * @hooked woocommerce_template_single_add_to_cart - 30
		 * @hooked woocommerce_template_single_meta - 40
		 * @hooked woocommerce_template_single_sharing - 50
		 * @hooked WC_Structured_Data::generate_product_data() - 60
		 */
		do_action( 'woocommerce_single_product_summary' );
		?>
  

        <button class="product-description__button btn--empty-white _20-24 btn-popup popup-init-js" type="button">
          Pasiteirauti
        </button>

        <div class="popup popup--card">
          <div class="popup__overlay">
            <div class="popup__inner">
              <section class="con-form" id="con-form">
                <form class="connect__form">
                  <div class="connect__form-item">
                    <input id="name" required="" placeholder=" Denzel Washington" /><label for="name">What is your
                      name?<span>*</span></label>
                  </div>
                  <div class="connect__form-item">
                    <input id="email" type="address" required="" placeholder=" thebestmail@mail.com" /><label
                      for="email">What is your address?<span>*</span></label>
                  </div>
                  <div class="connect__form-item">
                    <input id="phone" type="phone" required="" placeholder=" thebestmail@mail.com" /><label
                      for="phone">What is your phone number?<span>*</span></label>
                  </div>
                  <div class="connect__form-item">
                    <textarea id="message" type="text" required="" placeholder=" Your awesome message" cols="40"
                      rows="6"></textarea><label for="message">Žinutė<span>*</span></label>
                  </div>
                  <div class="form__submit-button">
                    <button class="btn--success" id="submit-button" type="submit">
                      Siųsti
                    </button>
                  </div>
                </form>
              </section>
              <i class="icon-x popup__close popup__close"></i>
            </div>
          </div>


        </div>

      </div>
    </div>




</section>



<section id="slider-same-products-card" class="slider-same-products-card">
  <div class="slider-models__body container">
    <?php
	/**
	 * Hook: woocommerce_after_single_product_summary.
	 *
	 * @hooked woocommerce_output_product_data_tabs - 10
	 * @hooked woocommerce_upsell_display - 15
	 * @hooked woocommerce_output_related_products - 20
	 */
	do_action( 'woocommerce_after_single_product_summary' );
	?> 
  <div class="carusel__mask"></div>
  </div>
</section>






</div>

<?php do_action( 'woocommerce_after_single_product' ); ?>