     <section class="confirm" id="confirm">
        <div class="confirm__wrapper">
          <div class="ibg bg"><img src="<?php echo get_template_directory_uri()?>/assets/img/confirm/img-70.png" alt=""></div>
          <div class="confirm__body container">
            <div class="confirm__head">
              <div class="create-pro__head">
                <h2 class="create-pro-head__title">Лучшее подтверждение качественной работы,<p>это благодарные клиенты
                  </p>
                </h2>
              </div>
            </div>
            <div class="confirm__team">
              <div class="ibg bg"><img src="<?php echo get_template_directory_uri()?>/assets/img/confirm/team.png" alt="img"></div>
            </div>
            <div class="confirm__slider">
              <div class="slider-confirm__body container-confirm slider-confirm-js">


  <!------ -форрмирование слайдов ----------- -->
                  <?php  
                      global $post;
                      $args = array(
                         'post_type'=>'slider-confirm',
                         'publish' => true,
                         'numberposts' => 20
                        );
                      $slider_confirm = get_posts($args);
                      $reversedconfirm = array_reverse($slider_confirm);
                      foreach($reversedconfirm as $post){
                        $post_id = get_the_ID(); 
                        $post = get_post($post_id); 
                        $number_plyr = $post->post_title;
                        $text=$post->post_content;
                       
                       ?>

              <div class="slider-confirm__slide scs">
                  <div class="scs__text1"><img src="<?php echo get_template_directory_uri()?>/assets/img/confirm/star.svg" alt="img">
                    <p>Оценка клиента:<span>
                    <?php the_field('appraisal') ;?> 
                    /10</span></p>
                  </div>
                  <div class="scs__title">Требования клиента:</div>
                  <div class="scs__text2">
                  <?php the_field('demands'); ?> 
                    </div>
                  <div class="scs__title">Решение:</div>
                  <div class="scs__text2">
                   <?php the_field('solutions'); ?> 
                    </div>
                  <div class="scs__recomend">
                  <img src="<?php echo get_the_post_thumbnail_url(get_the_ID(),'slider-confirm') ?>" alt="img">
                    <p><?php $post ?> 
                     <span><?php the_field('description_client2'); ?> </span>
                     <br>
                     <span><?php the_field('description_client3'); ?> </span>
                     </p>
                  </div>
<!-- ---------------------------------------------- -->
		<?php $href1 = get_field('video_url'); ?>
		<?php preg_match('/.be\/(.*)|\?v=(.*)/', $href1, $ytimg);?>

          <div class="scs__player "> 
            <div class="ibg bg"><img src="<?php echo 'https://img.youtube.com/vi/',end($ytimg),'/sddefault.jpg'?>" alt=""></div>
              <div class="scs__triangle js-button-confirm<?php echo $number_plyr?>" > 
                 <img src="<?php echo get_template_directory_uri()?>/assets/img/confirm/img-80.png" alt="img">
              </div>
          </div>
     <!------------------------scs__player---------------------  -->
 </div>
                    <?php 
                    wp_reset_postdata(); 
                    }
                   ?> 


<!-- ------------------------------------ -->
			<?php  
                      global $post;
                      $args = array(
                         'post_type'=>'slider-confirm',
                         'publish' => true,
                         'numberposts' => 20
                        );?>


              </div>
              <div class="slider-confirm__arrows arrows-slider-confirm">
                <div class="arrows-slider-confirm__arrow arrows-slider-confirm__arrow_prev"></div>
                <div class="arrows-slider-confirm__arrow arrows-slider-confirm__arrow_next"></div>
              </div>
              <div class="slick-dots">
                <div class="slider-invitation__mark">/</div>
                <div class="slider-invitation__mark1">09</div>
                <div class="slider-invitation__mark3">0</div>
              </div>
            </div>
          </div>
        </div>

<!-- ----------------------формирование попап окон------------------------------- -->
    

                <?php $slider_confirm = get_posts($args);
                      $reversedconfirm = array_reverse($slider_confirm);
                      foreach($reversedconfirm as $post){
                        $post_id = get_the_ID(); 
                        $post = get_post($post_id); 
                        $number_plyr = $post->post_title;
                        $text=$post->post_content;
                        ?>

  <div class="popup-video js-overlay-confirm<?php echo  $number_plyr ?>">
     <div class="overlay-popup "></div>
        <div class="video-frame">
		<?php $href1 = get_field('video_url'); ?>
		<?php preg_match('/.be\/(.*)|\?v=(.*)/', $href1, $yturl);?>
          <div class="plyr__video-embed" id="player-confirm<?php echo  $number_plyr ?>" data-plyr-provider="youtube" data-plyr-embed-id="<?php echo 'https://www.youtube.com/embed/',end($yturl),'?origin=',get_site_url(),'&iv_load_policy=3&modestbranding=1&playsinline=1&showinfo=0&rel=0&enablejsapi=1' ?>"> 
          </div> 
          <div class="close-popup js-close-confirm "></div>
        </div>
     
  </div>  

   <?php 
                     }
wp_reset_postdata();
                   ?> 




      </section>



 