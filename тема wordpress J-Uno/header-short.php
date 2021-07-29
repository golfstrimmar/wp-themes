<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package j-uno
 */

?>

<!doctype html>
<html <?php language_attributes(); ?>>
<head>
<title><?php add_theme_support('title-tag');?></title>

	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<?php wp_head(); ?>
</head>



<body>
  <div class="wrapper">
    <main class="page">
      <header class="header" id="header-short">
        <div class="header__body container">
        <?php the_custom_logo();?>
        <div class="header__discription">Надёжные партнеры дизайнеров<p>фабрика производства мебели на заказ</p>
            <p>работаем с 2010 года по Москве и МО 200 км</p>
          </div>
          <div class="header1__burger icon-menu-1"><span></span><span></span><span></span>
            <div class="header1__slide header1-slide header__slide" id="header__slide">
              <div class="header1-slide__body">

                <?php wp_nav_menu([
        'theme_location' => 'j-uno-header',
	'menu'            => 'j-uno-header', 
	'container'       => 'nav', 
	'container_class' => 'header1-slide-list', 
	'echo'            => true,
  'items_wrap'      => '<ul >
               %3$s
                  </ul>',
	'depth'           => 0,
])?>
              </div>
            </div>
          </div>
          <div class="header1__text">Меню</div>
          <div class="header__icons header-icons">
           
            <div class="header-icons__body">
              <a class="tel" href="tg://resolve?domain=juno_mebel"><img src="<?php echo get_template_directory_uri()?>/assets/img/header/tg.svg" alt="img"></a>
              <a target="_blank" class="wa" href="https://wa.me/79268444333"><img src="<?php echo get_template_directory_uri()?>/assets/img/header/wa.svg" alt="img"></a>
            </div>
         
          </div>
        
 <div class="header__tel header-tel">
            <div class="header-tel__body">
              <?php wp_nav_menu([
        'theme_location' => 'j-uno-phone',
	'menu'            => 'j-uno-phone', 
	'container_class' => 'header-tel__body', 
	'echo'            => true,
])?>
             
              <div class="header-tel__text js-button-campaign"><span>Перезвоните мне</span></div>
            </div>
          </div>
 </div>
      </header>