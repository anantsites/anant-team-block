import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import { useState, useEffect } from '@wordpress/element';
import { TextControl, ToggleControl, PanelBody, Button, BaseControl, } from '@wordpress/components';
import '/assets/css/style.css';
import React from "react"; 
import FontIconPicker from '@fonticonpicker/react-fonticonpicker';
import icons from "./icons.js";

export function IconRepeater(props) {

    const { attributes, setAttributes } = props;
    const { info = [], } = attributes;
    const [activePanel, setActivePanel] = useState(null);

    const togglePanel = (panelName) => {
        setActivePanel((prevPanel) => (prevPanel === panelName ? null : panelName));
    };

    const infoList = (value) => {
        return(
            value.sort((a, b) => a.index - b.index).map(infoItem => {
                return(
                    <div className="atm-icon-picker">
                        <PanelBody
                            title={__(`${infoItem.title}`, "anant-team-member")}
                            opened={activePanel === `${infoItem.index}`} onToggle={() => togglePanel(`${infoItem.index}`)}
                        >
                            <BaseControl label="Title" className="atm-control-label">
                                <TextControl
                                    value={ infoItem.title }
                                    onChange={ title => {
                                    const newObject = Object.assign({}, infoItem, {
                                        title: title
                                    });
                                    setAttributes({
                                        info: [...info.filter(
                                            item => item.index != infoItem.index
                                        ), newObject]
                                    });
                                    } } 
                                />
                            </BaseControl>
                        <BaseControl label="Social Icon" className="atm-control-label atm-icon-picker">
                            <FontIconPicker 
                                icons={ icons }
                                value={ infoItem.clsName } 
                                onChange={ clsName => {
                                    const newObject = Object.assign({}, infoItem, {
                                        clsName: clsName
                                    });
                                    setAttributes({
                                        info: [...info.filter(
                                            item => item.index != infoItem.index
                                        ), newObject]
                                    });
                                    } }
                            />
                        </BaseControl>
                        <BaseControl label="Link" className="atm-control-label">
                            <TextControl
                                value={ infoItem.link }
                                placeholder="https://your-link.com"
                                onChange={ link => {
                                const newObject = Object.assign({}, infoItem, {
                                    link: link
                                });
                                setAttributes({
                                    info: [...info.filter(
                                        item => item.index != infoItem.index
                                    ), newObject]
                                });
                                } } 
                            />
                        </BaseControl>
                        <ToggleControl
                            className="atm-control-label"
                            label={__("Open In New Tab", "anant-team-member")}
                            onChange={ checkNewTab => {
                                const newObject = Object.assign({}, infoItem, {
                                    checkNewTab: checkNewTab
                                });
                                setAttributes({
                                    info: [...info.filter(
                                        item => item.index != infoItem.index
                                    ), newObject]
                                });
                                } } 
                            checked={infoItem.checkNewTab}
                        />
                        </PanelBody>
                        <Button
                            className="remove-item"
                            onClick={ () => {
                                const newInfo = info.filter(item => item.index != infoItem.index).map(i => {
                                    if(i.index > infoItem.index){
                                        i.index -= 1;
                                    }
                                    return i;
                                } );
                                setAttributes({ info: newInfo });
                            } }
                            isLink isDestructive
                        >
                            Remove
                        </Button>
                    </div>
                )
            })
        )
    }
    return (
        <Fragment>
            {infoList(info)}
            <Button className="atm-add-icons" onClick={ titleone => {
                setAttributes({
                    info: [...info, {
                        index: info.length,
                        clsName: "fab fa-facebook-f",
                        link: "https://www.facebook.com/",
                        title: "Facebook",
                    }]
                });
            }}>
                Add Item
            </Button>
        </Fragment>
    )
}