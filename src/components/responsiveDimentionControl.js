import { __ } from '@wordpress/i18n';
import { select, dispatch } from '@wordpress/data';
import { BaseControl } from '@wordpress/components';
import { __experimentalBoxControl as BoxControl, Dropdown, Button } from '@wordpress/components';
import { PaddingControl } from '/src/components/paddingControl.js';
import { useState, useEffect } from '@wordpress/element';
import React from "react";

export function ResponsiveDimentionControl({ multinum, onChange, label = "" }, props) {
	const { attributes, setAttributes } = props;
	const [MultiNumValue, setMultiNumValue] = useState({
		desktop: multinum?.desktop || undefined,
		tablet: multinum?.tablet || undefined,
		mobile: multinum?.mobile || undefined,
		resOption: select('core/edit-post').__experimentalGetPreviewDeviceType(),
	});
	const currentDeviceType = select('core/edit-post').__experimentalGetPreviewDeviceType();
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const units = ['px', 'em', '%']; // Add your desired units

	useEffect(() => {
		setMultiNumValue({
			...MultiNumValue,
			resOption: select('core/edit-post').__experimentalGetPreviewDeviceType(),
		});
		onChange({
			...MultiNumValue,
			resOption: select('core/edit-post').__experimentalGetPreviewDeviceType(),
		});
	}, [select('core/edit-post').__experimentalGetPreviewDeviceType()]);
	
	// These following 3 functions to handle the resBtns click
	// function 1: to handle desktop button click
	const handleDesktopBtnClick = (event, { setPreviewDeviceType }) => {
		setMultiNumValue({
			...MultiNumValue,
			resOption: "Desktop",
		});
		onChange({
			...MultiNumValue,
			resOption: "Desktop",
		});
		setPreviewDeviceType("Desktop");
	};
	  
	// function 2: to handle Tab button click
	const handleTabBtnClick = ({ setPreviewDeviceType, setAttributes }) => {
		setMultiNumValue({
			...MultiNumValue,
			resOption: "Tablet",
		});
		onChange({
			...MultiNumValue,
			resOption: "Tablet",
		});
		setPreviewDeviceType("Tablet");
	};
	  
	// function 3: to handle Mobile button click
	const handleMobileBtnClick = ({ setPreviewDeviceType, setAttributes }) => {
		setMultiNumValue({
			...MultiNumValue,
			resOption: "Mobile",
		});
		onChange({
			...MultiNumValue,
			resOption: "Mobile",
		});
		setPreviewDeviceType("Mobile");
	};

    const toggleDropdown = () => {
      setDropdownOpen(!isDropdownOpen);
    };
	
	return (
		<>
		<BaseControl className="atm-res-dimension">
			<div className='atm-res-dimension-label-n-unit'>
				<div className='atm-res-dimension-label'>
					{__(label, "anant-team-member")}
				</div>
				<div className='atm-res-dimension-res-btn' >
					<span
						onClick={(event) =>
							handleDesktopBtnClick(event, {
								setPreviewDeviceType:
									dispatch("core/edit-post")
										.__experimentalSetPreviewDeviceType,
								setAttributes,
							})
							
						}
						className={`atmResButton dashicons dashicons-desktop ${
							MultiNumValue.resOption === "Desktop" ? "active" : " "
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
						className={`atmResButton dashicons dashicons-tablet ${
							MultiNumValue.resOption === "Tablet" ? "active" : " "
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
						className={`atmResButton dashicons dashicons-smartphone ${
							MultiNumValue.resOption === "Mobile" ? "active" : " "
						}`}>
					</span>
				</div>
				<div className='atm-units-container'>
					<Dropdown
						className="atm-units-dropdown"
						contentClassName="atm-dropdown-unit-items"
						isOpen={isDropdownOpen}
						onClose={toggleDropdown}
						renderToggle={({ isOpen, onToggle }) => (
							<Button variant="primary" onClick={onToggle} aria-expanded={isOpen} className='atm-units-button'>
								{(MultiNumValue[currentDeviceType.toLowerCase()] ? MultiNumValue[currentDeviceType.toLowerCase()].unit : '')}
							</Button>
						)}
						renderContent={() => (
							<div style={{ display: 'flex', flexDirection: 'column' }}>
								{units.map((unit) => (
									<button
										key={unit}
										className='atm-units-menus'
										onClick={() => {
											// Handle unit selection based on the current device type
											setMultiNumValue({
												...MultiNumValue,
												[currentDeviceType.toLowerCase()]: {
													...MultiNumValue[currentDeviceType.toLowerCase()],
													unit: unit,
												},
											});
										
											onChange({
												...MultiNumValue,
												[currentDeviceType.toLowerCase()]: {
													...MultiNumValue[currentDeviceType.toLowerCase()],
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
			{MultiNumValue.resOption == "Desktop" && (
				<PaddingControl
					isUnit={false}
					sides={{}}
					values={MultiNumValue.desktop}
					onChange={(value) => {
						setMultiNumValue({
							...MultiNumValue,
							desktop: {
								...MultiNumValue.desktop,
								top: value.top,
								right: value.right,
								bottom: value.bottom,
								left: value.left,
								link: value.link,
								unit: MultiNumValue.desktop.unit,
							},
						});
						onChange({
							...MultiNumValue,
							desktop: {
								...MultiNumValue.desktop,
								top: value.top,
								right: value.right,
								bottom: value.bottom,
								left: value.left,
								link: value.link,
								unit: MultiNumValue.desktop.unit,
							},
						});
					}}
				/>
			)}
			{MultiNumValue.resOption == "Tablet" && (
				<PaddingControl
						isUnit={false}
						sides={{}}
						values={MultiNumValue.tablet}
						onChange={(value) => {
							setMultiNumValue({
								...MultiNumValue,
								tablet: {
									...MultiNumValue.tablet,
									top: value.top,
									right: value.right,
									bottom: value.bottom,
									left: value.left,
									link: value.link,
									unit: MultiNumValue.tablet.unit,
								},
							});
							onChange({
								...MultiNumValue,
								tablet: {
									...MultiNumValue.tablet,
									top: value.top,
									right: value.right,
									bottom: value.bottom,
									left: value.left,
									link: value.link,
									unit: MultiNumValue.tablet.unit,
								},
							});
						}}
					/>
			)}
			{MultiNumValue.resOption == "Mobile" && (
				<PaddingControl
					isUnit={false}
					sides={{}}
						values={MultiNumValue.mobile}
						onChange={(value) => {
							setMultiNumValue({
								...MultiNumValue,
								mobile: {
									...MultiNumValue.mobile,
									top: value.top,
									right: value.right,
									bottom: value.bottom,
									left: value.left,
									link: value.link,
									unit: MultiNumValue.mobile.unit,
								},
							});
							onChange({
								...MultiNumValue,
								mobile: {
									...MultiNumValue.mobile,
									top: value.top,
									right: value.right,
									bottom: value.bottom,
									left: value.left,
									link: value.link,
									unit: MultiNumValue.mobile.unit,
								},
							});
						}}
					/>
			)}
			</BaseControl>
		</>
	);
}
