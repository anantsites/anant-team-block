/**
 * Style
 */
import { CompileStyle } from '/src/components/compileStyle'; 
export function Style(props) {
    const { attributes, setAttributes, name: blockName } = props;
    const i = ":100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic";

    let allFonts = [
        attributes.teamTitleTypography.fontFamily.value,
        attributes.teamDesignationTypography.fontFamily.value,
    ];
    const googleFonts = () => {
        var fonts = '';
        allFonts.map((val) => {
            if(val !== undefined && val !== "undefined" && val !== "" ){
                var font=val.replace(/\s+/g, '+');
                fonts += `@import url('https://fonts.googleapis.com/css?family=` + `${font}` + `${i}');`
            }
        });
        return fonts;
    }

    return(
        <style >
        {` ${googleFonts()}
            ${CompileStyle({
                selector: `.team-member-wapper-${attributes.yourId}.atm-team-member`,
                type: {
                    "background": attributes.teamBoxBgColor,
                    "border": attributes.teamBoxBorderType,
                    "border-radius": attributes.teamBoxBorderRadius.desktop,
                    "padding": attributes.teamBoxPadding.desktop,
                    "margin": attributes.teamBoxMargin.desktop,
                    "box-shadow": attributes.teamBoxShadow,
                },
            })}
            ${CompileStyle({
                selector: `.team-member-wapper-${attributes.yourId}.atm-team-member:hover`,
                type: {
                    "background": attributes.teamBoxBgHoverColor,
                },
            })}
            ${CompileStyle({
                selector: `.team-member-wapper-${attributes.yourId}.atm-team-member .atm-team-card-image img`,
                type: {
                    "width": `${attributes.teamImageWidth.desktop.val}${attributes.teamImageWidth.desktop.unit}`,
                    "height": `${attributes.teamImageHeight.desktop.val}${attributes.teamImageHeight.desktop.unit}`,
                    "border": attributes.teamImageBorderType,
                    "border-radius": attributes.teamImageBorderRadius.desktop,
                    "box-shadow": attributes.teamImageShadow,
                },
            })}
            ${CompileStyle({
                selector: `.team-member-wapper-${attributes.yourId}.atm-team-member .atm-team-card-image`,
                type: {
                    "margin": attributes.teamImageMargin.desktop,
                },
            })}
            ${CompileStyle({
                selector: `.team-member-wapper-${attributes.yourId}.atm-team-member .heading .title`,
                type: {
                    "text-align": `${attributes.teamTitleAlignment.desktop}`,
                    "color": attributes.teamTitleColor,
                    "typography": attributes.teamTitleTypography,
                    "margin": attributes.teamTitleMargin.desktop,
                },
            })}
            ${CompileStyle({
                selector: `.team-member-wapper-${attributes.yourId}.atm-team-member:hover .heading .title`,
                type: {
                    "color": attributes.teamTitleHoverColor,
                },
            })}
            ${CompileStyle({
                selector: `.team-member-wapper-${attributes.yourId}.atm-team-member .heading .designation`,
                type: {
                    "text-align": `${attributes.teamDesignationAlignment.desktop}`,
                    "color": attributes.teamDesignationColor,
                    "typography": attributes.teamDesignationTypography,
                    "margin": attributes.teamDesignationMargin.desktop,
                },
            })}
            ${CompileStyle({
                selector: `.team-member-wapper-${attributes.yourId}.atm-team-member:hover .heading .designation`,
                type: {
                    "color": attributes.teamDesignationHoverColor,
                },
            })}
            ${CompileStyle({
                selector: `.team-member-wapper-${attributes.yourId}.atm-team-member .social-icon `,
                type: {
                    'justify-content': attributes.teamSocialIconAlignment.desktop,
                },
            })}
            ${CompileStyle({
                selector: `.team-member-wapper-${attributes.yourId}.atm-team-member .social-icon a `,
                type: {
                    'background': attributes.teamSocialIconBgColor,
                    'color': attributes.teamSocialIconColor,
                    'width': `${attributes.teamSocialIconWidth.desktop.val}${attributes.teamSocialIconWidth.desktop.unit}`,
                    'height': `${attributes.teamSocialIconWidth.desktop.val}${attributes.teamSocialIconWidth.desktop.unit}`,
                    'font-size': `${attributes.teamSocialIconSize.desktop.val}${attributes.teamSocialIconSize.desktop.unit}`,
                    'border': attributes.teamSocialIconBorderType,
                    'border-radius': attributes.teamSocialIconBorderRadius.desktop,
                    "margin": attributes.teamSocialIconMargin.desktop,
                },
            })}
            ${CompileStyle({
                selector: `.team-member-wapper-${attributes.yourId}.atm-team-member .social-icon a:hover`,
                type: {
                    'background': attributes.teamSocialIconHoverBgColor,
                    'color': attributes.teamSocialIconHoverColor,
                    'border': attributes.teamSocialIconHoverBorderType,
                    'border-radius': attributes.teamSocialIconHoverBorderRadius.desktop,
                },
            })}
            @media all and (max-width: 1024px){
                ${CompileStyle({
                    selector: `.team-member-wapper-${attributes.yourId}.atm-team-member`,
                    type: {
                        "border-width": attributes.teamBoxBorderType.width.tablet,
                        "border-radius": attributes.teamBoxBorderRadius.tablet,
                        "padding": attributes.teamBoxPadding.tablet,
                        "margin": attributes.teamBoxMargin.tablet,
                    },
                })}
                ${CompileStyle({
                    selector: `.team-member-wapper-${attributes.yourId}.atm-team-member .atm-team-card-image img`,
                    type: {
                        "width": `${attributes.teamImageWidth.tablet.val}${attributes.teamImageWidth.tablet.unit}`,
                        "height": `${attributes.teamImageHeight.tablet.val}${attributes.teamImageHeight.tablet.unit}`,
                        "border-width": attributes.teamImageBorderType.width.tablet,
                        "border-radius": attributes.teamImageBorderRadius.tablet,
                    },
                })}
                ${CompileStyle({
                    selector: `.team-member-wapper-${attributes.yourId}.atm-team-member .atm-team-card-image`,
                    type: {
                        "margin": attributes.teamImageMargin.tablet,
                    },
                })}
                ${CompileStyle({
                    selector: `.team-member-wapper-${attributes.yourId}.atm-team-member .heading .title`,
                    type: {
                        "text-align": `${attributes.teamTitleAlignment.tablet}`,
                        "font-size": `${attributes.teamTitleTypography.fontSize.tablet.val}${attributes.teamTitleTypography.fontSize.tablet.unit}`,
                        "letter-spacing": `${attributes.teamTitleTypography.letterSpacing.tablet.val}${attributes.teamTitleTypography.letterSpacing.tablet.unit}`,
                        "word-spacing": `${attributes.teamTitleTypography.wordSpacing.tablet.val}${attributes.teamTitleTypography.wordSpacing.tablet.unit}`,
                        "line-height": `${attributes.teamTitleTypography.lineHeight.tablet.val}${attributes.teamTitleTypography.lineHeight.tablet.unit}`,
                        "margin": attributes.teamTitleMargin.tablet,
                    },
                })}
                ${CompileStyle({
                    selector: `.team-member-wapper-${attributes.yourId}.atm-team-member .heading .designation`,
                    type: {
                        "text-align": `${attributes.teamDesignationAlignment.tablet}`,
                        "font-size": `${attributes.teamDesignationTypography.fontSize.tablet.val}${attributes.teamDesignationTypography.fontSize.tablet.unit}`,
                        "letter-spacing": `${attributes.teamDesignationTypography.letterSpacing.tablet.val}${attributes.teamDesignationTypography.letterSpacing.tablet.unit}`,
                        "word-spacing": `${attributes.teamDesignationTypography.wordSpacing.tablet.val}${attributes.teamDesignationTypography.wordSpacing.tablet.unit}`,
                        "line-height": `${attributes.teamDesignationTypography.lineHeight.tablet.val}${attributes.teamDesignationTypography.lineHeight.tablet.unit}`,
                        "margin": attributes.teamDesignationMargin.tablet,
                    },
                })}
                ${CompileStyle({
                    selector: `.team-member-wapper-${attributes.yourId}.atm-team-member .social-icon `,
                    type: {
                        'justify-content': attributes.teamSocialIconAlignment.tablet,
                    },
                })}
                ${CompileStyle({
                    selector: `.team-member-wapper-${attributes.yourId}.atm-team-member .social-icon a `,
                    type: {
                        'width': `${attributes.teamSocialIconWidth.tablet.val}${attributes.teamSocialIconWidth.tablet.unit}`,
                        'height': `${attributes.teamSocialIconWidth.tablet.val}${attributes.teamSocialIconWidth.tablet.unit}`,
                        'font-size': `${attributes.teamSocialIconSize.tablet.val}${attributes.teamSocialIconSize.tablet.unit}`,
                        'border-width': attributes.teamSocialIconBorderType.width.tablet,
                        'border-radius': attributes.teamSocialIconBorderRadius.tablet,
                        "margin": attributes.teamSocialIconMargin.tablet,
                    },
                })}
                ${CompileStyle({
                    selector: `.team-member-wapper-${attributes.yourId}.atm-team-member .social-icon a:hover`,
                    type: {
                        'border-width': attributes.teamSocialIconHoverBorderType.width.tablet,
                        'border-radius': attributes.teamSocialIconHoverBorderRadius.tablet,
                    },
                })}
            }
            @media all and (max-width: 767px) {
                ${CompileStyle({
                    selector: `.wp-block .atm-block-container-${attributes.yourId}.hidden-mobile`,
                    type: {
                        "display": "block",
                        "opacity": "0.5"
                        },
                })}
                ${CompileStyle({
                    selector: `.atm-block-container-${attributes.yourId}.hidden-mobile`,
                    type: {
                        "display": "none",
                        },
                })}
                ${CompileStyle({
                    selector: `.team-member-wapper-${attributes.yourId}.atm-team-member`,
                    type: {
                        "border-width": attributes.teamBoxBorderType.width.mobile,
                        "border-radius": attributes.teamBoxBorderRadius.mobile,
                        "padding": attributes.teamBoxPadding.mobile,
                        "margin": attributes.teamBoxMargin.mobile,
                    },
                })}
                ${CompileStyle({
                    selector: `.team-member-wapper-${attributes.yourId}.atm-team-member .atm-team-card-image img`,
                    type: {
                        "width": `${attributes.teamImageWidth.mobile.val}${attributes.teamImageWidth.mobile.unit}`,
                        "height": `${attributes.teamImageHeight.mobile.val}${attributes.teamImageHeight.mobile.unit}`,
                        "border-width": attributes.teamImageBorderType.width.mobile,
                        "border-radius": attributes.teamImageBorderRadius.mobile,
                    },
                })}
                ${CompileStyle({
                    selector: `.team-member-wapper-${attributes.yourId}.atm-team-member .atm-team-card-image`,
                    type: {
                        "margin": attributes.teamImageMargin.mobile,
                    },
                })}
                ${CompileStyle({
                    selector: `.team-member-wapper-${attributes.yourId}.atm-team-member .heading .title`,
                    type: {
                        "text-align": `${attributes.teamTitleAlignment.mobile}`,
                        "font-size": `${attributes.teamTitleTypography.fontSize.mobile.val}${attributes.teamTitleTypography.fontSize.mobile.unit}`,
                        "letter-spacing": `${attributes.teamTitleTypography.letterSpacing.mobile.val}${attributes.teamTitleTypography.letterSpacing.mobile.unit}`,
                        "word-spacing": `${attributes.teamTitleTypography.wordSpacing.mobile.val}${attributes.teamTitleTypography.wordSpacing.mobile.unit}`,
                        "line-height": `${attributes.teamTitleTypography.lineHeight.mobile.val}${attributes.teamTitleTypography.lineHeight.mobile.unit}`,
                        "margin": attributes.teamTitleMargin.mobile,
                    },
                })}
                ${CompileStyle({
                    selector: `.team-member-wapper-${attributes.yourId}.atm-team-member .heading .designation`,
                    type: {
                        "text-align": `${attributes.teamDesignationAlignment.mobile}`,
                        "font-size": `${attributes.teamDesignationTypography.fontSize.mobile.val}${attributes.teamDesignationTypography.fontSize.mobile.unit}`,
                        "letter-spacing": `${attributes.teamDesignationTypography.letterSpacing.mobile.val}${attributes.teamDesignationTypography.letterSpacing.mobile.unit}`,
                        "word-spacing": `${attributes.teamDesignationTypography.wordSpacing.mobile.val}${attributes.teamDesignationTypography.wordSpacing.mobile.unit}`,
                        "line-height": `${attributes.teamDesignationTypography.lineHeight.mobile.val}${attributes.teamDesignationTypography.lineHeight.mobile.unit}`,
                        "margin": attributes.teamDesignationMargin.mobile,
                    },
                })}
                ${CompileStyle({
                    selector: `.team-member-wapper-${attributes.yourId}.atm-team-member .social-icon `,
                    type: {
                        'justify-content': attributes.teamSocialIconAlignment.mobile,
                    },
                })}
                ${CompileStyle({
                    selector: `.team-member-wapper-${attributes.yourId}.atm-team-member .social-icon a `,
                    type: {
                        'width': `${attributes.teamSocialIconWidth.mobile.val}${attributes.teamSocialIconWidth.mobile.unit}`,
                        'height': `${attributes.teamSocialIconWidth.mobile.val}${attributes.teamSocialIconWidth.mobile.unit}`,
                        'font-size': `${attributes.teamSocialIconSize.mobile.val}${attributes.teamSocialIconSize.mobile.unit}`,
                        'border-width': attributes.teamSocialIconBorderType.width.mobile,
                        'border-radius': attributes.teamSocialIconBorderRadius.mobile,
                        "margin": attributes.teamSocialIconMargin.mobile,
                    },
                })}
                ${CompileStyle({
                    selector: `.team-member-wapper-${attributes.yourId}.atm-team-member .social-icon a:hover`,
                    type: {
                        'border-width': attributes.teamSocialIconHoverBorderType.width.mobile,
                        'border-radius': attributes.teamSocialIconHoverBorderRadius.mobile,
                    },
                })}
            }
            @media screen and (min-width: 1024px){
                ${CompileStyle({
                    selector: `.wp-block .atm-block-container-${attributes.yourId}.hidden-desktop`,
                    type: {
                        "display": "block",
                        "opacity": "0.5"
                        },
                })}
                ${CompileStyle({
                    selector: `.atm-block-container-${attributes.yourId}.hidden-desktop`,
                    type: {
                        "display": "none",
                        },
                })}
            }
            @media screen and (max-width: 1024px) and (min-width: 767px){
                ${CompileStyle({
                    selector: `.wp-block .atm-block-container-${attributes.yourId}.hidden-tablet`,
                    type: {
                        "display": "block",
                        "opacity": "0.5"
                        },
                })}
                ${CompileStyle({
                    selector: `.atm-block-container-${attributes.yourId}.hidden-tablet`,
                    type: {
                        "display": "none",
                        },
                })}
            }
        `}
        </style>
    );
}