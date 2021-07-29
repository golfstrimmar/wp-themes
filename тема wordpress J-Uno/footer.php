<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package j-uno
 */

?>



     <footer class="footer" id="footer">
        <div class="footer__wrapper">
          <div class="container">
            <div class="footer__body">
              <h2 class="footer__title">Работаем в Москве и области в радиусе 200 км</h2>
              <div class="footer__text">Готовы обсудить проект с выездом за пределы</div>
              <div class="footer__plaha footer-plaha">
                <div class="footer-plaha__body">
                  <div class="footer-plaha__text1">Наши контакты:</div>

                  <div class="footer-plaha__text2">
					<a href="tel:<?php echo antispambot('+79268444333')?>"><?php echo antispambot('+7 (926) 844-43-33')?></a>
                  <img src="<?php echo get_template_directory_uri()?>/assets/img/footer/footer-1.svg"
                      alt="img"></div>
                  
                  
                  <div class="footer-plaha__text2">
                  Пн-Вс: с 9:00 до 21:00
                  
                  <img src="<?php echo get_template_directory_uri()?>/assets/img/footer/footer-2.svg"
                      alt="img"></div>
                  <div class="footer-plaha__text2">
                  <a href="mailto:<?php echo antispambot('zakaz@j-uno.ru')?>"><?php echo antispambot('zakaz@j-uno.ru')?></a>
                  <img src="<?php echo get_template_directory_uri()?>/assets/img/footer/footer-3.svg" alt="img">
                  </div>
                  
                  
                  <div class="footer-plaha__text1">Наше производство:</div>
                  
                  
                  <div class="footer-plaha__text2">г. Москва, ул. Строителей, 12А<img
                      src="<?php echo get_template_directory_uri()?>/assets/img/footer/footer-4.svg" alt="img"></div>
                  <div class="footer-plaha__text1">Задайте нам вопрос напрямую:</div>
                 
                 
                  <div class="thl__icons">
                       <a class="thl__icon th-wa" target="_blank" href="  https://wa.me/79268444333"><img src="<?php echo get_template_directory_uri()?>/assets/img/thanks/va.png"
                        alt="img">
                        </a>
                        
                        <a class="thl__icon th-teleg" target="_blank" href="tg://resolve?domain=juno_mebel"><img src="<?php echo get_template_directory_uri()?>/assets/img/thanks/tg.png"
                        alt="img"></a>
                        
                        <a class="thl__icon th-viber" target="_blank" href="viber://chat?number=+79268444333"><img src="<?php echo get_template_directory_uri()?>/assets/img/thanks/viber.png"
                        alt="img"></a>

                  </div>
                  
                    
                    <div class="footer-plaha__text1">Будем рады видеть вас в наших социальных сетях:</div>
                  <div class="thl__icons">
                  
                  
                  <a class="thl__icon th-wa" target="_blank" href="https://www.houzz.ru/pro/j-uno/"><img src="<?php echo get_template_directory_uri()?>/assets/img/footer/footer-5.svg"
                        alt="img"></a>
                        
                        <a class="thl__icon th-teleg" target="_blank" href="https://www.instagram.com/juno_mebel"><img src="<?php echo get_template_directory_uri()?>/assets/img/footer/footer-6.svg"
                        alt="img"></a>
                        
                        <a class="thl__icon th-viber" target="_blank" href="https://www.facebook.com/mebel.juno/"><img src="<?php echo get_template_directory_uri()?>/assets/img/footer/footer-7.svg"
                        alt="img"></a>
                        
                        </div>
                  <div class="footer-plaha__button js-button-campaign">
                      <div class="button-color">
                        <div class="button-color__link" ><span>Связаться с нами</span></div>
                      </div>
                  </div>
                </div>
              </div>
              <div class="footer__map">
                <div class="ibg bg"><img src="<?php echo get_template_directory_uri()?>/assets/img/footer/map.png" alt="img"></div>
              </div>

 <a class="designers__look link"" id="fav"
rel="sidebar"
href=""
onclick="addFav();return false"><span>Добавить сайт в избранное</span>
                  <span class="flash">Ctrl+D</span>
                  <img src="<?php echo get_template_directory_uri()?>/assets/img/footer/footer-look.png" alt="img">
                </a> 
            </div>
          </div>
        </div>
</footer>

<?php //the_my_js_scripts();?>
<?php wp_footer(); ?>

</body>
</html>
