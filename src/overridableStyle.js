export const overridablePropertiesOrder = [
  ["sliderBg", "sliderConnectBg", "sliderConnectBgDisabled"],
  ["sliderHeight", "sliderRadius"],
  [
    "handleBg",
    "handleBorder",
    "handleWidth",
    "handleHeight",
    "handleRadius",
    "handleShadow",
    "handleShadowActive",
    "handleRingWidth",
    "handleRingColor",
  ],
  [
    "tooltipFontSize",
    "tooltipColor",
    "tooltipBgColor",
    "tooltipBgColorDisabled",
    "tooltipRadius",
    "tooltipHeight",
    "tooltipWidth",
    "tooltipArroySize",
    "tooltipDistance",
  ],
  ["fontSize", "fontFamily", "fontWeight", "lineHeight"],
];

export const overridableStyle = {
  sliderBg: {
    label: { en: "Slider background", fr: "Slider background" },
    type: "Color",
    defaultValue: "#D1D5DB",
  },
  sliderConnectBg: {
    label: { en: "Slider connect background", fr: "Slider connect background" },
    type: "Color",
    defaultValue: "#10B981",
  },
  sliderConnectBgDisabled: {
    label: {
      en: "Slider connect background - disabled",
      fr: "Slider connect background - disabled",
    },
    type: "Color",
    defaultValue: "#9CA3AF",
  },
  sliderHeight: {
    type: "Length",
    label: {
      en: "Slider height",
      fr: "Slider height",
    },
    options: {
      unitChoices: [{ value: "px", label: "px", min: 1, max: 1000 }],
    },
    defaultValue: "6px",
  },
  sliderRadius: {
    type: "Length",
    label: {
      en: "Slider radius",
      fr: "Slider radius",
    },
    options: {
      unitChoices: [{ value: "px", label: "px", min: 1, max: 9999 }],
    },
    defaultValue: "100px",
  },
  handleBg: {
    label: { en: "Handle background", fr: "Handle background" },
    type: "Color",
    defaultValue: "#FFFFFF",
  },
  handleBorder: {
    type: "Number",
    label: {
      en: "Handle border",
      fr: "Handle border",
    },
    defaultValue: 0,
  },
  handleWidth: {
    type: "Length",
    label: {
      en: "Handle width",
      fr: "Handle width",
    },
    options: {
      unitChoices: [{ value: "px", label: "px", min: 1, max: 100 }],
    },
    defaultValue: "16px",
  },
  handleHeight: {
    type: "Length",
    label: {
      en: "Handle height",
      fr: "Handle height",
    },
    options: {
      unitChoices: [{ value: "px", label: "px", min: 1, max: 100 }],
    },
    defaultValue: "16px",
  },
  handleRadius: {
    type: "Length",
    label: {
      en: "Handle radius",
      fr: "Handle radius",
    },
    options: {
      unitChoices: [{ value: "px", label: "px", min: 1, max: 9999 }],
    },
    defaultValue: "100px",
  },
  handleShadow: {
    type: "Shadows",
    label: {
      en: "Handle shadow",
      fr: "Handle shadow",
    },
    options: {
      isText: true,
    },
    defaultValue: "0.5px 0.5px 2px 1px rgba(0,0,0,.32)",
  },
  handleShadowActive: {
    type: "Shadows",
    label: {
      en: "Handle shadow active",
      fr: "Handle shadow active",
    },
    options: {
      isText: true,
    },
    defaultValue: "0.5px 0.5px 2px 1px rgba(0,0,0,.42)",
  },
  handleRingWidth: {
    type: "Length",
    label: {
      en: "Handle ring width",
      fr: "Handle ring width",
    },
    options: {
      unitChoices: [{ value: "px", label: "px", min: 1, max: 100 }],
    },
    defaultValue: "3px",
  },
  handleRingColor: {
    label: { en: "Handle ring color", fr: "Handle ring color" },
    type: "Color",
    defaultValue: "#10B98130",
  },
  tooltipColor: {
    hidden: (content) => !content.isTooltip,
    label: { en: "Tooltip color", fr: "Tooltip color" },
    type: "Color",
    defaultValue: "#FFFFFF",
  },
  tooltipBgColor: {
    hidden: (content) => !content.isTooltip,
    label: { en: "Tooltip background color", fr: "Tooltip background color" },
    type: "Color",
    defaultValue: "#10B981",
  },
  tooltipBgColorDisabled: {
    hidden: (content) => !content.isTooltip,
    label: {
      en: "Tooltip background disabled",
      fr: "Tooltip background disabled",
    },
    type: "Color",
    defaultValue: "#9CA3AF",
  },
  tooltipRadius: {
    hidden: (content) => !content.isTooltip,
    type: "Length",
    label: {
      en: "Tooltip radius",
      fr: "Tooltip radius",
    },
    options: {
      unitChoices: [{ value: "px", label: "px", min: 1, max: 100 }],
    },
    defaultValue: "5px",
  },
  tooltipHeight: {
    hidden: (content) => !content.isTooltip,
    type: "Length",
    label: {
      en: "Tooltip height",
      fr: "Tooltip height",
    },
    options: {
      unitChoices: [{ value: "px", label: "px", min: 1, max: 100 }],
    },
    defaultValue: "2px",
  },
  tooltipWidth: {
    hidden: (content) => !content.isTooltip,
    type: "Length",
    label: {
      en: "Tooltip width",
      fr: "Tooltip width",
    },
    options: {
      unitChoices: [{ value: "px", label: "px", min: 1, max: 100 }],
    },
    defaultValue: "6px",
  },
  tooltipArroySize: {
    hidden: (content) => !content.isTooltip,
    type: "Length",
    label: {
      en: "Tooltip arrow size",
      fr: "Tooltip arrow size",
    },
    options: {
      unitChoices: [{ value: "px", label: "px", min: 1, max: 100 }],
    },
    defaultValue: "5px",
  },
  tooltipDistance: {
    hidden: (content) => !content.isTooltip,
    type: "Length",
    label: {
      en: "Tooltip distance",
      fr: "Tooltip distance",
    },
    options: {
      unitChoices: [{ value: "px", label: "px", min: 1, max: 100 }],
    },
    defaultValue: "3px",
  },
  fontSize: {
    hidden: (content) => !content.isTooltip,
    label: {
      en: "Tooltip front size",
      fr: "Taille",
    },
    type: "Length",
    options: {
      unitChoices: [
        { value: "px", label: "px", min: 1, max: 100 },
        { value: "em", label: "em", min: 1, max: 10, digits: 2 },
        { value: "rem", label: "rem", min: 1, max: 10, digits: 2 },
      ],
    },
    responsive: true,
    states: true,
    defaultValue: "16px",
  },
  fontFamily: {
    hidden: (content) => !content.isTooltip,
    label: {
      en: "Tooltip font family",
      fr: "Font",
    },
    type: "FontFamily",
    responsive: true,
    states: true,
  },
  fontWeight: {
    hidden: (content) => !content.isTooltip,
    label: {
      en: "Tooltip font weight",
      fr: "Graisse",
    },
    type: "TextSelect",
    options: {
      options: [
        {
          value: null,
          label: { en: "Default", fr: "Par défaut" },
          default: true,
        },
        { value: 100, label: { en: "100 - Thin" } },
        { value: 200, label: { en: "200 - Extra Light" } },
        { value: 300, label: { en: "300 - Light" } },
        { value: 400, label: { en: "400 - Normal" } },
        { value: 500, label: { en: "500 - Medium" } },
        { value: 600, label: { en: "600 - Semi Bold" } },
        { value: 700, label: { en: "700 - Bold" } },
        { value: 800, label: { en: "800 - Extra Bold" } },
        { value: 900, label: { en: "900 - Black" } },
      ],
    },
    defaultValue: 600,
    responsive: true,
    states: true,
  },
  lineHeight: {
    hidden: (content) => !content.isTooltip,
    label: {
      en: "Tolltip line height",
      fr: "Hauteur de ligne",
    },
    type: "Length",
    options: {
      unitChoices: [
        { value: "normal", label: "auto", default: true },
        { value: "px", label: "px", min: 0, max: 100 },
        { value: "%", label: "%", min: 0, max: 100 },
        { value: "em", label: "em", min: 0, max: 10, digits: 2 },
        { value: "rem", label: "rem", min: 0, max: 10, digits: 2 },
        { value: "unset", label: "none" },
      ],
    },
    responsive: true,
    states: true,
  },
};
