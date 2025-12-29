<?php
/**
 * Plugin Name:       Smart Store Plugin
 * Plugin URI:        https://smart.com/plugins/smart-store/
 * Description:       A description of the plugin.
 * Version:           1.10.3
 * Requires at least: 5.2
 * Requires PHP:      7.2
 * Author:            Shaped
 * Author URI:        https://author.example.com/
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Update URI:        https://example.com/my-plugin/
 * Text Domain:       smart-slug
 * Domain Path:       /languages
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Load all Blocks from the build directory.
 *
 * @return void
 */
function smart_store_register_all_blocks() {
	$build_path = __DIR__ . '/build';
	$blocks     = glob( $build_path . '/*/block.json' );
	if ( $blocks ) {
		foreach ( $blocks as $block_path ) {
			register_block_type( dirname( $block_path ) );
		}
	}
}

add_action( 'init', 'smart_store_register_all_blocks' );
