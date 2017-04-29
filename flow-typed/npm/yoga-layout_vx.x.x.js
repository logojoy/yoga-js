// flow-typed signature: befaaafa74d0e4786f260cd3e6e350a9
// flow-typed version: <<STUB>>/yoga-layout_v^1.2.0/flow_v0.44.2

/**
 * This is an autogenerated libdef stub for:
 *
 *   'yoga-layout'
 *
 * Fill this stub out by replacing all the `any` types.
 *
 * Once filled out, we encourage you to share your work with the
 * community by sending a pull request to:
 * https://github.com/flowtype/flow-typed
 */

declare type YGEnum = number;
declare type YGLiteralValue = string | number;

declare class YGValue {
  unit: number,
  value: number,

  constructor(unit: number, value: number): YGValue,
  toString(): string,
  valueOf(): number,
}

declare type YGLayoutResult = {
  left: number,
  right: number,
  top: number,
  bottom: number,
  width: number,
  height: number,
};

declare class YGNode {
  // patched prototype functions ================================
  free(): void,
  freeRecursive(): void,
  setMeasureFunc(measureFunc?: Function): void,
  calculateLayout(
    width?: YGLiteralValue,
    height?: YGLiteralValue,
    direction?: YGEnum
  ): YGLayoutResult,

  // prototype functions ========================================
  reset(): void,
  copyStyle(other: YGNode): void,

  // style setters ==============================================
  setPosition(edge: YGEnum, position: YGLiteralValue): void,

  setAlignContent(alignContent: YGEnum): void,
  setAlignItems(alignItems: YGEnum): void,
  setAlignSelf(alignSelf: YGEnum): void,
  setFlexDirection(flexDirection: YGEnum): void,
  setFlexWrap(flexDirection: YGEnum): void,
  setJustifyContent(justifyContent: YGEnum): void,

  setMargin(edge: YGEnum, margin: YGLiteralValue): void,

  setOverflow(overflow: YGEnum): void,
  setDisplay(display: YGEnum): void,

  setFlex(flex: number): void,
  setFlexBasis(flexBasis: YGLiteralValue): void,
  setFlexGrow(flexGrow: number): void,
  setFlexShrink(flexShrink: number): void,

  setWidth(width: YGLiteralValue): void,
  setHeight(height: YGLiteralValue): void,

  setMinWidth(minWidth: YGLiteralValue): void,
  setMinHeight(minHeight: YGLiteralValue): void,

  setMaxWidth(maxWidth: YGLiteralValue): void,
  setMaxHeight(maxHeight: YGLiteralValue): void,

  setBorder(edge: YGEnum, border: number): void,

  setPadding(edge: YGEnum, padding: YGLiteralValue): void,

  // style getters ==============================================
  getPositionType(): YGEnum,
  getPosition(edge: YGEnum): YGValue,

  getAlignContent(): YGEnum,
  getAlignItems(): YGEnum,
  getAlignSelf(): YGEnum,
  getFlexDirection(): YGEnum,
  getFlexWrap(): YGEnum,
  getJustifyContent(): YGEnum,

  getMargin(edge: YGEnum): YGValue,

  getOverflow(): YGEnum,
  getDisplay(): YGEnum,

  getFlexBasis(): YGValue,
  getFlexGrow(): number,
  getFlexShrink(): number,

  getWidth(): YGValue,
  getHeight(): YGValue,

  getMinWidth(): YGValue,
  getMidHeight(): YGValue,

  getMaxWidth(): YGValue,
  getMaxHeight(): YGValue,

  getAspectRatio(): number,

  getBorder(edge: YGEnum): number,

  getPadding(edge: YGEnum): number,

  // layout inspectors
  getComputedLayout(): YGLayoutResult,

  // tree hierarchy mutators
  insertChild(child: YGNode, index: number): void,
  removeChild(child: YGNode): void,

  // tree hierarchy inspectors
  getChildCount(): number,
  getChild(index: number): YGNode,
}

declare module "yoga-layout" {
  declare module.exports: {
    Node: {
      create: () => YGNode,
    },

    // YGEnums
    ALIGN_COUNT: number,
    ALIGN_AUTO: number,
    ALIGN_FLEX_START: number,
    ALIGN_CENTER: number,
    ALIGN_FLEX_END: number,
    ALIGN_STRETCH: number,
    ALIGN_BASELINE: number,
    ALIGN_SPACE_BETWEEN: number,
    ALIGN_SPACE_AROUND: number,

    DIMENSION_COUNT: number,
    DIMENSION_WIDTH: number,
    DIMENSION_HEIGHT: number,

    DIRECTION_COUNT: number,
    DIRECTION_INHERIT: number,
    DIRECTION_LTR: number,
    DIRECTION_RTL: number,

    DISPLAY_COUNT: number,
    DISPLAY_FLEX: number,
    DISPLAY_NONE: number,

    EDGE_COUNT: number,
    EDGE_LEFT: number,
    EDGE_TOP: number,
    EDGE_RIGHT: number,
    EDGE_BOTTOM: number,
    EDGE_START: number,
    EDGE_END: number,
    EDGE_HORIZONTAL: number,
    EDGE_VERTICAL: number,
    EDGE_ALL: number,

    EXPERIMENTAL_FEATURE_COUNT: number,
    EXPERIMENTAL_FEATURE_ROUNDING: number,
    EXPERIMENTAL_FEATURE_WEB_FLEX_BASIS: number,
    EXPERIMENTAL_FEATURE_MIN_FLEX_FIX: number,

    FLEX_DIRECTION_COUNT: number,
    FLEX_DIRECTION_COLUMN: number,
    FLEX_DIRECTION_COLUMN_REVERSE: number,
    FLEX_DIRECTION_ROW: number,
    FLEX_DIRECTION_ROW_REVERSE: number,

    JUSTIFY_COUNT: number,
    JUSTIFY_FLEX_START: number,
    JUSTIFY_CENTER: number,
    JUSTIFY_FLEX_END: number,
    JUSTIFY_SPACE_BETWEEN: number,
    JUSTIFY_SPACE_AROUND: number,

    LOG_LEVEL_COUNT: number,
    LOG_LEVEL_ERROR: number,
    LOG_LEVEL_WARN: number,
    LOG_LEVEL_INFO: number,
    LOG_LEVEL_DEBUG: number,
    LOG_LEVEL_VERBOSE: number,

    MEASURE_MODE_COUNT: number,
    MEASURE_MODE_UNDEFINED: number,
    MEASURE_MODE_EXACTLY: number,
    MEASURE_MODE_AT_MOST: number,

    OVERFLOW_COUNT: number,
    OVERFLOW_VISIBLE: number,
    OVERFLOW_HIDDEN: number,
    OVERFLOW_SCROLL: number,

    POSITION_TYPE_COUNT: number,
    POSITION_TYPE_RELATIVE: number,
    POSITION_TYPE_ABSOLUTE: number,

    PRINT_OPTIONS_COUNT: number,
    PRINT_OPTIONS_LAYOUT: number,
    PRINT_OPTIONS_STYLE: number,
    PRINT_OPTIONS_CHILDREN: number,

    UNIT_COUNT: number,
    UNIT_UNDEFINED: number,
    UNIT_POINT: number,
    UNIT_PERCENT: number,
    UNIT_AUTO: number,

    WRAP_COUNT: number,
    WRAP_NO_WRAP: number,
    WRAP_WRAP: number,
    WRAP_WRAP_REVERSE: number,
  };
}
declare module "yoga-layout/build/Release/nbind" {
  declare module.exports: any;
}
declare module "yoga-layout/sources/entry-browser" {
  declare module.exports: any;
}
declare module "yoga-layout/sources/entry-common" {
  declare module.exports: any;
}
declare module "yoga-layout/sources/entry-node" {
  declare module.exports: any;
}
declare module "yoga-layout/sources/YGEnums" {
  declare module.exports: any;
}
declare module "yoga-layout/tests/Benchmarks/YGBenchmark" {
  declare module.exports: any;
}
declare module "yoga-layout/tests/Facebook.Yoga/YGAbsolutePositionTest" {
  declare module.exports: any;
}
declare module "yoga-layout/tests/Facebook.Yoga/YGAlignContentTest" {
  declare module.exports: any;
}
declare module "yoga-layout/tests/Facebook.Yoga/YGAlignItemsTest" {
  declare module.exports: any;
}
declare module "yoga-layout/tests/Facebook.Yoga/YGAlignSelfTest" {
  declare module.exports: any;
}
declare module "yoga-layout/tests/Facebook.Yoga/YGBorderTest" {
  declare module.exports: any;
}
declare module "yoga-layout/tests/Facebook.Yoga/YGComputedBorderTest" {
  declare module.exports: any;
}
declare module "yoga-layout/tests/Facebook.Yoga/YGComputedMarginTest" {
  declare module.exports: any;
}
declare module "yoga-layout/tests/Facebook.Yoga/YGComputedPaddingTest" {
  declare module.exports: any;
}
declare module "yoga-layout/tests/Facebook.Yoga/YGDimensionTest" {
  declare module.exports: any;
}
declare module "yoga-layout/tests/Facebook.Yoga/YGDisplayTest" {
  declare module.exports: any;
}
declare module "yoga-layout/tests/Facebook.Yoga/YGFlexDirectionTest" {
  declare module.exports: any;
}
declare module "yoga-layout/tests/Facebook.Yoga/YGFlexTest" {
  declare module.exports: any;
}
declare module "yoga-layout/tests/Facebook.Yoga/YGFlexWrapTest" {
  declare module.exports: any;
}
declare module "yoga-layout/tests/Facebook.Yoga/YGJustifyContentTest" {
  declare module.exports: any;
}
declare module "yoga-layout/tests/Facebook.Yoga/YGMarginTest" {
  declare module.exports: any;
}
declare module "yoga-layout/tests/Facebook.Yoga/YGMeasureCacheTest" {
  declare module.exports: any;
}
declare module "yoga-layout/tests/Facebook.Yoga/YGMeasureTest" {
  declare module.exports: any;
}
declare module "yoga-layout/tests/Facebook.Yoga/YGMinMaxDimensionTest" {
  declare module.exports: any;
}
declare module "yoga-layout/tests/Facebook.Yoga/YGPaddingTest" {
  declare module.exports: any;
}
declare module "yoga-layout/tests/Facebook.Yoga/YGPercentageTest" {
  declare module.exports: any;
}
declare module "yoga-layout/tests/Facebook.Yoga/YGRoundingTest" {
  declare module.exports: any;
}
declare module "yoga-layout/tests/Facebook.Yoga/YGSizeOverflowTest" {
  declare module.exports: any;
}
declare module "yoga-layout/tests/run-bench" {
  declare module.exports: any;
}
declare module "yoga-layout/tests/tools" {
  declare module.exports: any;
}
declare module "yoga-layout/webpack.config" {
  declare module.exports: any;

  // Filename aliases
}
declare module "yoga-layout/build/Release/nbind.js" {
  declare module.exports: $Exports<"yoga-layout/build/Release/nbind">;
}
declare module "yoga-layout/sources/entry-browser.js" {
  declare module.exports: $Exports<"yoga-layout/sources/entry-browser">;
}
declare module "yoga-layout/sources/entry-common.js" {
  declare module.exports: $Exports<"yoga-layout/sources/entry-common">;
}
declare module "yoga-layout/sources/entry-node.js" {
  declare module.exports: $Exports<"yoga-layout/sources/entry-node">;
}
declare module "yoga-layout/sources/YGEnums.js" {
  declare module.exports: $Exports<"yoga-layout/sources/YGEnums">;
}
declare module "yoga-layout/tests/Benchmarks/YGBenchmark.js" {
  declare module.exports: $Exports<"yoga-layout/tests/Benchmarks/YGBenchmark">;
}
declare module "yoga-layout/tests/Facebook.Yoga/YGAbsolutePositionTest.js" {
  declare module.exports: $Exports<
    "yoga-layout/tests/Facebook.Yoga/YGAbsolutePositionTest"
  >;
}
declare module "yoga-layout/tests/Facebook.Yoga/YGAlignContentTest.js" {
  declare module.exports: $Exports<
    "yoga-layout/tests/Facebook.Yoga/YGAlignContentTest"
  >;
}
declare module "yoga-layout/tests/Facebook.Yoga/YGAlignItemsTest.js" {
  declare module.exports: $Exports<
    "yoga-layout/tests/Facebook.Yoga/YGAlignItemsTest"
  >;
}
declare module "yoga-layout/tests/Facebook.Yoga/YGAlignSelfTest.js" {
  declare module.exports: $Exports<
    "yoga-layout/tests/Facebook.Yoga/YGAlignSelfTest"
  >;
}
declare module "yoga-layout/tests/Facebook.Yoga/YGBorderTest.js" {
  declare module.exports: $Exports<
    "yoga-layout/tests/Facebook.Yoga/YGBorderTest"
  >;
}
declare module "yoga-layout/tests/Facebook.Yoga/YGComputedBorderTest.js" {
  declare module.exports: $Exports<
    "yoga-layout/tests/Facebook.Yoga/YGComputedBorderTest"
  >;
}
declare module "yoga-layout/tests/Facebook.Yoga/YGComputedMarginTest.js" {
  declare module.exports: $Exports<
    "yoga-layout/tests/Facebook.Yoga/YGComputedMarginTest"
  >;
}
declare module "yoga-layout/tests/Facebook.Yoga/YGComputedPaddingTest.js" {
  declare module.exports: $Exports<
    "yoga-layout/tests/Facebook.Yoga/YGComputedPaddingTest"
  >;
}
declare module "yoga-layout/tests/Facebook.Yoga/YGDimensionTest.js" {
  declare module.exports: $Exports<
    "yoga-layout/tests/Facebook.Yoga/YGDimensionTest"
  >;
}
declare module "yoga-layout/tests/Facebook.Yoga/YGDisplayTest.js" {
  declare module.exports: $Exports<
    "yoga-layout/tests/Facebook.Yoga/YGDisplayTest"
  >;
}
declare module "yoga-layout/tests/Facebook.Yoga/YGFlexDirectionTest.js" {
  declare module.exports: $Exports<
    "yoga-layout/tests/Facebook.Yoga/YGFlexDirectionTest"
  >;
}
declare module "yoga-layout/tests/Facebook.Yoga/YGFlexTest.js" {
  declare module.exports: $Exports<
    "yoga-layout/tests/Facebook.Yoga/YGFlexTest"
  >;
}
declare module "yoga-layout/tests/Facebook.Yoga/YGFlexWrapTest.js" {
  declare module.exports: $Exports<
    "yoga-layout/tests/Facebook.Yoga/YGFlexWrapTest"
  >;
}
declare module "yoga-layout/tests/Facebook.Yoga/YGJustifyContentTest.js" {
  declare module.exports: $Exports<
    "yoga-layout/tests/Facebook.Yoga/YGJustifyContentTest"
  >;
}
declare module "yoga-layout/tests/Facebook.Yoga/YGMarginTest.js" {
  declare module.exports: $Exports<
    "yoga-layout/tests/Facebook.Yoga/YGMarginTest"
  >;
}
declare module "yoga-layout/tests/Facebook.Yoga/YGMeasureCacheTest.js" {
  declare module.exports: $Exports<
    "yoga-layout/tests/Facebook.Yoga/YGMeasureCacheTest"
  >;
}
declare module "yoga-layout/tests/Facebook.Yoga/YGMeasureTest.js" {
  declare module.exports: $Exports<
    "yoga-layout/tests/Facebook.Yoga/YGMeasureTest"
  >;
}
declare module "yoga-layout/tests/Facebook.Yoga/YGMinMaxDimensionTest.js" {
  declare module.exports: $Exports<
    "yoga-layout/tests/Facebook.Yoga/YGMinMaxDimensionTest"
  >;
}
declare module "yoga-layout/tests/Facebook.Yoga/YGPaddingTest.js" {
  declare module.exports: $Exports<
    "yoga-layout/tests/Facebook.Yoga/YGPaddingTest"
  >;
}
declare module "yoga-layout/tests/Facebook.Yoga/YGPercentageTest.js" {
  declare module.exports: $Exports<
    "yoga-layout/tests/Facebook.Yoga/YGPercentageTest"
  >;
}
declare module "yoga-layout/tests/Facebook.Yoga/YGRoundingTest.js" {
  declare module.exports: $Exports<
    "yoga-layout/tests/Facebook.Yoga/YGRoundingTest"
  >;
}
declare module "yoga-layout/tests/Facebook.Yoga/YGSizeOverflowTest.js" {
  declare module.exports: $Exports<
    "yoga-layout/tests/Facebook.Yoga/YGSizeOverflowTest"
  >;
}
declare module "yoga-layout/tests/run-bench.js" {
  declare module.exports: $Exports<"yoga-layout/tests/run-bench">;
}
declare module "yoga-layout/tests/tools.js" {
  declare module.exports: $Exports<"yoga-layout/tests/tools">;
}
declare module "yoga-layout/webpack.config.js" {
  declare module.exports: $Exports<"yoga-layout/webpack.config">;
}