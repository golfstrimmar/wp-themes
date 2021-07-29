<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package j-uno
 */

get_header()
?>

  <!-- ------------create-pro----------- -->
   <?php  include(get_template_directory(  ).'/includes/part-create-pro.php'); ?>
<!-- ------------collect----------- -->
   <?php  include(get_template_directory(  ).'/includes/part-collect.php'); ?>
<!-- ------------fairytales----------- -->
   <?php  include(get_template_directory(  ).'/includes/part-fairytales.php'); ?>
<!-- ------------calc----------- -->
   <?php  include(get_template_directory(  ).'/includes/part-calc.php'); ?>
<!-- ------------invitation----------- -->
   <?php  include(get_template_directory(  ).'/includes/part-invitation.php'); ?>
<!-- ------------designers----------- -->
   <?php  include(get_template_directory(  ).'/includes/part-designers.php'); ?>
<!-- ------------work----------- -->
   <?php  include(get_template_directory(  ).'/includes/part-work.php'); ?>
<!-- ------------pro----------- -->
   <?php  include(get_template_directory(  ).'/includes/part-pro.php'); ?>
<!-- ------------garant----------- -->
   <?php  include(get_template_directory(  ).'/includes/part-garant.php'); ?>
<!-- ------------confirm------------ -->
   <?php  include(get_template_directory(  ).'/includes/part-confirm.php'); ?>
<!-- ------------shame------------ -->
   <?php  include(get_template_directory(  ).'/includes/part-shame.php'); ?>
 <!-- -------------------------link-------------------------------- -->
   <?php  include(get_template_directory(  ).'/includes/part-link.php'); ?>
<!-- --------------------/link -->




<?php  include(get_template_directory(  ).'/includes/popup-video.php'); ?> 

<?php
get_footer();
