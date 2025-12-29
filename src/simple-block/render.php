<?php
$message  = isset( $attributes['message'] ) ? $attributes['message'] : '';
$counter  = isset( $attributes['counter'] ) ? intval( $attributes['counter'] ) : 0;
$image_id = isset( $attributes['imageId'] ) ? $attributes['imageId'] : 0;
$img_url  = isset( $attributes['imageUrl'] ) ? $attributes['imageUrl'] : '';

$image_html = '';
if ( $image_id ) {
    $image_html = wp_get_attachment_image( $image_id, 'medium', false, array(
        'class' => 'smart-store-image',
    ) );
} elseif ( $img_url ) {
    $image_html = sprintf( 
        '<img src="%s" alt="" class="smart-store-image" />', 
        esc_url( $img_url ) 
    );
}

$wrapper_attributes = get_block_wrapper_attributes( array(
    'class' => 'smart-store-block-container',
) );
?>

<div <?php echo $wrapper_attributes; ?>>
    <?php if ( ! empty( $image_html ) ) : ?>
        <div class="smart-store-block-image">
            <?php echo $image_html; ?>
        </div>
    <?php endif; ?>

    <div class="smart-store-block-content">
        <?php if ( ! empty( $message ) ) : ?>
            <p class="message"><?php echo esc_html( $message ); ?></p>
        <?php endif; ?>

        <div class="counter-display">
            <strong>Count:</strong> <span><?php echo esc_html( $counter ); ?></span>
        </div>
    </div>
</div>