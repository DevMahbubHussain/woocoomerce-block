<?php
/**
 * Main render.php file
 * Variables available:
 *   $attributes
 *   $content
 *   $block
 */
$templates = __DIR__ . '/templates';
?>

<div <?php echo get_block_wrapper_attributes(); ?> class="example-block">

	<?php
	// Include smaller template files
	if ( file_exists( $templates . '/header.php' ) ) {
		include $templates . '/header.php';
	}
	?>

</div>
