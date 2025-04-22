import { __ } from '@wordpress/i18n';
import { PanelColorSettings } from '@wordpress/block-editor';
import { ColorPickerControl } from './customColorPicker.js';
import { RangeControl, SelectControl, Dropdown, Button } from '@wordpress/components';
import { useState, useEffect } from '@wordpress/element';
import React from "react";

export function CustomGradientControl({ values, onChange, label = "" }, props) {
    const { attributes, setAttributes } = props;
    // State to manage synchronized values, including the link boolean
    const [ControlValue, setControlValue] = useState({
        colorOpt: values?.colorOpt || 'color',
        colorOne: values?.colorOne || {
            enable: false,
            color: undefined,
        },
        colorTwo: values?.colorTwo || {
            enable: false,
            color: undefined,
        },
        locationOne: values?.locationOne || 0,
        locationTwo: values?.locationTwo || 100,
        type: values?.type || 'linear-gradient',
        position: values?.position || 'center center',
        angle: values?.angle || 180,
    });
    const {colorOne, colorTwo} = ControlValue;

    // State to manage synchronized values, including the link boolean
    const [selectedTab, setSelectedTab] = useState('color');

    // Event handler for selecting a tab
    const onSelectTab = (tabName) => {
        setControlValue({
            ...ControlValue,
            colorOpt: tabName,
        });
        onChange({
            ...ControlValue,
            colorOpt: tabName,
        });
    };

    return (
        <>
            <div className="antm-color-type-control">
                <div className='control-label-wrapper'>
                    <div className="antm-color-type-controls">
                        <label for="antm-color-type-control-label" className='antm-color-type-label'>{__(label, "anant-team-member")}</label>
                        <div className="antm-color-type-control-tab">
                            <button
                                type="button"
                                className={`components-button antm-gradient-tab-button ${ControlValue.colorOpt === 'color' ? 'is-active' : ''}`}
                                onClick={() => onSelectTab('color')}
                            >
                                <span className="dashicons dashicons-admin-customizer"></span>
                            </button>
                            <button
                                type="button"
                                className={`components-button antm-gradient-tab-button ${ControlValue.colorOpt === 'gradient' ? 'is-active' : ''}`}
                                onClick={() => onSelectTab('gradient')}
                            >
                                <span className="fas fa-barcode"></span>
                            </button>
                        </div>
                    </div>
                    <div className="antm-color-types">
                        <ColorPickerControl
                            values={ControlValue.colorOne}
                            onChange={(value) => {
                                setControlValue({
                                    ...ControlValue,
                                    colorOne: value,
                                });
                                onChange({
                                    ...ControlValue,
                                    colorOne: value,
                                });
                            }}
                            label="Color"
                        />
                        {ControlValue.colorOpt === 'gradient' && (
                            <>
                            <div className='antm-range-controls'>
                                <div className='antm-range-label'>
                                    {__("Location", "anant-team-member")}
                                </div>
                                <div className='antm-units-container'>
                                    <Dropdown
                                        className="antm-units-dropdown"
                                        renderToggle={({ isOpen, onToggle }) => (
                                            <Button variant="primary" className='antm-units-button'>%</Button>
                                        )}
                                    />
                                </div>
                            </div>
                            <div className='antm-range-inner' style={{marginBottom: "20px"}}>
                                <RangeControl
                                    value={ControlValue.locationOne}
                                    onChange={(value) => {
                                        setControlValue({
                                            ...ControlValue,
                                            locationOne: value,
                                        });
                                        onChange({
                                            ...ControlValue,
                                            locationOne: value,
                                        });
                                    }}
                                    min={0}
                                    max={100}
                                />
                            </div>
                            <ColorPickerControl
                                values={ControlValue.colorTwo}
                                onChange={(value) => {
                                    setControlValue({
                                        ...ControlValue,
                                        colorTwo: value,
                                    });
                                    onChange({
                                        ...ControlValue,
                                        colorTwo: value,
                                    });
                                }}
                                label="Second Color"
                            />
                            <div className='antm-range-controls'>
                                <div className='antm-range-label'>
                                    {__("Location", "anant-team-member")}
                                </div>
                                <div className='antm-units-container'>
                                    <Dropdown
                                        className="antm-units-dropdown"
                                        renderToggle={({ isOpen, onToggle }) => (
                                            <Button variant="primary" className='antm-units-button'>%</Button>
                                        )}
                                    />
                                </div>
                            </div>
                            <div className='antm-range-inner' style={{marginBottom: "20px"}}>
                                <RangeControl
                                    value={ControlValue.locationTwo}
                                    onChange={(value) => {
                                        setControlValue({
                                            ...ControlValue,
                                            locationTwo: value,
                                        });
                                        onChange({
                                            ...ControlValue,
                                            locationTwo: value,
                                        });
                                    }}
                                    min={0}
                                    max={100}
                                />
                            </div>
                            <div className='antm-color-type'>
                                <label for="antm-color-type-label" className='antm-color-type-label'>{__("Type", "anant-team-member")}</label>
                                <SelectControl
                                    options={ [
                                        { label: 'Linear', value: 'linear-gradient' },
                                        { label: 'Radial', value: 'radial-gradient' },
                                    ] }
                                    value={ControlValue.type}
                                    onChange={(value) => {
                                        setControlValue({
                                            ...ControlValue,
                                            type: value,
                                        });
                                        onChange({
                                            ...ControlValue,
                                            type: value,
                                        });
                                    }}
                                />
                            </div>
                            {ControlValue.type === 'radial-gradient' && (
                            <div className='antm-color-type'>
                                <label for="antm-color-position-label" className='antm-color-type-label'>{__("Position", "anant-team-member")}</label>
                                <SelectControl
                                    options={ [
                                        { label: 'Center Center', value: 'center center' },
                                        { label: 'Center Left', value: 'center left' },
                                        { label: 'Center Right', value: 'center right' },
                                        { label: 'Top Center', value: 'top center' },
                                        { label: 'Top Left', value: 'top left' },
                                        { label: 'Top Right', value: 'top right' },
                                        { label: 'Bottom Center', value: 'bottom center' },
                                        { label: 'Bottom Left', value: 'bottom left' },
                                        { label: 'Bottom Right', value: 'bottom right' },
                                    ] }
                                    value={ControlValue.position}
                                    onChange={(value) => {
                                        setControlValue({
                                            ...ControlValue,
                                            position: value,
                                        });
                                        onChange({
                                            ...ControlValue,
                                            position: value,
                                        });
                                    }}
                                />
                            </div>
                            )}
                            {ControlValue.type === 'linear-gradient' && (
                            <>
                            <div className='antm-range-controls'>
                                <div className='antm-range-label'>
                                    {__("Angle", "anant-team-member")}
                                </div>
                                <div className='antm-units-container'>
                                    <Dropdown
                                        className="antm-units-dropdown"
                                        renderToggle={({ isOpen, onToggle }) => (
                                            <Button variant="primary" className='antm-units-button' style={{textTransform: "lowercase"}}>deg</Button>
                                        )}
                                    />
                                </div>
                            </div>
                            <div className='antm-range-inner'>
                                <RangeControl
                                    value={ControlValue.angle}
                                    onChange={(value) => {
                                        setControlValue({
                                            ...ControlValue,
                                            angle: value,
                                        });
                                        onChange({
                                            ...ControlValue,
                                            angle: value,
                                        });
                                    }}
                                    min={0}
                                    max={360}
                                />
                            </div>
                            </>
                            )}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
