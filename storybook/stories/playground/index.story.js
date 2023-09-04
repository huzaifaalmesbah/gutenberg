/**
 * WordPress dependencies
 */
import { useEffect, useState } from '@wordpress/element';
import {
	BlockEditorProvider,
	BlockCanvas,
	BlockTools,
	BlockInspector,
} from '@wordpress/block-editor';
import { registerCoreBlocks } from '@wordpress/block-library';
import { ShortcutProvider } from '@wordpress/keyboard-shortcuts';
import '@wordpress/format-library';

/**
 * Internal dependencies
 */
import styles from './style.lazy.scss';
import { editorStyles } from './editor-styles';

function App() {
	const [ blocks, updateBlocks ] = useState( [] );

	useEffect( () => {
		registerCoreBlocks();
	}, [] );

	// Ensures that the CSS intended for the playground (especially the style resets)
	// are only loaded for the playground and don't leak into other stories.
	useEffect( () => {
		styles.use();

		return styles.unuse;
	} );

	return (
		<div className="playground">
			<ShortcutProvider>
				<BlockEditorProvider
					value={ blocks }
					onInput={ updateBlocks }
					onChange={ updateBlocks }
				>
					<div className="playground__sidebar">
						<BlockInspector />
					</div>
					<div className="playground__content">
						<BlockTools>
							<BlockCanvas styles={ editorStyles } />
						</BlockTools>
					</div>
				</BlockEditorProvider>
			</ShortcutProvider>
		</div>
	);
}

export default {
	title: 'Playground/Block Editor',
	parameters: {
		sourceLink: 'storybook/stories/playground',
	},
};

export const _default = () => {
	return <App />;
};
