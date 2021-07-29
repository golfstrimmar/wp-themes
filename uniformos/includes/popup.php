<?php 
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
?>


<div class="popup popup--card">
  <div class="popup__overlay">
    <div class="popup__inner">
      <section class="con-form" id="con-form">
 <?php echo do_shortcode( '[contact-form-7 id="150" title="Popup form"]' ); ?> 
      </section>
      <i class="icon-x popup__close popup__close"></i>
    </div>
  </div>
</div>