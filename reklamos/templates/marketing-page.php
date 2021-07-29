<?php
/*
Template Name: marketing
*/
defined( 'ABSPATH' ) || exit;
get_header('portfolio');  
?>



        <div class="container">
          <div class="first-port__tabs tabs tabs-mark">
            <nav class="tabs__items">

<?php  
      global $post;
      $args = array(       
         'post_type'=>'market-cases',
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
        $image=get_the_post_thumbnail_url($post_id, 'market-cases');  
?>
  <a class="tabs__item" href="#tab-<?php the_field('mark_case_order'); ?>" data=""><?php echo $post_title ?></a>
<?php 
  	}
  } else {
    ?>
<p><?php _e( 'Sorry, no posts matched your criteria.' ); ?></p>
<?php  
    }
    wp_reset_postdata();
      ?>   
           
            </nav>

            <div class="tabs__body">
             



<?php  
      global $post;
      $args = array(       
         'post_type'=>'market-cases',
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
        $image=get_the_post_thumbnail_url($post_id, 'market-cases');  
?>


              <div class="tabs__block" id="tab-<?php the_field('mark_case_order'); ?>">
                <div
                  class="tabs__img"
                  style="background-image: url('<?php echo $image?>')"
                ></div>
                <p>
                  <?php the_excerpt(); ?>
                </p>
                <a class="btn btn--success tabs__button js-mark-button" href="#!"  data="<?php echo $post_id ?>" >Daugiau informacijos</a
                >
              </div>

<?php 
  	}
  } else {
    ?>
<p><?php _e( 'Sorry, no posts matched your criteria.' ); ?></p>
<?php  
    }
    wp_reset_postdata();
      ?>       


            
            </div>



          </div>
        </div>
      </section>


</div>
</div>


<?php 
get_footer('cases');