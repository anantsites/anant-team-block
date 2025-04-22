import { __ } from '@wordpress/i18n';
import { PanelColorSettings, ColorPalette} from '@wordpress/block-editor';
import { select, dispatch } from '@wordpress/data';
import { RangeControl, BaseControl, SelectControl, } from '@wordpress/components';
import { useState, useEffect } from '@wordpress/element';
import { ResponsiveDimentionControl } from './responsiveDimentionControl.js';
import { ColorPickerControl } from './customColorPicker.js';
import React from "react"; 


export function CustomBorderControl({ values, onChange}, props) {
	const { attributes, setAttributes } = props;
	const [borderValue, setBorderValue] = useState({
		type: values?.type || undefined,
		width: values?.width || undefined,
		color: values?.color || {
            enable: false,
            color: undefined,
          },
	});

	return (
		<>
			<BaseControl className="antm-border-control">
                <div className='antm-border-main-label'>
                <label for="antm-border-control-label" className='antm-border-label'>{__("Border Type", "anant-team-member")}</label>
                    <SelectControl
                        options={ [
                            { label: 'Default', value: 'default' },
                            { label: 'None', value: 'none' },
                            { label: 'Solid', value: 'solid' },
                            { label: 'Double', value: 'double' },
                            { label: 'Dotted', value: 'dotted' },
                            { label: 'Dashed', value: 'dashed' },
                            { label: 'Groove', value: 'groove' },
                        ] }
                        value={borderValue.type}
                        onChange={(value) => {
                            setBorderValue({
                                ...borderValue,
                                type: value,
                            });
                            onChange({
                                ...borderValue,
                                type: value,
                            });
                        }}
                    />
                </div>
                { (borderValue.type !== "default" && borderValue.type !== "none" ) && (
                    <ResponsiveDimentionControl
                        multinum={borderValue.width}
                        onChange={(value) => {
                            setBorderValue({
                                ...borderValue,
                                width: value,
                            });
                            onChange({
                                ...borderValue,
                                width: value,
                            });
                        }}
                        label="Border Width"
                    />
                )}
                { (borderValue.type !== "default" && borderValue.type !== "none" ) && (
                    <ColorPickerControl
                        values={borderValue.color}
                        onChange={(value) => {
                            setBorderValue({
                                ...borderValue,
                                color: value,
                            });
                            onChange({
                                ...borderValue,
                                color: value,
                            });
                        }}
                        label="Color"
                    />
                )}
			</BaseControl>
		</>
	);
}