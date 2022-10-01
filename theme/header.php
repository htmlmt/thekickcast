<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WordPress
 * @subpackage Twenty_Nineteen
 * @since 1.0.0
 */
?><!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>" />
	<meta name="HandheldFriendly" content="True">
    <meta name="MobileOptimized" content="320">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link rel="profile" href="https://gmpg.org/xfn/11" />
	<link href="https://fonts.googleapis.com/css?family=Share+Tech+Mono" rel="stylesheet">
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#content"><?php _e( 'Skip to content', 'twentynineteen' ); ?></a>
		<div class="wrapper">
			<header class="body__header">
		        <?php get_template_part( 'template-parts/header/site', 'branding' ); ?>
		        <nav class="header__nav">
		            <ul>
		                <li><a class="nav current" href="/#episodes">episodes</a></li>
		                <li><a class="nav current" href="/#movies">movies</a></li>
		                <li><a class="nav current" href="/#about">about</a></li>
		            </ul>
		        </nav><!-- .header__nav -->
		    </header><!-- .body__header -->
			<div id="content" class="site-content">
