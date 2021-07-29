 <?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package reklamos
 */

?>
 <!doctype html>
 <html <?php language_attributes(); ?>>

 <head>
   <meta charset="<?php bloginfo( 'charset' ); ?>">
   <meta name="viewport" content="width=device-width, initial-scale=1">
   <link rel="profile" href="https://gmpg.org/xfn/11">

   <?php wp_head(); ?>
 </head>

 <body <?php body_class(); ?>>
   <?php wp_body_open(); ?>
   <div id="page" class="site">
     <div class="wrapper">


       <section class="first">
         <header class="header">
           <div class="container">
             <div class="header__body">
               <a class="header__logo" href="<?php echo get_home_url() ?>">
                
               
               <img src="<?php echo get_template_directory_uri()?>/assets/img/svg/logo.svg"
                   alt="img">
                  
                  </a>
               <nav class="header__menu menu"><i class="icon-cross header__close"></i>
               <?php wp_nav_menu([
'theme_location' => 'header-menu',
'menu'            => 'header-menu',
'container' => null,
'menu_class' => 'menu__list',
'echo'            => true,
'depth'           => 0,
])
?>
               </nav>
               <div class="header__info info">
                 <div class="info__trigger info-trigger"><img class="info-trigger__img"
                     src="<?php echo get_template_directory_uri()?>/assets/img/svg/i-3.svg" alt="img">
                     
                     <a class="info-trigger__switch" href="#!"><span></span></a>
                     
                     <img class="info-trigger__img" src="<?php echo get_template_directory_uri()?>/assets/img/svg/i-2.svg" alt="img">
                 </div>
                 <div class="info__burger"><span></span></div><a class="info__button btn btn--success" href="#!">GAUTI
                   PASIULYMA</a>
               </div><i class="icon-menu header__burger"></i>
             </div>
           </div>
         </header>


         <section class="bunner bunner-case case">
           <div class="case__wrapper">
             <div class="case__bg imgs"><img src="
             <?php $img_1 = get_field('img_1');if( !empty($img_1) ): 
                          echo $img_1;
               endif;  wp_reset_postdata(); ?>
             " alt="img">
             </div>
             <div class="case__bg-s imgs"><img src="

             <?php $img_1 = get_field('img_1');if( !empty($img_1) ): 
                          echo $img_1;
               endif;  wp_reset_postdata(); ?>
             
             "
                 alt="img"></div>
           </div>
           <div class="container">
             <div class="bunner__body bunner__body--case">
               <div class="fdc">
                 <div class="bunner__soc soc soc--case"><a class="soc__item" href="#!"><img
                       src="<?php echo get_template_directory_uri()?>/assets/img/svg/linkedin.svg" alt="img"></a><a class="soc__item"
                     href="#!"><img src="<?php echo get_template_directory_uri()?>/assets/img/svg/facebook.svg" alt="img"></a><a
                     class="soc__item" href="#!"><img src="<?php echo get_template_directory_uri()?>/assets/img/svg/i-5.svg"
                       alt="img"></a></div>
                 <div class="case__pre-title">we are creative</div>
                 <div class="case__title">
                   <h2>
                   <?php $title = the_title();if( !empty($title) ): 
                           $img_1;
               endif;  wp_reset_postdata(); ?>
                    </h2>
                 </div>
                 <div class="case__descriptiion">
                 <?php $excerpt = the_excerpt();if( !empty($excerpt) ): 
                           $excerpt;
               endif;  wp_reset_postdata(); ?>
                </div><a
                   class="btn btn--success case__button" target="_blank" href="
                   
                   <?php $link = get_field('case_link');if( !empty($link) ): 
                          echo $link;
               endif;  wp_reset_postdata(); ?>
                   
                   ">View Site</a>
               </div>
             </div>
           </div>
         </section>
       </section>