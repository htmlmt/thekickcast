<?php
/**
 * The front page template file
 *
 * If the user has selected a static page for their homepage, this is what will
 * appear.
 * Learn more: https://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage Twenty_Seventeen
 * @since 1.0
 * @version 1.0
 */

get_header(); ?>

<?php
$args = array(
	'posts_per_page' => 1,
	'post__in'  => get_option( 'sticky_posts' ),
	'ignore_sticky_posts' => 1
);
$query = new WP_Query( $args );

if (has_category(4) && has_category(3) == false && has_category(2) == false): ?>
    <style media="screen">
        #player,
        #featuredPlay {
            display: none !important;
        }
    </style>
<?php endif;

if ( $query->have_posts() ) {
    while ( $query->have_posts() ) {
        $query->the_post(); ?>
		<main class="body__main">
		    <div class="main__featured">
		        <div class="featured__details">
		            <header class="details__title">
						<a href="<?php the_permalink(); ?>">
		                	<h2>
								<?php $guest_index = 0; ?>
								<?php the_title(); ?> <?php if( have_rows('guests') ): ?>(feat.
									<?php while ( have_rows('guests') ) : the_row(); ?>
										<?php if ($guest_index != 0): ?>&<?php endif; ?> <?php the_sub_field('name'); ?><?php $guest_index = $guest_index + 1; ?><?php endwhile; ?>)
								<?php endif; ?>
							</h2>
						</a>
						<?php if (get_field('episode_number')): ?>
		                <div class="title__episode">
							<a href="<?php the_permalink(); ?>"><h3>Episode <?php the_field('episode_number') ?></h3></a>
		                </div>
						<?php endif; ?>
		            </header>
		            <div class="details__teaser">
		                <?php the_field('teaser'); ?>
						<p><strong><a href="<?php the_permalink(); ?>">read more →</a></strong></p>
		            </div>
		        </div>
		        <div class="featured__image" style="background-image: url('<?php echo get_the_post_thumbnail_url(get_the_ID(),'full'); ?>');">
		        </div>
				<?php if (get_field('audio_link')): ?>
				<div id="featuredPlay" class="featured__play">
		            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 182.78 58.75">
		            <rect class="big-play-1" x="7.46" y="7.46" width="175.32" height="51.29"/>
		            <g class="spring">
		                <rect class="big-play-2" width="175.32" height="51.29"/>
		                <text text-anchor="middle" class="big-play-3" transform="translate(87.66 40.36)">PLAY</text>
		            </g>
		            </svg>
		        </div>
				<?php endif; ?>
		    </div>
		</main>
		<?php
    }
} else {
    // no posts found
}

wp_reset_postdata();
?>

<?php
get_footer();
