// types
import { CodeInput } from 'views/Levels/Levels.types';

export interface CodePanelProps {
	code: string;
	mode: 'html' | 'css' | 'javascript';
	setCode: (code: CodeInput) => void;
}
