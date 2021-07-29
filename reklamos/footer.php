<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package reklamos
 */

?>

<footer class="footer" id="footer">
  <div class="up_down_btn" title="Наверх"></div>
  <div class="container">
    <div class="footer__body">
      <div class="footer__item footer-item">
        <a class="footer__logo" href="#!"><img src="<?php the_field( 'logo_dark', 'options' ); ?>" alt="logo" /></a>
        <a class="rev tel footer-item__title-main" style="text-align: left;" href="tel:+370 698 49159"> 896</a>
        <a class="rev email footer-item__property footer-item__property--cod1" style="text-align: left;" href="mailto:info@bereklamosnegerai.lt">eb</a>
        </a>
      </div>
      <div class="footer__item footer-item">
        <div class="footer-item__title">UAB ATEITIES RINKODARA</div>
        <div class="footer-item__description">
          <a class="footer-item__line" href="http://bereklamosnegerai.lt/">Marketingas</a>
          <a class="footer-item__line" href="http://bereklamosnegerai.lt/websites/">Tinklapiai</a>
          <a class="footer-item__line" href="http://bereklamosnegerai.lt/teachings/">Mokymai</a>
          <a class="footer-item__line" href="https://www.facebook.com/bereklamosnegerai.lt/reviews/">Atsiliepimai</a>
          <a class="footer-item__line" href="http://bereklamosnegerai.lt/career/">Karjera</a>
          <a class="footer-item__line" href="http://bereklamosnegerai.lt/cases/">Atvejai</a>
          <a class="footer-item__line" href="http://bereklamosnegerai.lt/blog/">Tinklaraštis</a>
        </div>
      </div>
      <div class="footer__item footer-item">
        <div class="footer-item__title">SERTIFIKATAI</div>
        <div class="
                  footer-item__description footer-item__description--second
                ">
        <a href="https://www.google.com/partners/agency?id=5021685007" target="_blank">
          <img style="width: 150px; margin: 10px;" src="http://bereklamosnegerai.lt/wp-content/uploads/2021/06/Partner-RGB-.png"/>
        </a>
        </div>
      </div>
      <div class="
                footer__item footer__item--search footer-item footer-search
              ">
        <div class="footer-search__title">
          PRENUMERUOKITE NEMOKAMUS MARKETINGO PATARIMUS!
        </div>
       

        <div class="footer-search__form" >
          <!-- <input name="s" placeholder="Jūsų el. paštas" type="search" /><button type="submit"></button> -->
        
        <?php echo do_shortcode( '[contact-form-7 id="117" title="small_footer"]' ); ?>
        </div>
       
       
         <div class="footer-search__politic">
          Užpildžius šią užklausos formą, Jus sutinkate su
          <a class="footer-search__link" href="#!">privatumo politika</a>
        </div>
      </div>
    </div>
    <div class="footer__low">
      <div class="footer__soc soc">
       
      <a class="soc__item" href="<?php the_field( 'linkedin', 'options' ); ?>" target="_blank">
        <img src="<?php echo get_template_directory_uri()?>/assets/img/svg/link-dark.svg"
            alt="img" /></a>
            
      <a class="soc__item" href="<?php the_field( 'facebook', 'options' ); ?>"   target="_blank">
        <img
            src="<?php echo get_template_directory_uri()?>/assets/img/svg/facebook-dark.svg" alt="img" /></a>

      <a class="soc__item" href="<?php the_field( 'instagramm', 'options' ); ?>"  target="_blank"><img src="<?php echo get_template_directory_uri()?>/assets/img/svg/inst-dark.svg"
            alt="img" /></a>
      
          </div>
      <div class="footer__copyright">
        <span>A product of
          <img src="<?php the_field( 'logo_dark', 'options' ); ?>" alt="logo" /></span><span>© 2021 Be reklamos negerai.
          All rights
          reserved</span>
      </div>
    </div>
  </div>
</footer>

<?php get_template_part('./includes/pop-form') ?> 
<?php get_template_part('./includes/pop-form-cv') ?> 
<?php get_template_part('./includes/pop-form-web') ?> 
<?php get_template_part('./includes/pop-form-web-greitas') ?> 
<?php get_template_part('./includes/pop-form-web-pritaikytas') ?> 
<?php get_template_part('./includes/pop-form-web-individualus') ?> 
</div>


</div><!-- #page -->


<?php wp_footer(); ?>

</body>

</html>