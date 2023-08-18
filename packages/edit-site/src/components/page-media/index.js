/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';
import { getQueryArgs } from '@wordpress/url';
import {
	Button,
	SearchControl,
	__experimentalVStack as VStack,
	DropdownMenu,
	Flex,
	FlexItem,
	FlexBlock,
	MenuGroup,
	MenuItem,
	__experimentalInputControl as InputControl,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
	__experimentalHeading as Heading,
	__experimentalText as Text,
	__experimentalHStack as HStack,
	__experimentalSpacer as Spacer,
} from '@wordpress/components';
import { useState } from '@wordpress/element';

/**
 * Internal dependencies
 */
import Page from '../page';
// @todo abstract for common usage.
import Pagination from '../page-patterns/pagination';
import FilterControl from './filter-control';

const EMPTY_ARRAY = [];

// Getting headings, etc based on `mediaType` query type.
function getMediaDetails() {}

export default function PageMedia() {
	const { mediaType } = getQueryArgs( window.location.href );
	const { attachments } = useSelect( ( select ) => {
		const _attachments = select( coreStore ).getEntityRecords(
			'postType',
			'attachment',
			{
				per_page: 50,
				mime_type: mediaType,
			}
		);
		return {
			attachments: _attachments || EMPTY_ARRAY,
		};
	}, [] );
	const [ tagsFilter, setTagsFilter ] = useState( [] );
	const [ authorFilter, setAuthorFilter ] = useState( [] );
	console.log( 'attachments', attachments );
	return (
		<Page
			className="edit-site-media"
			title={ __( 'Media' ) }
			hideTitleFromUI
		>
			<VStack spacing={ 3 }>
				<HStack justify="space-between">
					<Heading level={ 2 }>{ __( 'Images' ) }</Heading>
					<Button>Upload</Button>
				</HStack>
				<HStack justify="flex-start">
					<InputControl
						placeholder={ __( 'Search' ) }
						size="__unstable-large"
					/>
					<FilterControl
						label={ __( 'Tags' ) }
						value={ tagsFilter }
						options={ [
							{ label: __( 'Abstract' ), value: 'abstract' },
							{ label: __( 'New' ), value: 'new' },
							{ label: __( 'Featured' ), value: 'featured' },
							{ label: __( 'Nature' ), value: 'nature' },
							{
								label: __( 'Architecture' ),
								value: 'architecture',
							},
						] }
						onChange={ setTagsFilter }
					/>
					<FilterControl
						label={ __( 'Author' ) }
						value={ authorFilter }
						options={ [
							{ label: __( 'Saxon' ), value: 'saxon' },
							{ label: __( 'Isabel' ), value: 'isabel' },
							{ label: __( 'Ramon' ), value: 'ramon' },
							{ label: __( 'Andy' ), value: 'andy' },
							{
								label: __( 'Kai' ),
								value: 'kai',
							},
							{ label: __( 'Rob' ), value: 'rob' },
						] }
						onChange={ setAuthorFilter }
					/>
					<DropdownMenu></DropdownMenu>
					<ToggleGroupControl
						label="my label"
						value="vertical"
						isBlock
					>
						<ToggleGroupControlOption
							value="horizontal"
							label="Horizontal"
						/>
						<ToggleGroupControlOption
							value="vertical"
							label="Vertical"
						/>
					</ToggleGroupControl>

					{ /*<TableView /> or <GridView />*/ }
				</HStack>
				<HStack justify="flex-end">
					<Pagination />
				</HStack>
			</VStack>
		</Page>
	);
}
