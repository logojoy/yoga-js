/* @flow */
import Yoga from "yoga-layout";

type NodeStyle = {
  left?: YGLiteralValue,
  right?: YGLiteralValue,
  top?: YGLiteralValue,
  bottom?: YGLiteralValue,
  width?: YGLiteralValue,
  height?: YGLiteralValue,
  alignContent?: string,
  alignItems?: string,
  alignSelf?: string,
  flexDirection?: string,
  flexWrap?: string,
  justifyContent?: string,
  margin?: YGLiteralValue,
  marginBottom?: YGLiteralValue,
  marginHorizontal?: YGLiteralValue,
  marginLeft?: YGLiteralValue,
  marginRight?: YGLiteralValue,
  marginTop?: YGLiteralValue,
  marginVertical?: YGLiteralValue,
};

type EnumMapping = { [string]: number };
type SetterMap = {
  [propName: string]: (
    node: YGNode,
    target: NodeStyle,
    property: string,
    value: any
  ) => boolean,
};
type NodeEdgeSetter = (edge: YGEnum, value: YGLiteralValue) => void;

const BASE_NODE = Yoga.Node.create();

const positionEdgeMapping: EnumMapping = {
  left: Yoga.EDGE_LEFT,
  right: Yoga.EDGE_RIGHT,
  top: Yoga.EDGE_TOP,
  bottom: Yoga.EDGE_BOTTOM,
};

const marginEdgeMapping: EnumMapping = {
  marginBottom: Yoga.EDGE_BOTTOM,
  marginHorizontal: Yoga.EDGE_HORIZONTAL,
  marginLeft: Yoga.EDGE_LEFT,
  marginRight: Yoga.EDGE_RIGHT,
  marginTop: Yoga.EDGE_TOP,
  marginVertical: Yoga.EDGE_VERTICAL,
};

const paddingEdgeMapping: EnumMapping = {
  paddingBottom: Yoga.EDGE_BOTTOM,
  paddingHorizontal: Yoga.EDGE_HORIZONTAL,
  paddingLeft: Yoga.EDGE_LEFT,
  paddingRight: Yoga.EDGE_RIGHT,
  paddingTop: Yoga.EDGE_TOP,
  paddingVertical: Yoga.EDGE_VERTICAL,
};

const alignEnumMapping: EnumMapping = {
  auto: Yoga.ALIGN_AUTO,
  "flex-start": Yoga.ALIGN_FLEX_START,
  center: Yoga.ALIGN_CENTER,
  "flex-end": Yoga.ALIGN_FLEX_END,
  stretch: Yoga.ALIGN_STRETCH,
  baseline: Yoga.ALIGN_BASELINE,
  "space-between": Yoga.ALIGN_SPACE_BETWEEN,
  "space-around": Yoga.ALIGN_SPACE_AROUND,
};

const flexDirectionEnumMapping: EnumMapping = {
  column: Yoga.FLEX_DIRECTION_COLUMN,
  "column-reverse": Yoga.FLEX_DIRECTION_COLUMN_REVERSE,
  row: Yoga.FLEX_DIRECTION_ROW,
  "row-reverse": Yoga.FLEX_DIRECTION_ROW_REVERSE,
};

const flexWrapEnumMapping: EnumMapping = {
  "no-wrap": Yoga.WRAP_NO_WRAP,
  wrap: Yoga.WRAP_WRAP,
  "wrap-reverse": Yoga.WRAP_WRAP_REVERSE,
};

const justifyContentEnumMapping: EnumMapping = {
  "flex-start": Yoga.JUSTIFY_FLEX_START,
  center: Yoga.JUSTIFY_CENTER,
  "flex-end": Yoga.JUSTIFY_FLEX_END,
  "space-between": Yoga.JUSTIFY_SPACE_BETWEEN,
  "space-around": Yoga.JUSTIFY_SPACE_AROUND,
};

const overflowEnumMapping: EnumMapping = {
  visible: Yoga.OVERFLOW_VISIBLE,
  hidden: Yoga.OVERFLOW_HIDDEN,
  scroll: Yoga.OVERFLOW_SCROLL,
};

const displayEnumMapping: EnumMapping = {
  flex: Yoga.DISPLAY_FLEX,
  none: Yoga.DISPLAY_NONE,
};

function checkMappingValue(mapping: EnumMapping, value: any) {
  if (!mapping.hasOwnProperty(value)) {
    throw new Error("invalid value");
  }
}

const POSITION_PROPS = ["left", "right", "top", "bottom"];

function shorthandSetter(
  node: YGNode,
  target: NodeStyle,
  property: string,
  value: any,
  nodeEdgeSetter: NodeEdgeSetter
) {
  if (typeof value === "string") {
    const valueList = value.split(" ");

    if (valueList.length < 1 || valueList.length > 4) return false;

    switch (valueList.length) {
      case 1: {
        nodeEdgeSetter(Yoga.EDGE_ALL, valueList[0]);
      }
      case 2: {
        nodeEdgeSetter(Yoga.EDGE_VERTICAL, valueList[0]);
        nodeEdgeSetter(Yoga.EDGE_HORIZONTAL, valueList[1]);
      }
      case 3: {
        nodeEdgeSetter(Yoga.EDGE_TOP, valueList[0]);
        nodeEdgeSetter(Yoga.EDGE_HORIZONTAL, valueList[1]);
        nodeEdgeSetter(Yoga.EDGE_BOTTOM, valueList[2]);
      }
      case 4: {
        nodeEdgeSetter(Yoga.EDGE_TOP, valueList[0]);
        nodeEdgeSetter(Yoga.EDGE_RIGHT, valueList[1]);
        nodeEdgeSetter(Yoga.EDGE_BOTTOM, valueList[2]);
        nodeEdgeSetter(Yoga.EDGE_BOTTOM, valueList[3]);
      }
    }

    return Reflect.set(target, property, value);
  } else if (typeof value === "number") {
    nodeEdgeSetter(Yoga.EDGE_ALL, value);
    return Reflect.set(target, property, value);
  } else {
    return false;
  }
}

function edgeSetters(edgeMapping: EnumMapping, nodeEdgeSetter: string) {
  return Object.keys(edgeMapping).reduce(
    (prev, propName) => ({
      ...prev,
      [propName]: (node, target, property, value) => {
        const edge = edgeMapping[property];
        return setterBase(
          node,
          target,
          property,
          value,
          nodeEdgeSetter,
          edge,
          value
        );
      },
    }),
    {}
  );
}

function setterBase(node, target, property, value, setterName, ...setterArgs) {
  const nodeSetter = (node: { [key: string]: ?Function })[setterName];
  if (typeof nodeSetter === "function") {
    nodeSetter.call(node, ...setterArgs);
    return Reflect.set(target, property, value);
  } else {
    return false;
  }
}

function valueSetter(setterName) {
  return (node: YGNode, target: NodeStyle, property: string, value: any) =>
    setterBase(node, target, property, value, setterName, value);
}

function enumSetter(enumMapping: EnumMapping, setterName: string) {
  return (node: YGNode, target: NodeStyle, property: string, value: any) => {
    checkMappingValue(enumMapping, value);
    return setterBase(
      node,
      target,
      property,
      value,
      setterName,
      enumMapping[value]
    );
  };
}

function YGRemoveAllChildren(node: YGNode) {
  const childCount = node.getChildCount();
  for (let i = childCount - 1; i >= 0; i--) {
    node.removeChild(node.getChild(i));
  }
}

const styleSetterMap = {
  ...edgeSetters(positionEdgeMapping, "setPosition"),

  alignContent: enumSetter(alignEnumMapping, "setAlignContent"),
  alignItems: enumSetter(alignEnumMapping, "setAlignItems"),
  alignSelf: enumSetter(alignEnumMapping, "setAlignSelf"),
  flexDirection: enumSetter(flexDirectionEnumMapping, "setFlexDirection"),
  flexWrap: enumSetter(flexWrapEnumMapping, "setFlexWrap"),
  justifyContent: enumSetter(justifyContentEnumMapping, "setJustifyContent"),

  ...edgeSetters(marginEdgeMapping, "setMargin"),
  margin: (node, ...args) =>
    shorthandSetter(node, ...args, node.setMargin.bind(node)),

  overflow: enumSetter(overflowEnumMapping, "setOverflow"),
  display: enumSetter(displayEnumMapping, "setDisplay"),

  width: valueSetter("setWidth"),
  height: valueSetter("setHeight"),

  minWidth: valueSetter("setMinWidth"),
  minHeight: valueSetter("setMinHeight"),

  maxWidth: valueSetter("setMaxHeight"),
  maxHeight: valueSetter("setMaxHeight"),

  ...edgeSetters(paddingEdgeMapping, "setPadding"),
  padding: (node, ...args) =>
    shorthandSetter(node, ...args, node.setPadding.bind(node)),
};

const STYLE_PROPS = Object.keys(styleSetterMap);

function styleHandlerFactory(node: YGNode) {
  return {
    get(target: NodeStyle, name: string): ?YGLiteralValue {
      if (STYLE_PROPS.includes(name)) {
        return Reflect.get(target, name);
      } else {
        return undefined;
      }
    },
    set(target: NodeStyle, property: string, value: any): boolean {
      if (styleSetterMap.hasOwnProperty(property)) {
        return styleSetterMap[property](node, target, property, value);
      }
      return false;
    },
  };
}

class YogaNode {
  _node: YGNode;
  style: NodeStyle;
  +layout: YGLayoutResult;
  children: YogaNode[];

  constructor() {
    this._node = Yoga.Node.create();

    this.children = Object.freeze([]);
    this.style = new Proxy({}, styleHandlerFactory(this._node));

    // return proxied instance
    return new Proxy(this, {
      get(target: YogaNode, name: string) {
        switch (name) {
          case "layout": {
            const {
              top,
              left,
              width,
              height,
            } = target._node.getComputedLayout();
            return { top, left, width, height };
          }
          default: {
            return Reflect.get(target, name);
          }
        }
      },

      set(target: YogaNode, property: string, value: any) {
        if (property === "style") {
          if (typeof value === "object") {
            target._node.copyStyle(BASE_NODE);

            const processedValue = new Proxy(
              {},
              styleHandlerFactory(target._node)
            );

            Object.keys(value).forEach(propName => {
              processedValue[propName] = value[propName];
            });

            return Reflect.set(target, property, processedValue);
          } else {
            return false;
          }
        } else if (property === "layout") {
          return false;
        } else if (property === "children") {
          if (Array.isArray(value)) {
            Reflect.set(target, property, []);

            YGRemoveAllChildren(target._node);

            value.forEach((child, index) => {
              if (child instanceof YogaNode) {
                target._node.insertChild(child._node, index);
                target.children.push(child);
              }
            });

            Object.freeze(target.children);

            return true;
          } else {
            return false;
          }
        } else {
          return Reflect.set(target, property, value);
        }
      },

      ownKeys(target: YogaNode) {
        return ["style", "layout", "children"];
      },

      getOwnPropertyDescriptor(
        target: YogaNode,
        property: string
      ): void | Object {
        if (["style", "children"].includes(property)) {
          return Reflect.getOwnPropertyDescriptor(target, property);
        }

        if (property === "layout") {
          const { top, left, width, height } = target._node.getComputedLayout();
          return {
            configurable: true,
            enumerable: true,
            writable: false,
            value: {
              top,
              left,
              width,
              height,
            },
          };
        }
      },
    });
  }

  calculateLayout(
    width?: YGLiteralValue,
    height?: YGLiteralValue,
    direction?: YGEnum
  ): YGLayoutResult {
    return this._node.calculateLayout(width, height, direction);
  }

  insertChild(child: YogaNode, index: number) {
    this.children[index] = child;
    this._node.insertChild(child._node, index);
  }
}

export default YogaNode;