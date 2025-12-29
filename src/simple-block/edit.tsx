import { BlockEditProps } from '@wordpress/blocks';
import { InspectorControls, MediaUpload, MediaUploadCheck, useBlockProps } from '@wordpress/block-editor';
import { Button, PanelBody, TextControl } from '@wordpress/components';
import { BlockAttributes } from './types';
import { __ } from '@wordpress/i18n';

type props = BlockEditProps<BlockAttributes>;

export default function edit({ attributes, setAttributes }: props) {
    const { message, counter, imageUrl, imageId } = attributes;

    const blockProps = useBlockProps();

    const onSelectImage = (media: { url: string; id: number }) => {
        setAttributes({ imageUrl: media.url, imageId: media.id });
    }

    return (
        <div {...blockProps}>
            <InspectorControls>
                <PanelBody title={__('Settings', 'smart-store')}>
                    <TextControl
                        label={(__('Counter'))}
                        type='number'
                        value={counter.toString()}
                        onChange={(val) => {
                            const num = parseInt(val);
                            setAttributes({ counter: isNaN(num) ? 0 : num })
                        }}
                    />
                </PanelBody>
            </InspectorControls>

            <TextControl
                label="Message"
                value={message}
                onChange={(val) => setAttributes({ message: val })}
            />
            <div className="image-wrapper" style={{ marginTop: '20px' }}>
                {imageUrl && (
                    <div style={{ marginBottom: '10px' }}>
                        <img
                            src={imageUrl}
                            alt="Selected"
                            style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
                        />
                    </div>
                )}

                <MediaUploadCheck>
                    <MediaUpload
                        onSelect={onSelectImage}
                        allowedTypes={['image']}
                        value={imageId}
                        render={({ open }) => (
                            <Button onClick={open} variant="secondary" icon="edit">
                                {!imageUrl ? 'Upload Image' : 'Change Image'}
                            </Button>
                        )}
                    />
                    {imageUrl && (
                        <Button
                            onClick={() => setAttributes({ imageUrl: undefined, imageId: undefined })}
                            isDestructive
                            variant="link"
                        >
                            Remove Image
                        </Button>
                    )}
                </MediaUploadCheck>
            </div>

        </div>
    )
}