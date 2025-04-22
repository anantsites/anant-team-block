
const attributes = {
  yourId: {
    type: 'string',
  },
  image: {
    type: "string",
    source: "attribute",
    selector: ".antm-member-img",
    attribute: "src",
    default: js_data.placeholder_url
  },
  alt: {
    type: "string",
    source: "attribute",
    selector: ".antm-member-img",
    attribute: "alt",
  },
  title: { 
    type: 'string', 
    source: 'html', 
    selector: '.title',
    default: 'john due'
  },
  designation: { 
    type: 'string', 
    source: 'html', 
    selector: '.designation',
    default: 'Founder & CEO'
  },
  showImage: {
    type: "boolean",
    default: true,
  },
  showName: {
    type: "boolean",
    default: true,
  },
  showDesignation: {
    type: "boolean",
    default: true,
  },
  showicons: {
    type: "boolean",
    default: true,
  },
  hideDesktop:{
    type: 'boolean',
    default: false,
  },
  hideTablet:{
      type: 'boolean',
      default: false,
  },
  hideMobile:{
      type: 'boolean',
      default: false,
  },
  info: {
    type: 'array',
    selector: '.social-icon',
    default: [ {
        index: 0,
        title: "Facebook",
        clsName: "fab fa-facebook-f",
        link: "https://www.facebook.com/",
        checkNewTab: false
      },
      {
        index: 1,
        title: "Twitter",
        clsName: "fab fa-twitter",
        link: "https://www.twitter.com/",
        checkNewTab: false
      },
      {
        index: 2,
        title: "Instagram",
        clsName: "fab fa-instagram",
        link: "https://www.instagram.com/",
        checkNewTab: false
      },
      {
        index: 3,
        title: "Linkedin",
        clsName: "fab fa-linkedin",
        link: "https://www.linkedin.com/",
        checkNewTab: false
      }
    ],
  },
  
  teamBoxBgColor: {
    default: {
      enable: false,
      color: "",
    },
    type: 'object',
  },
  teamBoxBgHoverColor: {
    default: {
      enable: false,
      color: "",
    },
    type: 'object',
  },
  teamBoxBorderType: {
    default: {
      type: "default",
      width: {
        desktop: {
          top: '',
          left: '',
          right: '',
          bottom: '',
        link: true,
        unit: "px",
        },
        tablet: {
          top: '',
          left: '',
          right: '',
          bottom: '',
        link: true,
        unit: "px",
        },
        mobile: {
          top: '',
          left: '',
          right: '',
          bottom: '',
        link: true,
        unit: "px",
        },
        resOption: "Desktop",
      },
      color:  {
        enable: false,
        color: "",
      },
    },
    type: 'object',
  },
  teamBoxHoverBorderType: {
    default: {
      type: "default",
      width: {
        desktop: {
          top: '',
          left: '',
          right: '',
          bottom: '',
        link: true,
        unit: "px",
        },
        tablet: {
          top: '',
          left: '',
          right: '',
          bottom: '',
        link: true,
        unit: "px",
        },
        mobile: {
          top: '',
          left: '',
          right: '',
          bottom: '',
        link: true,
        unit: "px",
        },
        resOption: "Desktop",
      },
      color:  {
        enable: false,
        color: "",
      },
    },
    type: 'object',
  },
  teamBoxBorderRadius: {
    type: 'object',
    default: {
      desktop: {
        top: '',
        left: '',
        right: '',
        bottom: '',
        link: true,
        unit: "px",
      },
      tablet: {
        top: '',
        left: '',
        right: '',
        bottom: '',
        link: true,
        unit: "px",
      },
      mobile: {
        top: '',
        left: '',
        right: '',
        bottom: '',
        link: true,
        unit: "px",
      },
      resOption: "Desktop",
    },
  },
  teamBoxHoverBorderRadius: {
    type: 'object',
    default: {
      desktop: {
        top: '',
        left: '',
        right: '',
        bottom: '',
        link: true,
        unit: "px",
      },
      tablet: {
        top: '',
        left: '',
        right: '',
        bottom: '',
        link: true,
        unit: "px",
      },
      mobile: {
        top: '',
        left: '',
        right: '',
        bottom: '',
        link: true,
        unit: "px",
      },
      resOption: "Desktop",
    },
  },
  teamBoxPadding: {
    type: 'object',
    default: {
      desktop: {
        top: '',
        left: '',
        right: '',
        bottom: '',
        link: true,
        unit: "px",
      },
      tablet: {
        top: '',
        left: '',
        right: '',
        bottom: '',
        link: true,
        unit: "px",
      },
      mobile: {
        top: '',
        left: '',
        right: '',
        bottom: '',
        link: true,
        unit: "px",
      },
      resOption: "Desktop",
    },
  },
  teamBoxHoverPadding: {
    type: 'object',
    default: {
      desktop: {
        top: '',
        left: '',
        right: '',
        bottom: '',
        link: true,
        unit: "px",
      },
      tablet: {
        top: '',
        left: '',
        right: '',
        bottom: '',
        link: true,
        unit: "px",
      },
      mobile: {
        top: '',
        left: '',
        right: '',
        bottom: '',
        link: true,
        unit: "px",
      },
      resOption: "Desktop",
    },
  },
  teamBoxMargin: {
    type: 'object',
    default: {
      desktop: {
        top: '',
        left: '',
        right: '',
        bottom: '',
        link: true,
        unit: "px",
      },
      tablet: {
        top: '',
        left: '',
        right: '',
        bottom: '',
        link: true,
        unit: "px",
      },
      mobile: {
        top: '',
        left: '',
        right: '',
        bottom: '',
        link: true,
        unit: "px",
      },
      resOption: "Desktop",
    },
  },
  teamBoxHoverMargin: {
    type: 'object',
    default: {
      desktop: {
        top: '',
        left: '',
        right: '',
        bottom: '',
        link: true,
        unit: "px",
      },
      tablet: {
        top: '',
        left: '',
        right: '',
        bottom: '',
        link: true,
        unit: "px",
      },
      mobile: {
        top: '',
        left: '',
        right: '',
        bottom: '',
        link: true,
        unit: "px",
      },
      resOption: "Desktop",
    },
  },
  teamBoxShadow: {
    default: {
      color: {
        enable: false,
        color: "",
      },
      horizontal: undefined,
      vertical: undefined,
      blur: undefined,
      spread: undefined,
      position: '',
      enable: false,
    },
    type: 'object',
  },
  teamBoxHoverShadow: {
    default: {
      color: {
        enable: false,
        color: "",
      },
      horizontal: undefined,
      vertical: undefined,
      blur: undefined,
      spread: undefined,
      position: '',
      enable: false,
    },
    type: 'object',
  },
  teamImageWidth: {
    default: {
      desktop: {
          val: undefined,
          unit: "px"
      },
      tablet:  {
          val: undefined,
          unit: "px"
      },
      mobile: {
          val: undefined,
          unit: "px"
      },
      resOption: "Desktop",
    },
    type: 'object',
  },
  teamImageHeight: {
    default: {
      desktop: {
          val: undefined,
          unit: "px"
      },
      tablet:  {
          val: undefined,
          unit: "px"
      },
      mobile: {
          val: undefined,
          unit: "px"
      },
      resOption: "Desktop",
    },
    type: 'object',
  },
  teamImageBorderType: {
    default: {
      type: "default",
      width: {
        desktop: {
          top: '',
          left: '',
          right: '',
          bottom: '',
        link: true,
        unit: "px",
        },
        tablet: {
          top: '',
          left: '',
          right: '',
          bottom: '',
        link: true,
        unit: "px",
        },
        mobile: {
          top: '',
          left: '',
          right: '',
          bottom: '',
        link: true,
        unit: "px",
        },
        resOption: "Desktop",
      },
      color:  {
        enable: false,
        color: "",
      },
    },
    type: 'object',
  },
  teamImageBorderRadius: {
    type: 'object',
    default: {
      desktop: {
        top: '',
        left: '',
        right: '',
        bottom: '',
        link: true,
        unit: "px",
      },
      tablet: {
        top: '',
        left: '',
        right: '',
        bottom: '',
        link: true,
        unit: "px",
      },
      mobile: {
        top: '',
        left: '',
        right: '',
        bottom: '',
        link: true,
        unit: "px",
      },
      resOption: "Desktop",
    },
  },
  teamImageMargin: {
    type: 'object',
    default: {
      desktop: {
        top: '',
        left: '',
        right: '',
        bottom: '',
        link: true,
        unit: "px",
      },
      tablet: {
        top: '',
        left: '',
        right: '',
        bottom: '',
        link: true,
        unit: "px",
      },
      mobile: {
        top: '',
        left: '',
        right: '',
        bottom: '',
        link: true,
        unit: "px",
      },
      resOption: "Desktop",
    },
  },
  teamImageShadow: {
    default: {
      color: {
        enable: false,
        color: "",
      },
      horizontal: undefined,
      vertical: undefined,
      blur: undefined,
      spread: undefined,
      position: '',
      enable: false,
    },
    type: 'object',
  },
  teamTitleAlignment: {
    default: {
      desktop: '',
      tablet: '',
      mobile: '',
    },
    type: "object"
  }, 
  teamTitleTagName: {
    type: 'string',
    default: 'h3',
    selector: '.title',
  },
  teamTitleColor: {
    default: {
      enable: false,
      color: "",
    },
    type: 'object'
  },
  teamTitleHoverColor: {
    default: {
      enable: false,
      color: "",
    },
    type: 'object'
  },
  teamTitleTypography: {
    default: {
      fontSize: {
        desktop: {
            val: undefined,
            unit: "px"
        },
        tablet:  {
            val: undefined,
            unit: "px"
        },
        mobile: {
            val: undefined,
            unit: "px"
        }
      },
      letterSpacing:{
        desktop: {
            val: undefined,
            unit: "px"
        },
        tablet:  {
            val: undefined,
            unit: "px"
        },
        mobile: {
            val: undefined,
            unit: "px"
        }
      },
      wordSpacing:{
        desktop: {
            val: undefined,
            unit: "px"
        },
        tablet:  {
            val: undefined,
            unit: "px"
        },
        mobile: {
            val: undefined,
            unit: "px"
        }
      },
      lineHeight: {
        desktop: {
            val: undefined,
            unit: "px"
        },
        tablet:  {
            val: undefined,
            unit: "px"
        },
        mobile: {
            val: undefined,
            unit: "px"
        }
      },
      enable: false,
      fontFamily: "",
      fontWeight: "",
      fontStyle: "normal",
      fontTransform: "none",
      fontDecoration: "none",
    },
    type: 'object',
  },
  teamTitleMargin: {
    type: 'object',
    default: {
      desktop: {
        top: '30',
        left: '0',
        right: '0',
        bottom: '15',
        link: false,
        unit: "px",
      },
      tablet: {
        top: '30',
        left: '0',
        right: '0',
        bottom: '15',
        link: false,
        unit: "px",
      },
      mobile: {
        top: '30',
        left: '0',
        right: '0',
        bottom: '15',
        link: false,
        unit: "px",
      },
      resOption: "Desktop",
    },
  },
  teamDesignationAlignment: {
    default: {
      desktop: '',
      tablet: '',
      mobile: '',
    },
    type: "object"
  }, 
  teamDesignationColor: {
    default: {
      enable: false,
      color: "",
    },
    type: 'object'
  },
  teamDesignationHoverColor: {
    default: {
      enable: false,
      color: "",
    },
    type: 'object'
  },
  teamDesignationTypography: {
    default: {
      fontSize: {
        desktop: {
            val: undefined,
            unit: "px"
        },
        tablet:  {
            val: undefined,
            unit: "px"
        },
        mobile: {
            val: undefined,
            unit: "px"
        }
      },
      letterSpacing:{
        desktop: {
            val: undefined,
            unit: "px"
        },
        tablet:  {
            val: undefined,
            unit: "px"
        },
        mobile: {
            val: undefined,
            unit: "px"
        }
      },
      wordSpacing:{
        desktop: {
            val: undefined,
            unit: "px"
        },
        tablet:  {
            val: undefined,
            unit: "px"
        },
        mobile: {
            val: undefined,
            unit: "px"
        }
      },
      lineHeight: {
        desktop: {
            val: undefined,
            unit: "px"
        },
        tablet:  {
            val: undefined,
            unit: "px"
        },
        mobile: {
            val: undefined,
            unit: "px"
        }
      },
      enable: false,
      fontFamily: "",
      fontWeight: "",
      fontStyle: "normal",
      fontTransform: "none",
      fontDecoration: "none",
    },
    type: 'object',
  },
  teamDesignationMargin: {
    type: 'object',
    default: {
      desktop: {
        top: '0',
        left: '0',
        right: '0',
        bottom: '20',
        link: false,
        unit: "px",
      },
      tablet: {
        top: '0',
        left: '0',
        right: '0',
        bottom: '20',
        link: false,
        unit: "px",
      },
      mobile: {
        top: '0',
        left: '0',
        right: '0',
        bottom: '20',
        link: false,
        unit: "px",
      },
      resOption: "Desktop",
    },
  },
  teamSocialIconAlignment: {
    default: {
      desktop: undefined,
      tablet:  undefined,
      mobile: undefined,
    },
    type: 'object',
  },
  teamSocialIconBgColor: {
    default: {
      enable: false,
      color: "",
    },
    type: 'object',
  },
  teamSocialIconHoverBgColor: {
    default: {
      enable: false,
      color: "",
    },
    type: 'object',
  },
  teamSocialIconColor:{
    default: {
      enable: false,
      color: "",
    },
    type: 'object',
  },
  teamSocialIconHoverColor:{
    default: {
      enable: false,
      color: "",
    },
    type: 'object',
  },
  teamSocialIconWidth: {
    default: {
      desktop: {
          val: undefined,
          unit: "px"
      },
      tablet:  {
          val: undefined,
          unit: "px"
      },
      mobile: {
          val: undefined,
          unit: "px"
      },
    },
    type: 'object',
  },
  teamSocialIconSize: {
    default: {
      desktop: {
          val: undefined,
          unit: "px"
      },
      tablet:  {
          val: undefined,
          unit: "px"
      },
      mobile: {
          val: undefined,
          unit: "px"
      },
    },
    type: 'object',
  },
  teamSocialIconBorderType: {
    default: {
      type: "default",
      width: {
        desktop: {
          top: '',
          left: '',
          right: '',
          bottom: '',
        link: true,
        unit: "px",
        },
        tablet: {
          top: '',
          left: '',
          right: '',
          bottom: '',
        link: true,
        unit: "px",
        },
        mobile: {
          top: '',
          left: '',
          right: '',
          bottom: '',
        link: true,
        unit: "px",
        },
        resOption: "Desktop",
      },
      color:  {
        enable: false,
        color: "",
      },
    },
    type: 'object',
  },
  teamSocialIconHoverBorderType: {
    default: {
      type: "default",
      width: {
        desktop: {
          top: '',
          left: '',
          right: '',
          bottom: '',
        link: true,
        unit: "px",
        },
        tablet: {
          top: '',
          left: '',
          right: '',
          bottom: '',
        link: true,
        unit: "px",
        },
        mobile: {
          top: '',
          left: '',
          right: '',
          bottom: '',
        link: true,
        unit: "px",
        },
        resOption: "Desktop",
      },
      color:  {
        enable: false,
        color: "",
      },
    },
    type: 'object',
  },
  teamSocialIconBorderRadius: {
    type: 'object',
    default: {
      desktop: {
        top: '',
        left: '',
        right: '',
        bottom: '',
        link: true,
        unit: "px",
      },
      tablet: {
        top: '',
        left: '',
        right: '',
        bottom: '',
        link: true,
        unit: "px",
      },
      mobile: {
        top: '',
        left: '',
        right: '',
        bottom: '',
        link: true,
        unit: "px",
      },
      resOption: "Desktop",
    },
  },
  teamSocialIconHoverBorderRadius: {
    type: 'object',
    default: {
      desktop: {
        top: '',
        left: '',
        right: '',
        bottom: '',
        link: true,
        unit: "px",
      },
      tablet: {
        top: '',
        left: '',
        right: '',
        bottom: '',
        link: true,
        unit: "px",
      },
      mobile: {
        top: '',
        left: '',
        right: '',
        bottom: '',
        link: true,
        unit: "px",
      },
      resOption: "Desktop",
    },
  },
  teamSocialIconMargin: {
    type: 'object',
    default: {
      desktop: {
        top: '',
        left: '',
        right: '',
        bottom: '',
        link: true,
        unit: "px",
      },
      tablet: {
        top: '',
        left: '',
        right: '',
        bottom: '',
        link: true,
        unit: "px",
      },
      mobile: {
        top: '',
        left: '',
        right: '',
        bottom: '',
        link: true,
        unit: "px",
      },
      resOption: "Desktop",
    },
  },
};

export default attributes;