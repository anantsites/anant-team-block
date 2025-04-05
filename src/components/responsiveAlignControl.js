import { __ } from '@wordpress/i18n';
import { select, dispatch } from '@wordpress/data';
import { BaseControl } from '@wordpress/components';
import { __experimentalToggleGroupControl as ToggleGroupControl, __experimentalToggleGroupControlOptionIcon as ToggleGroupControlOptionIcon } from '@wordpress/components';
import { useState, useEffect } from '@wordpress/element';
import React from "react"; 

export function ResponsiveAlignControl({ choose, onChange, label = "" }, props) {
	const { attributes, setAttributes } = props;
    const defaultState = {
		desktop: choose?.desktop || undefined,
		tablet: choose?.tablet || undefined,
		mobile: choose?.mobile || undefined,
		resOption: select('core/edit-post').__experimentalGetPreviewDeviceType(),
	};
	const [ChooseValue, setChooseValue] = useState(defaultState);

	useEffect(() => {
		setChooseValue({
			...ChooseValue,
			resOption: select('core/edit-post').__experimentalGetPreviewDeviceType(),
		});
		onChange({
			...ChooseValue,
			resOption: select('core/edit-post').__experimentalGetPreviewDeviceType(),
		});
	}, [select('core/edit-post').__experimentalGetPreviewDeviceType()]);

	
	// These following 3 functions to handle the resBtns click
	// function 1: to handle desktop button click
	const handleDesktopBtnClick = (event, { setPreviewDeviceType }) => {
		setChooseValue({
			...ChooseValue,
			resOption: "Desktop",
		});
		onChange({
			...ChooseValue,
			resOption: "Desktop",
		});
		setPreviewDeviceType("Desktop");
	};
	  
	// function 2: to handle Tab button click
	const handleTabBtnClick = ({ setPreviewDeviceType, setAttributes }) => {
		setChooseValue({
			...ChooseValue,
			resOption: "Tablet",
		});
		onChange({
			...ChooseValue,
			resOption: "Tablet",
		});
		setPreviewDeviceType("Tablet");
	};
	  
	// function 3: to handle Mobile button click
	const handleMobileBtnClick = ({ setPreviewDeviceType, setAttributes }) => {
		setChooseValue({
			...ChooseValue,
			resOption: "Mobile",
		});
		onChange({
			...ChooseValue,
			resOption: "Mobile",
		});
		setPreviewDeviceType("Mobile");
	};
	
	return (
		<>
		<BaseControl className="atm-res-choose-control" >
			<div className='atm-res-choose-controls'>
				<div className='atm-res-choose-label'>
					{__(label, "anant-team-member")}
				</div>
				<div className='atm-res-choose-res-btn'>
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
							ChooseValue.resOption === "Desktop" ? "active" : " "
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
							ChooseValue.resOption === "Tablet" ? "active" : " "
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
							ChooseValue.resOption === "Mobile" ? "active" : " "
						}`}>
					</span>
				</div>
			</div>
			<div className='atm-res-choose-toggle-container'>
				{ChooseValue.resOption == "Desktop" && (
					<ToggleGroupControl 
						value={ChooseValue.desktop}
						onChange={(value) => {
							setChooseValue({
								...ChooseValue,
								desktop: value,
							});
							onChange({
								...ChooseValue,
								desktop: value,
							});
						}} isBlock >

						<ToggleGroupControlOptionIcon
							icon="editor-alignleft"
							label="Left"
							value="start"
						/>
						<ToggleGroupControlOptionIcon
							icon="editor-aligncenter"
							label="Center"
							value="center"
						/>
						<ToggleGroupControlOptionIcon
							icon="editor-alignright"
							label="Right"
							value="end"
						/>
			 		</ToggleGroupControl>
				)}
				{ChooseValue.resOption == "Tablet" && (
					<ToggleGroupControl 
						value={ChooseValue.tablet}
						onChange={(value) => {
							setChooseValue({
								...ChooseValue,
								tablet: value,
							});
							onChange({
								...ChooseValue,
								tablet: value,
							});
						}} isBlock >
		
						<ToggleGroupControlOptionIcon
							icon="editor-alignleft"
							label="Left"
							value="start"
						/>
						<ToggleGroupControlOptionIcon
							icon="editor-aligncenter"
							label="Center"
							value="center"
						/>
						<ToggleGroupControlOptionIcon
							icon="editor-alignright"
							label="Right"
							value="end"
						/>
					</ToggleGroupControl>
				)}
				{ChooseValue.resOption == "Mobile" && (
					<ToggleGroupControl 
						value={ChooseValue.mobile}
						onChange={(value) => {
							setChooseValue({
								...ChooseValue,
								mobile: value,
							});
							onChange({
								...ChooseValue,
								mobile: value,
							});
						}} isBlock >
	
						<ToggleGroupControlOptionIcon
							icon="editor-alignleft"
							label="Left"
							value="start"
						/>
						<ToggleGroupControlOptionIcon
							icon="editor-aligncenter"
							label="Center"
							value="center"
						/>
						<ToggleGroupControlOptionIcon
							icon="editor-alignright"
							label="Right"
							value="end"
						/>
					</ToggleGroupControl>
				)}
			</div>
		</BaseControl>
		</>
	);
}