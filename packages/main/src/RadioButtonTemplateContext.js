import { isDesktop } from "@ui5/webcomponents-core/dist/sap/ui/Device";
import { getCompactSize } from "@ui5/webcomponents-base/src/Configuration";

const SVGConfig = {
	"compact": {
		x: 8,
		y: 8,
		rInner: 3.5,
		rOuter: 7,
	},
	"default": {
		x: 24,
		y: 24,
		rInner: 5,
		rOuter: 10,
	},
};

class RadioButtonTemplateContext {
	static calculate(state) {
		const compact = getCompactSize();

		const mainClasses = RadioButtonTemplateContext.getMainClasses(state),
			innerClasses = RadioButtonTemplateContext.getInnerClasses(state),
			context = {
				ctr: state,
				readOnly: state.disabled || state.readOnly,
				tabIndex: state.disabled || (!state.selected && state.group) ? "-1" : "0",
				circle: compact ? SVGConfig.compact : SVGConfig.default,
				classes: { main: mainClasses, inner: innerClasses },
				styles: {
					main: {},
				},
			};

		return context;
	}

	static getMainClasses(state) {
		return {
			sapMRb: true,
			sapMRbHasLabel: state.text && state.text.length > 0,
			sapMRbSel: state.selected,
			sapMRbDis: state.disabled,
			sapMRbRo: state.readOnly,
			sapMRbErr: state.valueState === "Error",
			sapMRbWarn: state.valueState === "Warning",
		};
	}

	static getInnerClasses(state) {
		const hoverable = !state.disabled && !state.readOnly && isDesktop();

		return {
			sapMRbInner: true,
			sapMRbHoverable: hoverable,
		};
	}
}

export default RadioButtonTemplateContext;
