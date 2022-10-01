<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package WordPress
 * @subpackage Twenty_Nineteen
 * @since 1.0.0
 */

get_header();
?>

<style media="screen">
    .content__review {
        padding-top: 30px !important;
    }
</style>

<?php if (has_category(4) && has_category(3) == false && has_category(2) == false): ?>
    <style media="screen">
        #player,
        #featuredPlay {
            display: none !important;
        }
    </style>
<?php endif; ?>

<main class="body__popup" id="dynamicContent">
    <div class="popup__episode">
        <div class="episode__content">
            <?php while ( have_posts() ) :
				the_post();
            ?>
            <div class="content__title">
                <h2>
                    <?php $guest_index = 0; ?>
                    <?php the_title(); ?> <?php if( have_rows('guests') ): ?>(feat.
                        <?php while ( have_rows('guests') ) : the_row(); ?>
                            <?php if ($guest_index != 0): ?>&<?php endif; ?> <?php the_sub_field('name'); ?><?php $guest_index = $guest_index + 1; ?><?php endwhile; ?>)
                    <?php endif; ?>
                </h2>
            </div>
            <div class="content__review">
                <?php if (get_field('episode_number')): ?>
                <div class="episode__number">
                    <h3>Episode <?php the_field('episode_number') ?></h3>
                </div>
                <?php endif; ?>
                <div class="movies__quadrant" style="margin-left: -5px;">
                    <div class="quadrant--container">
                        <?php if( have_rows('movies') ): ?>
							<?php while( have_rows('movies') ) : the_row(); ?>
                                <div class="quadrant__movie" data-episode="<?php echo get_the_ID(); ?>" data-audio="<?php the_field('audio_link'); ?>">
                                    <div class="movie__title">
                                        <span><a href="<?php the_permalink(); ?>"><?php the_sub_field('movie_title'); ?></a></span>
                                    </div>
                                </div>
                            <?php endwhile; ?>
						<?php endif; ?>
                    </div>
                </div>
                <?php the_content(); ?>
                <?php if (get_field('audio_link')): ?>
				<div id="featuredPlay" class="featured__play" style="transform: rotate(2deg);">
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
            <div class="content__shim">

            </div>
            <?php endwhile; ?>
        </div>
    </div>
</main>
<style media="screen">
    .quadrant--container .quadrant__movie,
    .content__review .movie__title a {
        cursor: default;
    }
</style>

<?php
get_footer();
