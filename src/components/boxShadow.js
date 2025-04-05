import { __ } from '@wordpress/i18n';
import { RawHTML,Fragment } from '@wordpress/element';
import { select, dispatch } from '@wordpress/data';
import { ToggleControl, Button, Dashicon, RangeControl, Popover, SelectControl  } from '@wordpress/components';
import { useState, useEffect } from '@wordpress/element';
import React from "react"; 
import { ColorPickerControl } from './customColorPicker.js';

const shadowDefaultValue = {
	color: {
		enable: false,
		color: "",
	  },
	horizontal: undefined,
	vertical: undefined,
	blur: undefined,
	spread: undefined,
	enable: false,
	position: '',
};

export function BoxShadowControl({ shadow, onChange }) {
	const [popoverOpen, setPopoverOpen] = useState(false);
	const [shadowValue, setShadowValue] = useState({
		color: shadow?.color || {
			enable: true,
			color: 'rgb(33 33 33 / 12%)',
		  },
		horizontal: shadow?.horizontal || 0,
		vertical: shadow?.vertical || 0,
		blur: shadow?.blur || 10,
		spread: shadow?.spread || 0,
		enable: shadow?.enable || false,
		position: shadow?.position || '',
	});
	return (
		<div className="box-shadow-control">
			<div className="control-label-wrapper">
			<div className='atm-shadow-controls'>
				<label for="atm-shadow-control-label" className='atm-shadow-label'>{__("Box Shadow", "anant-team-member")}</label>
				<div className="button-wrapper">
					{shadowValue.enable && (
						<Button
							style={{padding: "0 10px"}}
							onClick={() => {
								setShadowValue({
									...shadowDefaultValue,
								});
								onChange({
									...shadowDefaultValue,
								});
								setPopoverOpen(false);
							}}
						>
							<Dashicon className='atm-reset' icon="image-rotate" />
						</Button>
					)}

					<Button
					className='atm-edit-toggle'
						onClick={() => {
							onChange({ ...shadowValue, enable: true });
							setShadowValue({ ...shadowValue, enable: true });
							setPopoverOpen(!popoverOpen);
						}}
						isPressed={popoverOpen === true}
						variant="secondary"
					>
						<Dashicon className='atm-open-edit' icon="edit" />
					</Button>
				</div>
			</div>
				{popoverOpen && (
					<Popover>
						<div className="box-shadow-controls-wrapper">
							<ColorPickerControl
								values={shadowValue.color}
								onChange={(value) => {
									setShadowValue({
										...shadowValue,
										color: value,
									});
									onChange({
										...shadowValue,
										color: value,
									});
								}}
								label="Color"
							/>
							<RangeControl
								className='atm-range-label'
								label={__('Horizontal', 'anant-team-member')}
								value={shadowValue.horizontal}
								onChange={(value) => {
									setShadowValue({
										...shadowValue,
										horizontal: value,
									});
									onChange({
										...shadowValue,
										horizontal: value,
									});
								}}
								min={-50}
								max={100}
							/>
							<RangeControl
								className='atm-range-label'
								label={__('Vertical', 'anant-team-member')}
								value={shadowValue.vertical}
								onChange={(value) => {
									setShadowValue({
										...shadowValue,
										vertical: value,
									});
									onChange({
										...shadowValue,
										vertical: value,
									});
								}}
								min={-50}
								max={100}
							/>
							<RangeControl
								className='atm-range-label'
								value={shadowValue.blur}
								onChange={(value) => {
									setShadowValue({
										...shadowValue,
										blur: value,
									});
									onChange({
										...shadowValue,
										blur: value,
									});
								}}
								label={__('Blur', 'anant-team-member')}
								min={0}
								max={100}
							/>
							<RangeControl
								className='atm-range-label'
								value={shadowValue.spread}
								onChange={(value) => {
									setShadowValue({
										...shadowValue,
										spread: value,
									});
									onChange({
										...shadowValue,
										spread: value,
									});
								}}
								label={__('Spread', 'anant-team-member')}
								min={0}
								max={100}
							/>
							<div className='atm-shadow-position'>
								<label for="atm-shadow-position-label" className='atm-shadow-position-label'>{__("Position", "anant-team-member")}</label>
									<SelectControl
										options={ [
											{ label: 'Outline', value: '' },
											{ label: 'Inset', value: 'inset' },
										] }
										value={shadowValue.position}
										onChange={(value) => {
											setShadowValue({
												...shadowValue,
												position: value,
											});
											onChange({
												...shadowValue,
												position: value,
											});
										}}
									/>
							</div>
						</div>
					</Popover>
				)}
			</div>
		</div>
	);
}