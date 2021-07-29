<?php
/*
Template Name: blog
*/
defined( 'ABSPATH' ) || exit;
get_header();
?>

<?php get_template_part('./includes/bunner-main') ?>
<!-- bunner -->
</section>
<!-- first  -->

<?php 

      global $post;
      $args = array(       
        'post_type'=>'post',
        'cat' => 3,
        'publish' => true,
        'numberposts' => 1
        );
        
      $projects = get_posts($args);  
     
     if ($projects ) {
     
      foreach($projects as $post){
        setup_postdata( $post );
?>

 <section class="blog-1" id="blog-1">
  <div class="container">
    <div class="models__item blog-1-item">
      <div class="blog-1-item__column">
        <div class="blog-1-item__img">
          <?php the_post_thumbnail();?>
        </div>
      </div>
      <div class="blog-1-item__column">
        <div class="blog-1-item__chip">
          <?php the_author();?>
        </div>
        <div class="blog-1-item__title">
          <h2><?php the_title();	?></h2>
        </div>
        <div class="blog-1-item__properties">
          <div class="blog-1-item__property"><i class="icon-clock"></i><span> <?php the_time('F j, Y '); ?></span></div>
          <div class="blog-1-item__property"><i class="icon-chat"></i><span> <?php comments_number('0', '1 komentaras', '% komentarai'); ?></span></div>
        </div>
        <div class="blog-1-item__description"><?php the_excerpt(); ?></div><a class="btn btn--light blog-1-item__button"
          href="#!">Plačiau<i class="icon-i-1"></i></a>
      </div>
    </div>
  </div>
</section> 




<div class="post-more">
  <section class="blog-3" id="blog-3">
  <div class="container">
    <div class="blog-3__body">
        <div class="blog-3__img">
          <?php the_post_thumbnail();?>
        </div>
      <div class="blog-3-item__chip"><?php the_author();?></div>
      <div class="blog-3-item__title"><?php the_title();	?></div>
      <div class="blog-3-item__propes">
        <div class="blog-3-item__prop"><i class="icon-clock"></i><span> <?php the_time('F j, Y '); ?></span></div>
        <div class="blog-3-item__prop"><i class="icon-chat"></i><span><?php comments_number('0', '1 komentaras', '% komentarai'); ?></span></div>
      </div>
    </div>
  </div>
</section>

<section class="blog-4" id="blog-4">
  <div class="container">
    <div class="blog-4__body">
      <div class="blog-4__title">
        <h2><?php the_field('article_title_dark');?>
          <span><?php the_field('article_title_purple');?></span>
        </h2>
      </div>
      <div class="blog-4__description">
        <?php the_content();?>
      </div>
      <div class="jucb alic">
        <div class="blog-4__props alic">
          
          <div class="blog-4__prop alic">
            <span class="likecount">
              <div class="wpulike wpulike-default">
                <div class="wp_ulike_general_class wp_ulike_is_not_liked">
                  <button type="button" aria-label="Like Button" data-ulike-id="84" data-ulike-nonce="09fe1888ff"
                    data-ulike-type="likeThis" data-ulike-template="wpulike-default"
                    data-ulike-display-likers=" data-ulike-disable-pophover="
                    class="wp_ulike_btn wp_ulike_put_image wp_likethis_84"></button>
                  <span class="count-box">0</span>
                </div>
              </div>
            </span>
          </div>

          <div class="blog-4__prop alic">
            <i class="icon-bubble"></i>
            <span>80</span>
          </div>


        </div>
        <ul class="blog-4__soc blog-4-soc alic">
            <li class="blog-4-soc__link blog-4-soc__link--share" href="#!"><i class="icon-share2"></i></li>
            <li class="blog-4-soc__link">
                <a target="_blank" class="bt" href="https://messenger.com/share?url=<?php the_permalink(); ?>&text=<?php the_title(); ?>">
                    <i class="icon-messenger"></i>
                </a>
            </li>
            <li class="blog-4-soc__link">
                <a  target="_blank" class="bt" href="http://www.facebook.com/sharer.php?u=<?php the_permalink(); ?>&title=<?php the_title(); ?>">
                  <i class="icon-free-icon-facebook-logo-in-circular-shape-44646"></i>
                </a>
            </li>
            <li class="blog-4-soc__link">
                <a  target="_blank" class="bt" href="http://twitter.com/share.php?url=<?php the_permalink(); ?>&title=<?php the_title(); ?>">
                   <i class="icon-twitter"></i>
                </a>
            </li>
            <li class="blog-4-soc__link">
                <a  target="_blank" class="bt" href="https://telegram.com//share.php?url=<?php the_permalink(); ?>&title=<?php the_title(); ?>">
                   <i class="icon-telegram"></i>
                </a>
            </li>
            <li class="blog-4-soc__link">
                <a  target="_blank" class="bt" href="http://google.com/share.php?url=<?php the_permalink(); ?>&title=<?php the_title(); ?>">
                   <i class="icon-google-plus3"></i>
                </a>
            </li>
        </ul>
      </div>
    </div>
  </div>
</div>
</section>
</div>


	<?php 
} 
} 
?>

<!-- =========== -->
        <section class="blog-2" id="blog-2">
            <div class="container">
                <div class="blog-2__body blog-2_cards">
                    <div class="slider">
                        <ul class="slider__slider slider__body slider-js-3">
                            <li class="slider__item slider-card">
                                <ul class="slider-card__grid">
<?php 
$arr = [
          'posts_per_page' => 4,
        ];
        $recent = new WP_Query($arr);
        while($recent->have_posts()) : $recent->the_post();?>
                                    <li class="blog-2_cards__item blog-2_cards-item" >
                                      <a href="#!" data="<?php the_ID(); ?>"></a>
                                        <div class="blog-2_cards-item__img">
                                         <?php the_post_thumbnail();?>
                                        </div>
                                        <div class="blog-2_cards-item__content">
                                            <div class="blog-2_cards-item__tag">tag</div>
                                            <div class="blog-2_cards-item__title"> <?php the_title(); ?></div>
                                        </div>
                                    </li>
        
        <?php endwhile; ?>
                                </ul>
                            </li>
                            <li class="slider__item slider-card">
                                <ul class="slider-card__grid">
                                <?php 
$arr = [
          'posts_per_page' => 4,
          'offset' => 4,
        ];
        $recent = new WP_Query($arr);
        while($recent->have_posts()) : $recent->the_post();?>
                                    <li class="blog-2_cards__item blog-2_cards-item" data="1">
                                      <a href="#!" data="<?php the_ID(); ?>"></a>
                                        <div class="blog-2_cards-item__img">
                                         <?php the_post_thumbnail();?>
                                        </div>
                                        <div class="blog-2_cards-item__content">
                                            <div class="blog-2_cards-item__tag">tag</div>
                                            <div class="blog-2_cards-item__title"> <?php the_title(); ?></div>
                                        </div>
                                       
                                    </li>
        
        <?php endwhile; ?>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

<div class="blog-top"></div>
<?php 
get_footer();