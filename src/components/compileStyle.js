import { __ } from '@wordpress/i18n';
import { select, dispatch } from '@wordpress/data';

export const CompileStyle = ({ selector, type }) => {
    // Check if type is an object
    if (typeof type !== 'object' || type === null) {
      console.error('Invalid type prop. Expected an object.');
      return ''; // or handle the error in some way
    }
    const allCss = Object.entries(type)
    .filter(([property, value]) => value !== undefined)
    .map(([property, value]) => {
      // Handle special cases or expressions
      if (property === 'padding') {
        var padding = "";
        let paddings = value;
         if( (paddings.top == undefined || paddings.top == "" ) || ( paddings.right == undefined || paddings.right == "" ) || ( paddings.bottom == undefined || paddings.bottom == "" ) || ( paddings.left == undefined || paddings.left == "" )){
            if((paddings.top !== undefined && paddings.top !== "" )){
                padding += `padding-top: ${paddings.top}${paddings.unit};`;
            } 
            if((paddings.right !== undefined && paddings.right !== "" )){
                padding += `padding-right: ${paddings.right}${paddings.unit};`;
            } 
            if((paddings.bottom !== undefined && paddings.bottom !== "" )){
                padding += `padding-bottom: ${paddings.bottom}${paddings.unit};`;
            } 
            if((paddings.left !== undefined && paddings.left !== "" )){
                padding += `padding-left: ${paddings.left}${paddings.unit};`;
            }
            return padding;
         }else if(paddings.top == undefined && paddings.right == undefined && paddings.bottom == undefined && paddings.left == undefined){
            return padding;
         } else{
            return `${property.trim()}: ${paddings.top}${paddings.unit} ${paddings.right}${paddings.unit} ${paddings.bottom}${paddings.unit} ${paddings.left}${paddings.unit};`;
         }
      } else if (property === 'margin') {
        var margin = "";
        let margins = value;
         if( (margins.top == undefined || margins.top == "" ) || ( margins.right == undefined || margins.right == "" ) || ( margins.bottom == undefined || margins.bottom == "" ) || ( margins.left == undefined || margins.left == "" )){
            if((margins.top !== undefined && margins.top !== "" )){
                margin += `margin-top: ${margins.top}${margins.unit};`;
            } 
            if((margins.right !== undefined && margins.right !== "" )){
                margin += `margin-right: ${margins.right}${margins.unit};`;
            } 
            if((margins.bottom !== undefined && margins.bottom !== "" )){
                margin += `margin-bottom: ${margins.bottom}${margins.unit};`;
            } 
            if((margins.left !== undefined && margins.left !== "" )){
                margin += `margin-left: ${margins.left}${margins.unit};`;
            }
            return margin;
         }else if(margins.top == undefined && margins.right == undefined && margins.bottom == undefined && margins.left == undefined){
            return margin;
         } else{
            return `${property.trim()}: ${margins.top}${margins.unit} ${margins.right}${margins.unit} ${margins.bottom}${margins.unit} ${margins.left}${margins.unit};`;
         }
      } else if (property === 'border-radius') {
        var borderRadius = "";
        let borderRadiuses = value;
         if( (borderRadiuses.top == undefined || borderRadiuses.top == "" ) || ( borderRadiuses.right == undefined || borderRadiuses.right == "" ) || ( borderRadiuses.bottom == undefined || borderRadiuses.bottom == "" ) || ( borderRadiuses.left == undefined || borderRadiuses.left == "" )){
            if(borderRadiuses.top !== undefined && borderRadiuses.top !== ""){
                borderRadius += `border-top-left-radius: ${borderRadiuses.top}${borderRadiuses.unit};`;
            } 
            if(borderRadiuses.right !== undefined && borderRadiuses.right !== ""){
                borderRadius += `border-top-right-radius: ${borderRadiuses.right}${borderRadiuses.unit};`;
            } 
            if(borderRadiuses.bottom !== undefined && borderRadiuses.bottom !== ""){
                borderRadius += `border-bottom-right-radius: ${borderRadiuses.bottom}${borderRadiuses.unit};`;
            } 
            if(borderRadiuses.left !== undefined && borderRadiuses.left !== ""){
                borderRadius += `border-bottom-left-radius: ${borderRadiuses.left}${borderRadiuses.unit};`;
            }
            return borderRadius;
         }else if((borderRadiuses.top == undefined || borderRadiuses.top == "" ) && ( borderRadiuses.right == undefined || borderRadiuses.right == "" ) && ( borderRadiuses.bottom == undefined || borderRadiuses.bottom == "" ) && ( borderRadiuses.left == undefined && borderRadiuses.left == "" )){
            return borderRadius;
         }else{ 
             return `${property.trim()}: ${borderRadiuses.top}${borderRadiuses.unit} ${borderRadiuses.right}${borderRadiuses.unit} ${borderRadiuses.bottom}${borderRadiuses.unit} ${borderRadiuses.left}${borderRadiuses.unit};`;
         }
      } else if (property === 'box-shadow') {
        var boxShadow = "";
        let boxShadowValues = value;
      
        if( ( boxShadowValues.color.color !== "" && boxShadowValues.color.color !== undefined && boxShadowValues.color.enable !== false ) && boxShadowValues.horizontal !== undefined && boxShadowValues.vertical !== undefined && boxShadowValues.blur !== undefined && boxShadowValues.spread !== undefined){
            return `${property.trim()}: ${boxShadowValues.color.color} ${boxShadowValues.horizontal}px ${boxShadowValues.vertical}px ${boxShadowValues.blur}px ${boxShadowValues.spread}px ${boxShadowValues.position !== undefined && boxShadowValues.position !== "" && boxShadowValues.position === 'inset' ? "inset" : ""};`;
        }else {
           return boxShadow;
        }
      } else if (property === 'typography') {
        var typography = "";
        let typographyValues = value;
        if(typographyValues.enable === true){
            if(typographyValues.fontSize.desktop.val !== undefined && typographyValues.fontSize.desktop.val !== "undefined" && typographyValues.fontSize.desktop.val !== " "){
                typography += `font-size: ${typographyValues.fontSize.desktop.val}${typographyValues.fontSize.desktop.unit};`;
            } 
            if(typographyValues.lineHeight.desktop.val !== undefined && typographyValues.lineHeight.desktop.val !== "undefined" && typographyValues.lineHeight.desktop.val !== " "){
                typography += `line-height: ${typographyValues.lineHeight.desktop.val}${typographyValues.lineHeight.desktop.unit};`;
            } 
            if(typographyValues.letterSpacing.desktop.val !== undefined && typographyValues.letterSpacing.desktop.val !== "undefined" && typographyValues.letterSpacing.desktop.val !== " "){
                typography += `letter-spacing: ${typographyValues.letterSpacing.desktop.val}${typographyValues.letterSpacing.desktop.unit};`;
            } 
            if(typographyValues.wordSpacing.desktop.val !== undefined && typographyValues.wordSpacing.desktop.val !== "undefined" && typographyValues.wordSpacing.desktop.val !== " "){
                typography += `word-spacing: ${typographyValues.wordSpacing.desktop.val}${typographyValues.wordSpacing.desktop.unit};`;
            } 
            if(typographyValues.fontDecoration !== undefined && typographyValues.fontDecoration !== ""){
                typography += `text-decoration: ${typographyValues.fontDecoration};`;
            } 
            if(typographyValues.fontFamily.value !== undefined && typographyValues.fontFamily.value !== ""){
                typography += `font-family: ${typographyValues.fontFamily.value};`;
            } 
            if(typographyValues.fontStyle !== undefined && typographyValues.fontStyle !== ""){
                typography += `font-style: ${typographyValues.fontStyle};`;
            } 
            if(typographyValues.fontTransform !== undefined && typographyValues.fontTransform !== ""){
                typography += `text-transform: ${typographyValues.fontTransform};`;
            }  
            if(typographyValues.fontWeight !== undefined && typographyValues.fontWeight !== ""){
                typography += `font-weight: ${typographyValues.fontWeight};`;
            } 
            return typography;
        }else{
            return typography;
        }
        return;
      } else if (property === 'border') {
        var border = "";
        let borderValues = value;
        if( (borderValues.type !== undefined && borderValues.type !== "" && borderValues.type !== "default" && borderValues.type !== "none")  ){
            if((borderValues.color.color !== undefined && borderValues.color.color !== "" && borderValues.type !== "none")){
                border += `border-color: ${borderValues.color.color};`;
            } 
            if(borderValues.type !== undefined && borderValues.type !== "" && borderValues.type !== "none"){
                border += `border-style: ${borderValues.type};`;
            } 
            if( ( (borderValues.width.desktop.top !== undefined && borderValues.width.desktop.top !== "" ) || ( borderValues.width.desktop.right !== undefined && borderValues.width.desktop.right !== "" ) || ( borderValues.width.desktop.bottom !== undefined && borderValues.width.desktop.bottom !== "" ) || ( borderValues.width.desktop.left !== undefined && borderValues.width.desktop.left !== "" ) ) && borderValues.type !== "none"){
                if(borderValues.width.desktop.top !== undefined && borderValues.width.desktop.top !== ""){
                    border += `border-top-width: ${borderValues.width.desktop.top}${borderValues.width.desktop.unit};`;
                } 
                if(borderValues.width.desktop.right !== undefined && borderValues.width.desktop.right !== ""){
                    border += `border-right-width: ${borderValues.width.desktop.right}${borderValues.width.desktop.unit};`;
                } 
                if(borderValues.width.desktop.bottom !== undefined && borderValues.width.desktop.bottom !== ""){
                    border += `border-bottom-width: ${borderValues.width.desktop.bottom}${borderValues.width.desktop.unit};`;
                } 
                if(borderValues.width.desktop.left !== undefined && borderValues.width.desktop.left !== ""){
                    border += `border-left-width: ${borderValues.width.desktop.left}${borderValues.width.desktop.unit};`;
                }
            } 
        
            return border;
        }else if( (borderValues.type !== undefined && borderValues.type !== "" && borderValues.type.trim() === "none")  ){ 
            border += `border: none;`;
            return border;
        }else if( (borderValues.type !== undefined && borderValues.type !== "" && borderValues.type === "default")  ){ 
            return border;
        }
        return;
      } else if (property === 'border-width') {
        var border = "";
        let borderValues = value;
        if( (borderValues.top !== undefined && borderValues.top !== "" ) || ( borderValues.right !== undefined && borderValues.right !== "" ) || ( borderValues.bottom !== undefined && borderValues.bottom !== "" ) || ( borderValues.left !== undefined && borderValues.left !== "" ) ){
            if(borderValues.top !== undefined && borderValues.top !== ""){
                border += `border-top-width: ${borderValues.top}${borderValues.unit};`;
            } 
            if(borderValues.right !== undefined && borderValues.right !== ""){
                border += `border-right-width: ${borderValues.right}${borderValues.unit};`;
            } 
            if(borderValues.bottom !== undefined && borderValues.bottom !== ""){
                border += `border-bottom-width: ${borderValues.bottom}${borderValues.unit};`;
            } 
            if(borderValues.left !== undefined && borderValues.left !== ""){
                border += `border-left-width: ${borderValues.left}${borderValues.unit};`;
            }
        } 
        return border;
      }else if(property === 'dual-color'){
        var dualColor = "";
        let dualColorValues = value;
        if(dualColorValues.colorOpt === 'color' && (dualColorValues.colorOne.color !== undefined && dualColorValues.colorOne.color !== "")){
            dualColor += `background-color: ${dualColorValues.colorOne.color} !important;`;
        } else if(dualColorValues.colorOpt === 'gradient') {
            if( dualColorValues.type === 'linear-gradient' && (dualColorValues.colorOne.color !== undefined && dualColorValues.colorOne.color !== "") && (dualColorValues.colorTwo.color !== undefined && dualColorValues.colorTwo.color !== "") ) {
                dualColor += `background-color: transparent !important; background-image: ${dualColorValues.type}(${dualColorValues.angle}deg, ${dualColorValues.colorOne.color} ${dualColorValues.locationOne}%, ${dualColorValues.colorTwo.color} ${dualColorValues.locationTwo}%) !important;`;
            } else if( dualColorValues.type === 'radial-gradient' && (dualColorValues.colorOne.color !== undefined && dualColorValues.colorOne.color !== "") && (dualColorValues.colorTwo.color !== undefined && dualColorValues.colorTwo.color !== "") ) {
                dualColor += `background-color: transparent !important; background-image: ${dualColorValues.type}(at ${dualColorValues.position}, ${dualColorValues.colorOne.color} ${dualColorValues.locationOne}%, ${dualColorValues.colorTwo.color} ${dualColorValues.locationTwo}%) !important;`;
            }
        }
        return dualColor;
      }else if(property === 'background'){
        var backColor = "";
        let backColorValues = value;
        if(backColorValues.enable === true && (backColorValues.color !== undefined && backColorValues.color !== "")){
            backColor += `background-color: ${backColorValues.color};`;
        }
        return backColor;
      }else if(property === 'color'){
        var color = "";
        let colorValues = value;
        if(colorValues.enable === true && (colorValues.color !== undefined && colorValues.color !== "")){
            color += `color: ${colorValues.color};`;
        }
        return color;
      }
      if(value !== "undefined" && value !== undefined && value !== "undefinedpx" && value !== "undefinedundefined" && (typeof value === "string"  ? !value.includes("undefined")  : true) ){
        return `${property.trim()}: ${value};`;
      } else { 
        return;
      }
    })
    .join(' ');
    
    // console.log("selector is :" + selector + "  ==> " + (allCss));
    if((allCss !== undefined && allCss.trim() !== "" )){
        var cssString = `${selector} { ${allCss} }`;
    }else{ 
        var cssString = "";
    }
    // console.log(cssString);
    return cssString;
  };

export function OpenSidebar() {
    // Get the current editor settings
    const editorSettings = select('core/editor').getEditorSettings();

    // Check if the sidebar is already open and the "Block" section tab is active
    const isSidebarOpen = editorSettings.isEditorSidebarOpened;
    const currentTab = editorSettings.activeGeneralSidebarName;

    // If the sidebar is not open or the active tab is not the "Block" section, open it
    if (!isSidebarOpen || currentTab !== 'edit-post/block') {
        dispatch('core/edit-post').openGeneralSidebar('edit-post/block');
    }
}