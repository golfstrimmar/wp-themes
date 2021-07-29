    



<?php
     if (get_page_by_path("Home" )->ID  == get_the_ID()) { 
    ?>
<?php get_template_part('./includes/bunner') ?>  
          <?php
    }
 ?>


<?php
     if (get_page_by_path("websites" )->ID  == get_the_ID()) { 
    ?>
  
<?php get_template_part('./includes/bunner-websites') ?>  
 
          <?php
    }
 ?>



<?php
     if (get_page_by_path("teachings" )->ID  == get_the_ID()) { 
    ?>
<?php get_template_part('./includes/bunner-teachings') ?>  
          <?php
    }
 ?>



<?php
     if (get_page_by_path("blog" )->ID  == get_the_ID()) { 
    ?>
  <section class="bunner bunner-blog">
<?php get_template_part('./includes/bunner-blog') ?>  
  </section>
          <?php
    }
 ?>



<?php
     if (get_page_by_path("career" )->ID  == get_the_ID()) { 
    ?>
  <section class="bunner bunner-car">
<?php get_template_part('./includes/bunner-car') ?>  
  </section>
          <?php
    }

 ?>





<?php
$id=368;
if( is_page($id) ) {
?>

<?php get_template_part('./includes/bunner-single') ?>
      <?php
}
