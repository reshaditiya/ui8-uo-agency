export function trapTabKey(e: any) {
	var focusableEls = e.currentTarget.querySelectorAll(
		'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])'
	)
	var firstFocusableEl = focusableEls[0]
	var lastFocusableEl = focusableEls[focusableEls.length - 1]

	var isTabPressed = e.key === "Tab" || e.keyCode === 9

	if (!isTabPressed) {
		return
	}

	if (e.shiftKey) {
		/* shift + tab */ if (document.activeElement === firstFocusableEl) {
			lastFocusableEl.focus()
			e.preventDefault()
		}
	} /* tab */ else {
		if (document.activeElement === lastFocusableEl) {
			firstFocusableEl.focus()
			e.preventDefault()
		}
	}
}
