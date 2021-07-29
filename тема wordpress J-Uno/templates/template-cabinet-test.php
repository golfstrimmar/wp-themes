<?php
/**
 *Template Name: Шаблон объекта HTML
*Template Post Type: post,products
 */
get_header('project');
?>


      <section class="cupe" id="cupe">
        <div class="cupe__wrapper">
          <div class="container">
            
			
  <?php
    $post_id = get_the_ID(); 
    $post = get_post($post_id);
     $text=$post->post_content; 
echo apply_filters('the_content', $text);
?>			

            <?php $href1 = get_field('cabinet_video1');$href2 = get_field('cabinet_video2');if( !empty($href1) || !empty($href2) ): ?>		
              <div class="cupe-plaza__video plaza-video" id="plaza-video">
                <div class="plaza-video__body">
                  
                  <?php $href = get_field('cabinet_video1');if( !empty($href) ): ?>
                  <div class="plaza-video__part">
                    <div class="plaza-video__title">Наша мебель в интерьере</div>
                    <div class="plaza-video__img">
                      <div class="ibg bg"><img src="<?php echo get_template_directory_uri()?>/assets/img/project/img-19.png" alt=""></div>
                      <div class="plaza-video__img1 js-button-cabinet1"><img src="<?php echo get_template_directory_uri()?>/assets/img/project/Vector.svg" alt="img"></div>
                    </div>
                  </div>
                  <?php endif;  wp_reset_postdata(); ?>
                
                  <?php $href = get_field('cabinet_video2');if( !empty($href) ): ?>
                   <div class="plaza-video__part">
                    <div class="plaza-video__title">Как мы собирали мебель</div>
                    <div class="plaza-video__img">
                      <div class="ibg bg"><img src="<?php echo get_template_directory_uri()?>/assets/img/project/img-20.png" alt=""></div>
                   <div class="plaza-video__img1 js-button-cabinet2"><img src="<?php echo get_template_directory_uri()?>/assets/img/project/Vector.svg" alt="img"></div>
                    </div>
                  </div>
                  <?php endif;  wp_reset_postdata(); ?>

                </div>
              </div>
 
            <?php endif;  wp_reset_postdata(); ?>			
			
			
			
              <div class="cont-column__body" style="margin-top: 5%;">
                <h3 class="cont-column__title">Повторить этот проект у Вас?</h3>
                <div class="cont-column__discription board24_m20">После отправки данных мы свяжемся с вами в течение 1
                  часа</div>
                <div class="cont-column__form">
                <?php echo do_shortcode( '[contact-form-7 id="73" title="Контактная форма 1"]' ); ?>
                  <!-- <div class="cont-column__in board24_m15"><input id="username" name="username"
                      placeholder="Введите ваше имя" required=""><img src="<?php echo get_template_directory_uri()?>/assets/img/link/link-pers.png" alt="img">
                  </div>
                  <div class="cont-column__in board24_m20"><input id="phone" name="phone"
                      placeholder="Введите номер телефона" required=""><img src="<?php echo get_template_directory_uri()?>/assets/img/link/link-phone.png"
                      alt="img"></div>
                  <div class="cont-column__button board24_m15"><input type="submit" name="submit"
                      value="Давайте знакомиться">
                    <div class="button-color"></div>
                  </div> -->
                </div>
                <div class="cont-column__confidence">Нажимая кнопку вы соглашаетесь на <a href="#"><span>обработку
                      персональных данных</span></a></div>
                <div class="cont-column__social board24_m15">Или напишите нам напрямую удобным вам способом</div>
                <div class="cont-column__icons"><a class="icon-link" href="#"><img src="<?php echo get_template_directory_uri()?>/assets/img/link/link-svg-3.svg"
                      alt="img"></a><a class="icon-link" href="#"><img class="ua" src="<?php echo get_template_directory_uri()?>/assets/img/thanks/va.png"
                      alt="img"></a><a class="icon-link" href="#"><img src="<?php echo get_template_directory_uri()?>/assets/img/link/link-svg-2.svg"
                      alt="img"></a><a class="icon-link" href="#"><img src="<?php echo get_template_directory_uri()?>/assets/img/link/link-svg-1.svg"
                      alt="img"></a></div>
                <div class="cont-column__team">
                  <div class="ibg bg"><img src="<?php echo get_template_directory_uri()?>/assets/img/project/group.png" alt=""></div>
                  <div class="cont-column__shadow"><img src="<?php echo get_template_directory_uri()?>/assets/img/link/link-shadow.png" alt="img"></div>
                  <div class="cont-column__bunner"><span>Ваша команда J-UNO</span><img src="<?php echo get_template_directory_uri()?>/assets/img/project/rec.png"
                      alt=""></div>
                </div>
              </div>			
          </div>
        </div>
      </section>
      
  
    </main>
  </div>



<div class="popup-video popup-video-cabinet1 js-overlay-cabinet1">
    <div class="overlay-popup-cabinet "></div>
        <div class="video-frame"> 
             <div class="plyr__video-embed" id="player-popup-cabinet1" data-plyr-provider="youtube" data-plyr-embed-id="<?php the_field('cabinet_video1') ?> "> </div>
             <div class="close-popup js-close-cabinet1 "></div>
        </div> 
    
</div>  
<div class="popup-video popup-video-cabinet2 js-overlay-cabinet2">
    <div class="overlay-popup-cabinet "></div>
        <div class="video-frame"> 
             <div class="plyr__video-embed" id="player-popup-cabinet2" data-plyr-provider="youtube" data-plyr-embed-id="<?php the_field('cabinet_video2') ?> "> </div>
             <div class="close-popup js-close-cabinet2 "></div>
        </div> 
    
</div>  


<!-- кнопка возврата на начало страницы -->
 <div class="scrollup">
<span></span>
</div> 




 <script>
    slider = new juxtapose.JXSlider('#foo',
      [
        {
          src: '<?php the_field('img_before'); ?>',
          label: 'до'
          // credit: 'Image Credit'
        },
        {
          src: '<?php the_field('img_after'); ?>',
          label: 'после'
          // credit: "Image Credit"
        }
      ],
      {
        animate: true,
        showLabels: true,
        showCredits: false,
        startingPosition: "50%",
        makeResponsive: true
      });
  </script>


</body>
</html>





