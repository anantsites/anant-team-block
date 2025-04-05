import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import {  useBlockProps, RichText  } from '@wordpress/block-editor';
import { Fragment } from "@wordpress/element";
import Inspector from './inspector';
import attributes from "./attributes";
import { Style } from './style.js';
import { OpenSidebar } from '/src/components/compileStyle.js'; 

registerBlockType( 'atm/team', {
title: 'Team Member',
description: 'Team Block Desc.',
category: 'anant-team-member',
supports: {
  align: true,
  align: [ 'left', 'right', 'full' ]
},
icon: "groups",
keywords: [
  __( 'Team Block' ),
  __( 'Members' ), 
  __( 'group' ), 
  __( 'chefs' ), 
  __( 'team' )
],
attributes,
example: {
  preview: true
},

edit: (props) => {
  const { attributes, className, clientId, setAttributes } = props;
  const { yourId, info = [] } = attributes;
  setAttributes({ yourId: clientId });
  const onChangeTitle = ( value ) => {
    setAttributes( { title: value } );
  };
  const onChangeDesignation = ( value ) => {
    setAttributes( { designation: value } );
  };
  const infoList = (value) => {
      const repeatLimit = 4; // Set the repeat limit to 4
      const itemsToRender = value.sort((a, b) => a.index - b.index).slice(0, repeatLimit); // Slice the array to get only the first 4 items

      return (
          itemsToRender.map((infoItem, index) => (
              <Fragment key={index}>
                  <a href={`${infoItem.link}`} target={infoItem.checkNewTab && "_blank"} rel={infoItem.checkNewTab && 'noopener noreferrer'}>
                      <i className={`${infoItem.clsName}`}></i>
                  </a>
              </Fragment>
          ))
      );
  }
  return(
    <Fragment >
      <Style { ...props } />
      <Inspector { ...props } />
      <div className={`atm-block-container-${attributes.yourId} ${ attributes.hideDesktop ? 'hidden-desktop' : '' } ${ attributes.hideTablet ? 'hidden-tablet' : '' } ${ attributes.hideMobile ? 'hidden-mobile' : '' }`}>
      <div className={`atm-team-member team-member-wapper-${attributes.yourId}`} onClick={OpenSidebar} >
        <div className="inner">
          { attributes.showImage === true && 
            <>
              <div className="atm-team-card-image">  
              { attributes.image && 
                <img className="atm-member-img" src={ attributes.image } alt={ attributes.alt } />
              }
              </div>
            </>
          }
          { ( attributes.showName === true || attributes.showDesignation === true || attributes.showicons === true ) && 
            <>
              <div className="atm-bottom-content">
                <div className="heading">
                    { attributes.showName === true && 
                      <>
                        <RichText
                          tagName={ attributes.teamTitleTagName }
                          value={ attributes.title }
                          onChange={ onChangeTitle }
                          className="title"
                          />
                      </>
                    }
                    { attributes.showDesignation === true && 
                      <>
                        <RichText
                          tagName="p"
                          value={ attributes.designation }
                          onChange={ onChangeDesignation }
                          className="designation"
                          />
                      </>
                    }
                </div>
                <div className="overlay">
                    { attributes.showicons === true && 
                      <>
                        <div className="social-icon">
                          {infoList(info)}
                        </div>
                      </>
                    }
                </div>              
              </div>
            </>
          }
        </div>
      </div>
      </div>
    </Fragment>
)
},
save: ( props ) => {
  const { attributes,} = props;
  const { info = [], } = attributes;

  const displayInfoList = (value) => {
    const repeatLimit = 4; // Set the repeat limit to 4
    const itemsToRender = value.sort((a, b) => a.index - b.index).slice(0, repeatLimit); // Slice the array to get only the first 4 items

    return (
        itemsToRender.map((infoItem, index) => (
            <Fragment key={index}>
                <a href={`${infoItem.link}`} target={infoItem.checkNewTab && "_blank"} rel={infoItem.checkNewTab && 'noopener noreferrer'}>
                    <i className={`${infoItem.clsName}`}></i>
                </a>
            </Fragment>
        ))
    );
  }
  return(
    <Fragment {...useBlockProps.save()}>
      <Style { ...props } />
      <div className={`atm-block-container-${attributes.yourId} ${ attributes.hideDesktop ? 'hidden-desktop' : '' } ${ attributes.hideTablet ? 'hidden-tablet' : '' } ${ attributes.hideMobile ? 'hidden-mobile' : '' }`}>
        <div className={`atm-team-member team-member-wapper-${attributes.yourId}`}>
          <div className="inner">
            { attributes.showImage === true && 
              <>
                <div className="atm-team-card-image">  
                { attributes.image && 
                  <img className="atm-member-img" src={ attributes.image } alt={ attributes.alt } />
                }
                </div>
              </>
            }
            { ( attributes.showName === true || attributes.showDesignation === true || attributes.showicons === true ) && 
              <>
                <div className="atm-bottom-content">
                  <div className="heading">
                    { attributes.showName === true && 
                      <>
                        <RichText.Content
                          tagName={ attributes.teamTitleTagName }
                          value={ attributes.title }
                          className="title"
                          />
                      </>
                    }
                    { attributes.showDesignation === true && 
                      <>
                        <RichText.Content
                          tagName="p"
                          value={ attributes.designation }
                          className="designation"
                          />
                      </>
                    }
                  </div> 
                  <div className="overlay">
                    { attributes.showicons === true && 
                      <>
                        <div className="social-icon">
                          {displayInfoList(info)}
                        </div>
                      </>
                    }
                  </div>              
                </div>
              </>
            }
          </div>
        </div>
      </div>
    </Fragment>
  );
},
});