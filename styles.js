import { StyleSheet } from 'react-native'

var _extends =
	Object.assign ||
	function(target) {
		for (var i = 1; i < arguments.length; i++) {
			var source = arguments[i]
			for (var key in source) {
				if (Object.prototype.hasOwnProperty.call(source, key)) {
					target[key] = source[key]
				}
			}
		}
		return target
	}

const radius = 10
const styles = StyleSheet.create({
	container: _extends({}, StyleSheet.absoluteFillObject, {
		backgroundColor: 'transparent',
		overflow: 'hidden',
	}),

	ripple: {
		width: radius * 2,
		height: radius * 2,
		borderRadius: radius,
		overflow: 'hidden',
		position: 'absolute',
	},
})

export { styles, radius }
