<template>
  <div
    class="ww-form-input-range"
    :class="{ editing: isEditing }"
    :style="globalOverridableSliderStyle"
  >
    <div class="ww-form-input-range__spacing">
      <Slider
        class="slider"
        v-model="internalValue"
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
        :style="{ ...overridableSliderStyle /* ...getTextSyle */ }"
      >
      </Slider>
    </div>
    {{ content.fontFamily }}
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
        type: "object",
        defaultValue:
          props.content.value === undefined
            ? { from: 15, to: 65 }
            : props.content.value,
      });

    return { variableValue, setValue };
  },
  data() {
    return {
      internalValue: [15, 65],
      wwTextStyle: [],
    };
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
    value() {
      return this.variableValue;
    },
    diabled() {
      return this.isEditing ? true : content.disabled;
    },
    // getTextSyle() {
    //   const styles = {};
    //   const id = "_ww-text_";
    //   const toExclude = ["text", "links"];
    //   const properties = Object.keys(this.content).filter((prop) =>
    //     prop.startsWith(id)
    //   );

    //   for (let prop of properties) {
    //     const propName = prop.split(id)[1];
    //     if (toExclude.includes(propName)) continue;
    //     styles[propName] = this.content[prop];
    //   }

    //   return styles;
    // },
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
        "--slider-handle-border": this.content.handleBorder,
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
    internalValue(newValue) {
      newValue = {
        from: newValue[0],
        to: newValue[1],
      };
      if (_.isEqual(newValue, this.value)) return;
      this.setValue(newValue);
      this.$emit("trigger-event", {
        name: "change",
        event: { value: newValue },
      });
    },
    "content.initValueFrom"(newValue) {
      if (newValue === this.value.from) return;
      this.internalValue = [newValue, this.internalValue[1]];
      this.value = {
        from: newValue,
        to: this.value.end,
      };
    },
    "content.initValueTo"(newValue) {
      if (newValue === this.value.to) return;
      this.internalValue = [this.internalValue[0], newValue];
      this.value = {
        from: this.value.start,
        to: newValue,
      };
    },
  },
};
</script>

<style src="@vueform/slider/themes/default.css"></style>

<style lang="scss" scoped>
.ww-form-input-range {
  &__spacing {
    padding: 2%;
  }
  &.editing {
    pointer-events: none;
  }
}
</style>

<style lang="scss">
// discuss about global style
.slider-tooltip {
  font-family: var(--slider-tooltip-font-family) !important;
}
</style>
