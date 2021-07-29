<?php
/*
Template Name: career
*/
defined( 'ABSPATH' ) || exit;
get_header();
?>

<?php get_template_part('./includes/bunner-main') ?>  
        <!-- bunner -->
      </section>  
        <!-- first  -->

      <section class="slider-cards slider-cards--car" id="slider-cards">
        <div class="container">
          <div class="slider-cards__body">
            <div class="slider__slider slider-cards__content slider">
              <ul class="slider-cards__slider slider__body slider-js-1">

              
  <?php  
      global $post;
      $args = array(       
         'post_type'=>'vacancies',
         'publish' => true,
         'numberposts' => 20,
        );
        
      $projects = get_posts($args);  
      $reversed = array_reverse($projects);
     
     if ($projects ) {
     
      foreach($reversed as $post){
        setup_postdata( $post );
        $post_id = $post->ID;
        $post_title = $post->post_title; 
        $post_text=$post->post_content;  
        $image=get_the_post_thumbnail_url($post_id, 'vacancies');  
?>



                <li class="slider-cards__item slider-card" data="<?php echo the_field('data_active');?>">
                  <div class="slider-card__title"><?php echo $post_title ?></div>
                  <div class="slider-card__text">
                    <p>
                      <?php echo $post_text ?>
                    </p>
                  </div>
                  <a class="slider-card__button js-vac-button" href="#!" data="<?php echo $post_id;?>">Žiūrėti</a>
                </li>


<?php 
  	}
  } else {
    ?>
<p><?php _e( 'Sorry, no posts matched your criteria.' ); ?></p>
<?php  
    }
    wp_reset_postdata();
      ?>    
           
         
              </ul>
            </div>
          </div>
        </div>
      </section>
     
     
     
<section class="vac-responce">

<?php  
      global $post;
      $args = array(       
         'post_type'=>'vacancies',
         'publish' => true,
         'numberposts' => 20,
        );
        
      $projects = get_posts($args);  
      $reversed = array_reverse($projects);
     
     if ($projects ) {
     
      foreach($reversed as $post){
        setup_postdata( $post );
	?>


<?php $href = get_field('data_active');if( !empty($href) ): ?>


<?php if( have_rows('block_1') ): 
            while( have_rows('block_1') ): the_row(); 
            $platforms = get_field('block_1');
    		?>
    
     <section class="car-1" id="car-1">
        <div class="container">
          <div class="car-1__body">
            <div class="car-1__item car-1-item">
              <div
                class="car-1-item__img"
                style="background-image: url('<?php echo  $platforms['img_vac_1'] ?>')"
              ></div>
            </div>
            <div class="car-1__item car-1-item">
              <div class="car-1-item__title"> <?php echo  $platforms['title_black_1'] ?> <span> <?php echo  $platforms['title_perple_1'] ?></span> </div>
              <div class="car-1-item__text">
               <?php echo  $platforms['text_1'] ?>
              </div>
            </div>
          </div>
        </div>
      </section>
    
    <?php endwhile; ?>
    <?php endif; ?>
 <!-- ===================================================== -->

<?php if( have_rows('block_2') ): 
            while( have_rows('block_2') ): the_row(); 
            $platforms = get_field('block_2');
    		?>

      <section class="car-1 car-2" id="car-2">
        <div class="container">
          <div class="car-1__body">
            <div class="car-1__item car-1-item">
              <div class="car-1-item__title"><span><?php echo  $platforms['title_perple_2'] ?></span></div>
              <div class="car-1-item__text">
                 <?php echo  $platforms['text_2'] ?>
              </div>
            </div>
            <div class="car-1__item car-1-item">
              <div
                class="car-1-item__img"
                style="background-image: url(' <?php echo  $platforms['img_vac_2'] ?>')"
              ></div>
            </div>
          </div>
        </div>
      </section>



    <?php endwhile; ?>
    <?php endif; ?>
<!-- ===================================== -->

<?php if( have_rows('block_3') ): 
            while( have_rows('block_3') ): the_row(); 
            $platforms = get_field('block_3');
    		?>
      <section class="car-1 car-2 car-3" id="car-3">
        <div class="container">
          <div class="car-1__body">
            <div class="car-1__item car-1-item">
              <div
                class="car-1-item__img"
                style="background-image: url('<?php echo  $platforms['img_vac_3'] ?>')"
              ></div>
            </div>
            <div class="car-1__item car-1-item">
              <div class="car-1-item__title"><?php echo  $platforms['title_black_3'] ?> <span><?php echo  $platforms['title_perple_3'] ?></span></div>
              <div class="car-1-item__text">
                <?php echo  $platforms['text_3'] ?>
              </div>
            </div>
          </div>
        </div>
      </section>

   <?php endwhile; ?>
    <?php endif; ?>
<!-- =============================================================== -->

<?php if( have_rows('block_4') ): 
            while( have_rows('block_4') ): the_row(); 
            $platforms = get_field('block_4');
?>

      <section class="car-1 car-2 car-4" id="car-4">
        <div class="container">
          <div class="car-1__body">
            <div class="car-1__item car-1-item">
              <div class="car-1-item__title"><span><?php echo  $platforms['title_perple_4'] ?></span></div>
              <div class="car-1-item__text">
                 <?php echo  $platforms['text_4'] ?>
              </div>
              <a class="car-4__button btn btn--success popup-init-js" href="#!" rel="popup-cv">Siųsti savo CV</a>
            </div>
            <div class="car-1__item car-1-item">
              <div
                class="car-1-item__img"
                style="background-image: url('<?php echo  $platforms['img_vac_4'] ?>')"
              ></div>
            </div>
          </div>
        </div>
      </section>


<?php endwhile; ?>
<?php endif; ?>


<!-- ============= -->
<?php endif;  wp_reset_postdata(); ?>

 <?php
       	}
       	}
?>


</section>

<?php 
get_footer();
?>