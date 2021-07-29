
<div class="overlay-popup js-overlay-campaign">
 <section class="popup-link">
                      <div  class="cont-column__form">   
                        <?php echo do_shortcode( '[contact-form-7 id="73" title="Контактная форма 1"]' ); ?> 
                      </div>
                      <div class="cont-column__confidence">Нажимая кнопку вы соглашаетесь на 
                        <a href="https://new.j-uno.ru/политика-конфиденциальности/" target="_blank"> <span> обработку персональных данных </span> </a>                                           
                      </div>
                      <div class="close-popup js-close-campaign"></div>
 </section>
</div>

<?php $ythref1 = get_field('high_video');$ythref2 = get_field('production_video'); ?>
<?php preg_match('/.be\/(.*)|\?v=(.*)/', $ythref1, $ythighurl);?>
<?php preg_match('/.be\/(.*)|\?v=(.*)/', $ythref2, $ytprodurl);?>

<div class="popup-video popup-video-high js-overlay-high">
    <div class="overlay-popup ">  </div>
        <div class="video-frame"> 
            <div class="plyr__video-embed" id="player-popup-high" data-plyr-provider="youtube" data-plyr-embed-id="<?php echo 'https://www.youtube.com/embed/',end($ythighurl),'?origin=',get_site_url(),'&iv_load_policy=3&modestbranding=1&playsinline=1&showinfo=0&rel=0&enablejsapi=1' ?>">  </div>
            <div class="close-popup js-close-high "></div>
        </div> 
</div>  



<div class="popup-video popup-video-production js-overlay-production ">
    <div class="overlay-popup "></div><?php the_field('production_video') ?>
        <div class="video-frame">
            <div class="plyr__video-embed" id="player-popup-production" data-plyr-provider="youtube" data-plyr-embed-id="<?php echo 'https://www.youtube.com/embed/',end($ytprodurl),'?origin=',get_site_url(),'&iv_load_policy=3&modestbranding=1&playsinline=1&showinfo=0&rel=0&enablejsapi=1' ?>"></div> 
            <div class="close-popup js-close-production "></div>
        </div>
</div>  

               
               
  