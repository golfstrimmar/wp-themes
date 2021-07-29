 
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
 
 
 
 
 
 
 
 
 
 <section class="first first-cases" id="first-cases">
            <header class="header header--cases">
                <div class="container">
                    <div class="header__body  header__body--cases">
                       
                    <a class="header__logo" href="<?php echo get_home_url() ?>"><img src="<?php the_field( 'main_logo', 'options' ); ?>" alt="img" /></a>
                       
           
                    
                    <nav class="header__menu menu">
                            <i class="icon-cross header__close"></i>
                           
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
                            <div class="info__burger"><span></span></div>
                        </div>
                        <i class="icon-menu header__burger"></i>
                    </div>
                </div>
                <div class="header__links">
                    <div class="container">
                        <div class="jucb">
                            <a class="header__link header__link--port" href="http://bereklamosnegerai.lt/portfolio/">PORTFOLIO</a>
                            <a class="header__link header__link--mark" href="http://bereklamosnegerai.lt/marketing/" >Marketing<br />cases</a
                >
              </div>
            </div>
          </div>
        </header>
      </section>