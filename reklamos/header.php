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
              <div class="kontaktai">
            <a class="rev tel numeris"  href="tel:+370 698 49159"> 896</a>
            <a class="rev email numeris"href="mailto:info@bereklamosnegerai.lt">eb</a>
</div>
              <a class="header__logo" href="<?php echo get_home_url() ?>">
                <img src="<?php the_field( 'main_logo', 'options' ); ?>" alt="img">
              </a>
              <nav class="header__menu menu ">
      
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

             
<div class="mob-kontaktai">
            <a class="rev tel numeris" href="tel:+37069849159">+370 698 49159</a>
            <a class="rev email numeris" href="mailto:info@bereklamosnegerai.lt">info@bereklamosnegerai.lt</a>
</div>
             
              </nav>
              <div class="header__info info">
                <div class="info__trigger info-trigger">
                  <img class="info-trigger__img" src="<?php echo get_template_directory_uri()?>/assets/img/svg/i-3.svg"
                    alt="img" /><a class="info-trigger__switch" href="#!"><span></span></a><img
                    class="info-trigger__img" src="<?php echo get_template_directory_uri()?>/assets/img/svg/i-2.svg"
                    alt="img" />
                </div>
                <div class="info__burger"><span></span></div>
              
                <a class="info__button btn btn--success popup-init-js" href="#!" rel="popup-main">GAUTI PASIŪLYMĄ</a>
              </div>
              <i class="icon-menu header__burger"></i>
            </div>
          </div>
        </header>

