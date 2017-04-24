import { Map } from 'immutable';
export function getFilterStyles(state) {
    var filters = '';
    filters += "contrast(" + state.get('contrast') + "%) ";
    filters += "brightness(" + state.get('brightness') + "%) ";
    filters += "saturate(" + state.get('saturate') + "%) ";
    filters += "sepia(" + state.get('sepia') + "%) ";
    filters += "grayscale(" + state.get('grayScale') + "%) ";
    filters += "invert(" + state.get('invert') + "%) ";
    filters += "hue-rotate(" + state.get('hueRotate') + "deg) ";
    filters += "blur(" + state.get('blur') + "px) ";
    return filters;
}
export function updateFilterStyle(state) {
    var styles = {
        WebkitFilter: getFilterStyles(state),
        filter: getFilterStyles(state),
        position: 'relative'
    };
    return {
        styles: styles
    };
}
export function getOverlayColor(overlayType) {
    var solidBackground = Map({
        a: 0.5,
        b: 253,
        g: 162,
        r: 62
    });
    var linearBackground = Map({
        a: 0.5,
        b: 253,
        g: 162,
        r: 62,
        stop: 10,
        direction: 'to bottom'
    });
    var radialBackground = Map({
        a: 0.04,
        b: 70,
        g: 70,
        r: 70,
        stop: 100,
        position: 'center center',
        size: 'closest-corner'
    });
    var stop1 = linearBackground.get('stop');
    var stop2 = radialBackground.get('stop');
    var color1 = "rgba(" + linearBackground.get('r') + ", " + linearBackground.get('g') + ", " + linearBackground.get('b') + ", " + linearBackground.get('a') + ")";
    var color2 = "rgba(" + radialBackground.get('r') + ", " + radialBackground.get('g') + ", " + radialBackground.get('b') + ", " + radialBackground.get('a') + ")";
    switch (overlayType) {
        case 'solid_background':
            return "rgba(" + solidBackground.get('r') + ", " + solidBackground.get('g') + ", " + solidBackground.get('b') + ", " + solidBackground.get('a') + ")";
        case 'linear_gradient':
            var direction = linearBackground.get('direction');
            return "linear-gradient(" + direction + ", " + color1 + " " + stop1 + "%, " + color2 + " " + stop2 + "%)";
        case 'radial_gradient':
            var position = radialBackground.get('position');
            var size = radialBackground.get('size');
            return "-webkit-radial-gradient(" + position + ", circle " + size + ", " + color1 + " " + stop1 + "%, " + color2 + " " + stop2 + "%)";
        case 'none':
            return null;
    }
}
export function updateOverlayStyle(state) {
    var opacity = state.get('opacity');
    var overlayBackground = state.get('blend');
    var background = getOverlayColor(overlayBackground);
    var overlay = {
        content: ' ',
        display: 'block',
        height: '100%',
        width: '100%',
        top: '0',
        left: '0',
        pointerEvents: 'none',
        position: 'absolute',
        mixBlendMode: 'normal',
        opacity: (opacity / 100),
        background: background
    };
    return {
        overlay: overlay
    };
}
//# sourceMappingURL=helpers.js.map