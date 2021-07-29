<?php
/**
*Template Name: single
*Template Post Type: post,cases  
 */
defined( 'ABSPATH' ) || exit;
get_header("single");  
?>



<?php get_template_part('./includes/bunner-main') ?>
<!-- bunner -->
</section>
<!-- first  -->


<section class="single" id="single">
<div class="single__wrapper">
        <div class="container">
          <div class="single__body">
            <div class="single__img imgs">
           
              <img src="
              
              <?php $img = get_field('img_2');if( !empty($img) ): 
                          echo $img;
               endif;  wp_reset_postdata(); ?>
              ">
            </div>
            <div class="single__column">
              <div class="single__pre-title">who we are</div>
              <div class="single__title">
                <h3>about us</h3>
              </div>
              <div class="single__text">
              <?php $text = get_field('text_field');if( !empty($text) ): 
                          echo $text;
               endif;  wp_reset_postdata(); ?>
              </div>
            </div>
          </div>
        </div>
      </div>

  </section>


<?php 
get_footer();