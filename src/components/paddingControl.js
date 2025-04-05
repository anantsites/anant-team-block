import { __ } from '@wordpress/i18n';
import { BaseControl, Dropdown, Button } from '@wordpress/components';
import { useState, useEffect } from '@wordpress/element';
import { __experimentalUnitControl as UnitControl } from '@wordpress/components';
import React from "react";

export function PaddingControl({ values, onChange }, props) {
    
    const { attributes, setAttributes } = props;
    // State to manage synchronized values, including the link boolean
    const [linkedValue, setLinkedValue] = useState({
        top: values?.top || undefined,
        right: values?.right || undefined,
        bottom: values?.bottom || undefined,
        left: values?.left || undefined,
        link: values?.link || false, // Use boolean instead of string
        unit: values?.unit || "px" // Use boolean instead of string
    });

    // Effect to synchronize values when link button is toggled
    useEffect(() => {
        if (linkedValue.link) {
            setLinkedValue({
                top: linkedValue.top,
                right:  linkedValue.top,
                bottom:  linkedValue.top,
                left: linkedValue.top,
                link: linkedValue.link,
                unit: linkedValue.unit
            });
            onChange({
                top: linkedValue.top,
                right:  linkedValue.top,
                bottom:  linkedValue.top,
                left: linkedValue.top,
                link: linkedValue.link,
                unit: linkedValue.unit
            });
        }
    }, [linkedValue.link]);

    // Event handler for link/unlink button
    const toggleLink = () => {
        setLinkedValue({
            ...linkedValue,
            link: !linkedValue.link // Toggle the boolean value
        });
        onChange({
            ...linkedValue,
            link: !linkedValue.link // Toggle the boolean value
        });
    };

    // Event handler for individual UnitControl change
    const handleUnitControlChange = (direction, value) => {
        // If linked, update all values to the same value
        if (linkedValue.link) {
            const updatedValues = {
                top: value,
                right: value,
                bottom: value,
                left: value,
                link: true,
                unit: linkedValue.unit
            };
            setLinkedValue(updatedValues);
            onChange(updatedValues);
        } else {
            // If not linked, update the specific value
            const updatedValues = { ...linkedValue, [direction]: value };
            setLinkedValue(updatedValues);
            onChange(updatedValues);
        }
    };

    return (
        <>
            <div className='atm-dimension-container'>
                <div className='atm-dimension-inner'>
                    <UnitControl
                        label="Top"
                        labelPosition="bottom"
                        value={linkedValue.top}
                        isUnitSelectTabbable
                        disableUnits
                        units={['']}
                        onChange={(value) => handleUnitControlChange('top', value)}
                    />
                    <UnitControl
                        label="Right"
                        labelPosition="bottom"
                        value={linkedValue.right}
                        isUnitSelectTabbable
                        disableUnits
                        units={['']}
                        onChange={(value) => handleUnitControlChange('right', value)}
                        renderValue={(value) => removePx(value)}
                    />
                    <UnitControl
                        label="Bottom"
                        labelPosition="bottom"
                        value={linkedValue.bottom}
                        isUnitSelectTabbable
                        disableUnits
                        units={['']}
                        onChange={(value) => handleUnitControlChange('bottom', value)}
                        renderValue={(value) => removePx(value)}
                    />
                    <UnitControl
                        label="Left"
                        labelPosition="bottom"
                        value={linkedValue.left}
                        isUnitSelectTabbable
                        disableUnits
                        units={['']}
                        onChange={(value) => handleUnitControlChange('left', value)}
                        renderValue={(value) => removePx(value)}
                    />
                    <Button isPrimary onClick={toggleLink}>
                        {linkedValue.link ? __(<i class="fas fa-unlink"></i>, 'anant-team-member') : __(<i class="fas fa-link"></i>, 'anant-team-member')}
                    </Button>
                </div>
            </div>
        </>
    );
}
