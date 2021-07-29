<section class="garant" id="garant">
 <div class="garant__wrapper">
        
        <div class="ibg bg">  
          <img src="<?php echo get_template_directory_uri()?>/assets/img/garant/garant-bg.jpg" alt="">
        </div>

          <div class="container">
          
          <div class="garant__body">

              <h2 class="garant__title">Благодаря собственной службе доставки и бригаде<p>установщиков мы можем
                  гарантировать заявленные сроки</p>
              </h2>
            
              <div class="garant__installers">
                <div class="ibg bg">
                  <img src="<?php echo get_template_directory_uri()?>/assets/img/garant/installers.png" alt="">
                </div>
              </div>
             
              <div class="garant__plaha garant-plaha">
              <div class="garant-plaha__body">
                 
                 <div class="garant-plaha__item">
                    <div class="garant-plaha__img">
                      <div class="garant-plaha__img1 plaha-img">
                        <img src="<?php echo get_template_directory_uri()?>/assets/img/garant/img-100.png" alt="img">
                      </div>
                      <div class="garant-plaha__img2 plaha-img">
                        <img src="<?php echo get_template_directory_uri()?>/assets/img/garant/img-101.png" alt="img">
                      </div>
                      <div class="garant-plaha__img3 plaha-img">
                        <img src="<?php echo get_template_directory_uri()?>/assets/img/garant/img-102.png" alt="img">
                      </div>
                    </div>
                    <div class="garant-plaha__title">Установка в день доставки</div>
                    <div class="garant-plaha__text">Наша бригада сборщиков к моменту доставки уже на месте и приступает
                      к установки в тот же день</div>
                  </div>
                  <div class="garant-plaha__item">
                    <div class="garant-plaha__img">
                      <div class="garant-plaha__img1 plaha-img"><img src="<?php echo get_template_directory_uri()?>/assets/img/garant/img-103.png" alt="img">
                      </div>
                    </div>
                    <div class="garant-plaha__title">Команда профессионалов</div>
                    <div class="garant-plaha__text">Свыше 10 лет имеет практический опыт каждый сборщик. В арсенале
                      только современное оборудование и инструменты</div>
                  </div>
                  <div class="garant-plaha__item">
                    <div class="garant-plaha__img">
                      <div class="garant-plaha__img1 plaha-img"><img src="<?php echo get_template_directory_uri()?>/assets/img/garant/img-104.png" alt="img">
                      </div>
                    </div>
                    <div class="garant-plaha__title">Убираем за собой</div>
                    <div class="garant-plaha__text">По итогу сборки и установки полностью убираем весь мусори вывозим
                      оставшийся материал</div>
                  </div>
                
                </div><!-- garant-plaha__body -->
              </div><!-- garant__plaha -->
           
              </div><!-- garant__body -->
            </div><!-- container -->

<!-- +++++++++++++++++++++++++"garant__slaider++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->

 <div class="garant__slaider garant-slaider">
    <div class="container">
      <div class="garant-slaider__body ">
           
            <div class="garant-slaider__info">
                    <p>Посмотрите</p>
                    &nbsp;
                    <span>как доставляем и собираем</span>
                    <p> вашу мебель</p>
                    <div class="slider-work__arrows arrows-slider-work">
                      <div class="arrows-slider-work__arrow arrows-slider-work__arrow_prev gs-js_prev"></div>
                      <div class="arrows-slider-work__arrow arrows-slider-work__arrow_next gs-js_next"></div>
                    </div>
            </div>
           
           
            <div class="garant-slaider__area gs">
              <div id="gs-js" class="gs__body gs-js">

              <!------перебор слайдов в цикле и вывод их на экран--сначала массив перевернул array_reverse, а потом циклил. в этом случае в конце цикла 
              будет первый элемент ------------ -->
                  <?php  
                      global $post;
                      $args = array(
                         'post_type'=>'slider-garant',
                         'publish' => true,
                         'numberposts' => 20
                        );
                      $slider_garant = get_posts($args);
                      $reversed = array_reverse($slider_garant);
                      foreach($reversed as $post){
                        $post_id = get_the_ID(); 
                        $post = get_post($post_id); 
                        $number_plyr = $post->post_title;
                        $text=$post->post_content;
                        // echo $text; 
                        ?>
                        <!-- &mdash; -->
                        <!-- <?php  
                        // echo $number_plyr; 
                      // wp_reset_postdata();
                      //?> -->
                      <!-- <br> -->

      <div class="gs__item">
        <img src="<?php echo get_the_post_thumbnail_url($post_id, 'slider-garant');?>" alt="img">
            <div class="js-button js-button<?php echo $number_plyr ?>" >
                <img  src="<?php echo get_template_directory_uri()?>/assets/img/garant/gs-point.png" alt="">
            </div>
      </div> 

                    <?php 
                     }
                   ?> 
                          <!-- -----  ------------------- -->
                      </div>  
                </div>
          </div>
      </div>
   </div> 

<!-- ++++++++++++++++++++++формирование попап окон++++++++++++++++++++++++++++++ -->
          
          </div><!--garant__wrapper -->
<!-- -------------------------- -->

              <?php  
                      global $post;
                      $args = array(
                         'post_type'=>'slider-garant',
                         'publish' => true,
                         'numberposts' => 20
                        );
                      $slider = get_posts($args);
                      $reversedconfirm = array_reverse($slider);
                      foreach($reversedconfirm as $post){
                        $post_id = get_the_ID(); 
                        $post = get_post($post_id); 
                        $number_plyr = $post->post_title;
                        $text=$post->post_content;
                        ?>

  <?php preg_match('/embed\/(.*)|\.be\/(.*)|\?v=(.*)/', $text, $yturl1);?>
  <div class="popup-video js-overlay-test<?php echo $number_plyr ?>">
     <div class="overlay-popup "></div>
        <div class="video-frame">
          <div class="plyr__video-embed" id="player<?php echo $number_plyr?>" data-plyr-provider="youtube" data-plyr-embed-id="<?php echo 'https://www.youtube.com/embed/',end($yturl1),'?origin=',get_site_url(),'&iv_load_policy=3&modestbranding=1&playsinline=1&showinfo=0&rel=0&enablejsapi=1' ?>"> 
          </div> 
          <div class="close-popup js-close "></div>
        </div>
  </div>  
	   <?php 
                     }
wp_reset_postdata();
                   ?> 




     <!-- ------------------------------------------------------------- -->
 </section>



