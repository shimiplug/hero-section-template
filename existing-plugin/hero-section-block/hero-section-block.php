<?php
/**
 * Plugin Name: Hero Section for Block Editor
 * Description: Create responsive hero sections with headings, background options, and buttons in the block editor.
 * Version: 1.0.0
 * Author: CamelPlug26
 * License: GPLv3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.txt
 * Text Domain: hero-section
 * Domain Path: /languages
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'HERO_SECTION_VERSION', '1.0.0' );
define( 'HERO_SECTION_DIR_URL', plugin_dir_url( __FILE__ ) );
define( 'HERO_SECTION_DIR_PATH', plugin_dir_path( __FILE__ ) );

if ( ! class_exists( 'Hero_Section_Plugin' ) ) {

	class Hero_Section_Plugin {

		public function __construct() {
			add_action( 'init', array( $this, 'on_init' ) );
		}

		public function on_init() {

			register_block_type( __DIR__ . '/build' );
		}
	}

	new Hero_Section_Plugin();
}
