<?php
/*
Template Name: home
*/
defined( 'ABSPATH' ) || exit;
get_header();
?>

         <?php get_template_part('./includes/bunner-main') ?>  
        <!-- bunner -->
      </section>  
        <!-- first  -->

<?php get_template_part('./includes/s1') ?>  
<?php get_template_part('./includes/s2') ?>  
<?php get_template_part('./includes/s3') ?>  
<?php get_template_part('./includes/s4') ?>  
<?php get_template_part('./includes/slider-cards') ?>  
<?php get_template_part('./includes/s5') ?>  
<?php get_template_part('./includes/s6') ?>  
<?php get_template_part('./includes/s7') ?>  
<?php get_template_part('./includes/sp') ?> 
<?php get_template_part('./includes/contacts') ?> 


<?php 
get_footer();