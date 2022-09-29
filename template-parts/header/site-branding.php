<?php
/**
 * Displays header site branding
 *
 * @package WordPress
 * @subpackage Twenty_Nineteen
 * @since 1.0.0
 */
?>
<div class="header__logo">
	<?php $blog_info = get_bloginfo( 'name' ); ?>
	<?php if ( ! empty( $blog_info ) ) : ?>
	<a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home">
	</a>
	<?php endif; ?>
	<object type="image/svg+xml" data="<?php echo get_template_directory_uri(); ?>/assets/images/SVG/be-reel-logo.svg">

	</object>
</div><!-- .header__logo -->
