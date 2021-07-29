 
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


      <section class="first first-port" id="first-port">
        <header class="header header--port">
          <div class="container">
            <div class="header__body header__body--port">
              <div class="first-port__title">
              <h2>

<?php
  if (get_page_by_path("portfolio")->ID == get_the_ID()) { 
  ?>
    <a href="https://bereklamosnegerai.lt/portfolio">
              PORTFOLIO
    </a>
  <?php
  }

  if (get_page_by_path("marketing")->ID == get_the_ID()) { 
  ?>
    <a href="https://bereklamosnegerai.lt/marketing">
             marketing
    </a>
  <?php
  }



  ?>

          



              </h2>
              </div>
              <a class="header__logo header__logo--port" href="<?php echo get_home_url() ?>"
                ><img src="<?php the_field( 'logo_dark', 'options' ); ?>" alt="img"
              /></a>
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
              <div class="header__info info info--port">
                <div class="info__burger"><span></span></div>
              </div>
              <i class="icon-menu header__burger header__burger--port"></i>
            </div>
          </div>
        </header>

     











