
<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package uniformos
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
    <div class="wrapper">
      <section class="first first--card">
        <header class="header header--card">
          <div class="header__body container">
            <a class="header__logo" href="http://uniformos1.skarzinskas.lt/"> <img src="<?php the_field( 'main_logo', 'options' ); ?>" alt="img"></a>
            <div class="header__info info">
              <a class="info__item" href="<?php the_field( 'account_facebook', 'option' ); ?>"
                ><img src="<?php echo get_template_directory_uri()?>/assets/img/svg/facebook.svg" /></a
              ><a class="info__item" href="<?php the_field( 'account_instagram', 'option' ); ?>"
                ><img src="<?php echo get_template_directory_uri()?>/assets/img/svg/insta-dark.svg"
              /></a>
            </div>
            <nav class="header__menu menu">
              <i class="icon-x header__close"></i>
             <?php wp_nav_menu([
  'theme_location' => 'menu-header-white',
	'container'       => null, 
  'menu_class'      => 'menu__list',
  'menu_id' => 'menu__list',
  'echo' => true
])?>
            </nav>
            <i class="icon-align-justify header__burger"></i>
          </div>
        </header>
      </section>