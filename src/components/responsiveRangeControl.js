import { __ } from '@wordpress/i18n';
import { select, dispatch } from '@wordpress/data';
import { RangeControl, BaseControl, Dropdown, Button } from '@wordpress/components';
import { useState, useEffect } from '@wordpress/element';
import React from "react"; 


export function ResponsiveRangeControl({ values, onChange, label = "", min = 0 , max = 200, step = 1 }, props) {

	const { attributes, setAttributes } = props;
	const [rangeValue, setrangeValue] = useState({
		desktop: values?.desktop || {
            val: undefined,
            unit: "px"
		},
		tablet: values?.tablet || {
            val: undefined,
            unit: "px"
		},
		mobile: values?.mobile || {
            val: undefined,
            unit: "px"
		},
		resOption: select('core/edit-post').__experimentalGetPreviewDeviceType(),
	});
	const currentDeviceType = select('core/edit-post').__experimentalGetPreviewDeviceType();
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const units = ['px', 'em', '%']; // Add your desired units

	useEffect(() => {
		setrangeValue({
			...rangeValue,
			resOption: select('core/edit-post').__experimentalGetPreviewDeviceType(),
		});
		onChange({
			...rangeValue,
			resOption: select('core/edit-post').__experimentalGetPreviewDeviceType(),
		});
	}, [select('core/edit-post').__experimentalGetPreviewDeviceType()]);
	
	// These following 3 functions to handle the resBtns click
	// function 1: to handle desktop button click
	const handleDesktopBtnClick = (event, { setPreviewDeviceType }) => {
		setrangeValue({
			...rangeValue,
			resOption: "Desktop",
		});
		onChange({
			...rangeValue,
			resOption: "Desktop",
		});
		setPreviewDeviceType("Desktop");
	};
	  
	// function 2: to handle Tab button click
	const handleTabBtnClick = ({ setPreviewDeviceType, setAttributes }) => {
		setrangeValue({
			...rangeValue,
			resOption: "Tablet",
		});
		onChange({
			...rangeValue,
			resOption: "Tablet",
		});
		setPreviewDeviceType("Tablet");
	};
	  
	// function 3: to handle Mobile button click
	const handleMobileBtnClick = ({ setPreviewDeviceType, setAttributes }) => {
		setrangeValue({
			...rangeValue,
			resOption: "Mobile",
		});
		onChange({
			...rangeValue,
			resOption: "Mobile",
		});
		setPreviewDeviceType("Mobile");
	};

	const toggleDropdown = () => {
		setDropdownOpen(!isDropdownOpen);
	  };
	
	return (
		<>
			<BaseControl className="antm-res-range-control" >
				<div className='antm-res-range-controls'>
					<div className='antm-res-range-label'>
						{__(label, "anant-team-member")}
					</div>
					<div className='antm-res-range-res-btn' >
						<span
							onClick={(event) =>
								handleDesktopBtnClick(event, {
									setPreviewDeviceType:
										dispatch("core/edit-post")
											.__experimentalSetPreviewDeviceType,
									setAttributes,
								})
								
							}
							className={`antmResButton dashicons dashicons-desktop ${
								rangeValue.resOption === "Desktop" ? "active" : " "
							}`}>
						</span>
						<span
							onClick={() =>
								handleTabBtnClick({
									setPreviewDeviceType:
										dispatch("core/edit-post")
											.__experimentalSetPreviewDeviceType,
									setAttributes,
								})
							}
							className={`antmResButton dashicons dashicons-tablet ${
								rangeValue.resOption === "Tablet" ? "active" : " "
							}`}>
						</span>
						<span
							onClick={() =>
								handleMobileBtnClick({
									setPreviewDeviceType:
										dispatch("core/edit-post")
											.__experimentalSetPreviewDeviceType,
									setAttributes,
								})
							}
							className={`antmResButton dashicons dashicons-smartphone ${
								rangeValue.resOption === "Mobile" ? "active" : " "
							}`}>
						</span>
					</div>
					<div className='antm-units-container'>
						<Dropdown
							className="antm-units-dropdown"
							contentClassName="antm-dropdown-unit-items"
							isOpen={isDropdownOpen}
							onClose={toggleDropdown}
							renderToggle={({ isOpen, onToggle }) => (
								<Button variant="primary" onClick={onToggle} aria-expanded={isOpen} className='antm-units-button'>
									{(rangeValue[currentDeviceType.toLowerCase()] ? rangeValue[currentDeviceType.toLowerCase()].unit : '')}
								</Button>
							)}
							renderContent={() => (
								<div style={{ display: 'flex', flexDirection: 'column' }}>
									{units.map((unit) => (
										<button
											key={unit}
											className='antm-units-menus'
											onClick={() => {
												// Handle unit selection based on the current device type
												setrangeValue({
													...rangeValue,
													[currentDeviceType.toLowerCase()]: {
														...rangeValue[currentDeviceType.toLowerCase()],
														unit: unit,
													},
												});
											
												onChange({
													...rangeValue,
													[currentDeviceType.toLowerCase()]: {
														...rangeValue[currentDeviceType.toLowerCase()],
														unit: unit,
													},
												});
											
												toggleDropdown();
											}}
										>{unit}</button>
									))}
								</div>
							)}
						/>
					</div>
				</div>
				{rangeValue.resOption == "Desktop" && (
					<div className='antm-res-range-inner'>
						<RangeControl
						className='antm-reset'
							value={rangeValue.desktop.val}
							onChange={(value) => {
								setrangeValue({
									...rangeValue,
									desktop: {
										...rangeValue.desktop,
										val: value,
									},
								});
							
								onChange({
									...rangeValue,
									desktop: {
										...rangeValue.desktop,
										val: value,
									},
								});
							}}
							min={min}
							max={max}
							step={step}
							allowReset
						/>
					</div>
				)}
				{rangeValue.resOption == "Tablet" && (
					<div className='antm-res-range-inner'>
						<RangeControl
						className='antm-reset'
							value={rangeValue.tablet.val}
							onChange={(value) => {
								setrangeValue({
									...rangeValue,
									tablet: {
										...rangeValue.tablet,
										val: value,
									},
								});
							
								onChange({
									...rangeValue,
									tablet: {
										...rangeValue.tablet,
										val: value,
									},
								});
							}}
							min={min}
							max={max}
							step={step}
							allowReset
						/>
					</div>
				)}
				{rangeValue.resOption == "Mobile" && (
					<div className='antm-res-range-inner'>
						<RangeControl
						className='antm-reset'
							value={rangeValue.mobile.val}
							onChange={(value) => {
								setrangeValue({
									...rangeValue,
									mobile: {
										...rangeValue.mobile,
										val: value,
									},
								});
							
								onChange({
									...rangeValue,
									mobile: {
										...rangeValue.mobile,
										val: value,
									},
								});
							}}
							min={min}
							max={max}
							step={step}
							allowReset
						/>
					</div>
				)}
			</BaseControl>
		</>
	);
}