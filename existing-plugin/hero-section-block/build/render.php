<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}


$id = wp_unique_id( 'heroSectionBlock-' );

$hero_section_wrapper_attributes = get_block_wrapper_attributes( array(
	'id'              => $id,
	'data-attributes'  => wp_json_encode( $attributes ),
) );
?>
<div <?php echo wp_kses_post( $hero_section_wrapper_attributes ); ?>></div>
