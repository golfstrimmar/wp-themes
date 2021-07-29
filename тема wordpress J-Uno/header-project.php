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

<?php
$post_id = get_the_ID();
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
        <section class="cabinet" id="cabinet">
        <div class="cabinet__wrapper">
        <div class="ibg bg"><img src="<?php echo get_the_post_thumbnail_url($post_id, 'full');?>" alt="img"></div>
          <div class="header1 header-project" id="header-project">
            
         <?php the_custom_logo();?>


            <div class="header1__burger icon-menu-1-1"><span></span><span></span><span></span>
              <div class="header1__slide header1-1__slide header1-slide">
                <div class="header1-slide__body">
                  
                <?php wp_nav_menu([
        'theme_location' => 'j-uno-header',
	'menu'            => 'j-uno-header', 
	'container'       => 'nav', 
	'container_class' => 'header1-slide-list', 
	// 'container_id'    => '',
	'echo'            => true,
  'items_wrap'      => '<ul >
               %3$s
                  </ul>',
	'depth'           => 0,
	// 'walker'          => '',
])?>
                </div>
              </div>
            </div>
            <div class="header1__text">Меню</div>
          </div>
        </div>
      </section>