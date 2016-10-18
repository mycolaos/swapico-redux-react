const starState = 'starStore'

export const loadState = () => {
  try {
    const state = localStorage.getItem(starState);
    return state ? JSON.parse(state) : undefined;
  } catch (error) {
    return undefined;
  }
}

export const saveState = (state) => {
	try {
		localStorage.setItem(starState, JSON.stringify(state))
	} catch (error) {
		console.log('localStorage save failed')
	}
}