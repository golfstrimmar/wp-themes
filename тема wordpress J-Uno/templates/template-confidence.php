<?php
/**
* Template Name: страница 'Политика конфиденциальности'
 */

?>

  <?php
    $post_id = get_the_ID(); 
    $post = get_post($post_id);
     $text=$post->post_content; 
echo apply_filters('the_content', $text);
?>