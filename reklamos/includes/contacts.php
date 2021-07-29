
<?php 
$id=40;
if( is_page($id) ) {
?>
    <section class="contacts" style="margin: 100px 0 0 0;" id="contacts">
<?php
}
else{
?>  
    <section class="contacts" id="contacts">
<?php
}
?>

  <div class="container">
    <div class="contacts__body">
      <div class="contacts__item contacts__item--data contacts-item">
        <img class="contacts-item__img" src="<?php echo get_template_directory_uri()?>/assets/img/svg/bni.svg" alt="img" />
        <img class="contacts-item__img" src="<?php echo get_template_directory_uri()?>/assets/img/png/vilkas.jpg" alt="img" />
        <div class="contacts-item__title">
          <h4>Susisiekime</h4>
        </div>
        <div class="contacts-item__description">
          Kuo anksčiau papasakosite mums apie savo užduotis, tuo geriau
        </div>
        <div class="contacts-item__text">UAB Ateities Rinkodara</div>
        <div class="contacts-item__data">
          <a class="rev tel contacts-item__line" href="tel:+370 698 49159"> 896</a>
          <a class="rev email contacts-item__line" href="mailto:info@bereklamosnegerai.lt">eb</a>
           <a class="contacts-item__line" href="https://goo.gl/maps/dMzWtjCdNWHnWaPc8">
            <span>Vilnius: Latvių g. 15, LT-08123</span></a>
        </div>
        <div class="contacts-item__soc">
         
        <a class="
                    contacts-item__link contacts-item__link--fb
                    icon-instagram
                  " href="<?php the_field( 'instagramm', 'options' ); ?>"  target="_blank"></a>
                  
                  <a class="
                    contacts-item__link
                    icon-free-icon-facebook-logo-in-circular-shape-44646
                  " href="<?php the_field( 'facebook', 'options' ); ?>"  target="_blank"></a>
        </div>
      </div>
      <div class="contacts__item contacts-item">
        <div class="s1-item__form s1-item__form--contacts">
          <div class="con-form connect connect--s1">
          
          
          <div class="connect__form connect__form--contacts">
             
             <?php echo do_shortcode( '[contact-form-7 id="85" title="contact-form"]' ); ?>
</div>
        
        
        
          </div>
        </div>
      </div>
    </div>
  </div>
</section>