<?php 

function data_fetch($postID){
$postID =  $_POST['param'];
 ?>

<?php  
      global $post;
      $args = array(       
         'post_type'=>'cases',
         'publish' => true,
         'numberposts' => 20,
          'p' => $postID
        );
        
      $projects = get_posts($args);  
      $reversed = array_reverse($projects);
     
     if ($projects ) {
     
      foreach($reversed as $post){
        setup_postdata( $post );
        $post_id = $post->ID;
        $post_title = $post->post_title; 
        $post_text=$post->post_content;  
        $image=get_the_post_thumbnail_url($post_id, 'cases');  
       
?>

          <div class="first-port__case the-case">
            <div class="the-case__data">
              <div class="the-case__title"><h2><?php echo $post_title ?></h2></div>
              <a  class="the-case__link" href="<?php the_field('case_link'); ?>" target="_blank"><?php the_field('case_link'); ?></a>
              <div class="the-case__description">
                  <?php echo the_field('text_field'); ?>
              </div>
            </div>
              <div class="the-case__images fdc">
             
              <?php $href = get_field('img_1');if( !empty($href) ): ?>
              <div class="the-case__img"
                style="background-image: url('<?php the_field('img_1'); ?>')">
              </div>
              <?php endif;  wp_reset_postdata(); ?>
             
              <?php $href = get_field('img_2');if( !empty($href) ): ?>
              <div class="the-case__img"
                style="background-image: url('<?php the_field('img_2'); ?>')">
              </div>
              <?php endif;  wp_reset_postdata(); ?>
           
           
              <?php $href = get_field('img_3');if( !empty($href) ): ?>
              <div class="the-case__img"
                style="background-image: url('<?php the_field('img_3'); ?>')">
              </div>
              <?php endif;  wp_reset_postdata(); ?>
           
           
              <?php $href = get_field('img_4');if( !empty($href) ): ?>
              <div class="the-case__img"
                style="background-image: url('<?php the_field('img_4'); ?>')">
              </div>
              <?php endif;  wp_reset_postdata(); ?>
           
           
            </div>

          </div>

          </div>
<?php 
  	}
  }
  wp_die(); 
}

// ======================================

function data_fetch_mark($postID){
$postID =  $_POST['param'];
 ?>

<?php  
      global $post;
      $args = array(       
         'post_type'=>'market-cases',
         'publish' => true,
         'numberposts' => 20,
          'p' => $postID
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
 

          <div class="first-port__case the-case">
            <div class="the-case__data">
              <div class="the-case__title"><h2><?php echo $post_title ?></h2></div>
              <a  class="the-case__link" href="<?php the_field('mark_case_link'); ?>" target="_blank"><?php the_field('mark_case_link'); ?></a>
              <div class="the-case__description">
               <?php echo the_field('mark_text_field'); ?>
              </div>
            </div>
              <div class="the-case__images fdc">
             
              <?php $href = get_field('mark_img_1');if( !empty($href) ): ?>
              <div class="the-case__img"
                style="background-image: url('<?php the_field('mark_img_1'); ?>')">
              </div>
              <?php endif;  wp_reset_postdata(); ?>
             
              <?php $href = get_field('mark_img_2');if( !empty($href) ): ?>
              <div class="the-case__img"
                style="background-image: url('<?php the_field('mark_img_2'); ?>')">
              </div>
              <?php endif;  wp_reset_postdata(); ?>
           
              <?php $href = get_field('mark_img_3');if( !empty($href) ): ?>
              <div class="the-case__img"
                style="background-image: url('<?php the_field('mark_img_3'); ?>')">
              </div>
              <?php endif;  wp_reset_postdata(); ?>
           
              <?php $href = get_field('mark_img_4');if( !empty($href) ): ?>
              <div class="the-case__img"
                style="background-image: url('<?php the_field('mark_img_4'); ?>')">
              </div>
              <?php endif;  wp_reset_postdata(); ?>
           
           
            </div>
          </div>
          </div>
<?php 
  	}
  }
  wp_die(); 
}

// ============================================

function data_fetch_vacanses($postID){
$postID =  $_POST['param'];
 ?>

<?php  
      global $post;
      $args = array(       
         'post_type'=>'vacancies',
         'publish' => true,
         'numberposts' => 20,
          'p' => $postID
        );
        
      $projects = get_posts($args);  
      $reversed = array_reverse($projects);
     
     if ($projects ) {
     
      foreach($reversed as $post){
        setup_postdata( $post );
       
?>
 
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


 <!-- ===================================================== -->

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
              <a class="car-4__button btn btn--success popup-init-js " href="#!"  data="./includes/inner-form-cv"
                >Siųsti savo CV</a
              >
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
<?php 
  	}
  } 
  wp_die(); 
}


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++


function data_fetch_blog($postID){
$postID =  $_POST['param'];

      global $post;
      $args = array(       
        'post_type'=>'post',
        'cat' => 3,
        'publish' => true,
        'numberposts' => 4,
        'p' => $postID
        );
        
      $projects = get_posts($args);  
      $reversed = array_reverse($projects);
     
     if ($projects ) {
     
      foreach($reversed as $post){
        setup_postdata( $post );
        $post_id = $post->ID;
        $post_title = $post->post_title; 
        $post_text=$post->post_content;  
?>










<section class="blog-3" id="blog-3">
  <div class="container">
    <div class="blog-3__body">
        <div class="blog-3__img">
          <?php the_post_thumbnail();?>
        </div>
      <div class="blog-3-item__chip"><?php the_author();?></div>
      <div class="blog-3-item__title"><?php the_title();	?></div>
      <div class="blog-3-item__propes">
        <div class="blog-3-item__prop"><i class="icon-clock"></i><span> <?php the_time('F j, Y '); ?></span></div>
        <div class="blog-3-item__prop"><i class="icon-chat"></i><span><?php comments_number('0', '1 комментарий', '% комментариев'); ?></span></div>
      </div>
    </div>
  </div>
</section>

<script>
 let button =  document.querySelector(".blog-1-item__button");
 let more =  document.querySelector(".post-more");
button.addEventListener('click', function (event) {
  more.setAttribute('style', 'display: block;')
});
 
</script>

<section class="blog-4" id="blog-4">
  <div class="container">
    <div class="blog-4__body">
      <div class="blog-4__title">
        <h2><?php the_field('article_title_dark');?>
          <span><?php the_field('article_title_purple');?></span>
        </h2>
      </div>
      <div class="blog-4__description">
        <?php the_content();?>
      </div>
      <div class="jucb alic">
        <div class="blog-4__props alic">
          
          <div class="blog-4__prop alic">
            <span class="likecount">
              <div class="wpulike wpulike-default">
                <div class="wp_ulike_general_class wp_ulike_is_not_liked">
                  <button type="button" aria-label="Like Button" data-ulike-id="84" data-ulike-nonce="09fe1888ff"
                    data-ulike-type="likeThis" data-ulike-template="wpulike-default"
                    data-ulike-display-likers=" data-ulike-disable-pophover="
                    class="wp_ulike_btn wp_ulike_put_image wp_likethis_84"></button>
                  <span class="count-box">0</span>
                </div>
              </div>
            </span>
          </div>

          <div class="blog-4__prop alic">
            <i class="icon-bubble"></i>
            <span>80</span>
          </div>


        </div>
        <ul class="blog-4__soc blog-4-soc alic">
            <li class="blog-4-soc__link blog-4-soc__link--share" href="#!"><i class="icon-share2"></i></li>
            <li class="blog-4-soc__link">
                <a target="_blank" class="bt" href="https://messenger.com/share?url=<?php the_permalink(); ?>&text=<?php the_title(); ?>">
                    <i class="icon-messenger"></i>
                </a>
            </li>
            <li class="blog-4-soc__link">
                <a  target="_blank" class="bt" href="http://www.facebook.com/sharer.php?u=<?php the_permalink(); ?>&title=<?php the_title(); ?>">
                  <i class="icon-free-icon-facebook-logo-in-circular-shape-44646"></i>
                </a>
            </li>
            <li class="blog-4-soc__link">
                <a  target="_blank" class="bt" href="http://twitter.com/share.php?url=<?php the_permalink(); ?>&title=<?php the_title(); ?>">
                   <i class="icon-twitter"></i>
                </a>
            </li>
            <li class="blog-4-soc__link">
                <a  target="_blank" class="bt" href="https://telegram.com//share.php?url=<?php the_permalink(); ?>&title=<?php the_title(); ?>">
                   <i class="icon-telegram"></i>
                </a>
            </li>
            <li class="blog-4-soc__link">
                <a  target="_blank" class="bt" href="http://google.com/share.php?url=<?php the_permalink(); ?>&title=<?php the_title(); ?>">
                   <i class="icon-google-plus3"></i>
                </a>
            </li>
        </ul>
      </div>
    </div>
  </div>
</div>
</section>

<?php 
  	}
  } 
  wp_die(); 
  	}
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// function data_fetch_popup($popup){
// $popup =  $_POST['url'];
// get_template_part($popup);
//   wp_die(); 
//   	}

