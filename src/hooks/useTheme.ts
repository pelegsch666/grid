import { themeState } from '@/store';
import themes from '@/themes';
import { useRecoilValue } from 'recoil';

const useTheme = () => {
	const themeName = useRecoilValue(themeState);
	return themes[themeName];
};

export default useTheme;
