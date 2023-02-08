<template>
  <div
    class="ww-form-input-range-double"
    :class="{ editing: isEditing }"
    :style="globalOverridableSliderStyle"
  >
    <div class="spacing">
      <Slider
        class="slider"
        v-model="value"
        :min="content.min"
        :max="content.max"
        :step="content.step"
        :tooltips="content.isTooltip"
        :show-tooltip="content.showTooltipOn"
        :tooltip-position="content.tooltipPosition"
        :disabled="content.disabled"
        :merge="25"
        :format="{
          prefix: content.prefix,
          suffix: content.suffix,
        }"
        :style="overridableSliderStyle"
      >
      </Slider>
    </div>
  </div>
</template>

<script>
import Slider from "@vueform/slider";

export default {
  components: { Slider },
  props: {
    content: { type: Object, required: true },
    /* wwEditor:start */
    wwEditorState: { type: Object, required: true },
    /* wwEditor:end */
    uid: { type: String, required: true },
    wwElementState: { type: Object, required: true },
  },
  emits: ["trigger-event"],
  setup(props) {
    const { value: variableValue, setValue } =
      wwLib.wwVariable.useComponentVariable({
        uid: props.uid,
        name: "value",
        type: "array",
        defaultValue:
          props.content.value === undefined ? [15, 65] : props.content.value,
      });

    return { variableValue, setValue };
  },
  computed: {
    isEditing() {
      /* wwEditor:start */
      return (
        this.wwEditorState.editMode === wwLib.wwEditorHelper.EDIT_MODES.EDITION
      );
      /* wwEditor:end */
      // eslint-disable-next-line no-unreachable
      return false;
    },
    value: {
      get() {
        return [
          parseFloat(this.variableValue[0]) || 0,
          parseFloat(this.variableValue[1]) || 0,
        ];
      },
      set(newValue) {
        if (_.isEqual(newValue, this.value)) return;
        this.setValue(newValue);
        this.$emit("trigger-event", {
          name: "change",
          event: { value: newValue },
        });
      },
    },
    handleBorder() {
      return `${this.content.handleBorderWidth} solid ${this.content.handleBorderColor}`;
    },
    globalOverridableSliderStyle() {
      return {
        "--slider-tooltip-font-family": this.content.fontFamily,
      };
    },
    overridableSliderStyle() {
      /* OVERRIDABLE PROPERTIES LIST */
      // https://github.com/vueform/slider#styling-with-css-vars

      return {
        // Slider general
        "--slider-bg": this.content.sliderBg,
        "--slider-connect-bg": this.content.sliderConnectBg,
        "--slider-connect-bg-disabled": this.content.sliderConnectBgDisabled,
        "--slider-height": this.content.sliderHeight,
        "--slider-radius": this.content.sliderRadius,

        // Slider handle
        "--slider-handle-bg": this.content.handleBg,
        "--slider-handle-border": this.handleBorder,
        "--slider-handle-width": this.content.handleWidth,
        "--slider-handle-height": this.content.handleHeight,
        "--slider-handle-radius": this.content.handleRadius,
        "--slider-handle-shadow": this.content.handleShadow,
        "--slider-handle-shadow-active": this.content.handleShadowActive,
        "--slider-handle-ring-width": this.content.handleRingWidth,
        "--slider-handle-ring-color": this.content.handleRingColor,

        // Slider font tooltip
        "--slider-tooltip-font-size": this.content.fontSize,
        "--slider-tooltip-line-height": this.content.lineHeight,
        "--slider-tooltip-font-weight": this.content.fontWeight,

        // Slider tooltip
        "--slider-tooltip-color": this.content.tooltipColor,
        "--slider-tooltip-bg": this.content.tooltipBgColor,
        "--slider-tooltip-bg-disabled": this.content.tooltipBgColorDisabled,
        "--slider-tooltip-radius": this.content.tooltipRadius,
        "--slider-tooltip-py": this.content.tooltipHeight,
        "--slider-tooltip-px": this.content.tooltipWidth,
        "--slider-tooltip-arrow-size": this.content.tooltipArroySize,
        "--slider-tooltip-distance": this.content.tooltipDistance,
      };
    },
  },
  watch: {
    "content.initValueFrom"(newValue) {
      newValue = parseFloat(newValue);
      if (isNaN(newValue)) newValue = 0;
      if (newValue === this.value.from) return;
      this.value = [newValue, this.variableValue[1]];
    },
    "content.initValueTo"(newValue) {
      newValue = parseFloat(newValue);
      if (isNaN(newValue)) newValue = 0;
      if (newValue === this.value.to) return;
      this.value = [this.variableValue[0], newValue];
    },
  },
};
</script>

<style src="@vueform/slider/themes/default.css"></style>

<style lang="scss" scoped>
.ww-form-input-range {
  .spacing {
    padding: 0.5rem 0;
  }

  /* wwEditor:start */
  &.editing {
    pointer-events: none;
  }
  /* wwEditor:end */
}
</style>

<style lang="scss">
// discuss about global style
.slider-tooltip {
  font-family: var(--slider-tooltip-font-family) !important;
}
</style>
