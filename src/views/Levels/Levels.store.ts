// imports from 3rd party libraries
import { atom, RecoilState } from 'recoil';

// types
import { CodeInput } from 'views/Levels/Levels.types';

export const codeState = atom({
	key: 'codeState',
	default: {
		javascript: '',
		html: '',
		css: '',
	},
}) as RecoilState<CodeInput>;
