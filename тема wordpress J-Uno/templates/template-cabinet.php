<?php
/**
 *Template Name: Шаблон отдельного объекта
*Template Post Type: post,products
 */
get_header('project');
?>

  <?php
    $post_id = get_the_ID(); 
    $post = get_post($post_id);
     $text=$post->post_content; 
echo apply_filters('the_content', $text);
?>

      
      <section class="cupe" id="cupe">
        <div class="cupe__wrapper">
          <div class="container">
            <div class="cupe__plaza cupe-plaza">
              <div class="cupe-plaza__body board24_jucb">
                <div class="cupe-plaza__column">
                  <div class="cupe-plaza__title"><?php echo esc_html( get_the_title() ); ?></div>
                  <div class="cupe-plaza__district">Район:<span>  <?php the_field('cabinet_text1'); if( !empty(get_field('metro_text')) ){echo ' <img src="',get_template_directory_uri(),'/assets/img/project/mos_metro.png"  alt="">&nbsp;',get_field('metro_text');};?>	</span></div>
                  <div class="cupe-plaza__district">Дата:<span><?php the_field('cabinet_text2'); ?></span></div>
				  

				  
				 
				  
                  <div class="cupe-plaza__text">
                 <?php the_field('cabinet_text3'); ?>
                    </div>
                </div>
				
                <div class="cupe-plaza__column board24_jucc">
					<div class="cupe-plaza__img">
					
					<?php if( get_field('first_block_select') == 'Обычное фото или ГИФка' ) {
						//echo 'Обычное фото или ГИФка';
								  $href = get_field('first_block_img');
								  if( !empty($href) ){ 
										 echo '<div><a class="gallery " rel="group"  href="',$href,'"><div class="ibg bg" style="border-radius: 10px;"><img  src="',$href,'"  alt=""></div></a></div>';
								  }
								  wp_reset_postdata();							
							}
					?>				   
					<?php if( get_field('first_block_select') == 'Фото до/после' ) {
						//echo 'Фото до/после';
						$image = get_field('img_before', false, false);
						$image_attributes = wp_get_attachment_image_src( $image,'full' );
                           echo '<div class="juxtapose" id="foo" style="max-width: ',$image_attributes[1],'px;"></div>';
							}
					?>				   
					</div>
					
					<?php if( !(get_field('video_on_page') == 'Нет видео') ) {
						echo '<a class="cupe-plaza__button" href="#plaza-video"><div class="button-color">Посмотреть видео</div></a>';
					}?>
                  
                </div>
              </div>
            
            <?php
			for ($numblock = 1; $numblock <= get_field('blocks_qty'); $numblock++) {
				
			
				switch (get_field('block_type'.$numblock)) {
				case 'Только текст':
					echo '<div class="cupe-plaza__text cupe-plaza__text_no-gutters">',the_field('text_block'.$numblock),'</div>';
				break;
				case 'Текст+фото':
				
				if( get_field('block_contents_text-foto'.$numblock) == 'текст слева -> фото справа' ) {
				echo '<div class="cupe-plaza__body board24_jucb">';	
                echo '<div class="cupe-plaza__column"><div class="cupe-plaza__text">',the_field('text_block'.$numblock),'</div></div>';
				echo '<div class="cupe-plaza__column"><div class="cupe-plaza__img">';
				$href = get_field('block_foto_right'.$numblock);
					if( !empty($href) ){ 
					echo '<div><a class="gallery " rel="group"  href="',$href,'"><div class="ibg bg" style="border-radius: 10px;"><img  src="',$href,'"  alt=""></div></a></div>';
					}
					wp_reset_postdata();
					echo '</div></div></div>';
				}elseif (get_field('block_contents_text-foto'.$numblock) == 'фото слева <- текст справа') {
				echo '<div class="cupe-plaza__body board24_jucb">';
				echo '<div class="cupe-plaza__column"><div class="cupe-plaza__img">';
					$href = get_field('block_foto_left'.$numblock);
					if( !empty($href) ){ 
					echo '<div><a class="gallery " rel="group"  href="',$href,'"><div class="ibg bg" style="border-radius: 10px;"><img  src="',$href,'"  alt=""></div></a></div>';
					}
					wp_reset_postdata();
				echo '</div></div>';				
                echo '<div class="cupe-plaza__column"><div class="cupe-plaza__text">',the_field('text_block'.$numblock),'</div></div></div>';				
				}
				break;
				case 'Только фото':
					if( get_field('block_contents_foto'.$numblock) == '2 фото' ) {
						echo '<div class="cupe__quatro quatro board24_jucb">';
						$href = get_field('block_foto_left'.$numblock);
						if( !empty($href) ){
							echo '<div class="quatro__img"><a class="gallery fancybox-inline" rel="group"  href="',$href,'"><div class="ibg bg"><img  src="',$href,'"  alt=""></div></a></div>';
						}
						wp_reset_postdata();

						$href = get_field('block_foto_right'.$numblock);
						if( !empty($href) ){
							echo '<div class="quatro__img"><a class="gallery fancybox-inline" rel="group"  href="',$href,'"><div class="ibg bg"><img  src="',$href,'"  alt=""></div></a></div>';
						}
						wp_reset_postdata();
						echo '</div>';
					}elseif (get_field('block_contents_foto'.$numblock) == '3 фото') {
						echo '<div class="cupe__tres tres board24_jucb">';
						$href = get_field('block_foto_left'.$numblock);
						if( !empty($href) ){
							echo '<div class="tres__img"><a class="gallery " rel="group"  href="',$href,'"><div class="ibg bg"><img  src="',$href,'"  alt=""></div></a></div>';
						}
						wp_reset_postdata();
						
						$href = get_field('block_foto_center'.$numblock);						
						if( !empty($href) ){
							echo '<div class="tres__img"><a class="gallery " rel="group"  href="',$href,'"><div class="ibg bg"><img  src="',$href,'"  alt=""></div></a></div>';
						}
						wp_reset_postdata();
						$href = get_field('block_foto_right'.$numblock);
						if( !empty($href) ){
							echo '<div class="tres__img"><a class="gallery " rel="group"  href="',$href,'"><div class="ibg bg"><img  src="',$href,'"  alt=""></div></a></div>';
						}
						wp_reset_postdata();
						echo '</div>';						
					}
				
				
				break;
				}
			}?>
              
             

           
           
            <?php $href1 = get_field('cabinet_video1');$href2 = get_field('cabinet_video2');if( !empty($href1) || !empty($href2) ): ?>
			<?php preg_match('/.be\/(.*)|\?v=(.*)/', $href1, $ytkey1);?>
			<?php preg_match('/.be\/(.*)|\?v=(.*)/', $href2, $ytkey2);?>

              <div class="cupe-plaza__video plaza-video" id="plaza-video">
                <div class="plaza-video__body">
                  
                  <?php if( !empty($href1) ): ?>
                  <div class="plaza-video__part<?php if( empty($href1) || empty($href2) ){echo '_one';} ?>">
                    <div class="plaza-video__title">Наша мебель в интерьере</div>
                    <div class="plaza-video__img">
                      <div class="ibg bg"><img src="<?php echo 'https://img.youtube.com/vi/',end($ytkey1),'/sddefault.jpg'?>" alt=""></div>
                      <div class="plaza-video__img1 js-button-cabinet1"><img src="<?php echo get_template_directory_uri()?>/assets/img/project/Vector.svg" alt="img"></div>
                    </div>
                  </div>
                  <?php endif;?>
                
                  <?php if( !empty($href2) ): ?>
                   <div class="plaza-video__part<?php if( empty($href1) || empty($href2) ){echo '_one';} ?>">
                    <div class="plaza-video__title">Как мы собирали мебель</div>
                    <div class="plaza-video__img">
                      <div class="ibg bg"><img src="<?php echo 'https://img.youtube.com/vi/',end($ytkey2),'/sddefault.jpg'?>" alt=""></div>
                   <div class="plaza-video__img1 js-button-cabinet2"><img src="<?php echo get_template_directory_uri()?>/assets/img/project/Vector.svg" alt="img"></div>
                    </div>
                  </div>
                  <?php endif;?>

                </div>
              </div>
 
            <?php endif;  wp_reset_postdata(); ?>
              <div class="cont-column__body">
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
        </div>
      </section>
    </main>
  </div>


<?php if( !empty($href1) ): ?>
<div class="popup-video popup-video-cabinet1 js-overlay-cabinet1">
    <div class="overlay-popup-cabinet "></div>
        <div class="video-frame">
             <div class="plyr__video-embed" id="player-popup-cabinet1" data-plyr-provider="youtube" data-plyr-embed-id="<?php echo 'https://www.youtube.com/embed/',end($ytkey1),'?origin=',get_site_url(),'&iv_load_policy=3&modestbranding=1&playsinline=1&showinfo=0&rel=0&enablejsapi=1' ?> "> </div>
             <div class="close-popup js-close-cabinet1 "></div>
        </div> 
</div>
<?php endif;?>
<?php if( !empty($href2) ): ?>  
<div class="popup-video popup-video-cabinet2 js-overlay-cabinet2">
    <div class="overlay-popup-cabinet "></div>
        <div class="video-frame">
             <div class="plyr__video-embed" id="player-popup-cabinet2" data-plyr-provider="youtube" data-plyr-embed-id="<?php echo 'https://www.youtube.com/embed/',end($ytkey2),'?origin=',get_site_url(),'&iv_load_policy=3&modestbranding=1&playsinline=1&showinfo=0&rel=0&enablejsapi=1' ?>  "> </div>
             <div class="close-popup js-close-cabinet2 "></div>
        </div> 
</div>  
<?php endif;?>

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
        makeResponsive: false
      });
  </script>


</body>
</html>





