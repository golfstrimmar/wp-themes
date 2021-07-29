<?php
/**
 * Template Name: страница 'Благодарности'
 */
get_header('short');
?>
	    					
     <section class="thanks" id="thanks">
        <div class="thanks__body">
          <div class="ibg bg"><img src="<?php echo get_template_directory_uri()?>/assets/img/thanks/thanks-bg.png" alt=""></div>
          <div class="container">
            <div class="thcontent__body">
              <div class="thcontent__title">Спасибо Вам, что оставили заявку и обратились к нам</div>
              <div class="thcontent__text1">Мы уже получили ваш запрос, и в ближайшее время с вами свяжется наш
                специалист<img src="<?php echo get_template_directory_uri()?>/assets/img/thanks/svg-thanks-5.svg" alt="img"></div>
              <div class="thcontent__text2">Чтобы сократить ваше ожидание, пока мы подготавливаем для вас информацию,
                <span>предлагаем вам:</span></div>
              <div class="thcontent__links thl">
                <div class="thl__body">
                  <div class="thl__column">
                    <div class="thl__title">Познакомиться с нами в соц. сетях</div>
                    <div class="thl__text">Подпишитесь на наш Instagram. Мы постоянно проводим акции для наших
                      подписчиков</div>
                    <div class="thl__phone"><img src="<?php echo get_template_directory_uri()?>/assets/img/thanks/phone.png" alt=""></div>
                    <a class="thl__juno"
                      href="https://www.instagram.com/juno_mebel">@juno_mebel<img src="<?php echo get_template_directory_uri()?>/assets/img/thanks/inst.svg" alt="img">
                      </a>
                  </div>
                  <div class="thl__column">
                    <div class="thl__title">Продолжить общение в мессенджерах</div>
                    <div class="thl__icons">
                  <a class="thl__icon th-wa" target="_blank" href="  https://wa.me/79268444333"><img src="<?php echo get_template_directory_uri()?>/assets/img/thanks/va.png"
                        alt="img">
                        </a>
                        <a class="thl__icon th-teleg" href="tg://resolve?domain=juno_mebel"><img src="<?php echo get_template_directory_uri()?>/assets/img/thanks/tg.png"
                        alt="img"></a>
                        <a class="thl__icon th-viber" href="viber://chat?number=+79268444333"><img src="<?php echo get_template_directory_uri()?>/assets/img/thanks/viber.png"
                        alt="img"></a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="thcontent__button">Вернуться на главную<a href="https://new.j-uno.ru/"><img src="<?php echo get_template_directory_uri()?>/assets/img/thanks/svg-thanks-6.svg"
                    alt="img"></a></div>
              <div class="designers__vika">
                <div class="ibg bg"><img src="<?php echo get_template_directory_uri()?>/assets/img/thanks/man.png" alt="img"></div>
                <div class="designers__colos">
                  <p>Сергей Михайлов</p><img src="<?php echo get_template_directory_uri()?>/assets/img/thanks/thanks-color.png" alt="img">
                  <div class="designers__discription">
                    <p>Руководитель отдела по работе с клиентами</p><img src="<?php echo get_template_directory_uri()?>/assets/img/thanks/thanks-white.png"
                      alt="img">
                  </div>
                </div>
              </div>
              <div class="thcontent__faid"><img src="<?php echo get_template_directory_uri()?>/assets/img/thanks/faid.png" alt=""></div>
              <div class="thcontent__decor1"><img src="<?php echo get_template_directory_uri()?>/assets/img/thanks/svg-thanks-4.svg" alt="img"></div>
              <div class="thcontent__decor2"><img src="<?php echo get_template_directory_uri()?>/assets/img/thanks/svg-thanks-1.svg" alt="img"></div>
              <div class="thcontent__decor3"><img src="<?php echo get_template_directory_uri()?>/assets/img/thanks/svg-thanks-2.svg" alt="img"></div>
            </div>
          </div>
      
        </div>
      </section> 
      <?php  include(get_template_directory(  ).'/includes/contact-form-popup.php'); ?> 
      <?php  the_my_js_scripts() ?>

